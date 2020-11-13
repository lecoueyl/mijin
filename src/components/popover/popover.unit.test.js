import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Popover from './Popover';

// TODO: implement all tests
describe('Popover', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Popover);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('inline-block')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Popover, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Popover, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });
});
