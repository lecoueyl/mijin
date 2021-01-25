import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Icon from './Icon';

describe('Icon', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        name: 'user',
      },
    });

    expect(wrapper.element.tagName).toBe('svg');
    expect(wrapper.attributes('aria-labelledby')).toBe('user');
    expect(wrapper.attributes('fill')).toBe('none');
    expect(wrapper.attributes('role')).toBe('presentation');
    expect(wrapper.attributes('stroke')).toBe('currentColor');
  });

  it('do not renders default slot content', async () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        name: 'user',
      },
      slots: {
        default: '<section>foobar</section>',
      },
    });

    expect(wrapper.find('section').exists()).toBe(false);
    expect(wrapper.text()).toBe('');
  });

  test.each([
    ['sm', 'h-3'],
    ['lg', 'h-5'],
  ])(
    'with prop size %p render class %p',
    (size, expected) => {
      const wrapper = shallowMount(Icon, {
        propsData: {
          name: 'user',
          size,
        },
      });

      expect(wrapper.classes(expected)).toBe(true);
    },
  );
});
