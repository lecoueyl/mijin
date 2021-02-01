import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import FadeY from './FadeY.vue';

describe('FadeY', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(FadeY);

    expect(wrapper.element.tagName).toBe('TRANSITION-STUB');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(FadeY, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(FadeY, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).not.toBe('DIV');
  });

  it('accepts group prop', async () => {
    const wrapper = shallowMount(FadeY, {
      propsData: {
        group: true,
      },
    });

    expect(wrapper.element.tagName).toBe('TRANSITION-GROUP-STUB');
  });
});
