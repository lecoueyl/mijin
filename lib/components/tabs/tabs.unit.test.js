import { shallowMount } from '@vue/test-utils';
import Tabs from './Tabs';

describe('Tabs', () => {
  it('has default structure', async () => {
    const wrapper = shallowMount(Tabs);

    expect(wrapper.element.tagName).toBe('H1');

    wrapper.destroy();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Tabs, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');

    wrapper.destroy();
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Tabs, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');

    wrapper.destroy();
  });

  it('accepts level and size props', async () => {
    const wrapper = shallowMount(Tabs, {
      propsData: {
        level: 2,
        size: 4,
      },
    });

    expect(wrapper.element.tagName).toBe('H2');
    expect(wrapper.classes('text-xl')).toBe(true);

    wrapper.destroy();
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Tabs, {
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

    wrapper.destroy();
  });
});
