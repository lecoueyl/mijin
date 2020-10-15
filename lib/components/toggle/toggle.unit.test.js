import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        value: false,
      },
    });
    const $input = wrapper.find('input');

    expect(wrapper.element.tagName).toBe('LABEL');
    expect($input.attributes('type')).toBeDefined();
    expect($input.attributes('type')).toEqual('checkbox');
    expect($input.attributes('aria-checked')).toBe('false');
    expect($input.attributes('aria-disabled')).not.toBeDefined();
    expect($input.attributes('disabled')).not.toBeDefined();
    expect($input.attributes('name')).not.toBeDefined();
    expect($input.attributes('required')).not.toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: '<p>foobar</p>',
      },
    });

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });
    const $input = wrapper.find('input');

    expect($input.attributes('disabled')).toBeDefined();
    expect($input.attributes('aria-disabled')).toBe('true');
  });

  it('should emit events', async () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        value: false,
      },
    });
    const $input = wrapper.find('input');

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.vm.selected).toBeDefined();
    expect(wrapper.vm.selected).toBe(null);
    expect(wrapper.emitted('change')).not.toBeDefined();

    expect($input).toBeDefined();

    await wrapper.trigger('click');
    expect(wrapper.emitted('change')).toBeDefined();
  });

  it('should not emit click event when clicked and disabled', async () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });

    const $input = wrapper.find('input');

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.vm.selected).toBeDefined();
    expect(wrapper.vm.selected).toBe(null);
    expect(wrapper.emitted('change')).not.toBeDefined();

    expect($input).toBeDefined();

    await wrapper.trigger('click');
    expect(wrapper.emitted('change')).not.toBeDefined();
  });
});
