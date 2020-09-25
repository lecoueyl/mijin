import { shallowMount } from '@vue/test-utils';
import Button from './Button';

describe('Button', () => {
  it('renders the button', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.get('button')).toBeTruthy();
  });

  it('disables the button', () => {
    let wrapper = shallowMount(Button);
    expect(wrapper.attributes('disabled')).toBe(undefined);

    wrapper = shallowMount(Button, {
      propsData: { disabled: true },
    });

    expect(wrapper.attributes('disabled')).toBe('disabled');
  });

  it('default tag is button', () => {
    const wrapper = shallowMount(Button);

    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('accepts anchor tag', () => {
    const wrapper = shallowMount(Button, {
      propsData: { tag: 'a' },
    });

    expect(wrapper.element.tagName).toBe('A');
  });


  // it('emits a blur event when the button is blurred', () => {
  // 	const wrapper = shallowMount(TButton);

  //   const button = wrapper.vm.$el;

  //   // The change event should be emitted when the button is blurred
  //   button.dispatchEvent(new Event('blur'));

  //   expect(wrapper.emitted('blur')).toBeTruthy();

  //   // assert event count
  //   expect(wrapper.emitted('blur').length).toBe(1);
  // });

  // it('emits a focus event when the select is focused', () => {
  //   const wrapper = shallowMount(TButton);

  //   const button = wrapper.vm.$el;

  //   // The change event should be emitted when the button is focusred
  //   button.dispatchEvent(new Event('focus'));

  //   expect(wrapper.emitted('focus')).toBeTruthy();

  //   // assert event count
  //   expect(wrapper.emitted('focus').length).toBe(1);
  // });

  // it('has a focus and a blur method', () => {
  //   const wrapper = shallowMount(TButton);

  //   wrapper.vm.focus();

  //   expect(wrapper.emitted('focus')).toBeTruthy();

  //   expect(wrapper.emitted('focus').length).toBe(1);

  //   wrapper.vm.blur();

  //   expect(wrapper.emitted('blur')).toBeTruthy();

  //   expect(wrapper.emitted('blur').length).toBe(1);
  // });

  it('has a click event', async() => {
    const wrapper = shallowMount(Button);

    await wrapper.trigger('click');
    console.log(wrapper.emitted());

    // The click event should be emitted when the button is blurred
    // wrapper.trigger('click');
    // console.log(wrapper);

    // await wrapper.vm.$nextTick();

    // expect(wrapper.emitted('click')).toBeTruthy();

    // // assert event count
    // expect(wrapper.emitted('click').length).toBe(1);
  });
});
