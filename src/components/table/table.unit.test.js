import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Table from './Table.vue';

describe('Table', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Table);

    expect(wrapper.element.tagName).toBe('TABLE');
    expect(wrapper.classes('w-full')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Table, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });
});
