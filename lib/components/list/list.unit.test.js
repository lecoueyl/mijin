import { mount } from 'avoriaz';
import { List } from '@/lib';

describe('List', () => {
  test('It renders a child when passed in', () => {
    const wrapper = mount(List, {
      slots: {
        default: List,
      },
    });

    expect(wrapper.contains(List)).toBe(true);
  });

  test('It has a class', () => {
    const wrapper = mount(List);

    expect(wrapper.hasClass('o-list')).toBe(true);
  });

  test('It accepts type property', () => {
    const wrapper = mount(List, {
      propsData: {
        type: 'span',
      },
    });

    expect(wrapper.hasClass('o-list--span')).toBe(true);
  });

  test('It accepts gutter property', () => {
    const wrapper = mount(List, {
      propsData: {
        gutter: 'large',
      },
    });

    expect(wrapper.hasClass('o-list--large')).toBe(true);
  });

  test('It accepts align property', () => {
    const wrapper = mount(List, {
      propsData: {
        align: 'middle',
      },
    });

    expect(wrapper.hasClass('o-list--middle')).toBe(true);
  });
});
