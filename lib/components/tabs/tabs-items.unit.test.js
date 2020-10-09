import { shallowMount } from '@vue/test-utils';
import TabsItem from './TabsItem';

describe('TabsItem', () => {
  it('has default structure', async () => {
    const wrapper = shallowMount(TabsItem);

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes('cursor-pointer')).toBe(true);
    expect(wrapper.attributes('aria-disabled')).not.toBeDefined();
    expect(wrapper.attributes('aria-selected')).toBe('false');

    wrapper.destroy();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(TabsItem, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');

    wrapper.destroy();
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(TabsItem, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');

    wrapper.destroy();
  });

  it('accepts selected property', () => {
    const wrapper = shallowMount(TabsItem, {
      propsData: {
        selected: true,
      },
    });

    expect(wrapper.attributes('aria-selected')).toBe('true');
    expect(wrapper.classes('text-primary-500')).toBe(true);

    wrapper.destroy();
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(TabsItem, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('aria-disabled')).toBe('true');
    expect(wrapper.classes('cursor-pointer')).toBe(false);
    expect(wrapper.classes('cursor-not-allowed')).toBe(true);

    wrapper.destroy();
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(TabsItem, {
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

    wrapper.destroy();
  });
});
