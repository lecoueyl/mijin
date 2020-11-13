import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Modal from './Modal';

// TODO: implement all tests
describe('Modal', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Modal);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('inline-block')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Modal, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('do not renders custom root element', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });
});
