import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Popover from './Popover';

// TODO: implement all tests
describe('Popover', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Popover);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('inline-block')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Popover, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Popover, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('open, close and toggle modal', async () => {
    const wrapper = shallowMount(Popover);
    const $container = wrapper.find('.absolute');

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    expect($container.classes('visible')).toBe(true);
    expect($container.classes('invisible')).toBe(false);
    expect(wrapper.emitted().open).toBeTruthy();

    await wrapper.vm.close();
    expect(wrapper.vm.isOpen).toBe(false);
    expect($container.classes('visible')).toBe(false);
    expect($container.classes('invisible')).toBe(true);
    expect(wrapper.emitted().close).toBeTruthy();

    await wrapper.vm.toggle();
    expect(wrapper.vm.isOpen).toBe(true);
    expect($container.classes('visible')).toBe(true);
    expect($container.classes('invisible')).toBe(false);
    expect(wrapper.emitted().toggle).toBeTruthy();
  });

  it('can be dismissible', async () => {
    // without dismissible props
    let wrapper = shallowMount(Popover);
    let $container = wrapper.find('.absolute');

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);

    await $container.trigger('click');
    expect(wrapper.vm.isOpen).toBe(true);

    // with dismissible props
    wrapper = shallowMount(Popover, {
      propsData: {
        dismissible: true,
      },
    });
    $container = wrapper.find('.absolute');

    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);

    await $container.trigger('click');
    expect(wrapper.vm.isOpen).toBe(false);
  });
});
