import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Toast from './Toast.vue';

describe('Toast', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Toast);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('fixed')).toBe(true);
    expect(wrapper.classes('left-0')).toBe(false);
    expect(wrapper.classes('top-0')).toBe(false);
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(Toast, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(false);
    expect(wrapper.text()).toBe('');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Toast, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).not.toBe('SPAN');
  });

  test.each([
    ['left', 'left-0'],
    ['right', 'right-0'],
  ])(
    'with prop align %p render class %p',
    (align, expected) => {
      const wrapper = shallowMount(Toast, {
        propsData: {
          align,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );

  test.each([
    ['bottom', 'bottom-0'],
    ['top', 'top-0'],
  ])(
    'with prop position %p render class %p',
    (position, expected) => {
      const wrapper = shallowMount(Toast, {
        propsData: {
          position,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );

  it('trigger log message', async () => {
    const wrapper = shallowMount(Toast);
    const message = 'foobar';

    await wrapper.vm.log(message);
    const $toastItem = wrapper.find('li > div');
    expect($toastItem.exists()).toBe(true);
    expect($toastItem.classes('bg-white')).toBe(true);
    expect($toastItem.text()).toBe(message);
  });

  it('trigger success message', async () => {
    const wrapper = shallowMount(Toast);
    const message = 'foobar';

    await wrapper.vm.success(message);
    const $toastItem = wrapper.find('svg');
    const $toastContent = wrapper.find('li > div > div');
    expect($toastItem.exists()).toBe(true);
    expect($toastItem.classes('text-success-500')).toBe(true);
    expect($toastContent.text()).toBe(message);
  });

  it('trigger warn message', async () => {
    const wrapper = shallowMount(Toast);
    const message = 'foobar';

    await wrapper.vm.warn(message);
    const $toastItem = wrapper.find('svg');
    const $toastContent = wrapper.find('li > div > div');
    expect($toastItem.exists()).toBe(true);
    expect($toastItem.classes('text-warning-500')).toBe(true);
    expect($toastContent.text()).toBe(message);
  });

  it('trigger error message', async () => {
    const wrapper = shallowMount(Toast);
    const message = 'foobar';

    await wrapper.vm.error(message);
    const $toastItem = wrapper.find('svg');
    const $toastContent = wrapper.find('li > div > div');
    expect($toastItem.exists()).toBe(true);
    expect($toastItem.classes('text-danger-500')).toBe(true);
    expect($toastContent.text()).toBe(message);
  });

  it('remove message on click', async () => {
    const wrapper = shallowMount(Toast);
    await wrapper.vm.log('foobar');

    const $toastItem = wrapper.find('li > div');
    expect($toastItem.exists()).toBe(true);

    await $toastItem.trigger('click');
    expect(wrapper.find('li > div').exists()).toBe(false);
  });

  it('accepts timeout props', async () => {
    const wrapper = shallowMount(Toast, {
      propsData: {
        timeout: 1,
        remove: jest.fn(),
      },
    });

    jest.spyOn(wrapper.vm, 'remove');
    await wrapper.vm.setTimer('foobar');
    await new Promise((done) => setTimeout(done, 1));
    expect(wrapper.vm.remove).toBeCalled();
  });
});
