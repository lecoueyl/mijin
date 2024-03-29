import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Note from './Note.vue';

describe('Note', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Note);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes('border')).toBe(true);
    expect(wrapper.classes('bg-blue-50')).toBe(false);
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Note, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Note, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  test.each([
    ['success', 'text-success-500'],
    ['danger', 'text-danger-500'],
    ['warning', 'text-warning-500'],
  ])(
    'with prop variant %p render class %p',
    (variant, expected) => {
      const wrapper = shallowMount(Note, {
        propsData: {
          variant,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );

  it('accepts filled prop', async () => {
    const wrapper = shallowMount(Note, {
      propsData: {
        filled: true,
      },
    });

    expect(wrapper.classes('border')).toBe(false);
    expect(wrapper.classes('bg-blue-50')).toBe(true);
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
  });
});
