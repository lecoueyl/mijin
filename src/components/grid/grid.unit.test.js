import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Grid from './Grid.vue';

describe('Grid', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Grid);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('grid')).toBe(true);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Grid, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('accepts cols and gap props', async () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        cols: '2',
        gap: '4',
      },
    });

    expect(wrapper.classes('sm:grid-cols-2')).toBe(true);
    expect(wrapper.classes('sm:gap-4')).toBe(true);
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Grid, {
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
