import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Link from './Link';

describe('Link', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Link);

    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.classes('text-primary-500')).toBe(true);
    expect(wrapper.find('svg').exists()).toBe(false);
    expect(wrapper.classes('underline')).toBe(false);
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
        color: 'blue-500',
        colorHover: 'blue-600',
      },
    });

    expect(wrapper.classes('text-blue-500')).toBe(true);
    expect(wrapper.classes('hover:text-blue-600')).toBe(true);
  });

  it('accepts external prop', async () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        external: true,
      },
    });

    expect(wrapper.find('svg').exists()).toBe(true);
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
