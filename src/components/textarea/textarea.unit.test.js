import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Textarea from './Textarea.vue';

describe('Textarea', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Textarea);
    const $textarea = wrapper.find('textarea');

    expect(wrapper.element.tagName).toBe('LABEL');
    expect($textarea.element.tagName).toBe('TEXTAREA');
    expect($textarea.attributes('disabled')).not.toBeDefined();
    expect($textarea.attributes('name')).not.toBeDefined();
    expect($textarea.attributes('required')).not.toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Textarea, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('LABEL');
  });

  it('accepts status props', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        status: 'error',
      },
    });

    const $textarea = wrapper.find('textarea');
    expect($textarea.classes('border-danger-500')).toBe(true);
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        disabled: true,
      },
    });

    const $textarea = wrapper.find('textarea');
    expect($textarea.attributes('disabled')).toBeDefined();
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Textarea, {
      listeners: {
        blur: (e) => {
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
    const $textarea = wrapper.find('textarea');

    expect(called).toBe(0);
    expect(event).toEqual(null);

    await $textarea.trigger('blur');
    expect(called).toBe(1);
    expect(event).toBeInstanceOf(FocusEvent);

    await $textarea.trigger('focus');
    expect(called).toBe(2);
    expect(event).toBeInstanceOf(FocusEvent);

    await $textarea.setValue('foobar');
    expect(called).toBe(3);
    expect(event).toBe('foobar');
  });

  it('should not emit click event when clicked and disabled', async () => {
    let called = 0;
    const wrapper = shallowMount(Textarea, {
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
