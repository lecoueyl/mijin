import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TableHead from './TableHead';

describe('TableHead', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(TableHead);
    expect(wrapper.element.tagName).toBe('THEAD');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(TableHead, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });
});
