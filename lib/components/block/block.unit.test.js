import { mount, shallow } from 'avoriaz';
import { Block } from '@/lib';

describe('Block', () => {
  test('It renders a tag when passed in', () => {
    const wrapper = shallow(Block, {
      propsData: {
        tagName: 'form',
      },
    });

    expect(wrapper.find('form').length > 0).toBe(true);
  });

  test('It has a background class', () => {
    const wrapper = mount(Block);

    expect(wrapper.hasClass('u-bgcolor-wash-thin')).toBe(true);
  });

  test('It accepts padding property', () => {
    const wrapper = shallow(Block, {
      propsData: {
        paddingVertical: 'x8',
      },
    });

    expect(wrapper.hasClass('u-pv-x8')).toBe(true);
  });
});
