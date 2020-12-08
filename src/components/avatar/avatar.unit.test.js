import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Avatar from './Avatar';

describe('Avatar', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Avatar);

    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes('inline-flex')).toBe(true);
    expect(wrapper.classes('text-sm')).toBe(false);
    expect(wrapper.classes('rounded-md')).toBe(false);
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(Avatar, {
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(false);
    expect(wrapper.text()).toBe('');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });

  test.each([
    ['sm', 'text-sm'],
    ['lg', 'text-lg'],
    ['xl', 'text-xl'],
  ])(
    'with prop size %p render class %p',
    (size, expected) => {
      const wrapper = shallowMount(Avatar, {
        propsData: {
          size,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );

  it('accepts color prop', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        color: 'red',
      },
    });

    expect(wrapper.classes('bg-red-500')).toBe(true);
    expect(wrapper.classes('text-red-100')).toBe(true);
  });

  it('accepts letter prop', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        letter: 'BB',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('BB');
  });

  it('accepts alt and img props', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        alt: 'foobar',
        img: '//foobar.com',
      },
    });

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('alt')).toBe('foobar');
    expect(wrapper.find('img').attributes('src')).toBe('//foobar.com');
  });

  it('accepts variant prop', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        variant: 'squared',
      },
    });

    expect(wrapper.classes('rounded-md')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Avatar, {
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
