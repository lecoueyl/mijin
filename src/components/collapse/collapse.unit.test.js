import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Collapse from './Collapse';

describe('Collapse', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Collapse);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.attributes('aria-expanded')).toBe('false');
    expect(wrapper.attributes('aria-disabled')).not.toBeDefined();
    expect(wrapper.vm.collapsed).toBe(true);
  });

  it('Renders default slot content', async () => {
    const wrapper = shallowMount(Collapse, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Collapse, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('accepts disabled prop', async () => {
    const wrapper = shallowMount(Collapse, {
      propsData: {
        disabled: true,
      },
      slots: {
        default: '<span>disabled</span>',
      },
    });

    expect(wrapper.attributes('aria-disabled')).toBeDefined();
    expect(wrapper.attributes('aria-disabled')).toBe('true');
    expect(wrapper.vm.collapsed).toBe(true);
    await wrapper.find('span').trigger('click');
    expect(wrapper.vm.collapsed).toBe(true);
  });

  it('accepts expanded prop', async () => {
    const wrapper = shallowMount(Collapse, {
      propsData: {
        expanded: true,
      },
    });

    expect(wrapper.vm.collapsed).toBe(false);
  });

  it('expands content', async () => {
    const wrapper = shallowMount(Collapse, {
      slots: {
        default: '<span>default</span>',
        content: 'content',
      },
    });

    expect(wrapper.vm.collapsed).toBe(true);
    expect(wrapper.vm.maxHeight).toBe(0);
    await wrapper.find('span').trigger('click');
    expect(wrapper.vm.collapsed).toBe(false);
    expect(wrapper.emitted('toggle')).toBeTruthy();
  });
});
