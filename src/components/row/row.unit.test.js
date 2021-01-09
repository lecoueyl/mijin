import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Row from './Row';

describe('Row', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Row);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('flew')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Row, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('accepts cols and gap props', async () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        gutter: 'sm',
      },
    });

    expect(wrapper.classes('sm:Row-cols-2')).toBe(true);
  });
});
