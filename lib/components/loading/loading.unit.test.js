import { shallow } from 'avoriaz';
import { Loading } from '@/lib';

describe('Loading', () => {
  test('It accept utility classes', () => {
    const wrapper = shallow(Loading, {
      propsData: {
        uP: 'x2',
      },
    });

    expect(wrapper.hasClass('u-p-x2')).toBe(true);
  });

  test('It accepts padding property', () => {
    const wrapper = shallow(Loading, {
      propsData: {
        type: 'placeholder',
      },
    });

    expect(wrapper.hasClass('c-loading-placeholder')).toBe(true);
  });
});
