import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TableCell from './TableCell';

describe('TableCell', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(TableCell);
    expect(wrapper.element.tagName).toBe('TD');
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(TableCell, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });
});
