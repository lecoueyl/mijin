import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Avatar from './Avatar';

describe('Avatar', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Avatar);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('border')).toBe(true);
    expect(wrapper.classes('bg-background')).toBe(false);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Avatar, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  test.each([
    ['success', 'text-green-500'],
    ['error', 'text-red-500'],
    ['warning', 'text-orange-500'],
  ])(
    'with prop variant %p render class %p',
    (variant, expected) => {
      const wrapper = shallowMount(Avatar, {
        propsData: {
          variant,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );

  it('accepts filled prop', async () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        filled: true,
      },
    });

    expect(wrapper.classes('bg-background')).toBe(true);
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
