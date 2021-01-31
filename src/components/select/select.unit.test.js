import { enableAutoDestroy, mount, shallowMount } from '@vue/test-utils';
import Select from './Select.vue';

describe('Select', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Select);
    const $select = wrapper.find('Select');

    expect(wrapper.element.tagName).toBe('LABEL');
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
    const wrapper = mount({
      data() {
        return {
          counter: 0,
        };
      },
      template: `
      <Select
        @blur="counter += 1"
        @focus="counter += 1"
        @select="counter += 1"
      />`,
      components: {
        Select,
      },
    });

    const $select = wrapper.find('select');
    expect(wrapper.vm.counter).toBe(0);

    await $select.trigger('blur');
    expect(wrapper.vm.counter).toBe(1);

    await $select.trigger('focus');
    expect(wrapper.vm.counter).toBe(2);

    await $select.trigger('input');
    expect(wrapper.vm.counter).toBe(3);
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
