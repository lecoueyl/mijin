import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TableBody from './TableBody';

describe('TableBody', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(TableBody);
    expect(wrapper.element.tagName).toBe('TBODY');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(TableBody, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });
});
