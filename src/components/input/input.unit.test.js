import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Input from './Input';

describe('Input', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Input);
    const $input = wrapper.find('input');

    expect(wrapper.element.tagName).toBe('LABEL');
    expect($input.attributes('type')).toBeDefined();
    expect($input.attributes('type')).toEqual('text');
    expect($input.attributes('disabled')).not.toBeDefined();
    expect($input.attributes('name')).not.toBeDefined();
    expect($input.attributes('required')).not.toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Input, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('LABEL');
  });

  it('accepts status props', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        status: 'error',
      },
    });

    const $input = wrapper.find('input');
    expect($input.classes('border-danger-500')).toBe(true);
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        disabled: true,
      },
    });

    const $input = wrapper.find('input');
    expect($input.attributes('disabled')).toBeDefined();
  });

  it('toggle password visibility', async () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'password',
      },
    });

    const $togglePassword = wrapper.find('svg');
    expect(wrapper.vm.currentType).toBe('password');
    await $togglePassword.trigger('click');
    expect(wrapper.vm.currentType).toBe('text');
    await $togglePassword.trigger('click');
    expect(wrapper.vm.currentType).toBe('password');
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Input, {
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
        input: (e) => {
          event = e;
          called += 1;
        },
      },
    });
    const $input = wrapper.find('input');

    expect(called).toBe(0);
    expect(event).toEqual(null);

    await wrapper.trigger('click');
    expect(called).toBe(1);
    expect(event).toBeInstanceOf(MouseEvent);

    await $input.trigger('blur');
    expect(called).toBe(2);
    expect(event).toBeInstanceOf(FocusEvent);

    await $input.trigger('focus');
    expect(called).toBe(3);
    expect(event).toBeInstanceOf(FocusEvent);

    await $input.setValue('foobar');
    expect(called).toBe(4);
    expect(event).toBe('foobar');
  });

  it('should not emit click event when clicked and disabled', async () => {
    let called = 0;
    const wrapper = shallowMount(Input, {
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
