import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Progress from './Progress';

describe('Progress', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Progress);

    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(Progress, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(false);
    expect(wrapper.text()).not.toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('SPAN');
  });

  it('accepts color prop', async () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        color: 'danger',
      },
    });

    expect(wrapper.find('.bg-red-500').exists()).toBe(true);
  });

  it('accepts circle variant prop', async () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        variant: 'circle',
      },
    });
    expect(wrapper.find('svg').exists()).toBe(true);
  });
});
