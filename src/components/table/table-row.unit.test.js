import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TableRow from './TableRow';

describe('TableRow', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(TableRow);

    expect(wrapper.element.tagName).toBe('TR');
    expect(wrapper.classes('border-b')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(TableRow, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('accepts clickable property', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        clickable: true,
      },
    });

    expect(wrapper.classes('cursor-pointer')).toBe(true);
  });

  it('accepts verticalAlign property', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        verticalAlign: 'bottom',
      },
    });

    expect(wrapper.classes('align-bottom')).toBe(true);
  });
});
