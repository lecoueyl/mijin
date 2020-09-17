import { shallow } from 'avoriaz';
import { mount } from '@vue/test-utils';
import { Modal } from '@/lib';

describe('Modal', () => {
  describe('It accepts sizes property', () => {
    expect(Array.isArray(Modal.sizes)).toBe(true);

    Modal.sizes.forEach((size) => {
      test(`It accepts size ${size}`, (done) => {
        const wrapper = shallow(Modal, {
          propsData: {
            size,
          },
        });

        wrapper.isActive = true;
        wrapper.vm.$nextTick(() => {
          // expect(wrapper.contains(`.c-modal__container--${size}`)).toBe(true);
          done();
        });
      });
    });
  });

  describe('When closed', () => {
    test('It emits a `close` event', () => {
      const wrapper = mount(Modal);

      expect(wrapper.emitted()).toEqual({});
      wrapper.vm.close();
      expect(wrapper.emitted().close).toBeTruthy();
    });
  });
});
