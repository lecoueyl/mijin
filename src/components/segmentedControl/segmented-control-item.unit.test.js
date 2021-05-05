import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import SegmentedControlItem from './SegmentedControlItem.vue';

describe('SegmentedControlItem', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(SegmentedControlItem);

    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.classes('cursor-pointer')).toBe(true);
    expect(wrapper.attributes('aria-disabled')).not.toBeDefined();
    expect(wrapper.attributes('aria-selected')).toBe('false');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(SegmentedControlItem, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(SegmentedControlItem, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('accepts selected property', () => {
    const wrapper = shallowMount(SegmentedControlItem, {
      propsData: {
        selected: true,
      },
    });

    expect(wrapper.attributes('aria-selected')).toBe('true');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(SegmentedControlItem, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('aria-disabled')).toBe('true');
    expect(wrapper.classes('cursor-pointer')).toBe(false);
    expect(wrapper.classes('cursor-not-allowed')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(SegmentedControlItem, {
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
