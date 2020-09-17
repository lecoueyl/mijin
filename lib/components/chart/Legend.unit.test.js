import { shallow } from 'avoriaz';
import { ChartLegend } from '@/lib';

describe('ChartLegend', () => {
  test('It renders an <div> tag when passed in', () => {
    const wrapper = shallow(ChartLegend, {
      slots: {
        default: ChartLegend,
      },
    });

    expect(wrapper.find('div').length > 0).toBe(true);
  });
});
