import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import StatusDot from './StatusDot.vue';

describe('StatusDot', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(StatusDot);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('inline-block')).toBe(true);
    expect(wrapper.find('.animate-ping').exists()).toBe(false);
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(StatusDot, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(false);
    expect(wrapper.text()).not.toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(StatusDot, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('SPAN');
  });

  test.each([
    ['success', '.bg-success-500'],
    ['danger', '.bg-danger-500'],
    ['warning', '.bg-warning-500'],
  ])(
    'with prop status %p render class %p',
    (status, expected) => {
      const wrapper = shallowMount(StatusDot, {
        propsData: {
          status,
        },
      });

      expect(wrapper.find(expected).exists()).toBe(true);
    },
  );

  it('accepts animate prop', async () => {
    const wrapper = shallowMount(StatusDot, {
      propsData: {
        animate: true,
      },
    });

    expect(wrapper.find('.animate-ping').exists()).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(StatusDot, {
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
