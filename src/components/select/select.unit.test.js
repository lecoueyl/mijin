import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Select from './Select';

describe('Select', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Select);
    const $select = wrapper.find('Select');

    expect(wrapper.element.tagName).toBe('LABEL');
    expect($select.attributes('type')).toBeDefined();
    expect($select.attributes('type')).toEqual('text');
    expect($select.attributes('disabled')).not.toBeDefined();
    expect($select.attributes('name')).not.toBeDefined();
    expect($select.attributes('required')).not.toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Select, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('LABEL');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        disabled: true,
      },
    });

    const $select = wrapper.find('Select');
    expect($select.attributes('disabled')).toBeDefined();
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Select, {
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
    const $select = wrapper.find('Select');

    expect(called).toBe(0);
    expect(event).toEqual(null);

    await wrapper.trigger('click');
    expect(called).toBe(1);
    expect(event).toBeInstanceOf(MouseEvent);

    await $select.element.dispatchEvent(new Event('focus'));
    expect(called).toBe(2);

    await $select.element.dispatchEvent(new Event('blur'));
    expect(called).toBe(3);
  });

  it('should not emit click event when clicked and disabled', async () => {
    let called = 0;
    const wrapper = shallowMount(Select, {
      propsData: {
        disabled: true,
      },
      listeners: {
        click: () => {
          called += 1;
        },
      },
    });

    expect(called).toBe(0);
    await wrapper.trigger('click');
    expect(called).toBe(0);
  });
});
