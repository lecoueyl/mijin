import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Modal from './Modal';

// TODO: implement all tests
describe('Modal', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Modal);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('fixed')).toBe(true);
    expect(wrapper.classes('invisible')).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Modal, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('open, close and toggle modal', async () => {
    const wrapper = shallowMount(Modal);

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.classes('visible')).toBe(true);
    expect(wrapper.classes('invisible')).toBe(false);
    expect(wrapper.emitted().open).toBeTruthy();

    await wrapper.vm.close();
    expect(wrapper.vm.isOpen).toBe(false);
    expect(wrapper.classes('visible')).toBe(false);
    expect(wrapper.classes('invisible')).toBe(true);
    expect(wrapper.emitted().close).toBeTruthy();

    await wrapper.vm.toggle();
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.classes('visible')).toBe(true);
    expect(wrapper.classes('invisible')).toBe(false);
    expect(wrapper.emitted().toggle).toBeTruthy();
  });

  it('closes modal on escape key', async () => {
    const wrapper = shallowMount(Modal);

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    const keydownEnter = new KeyboardEvent('keydown', { keyCode: 13 });
    await document.dispatchEvent(keydownEnter);
    expect(wrapper.vm.isOpen).toBe(true);
    const keydownEsc = new KeyboardEvent('keydown', { keyCode: 27 });
    await document.dispatchEvent(keydownEsc);
    expect(wrapper.vm.isOpen).toBe(false);
  });

  test.each([
    ['base', 'sm:max-w-lg'],
    ['lg', 'sm:max-w-3xl'],
    ['full', 'w-full'],
  ])(
    'with prop size %p render class %p',
    (size, expected) => {
      const wrapper = shallowMount(Modal, {
        propsData: {
          size,
        },
      });

      expect(wrapper.find('[role="dialog"]').classes(expected)).toBe(true);
    },
  );
});
