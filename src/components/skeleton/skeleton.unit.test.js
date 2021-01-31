import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Skeleton from './Skeleton.vue';

describe('Skeleton', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Skeleton);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('bg-gray-300')).toBe(true);
    expect(wrapper.classes('rounded-sm')).toBe(true);
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(Skeleton, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(false);
    expect(wrapper.text()).not.toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Skeleton, {
      propsData: {
        tag: 'span',
      },
    });

    expect(wrapper.element.tagName).toBe('SPAN');
  });

  it('accepts rounded prop', async () => {
    const wrapper = shallowMount(Skeleton, {
      propsData: {
        rounded: true,
      },
    });

    expect(wrapper.classes('rounded-full')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Skeleton, {
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
