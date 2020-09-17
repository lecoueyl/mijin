import { mount, shallow } from 'avoriaz';
import { Hr } from '@/lib';

describe('Hr', () => {
  test('It renders an <hr> tag when passed in', () => {
    const wrapper = shallow(Hr, {
      slots: {
        default: Hr,
      },
    });

    expect(wrapper.find('hr').length > 0).toBe(true);
  });

  test('It has a class', () => {
    const wrapper = mount(Hr);

    expect(wrapper.hasClass('c-spacer')).toBe(true);
  });
});
