import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TableTitle from './TableTitle';

describe('TableTitle', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(TableTitle);
    expect(wrapper.element.tagName).toBe('TH');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(TableTitle, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });
});
