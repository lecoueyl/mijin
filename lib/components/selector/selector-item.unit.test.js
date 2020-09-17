import { mount, shallow } from 'avoriaz';
import { SelectorItem } from '@/lib';

describe('SelectorItem', () => {
  test('It renders a child when passed in', () => {
    const wrapper = shallow(SelectorItem, {
      propsData: {
        slots: SelectorItem,
      },
    });

    expect(wrapper.find('li').length > 0).toBe(true);
  });

  test('It has a class', () => {
    const wrapper = mount(SelectorItem);

    expect(wrapper.hasClass('c-selector__item')).toBe(true);
    expect(wrapper.hasClass('o-list__item')).toBe(true);
  });

  test('It accepts active property', () => {
    const wrapper = shallow(SelectorItem, {
      propsData: {
        active: true,
      },
    });

    expect(wrapper.hasClass('c-selector__item--is-active')).toBe(true);
  });
});
