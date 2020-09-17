import { mount, shallow } from 'avoriaz';
import { Selector } from '@/lib';

describe('Selector', () => {
  test('It renders a child when passed in', () => {
    const wrapper = shallow(Selector, {
      slots: {
        default: Selector,
      },
    });

    expect(wrapper.find('ul').length > 0).toBe(true);
  });

  test('It has a class', () => {
    const wrapper = mount(Selector);

    expect(wrapper.hasClass('c-selector')).toBe(true);
    expect(wrapper.hasClass('o-list')).toBe(true);
  });

  test('It accepts display property', () => {
    const wrapper = shallow(Selector, {
      propsData: {
        display: 'inline',
      },
    });

    expect(wrapper.hasClass('c-selector--inline')).toBe(true);
    expect(wrapper.hasClass('o-list--inline')).toBe(true);
  });

  test('It accepts display type', () => {
    const wrapper = shallow(Selector, {
      propsData: {
        shape: 'ghost',
      },
    });

    expect(wrapper.hasClass('c-selector--ghost')).toBe(true);
  });

  test('It accepts gutter property', () => {
    const wrapper = shallow(Selector, {
      propsData: {
        gutter: 'test',
      },
    });

    expect(wrapper.hasClass('o-list--test')).toBe(true);
  });

  test('It accepts bordered property', () => {
    const wrapper = shallow(Selector, {
      propsData: {
        bordered: true,
      },
    });

    expect(wrapper.hasClass('c-selector--with-border')).toBe(true);
  });
});
