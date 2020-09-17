import { shallow } from 'avoriaz';
import { Progress } from '@/lib';

describe('Progress', () => {
  test('It renders a child when passed in', () => {
    const wrapper = shallow(Progress, {
      slots: {
        default: Progress,
      },
      props: {
        percentage: 10,
      },
    });

    expect(wrapper.find('div').length > 0).toBe(true);
  });
});
