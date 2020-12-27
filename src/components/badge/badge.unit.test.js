import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Badge from './Badge';

describe('Badge', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Badge);

    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes('inline-block')).toBe(true);
    expect(wrapper.classes('rounded-full')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Badge, {
      slots: {
        default: '<a>foobar</a>',
      },
    });

    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Badge, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('accepts color prop', async () => {
    const wrapper = shallowMount(Badge, {
      propsData: {
        color: 'green',
      },
    });

    expect(wrapper.classes('bg-green-200')).toBe(true);
    expect(wrapper.classes('text-green-900')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Badge, {
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
