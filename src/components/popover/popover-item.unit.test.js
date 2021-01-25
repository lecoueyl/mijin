import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import PopoverItem from './PopoverItem';

describe('PopoverItem', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(PopoverItem);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('block')).toBe(true);
    expect(wrapper.classes('flex')).toBe(false);
    expect(wrapper.classes('cursor-pointer')).toBe(true);
    expect(wrapper.classes('opacity-70')).toBe(false);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(PopoverItem, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(PopoverItem, {
      propsData: {
        tag: 'a',
      },
    });

    expect(wrapper.element.tagName).toBe('A');
  });

  it('accepts variant property', () => {
    const wrapper = shallowMount(PopoverItem, {
      propsData: {
        variant: 'danger',
      },
    });

    expect(wrapper.classes('hover:text-danger-500')).toBe(true);
  });

  it('accepts disabled property', () => {
    const wrapper = shallowMount(PopoverItem, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.classes('opacity-70')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(PopoverItem, {
      listeners: {
        blur: (e) => {
          event = e;
          called += 1;
        },
        click: (e) => {
          event = e;
          called += 1;
        },
        focus: (e) => {
          event = e;
          called += 1;
        },
      },
    });

    expect(called).toBe(0);
    expect(event).toEqual(null);

    await wrapper.trigger('click');
    expect(called).toBe(1);
    expect(event).toBeInstanceOf(MouseEvent);

    await wrapper.element.dispatchEvent(new Event('focus'));
    expect(called).toBe(2);
    expect(event).toBeInstanceOf(Event);

    await wrapper.element.dispatchEvent(new Event('blur'));
    expect(called).toBe(3);
    expect(event).toBeInstanceOf(Event);
  });
});
