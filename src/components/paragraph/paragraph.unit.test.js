import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Headline from './Paragraph.vue';

describe('Paragraph', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Headline);

    expect(wrapper.element.tagName).toBe('P');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Headline, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Headline, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });
});
