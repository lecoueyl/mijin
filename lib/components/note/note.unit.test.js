import { shallowMount } from '@vue/test-utils';
import Note from './Note';

describe('Note', () => {
  it('has default structure', async () => {
    const wrapper = shallowMount(Note);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('border')).toBe(true);

    wrapper.destroy();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Note, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');

    wrapper.destroy();
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Note, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');

    wrapper.destroy();
  });

  it('should emit events', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Note, {
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
