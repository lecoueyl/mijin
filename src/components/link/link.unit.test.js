import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Link from './Link.vue';

describe('Link', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Link);

    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.classes('text-primary-500')).toBe(true);
    expect(wrapper.find('svg').exists()).toBe(false);
    expect(wrapper.classes('underline')).toBe(false);
    expect(wrapper.attributes('target')).not.toBeDefined();
    expect(wrapper.attributes('rel')).not.toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Link, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('accepts color prop', async () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        color: 'danger',
      },
    });

    expect(wrapper.classes('text-danger-500')).toBe(true);
    expect(wrapper.classes('hover:text-danger-700')).toBe(true);
  });

  it('accepts external prop', async () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        external: true,
      },
    });

    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.attributes('target')).toEqual('_blank');
    expect(wrapper.attributes('rel')).toEqual('noopener');
  });

  it('accepts underline prop', async () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        underline: true,
      },
    });

    expect(wrapper.classes('underline')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Link, {
      listeners: {
        blur: (e) => {
          event = e;
          called += 1;
        },
        click: (e) => {
          event = e;
          called += 1;
        },
        focus: (e) => {
          event = e;
          called += 1;
        },
      },
    });

    expect(called).toBe(0);
    expect(event).toEqual(null);

    await wrapper.trigger('click');
    expect(called).toBe(1);
    expect(event).toBeInstanceOf(MouseEvent);

    await wrapper.element.dispatchEvent(new Event('focus'));
    expect(called).toBe(2);
    expect(event).toBeInstanceOf(Event);

    await wrapper.element.dispatchEvent(new Event('blur'));
    expect(called).toBe(3);
    expect(event).toBeInstanceOf(Event);
  });
});
