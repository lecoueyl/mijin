import { mount, shallow } from 'avoriaz';
import Vue from 'vue';
import { Select, Icon } from '@/lib';

Vue.component('bbIcon', Icon);
describe('Select', () => {
  test('It renders a child when passed in', () => {
    const wrapper = shallow(Select, {
      slots: {
        default: Select,
      },
    });

    expect(wrapper.find('select').length > 0).toBe(true);
  });

  test('It has a class', () => {
    const wrapper = mount(Select);
    expect(wrapper.hasClass('c-select')).toBe(true);
  });
});
