import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Radio from './Radio.vue';

describe('Radio', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Radio, {
      propsData: {
        value: false,
      },
    });
    const $input = wrapper.find('input');

    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.attributes('aria-checked')).toBe('false');
    expect(wrapper.attributes('aria-disabled')).not.toBeDefined();
    expect(wrapper.vm.checked).toBe(false);
    expect($input.attributes('type')).toBeDefined();
    expect($input.attributes('type')).toEqual('radio');
    expect($input.attributes('disabled')).not.toBeDefined();
    expect($input.attributes('name')).not.toBeDefined();
    expect($input.attributes('required')).not.toBeDefined();
  });

  it('renders slots content', async () => {
    const wrapper = shallowMount(Radio, {
      slots: {
        default: '<p>default</p>',
        summary: '<small>summary</small>',
      },
    });

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('default');

    expect(wrapper.find('small').exists()).toBe(true);
    expect(wrapper.find('small').text()).toBe('summary');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Radio, {
      propsData: {
        disabled: true,
      },
    });
    const $input = wrapper.find('input');

    expect($input.attributes('disabled')).toBeDefined();
    expect(wrapper.attributes('aria-disabled')).toBe('true');
  });

  it('should emit events', async () => {
    const wrapper = shallowMount(Radio, {
      propsData: {
        value: 'foobar',
      },
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.vm.selected).toBeDefined();
    expect(wrapper.vm.selected).toBe(null);
    expect(wrapper.emitted('change')).not.toBeDefined();
    await wrapper.trigger('click');
    expect(wrapper.emitted('change')).toBeDefined();
  });

  it('should not emit click event when clicked and disabled', async () => {
    const wrapper = shallowMount(Radio, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.vm.selected).toBeDefined();
    expect(wrapper.vm.selected).toBe(null);
    expect(wrapper.emitted('change')).not.toBeDefined();
    await wrapper.trigger('click');
    expect(wrapper.emitted('change')).not.toBeDefined();
  });
});
