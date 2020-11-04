import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import List from './List';

describe('List', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(List);

    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.classes('clearfix')).toBe(false);
    expect(wrapper.classes('list-decimal')).toBe(false);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(List, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
    expect(wrapper.classes('list-decimal')).toBe(false);
  });

  it('uses list-decimal when using ol tag', async () => {
    const wrapper = shallowMount(List, {
      propsData: {
        tag: 'ol',
      },
    });

    expect(wrapper.classes('list-decimal')).toBe(true);
  });

  it('accepts inline prop', async () => {
    const wrapper = shallowMount(List, {
      propsData: {
        inline: true,
      },
    });

    expect(wrapper.classes('clearfix')).toBe(true);
  });
});
