import { shallowMount } from '@vue/test-utils';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
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

    wrapper.destroy();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: '<p>foobar</p>',
      },
    });

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');

    wrapper.destroy();
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

    wrapper.destroy();
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
    expect(wrapper.emitted('input')).not.toBeDefined();

    expect($input).toBeDefined();

    await wrapper.trigger('click');
    expect(wrapper.emitted('input')).toBeDefined();

    // expect($input.emitted('change')).toBeDefined();

    // expect(wrapper.vm.selected).toBeTruthy();
    // wrapper.vm.selected = false;
    // const valueEmitted = wrapper.emitted().input[0];
    // expect(valueEmitted).toContainEqual(false);

    // expect(called).toBe(0);
    // expect(event).toEqual(null);

    // await wrapper.trigger('click');
    // expect(event).toBeInstanceOf(MouseEvent);
    // expect(called).toBe(1);

    // await wrapper.element.dispatchEvent(new Event('focus'));
    // expect(called).toBe(2);
    // expect(event).toBeInstanceOf(Event);

    // await wrapper.element.dispatchEvent(new Event('blur'));
    // expect(called).toBe(3);
    // expect(event).toBeInstanceOf(Event);

    wrapper.destroy();
  });

  it('should not emit click event when clicked and disabled', async () => {
    let called = 0;
    const wrapper = shallowMount(Checkbox, {
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

    wrapper.destroy();
  });
});
