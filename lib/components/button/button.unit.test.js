import { shallowMount } from '@vue/test-utils';
import Button from './Button';

describe('Button', () => {
  it('has default structure', async () => {
    const wrapper = shallowMount(Button);

    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.attributes('type')).toBeDefined();
    expect(wrapper.attributes('type')).toBe('button');
    expect(wrapper.attributes('href')).not.toBeDefined();
    expect(wrapper.attributes('role')).not.toBeDefined();
    expect(wrapper.attributes('disabled')).not.toBeDefined();
    expect(wrapper.attributes('aria-disabled')).not.toBeDefined();

    wrapper.destroy();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');

    wrapper.destroy();
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.attributes('type')).not.toBeDefined();

    wrapper.destroy();
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();

    wrapper.destroy();
  });

  it('link has attribute aria-disabled when disabled set', async () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        tag: 'a',
        disabled: true,
      },
    });

    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('aria-disabled')).toBeDefined();
    expect(wrapper.attributes('aria-disabled')).toBe('true');

    wrapper.destroy();
  });

  it('should emit click event when clicked', async () => {
    let called = 0;
    let event = null;
    const wrapper = shallowMount(Button, {
      listeners: {
        click: (e) => {
          event = e;
          called += 1;
        },
      },
    });

    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(called).toBe(0);
    expect(event).toEqual(null);
    await wrapper.find('button').trigger('click');
    expect(called).toBe(1);
    expect(event).toBeInstanceOf(MouseEvent);

    wrapper.destroy();
  });

  it('should not emit click event when clicked and disabled', async () => {
    let called = 0;
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
      listeners: {
        click: () => {
          called += 1;
        },
      },
    });

    expect(called).toBe(0);
    await wrapper.find('button').trigger('click');
    expect(called).toBe(0);

    wrapper.destroy();
  });
});
