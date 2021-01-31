import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import FadeX from './FadeX.vue';

describe('FadeX', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(FadeX);

    expect(wrapper.element.tagName).toBe('TRANSITION-STUB');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(FadeX, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(FadeX, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).not.toBe('DIV');
  });

  it('accepts group prop', async () => {
    const wrapper = shallowMount(FadeX, {
      propsData: {
        group: true,
      },
    });

    expect(wrapper.element.tagName).toBe('TRANSITION-GROUP-STUB');
  });
});
