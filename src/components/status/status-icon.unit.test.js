import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import StatusIcon from './StatusIcon.vue';

describe('StatusIcon', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(StatusIcon);

    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes('inline-flex')).toBe(true);
    expect(wrapper.classes('h-6')).toBe(true);
    expect(wrapper.classes('h-10')).toBe(false);
    expect(wrapper.classes('bg-danger-100 ')).toBe(false);
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(StatusIcon, {
      slots: {
        default: '<div>foobar</div>',
      },
    });

    expect(wrapper.find('div').exists()).toBe(false);
    expect(wrapper.text()).not.toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(StatusIcon, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });

  test.each([
    ['success', 'bg-success-100'],
    ['danger', 'bg-danger-100'],
    ['warning', 'bg-warning-100'],
  ])(
    'with prop status %p render class %p',
    (status, expected) => {
      const wrapper = shallowMount(StatusIcon, {
        propsData: {
          status,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );

  it('accepts size prop', async () => {
    const wrapper = shallowMount(StatusIcon, {
      propsData: {
        size: 'lg',
      },
    });

    expect(wrapper.classes('h-6')).toBe(false);
    expect(wrapper.classes('h-10')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(StatusIcon, {
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
