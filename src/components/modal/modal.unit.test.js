import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Modal from './Modal.vue';

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

  it('accepts dismissButton prop', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        dismissButton: true,
      },
    });

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.classes('visible')).toBe(true);

    await wrapper.find('button').trigger('click');

    expect(wrapper.classes('visible')).toBe(false);
    expect(wrapper.vm.isOpen).toBe(false);
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

  it('accepts dismissible props', async () => {
    let wrapper = shallowMount(Modal, {
      propsData: {
        dismissible: false,
      },
    });

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.classes('visible')).toBe(true);
    expect(wrapper.find('.opacity-75').exists()).toBe(true);

    await wrapper.find('.opacity-75').trigger('click');

    expect(wrapper.find('.opacity-75').exists()).toBe(true);
    expect(wrapper.classes('visible')).toBe(true);
    expect(wrapper.vm.isOpen).toBe(true);

    wrapper = shallowMount(Modal, {
      propsData: {
        dismissible: true,
      },
    });

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.classes('visible')).toBe(true);

    await wrapper.find('.opacity-75').trigger('click');

    expect(wrapper.classes('visible')).toBe(false);
    expect(wrapper.vm.isOpen).toBe(false);
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
