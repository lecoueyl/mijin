import { enableAutoDestroy, shallowMount, mount } from '@vue/test-utils';
import Popover from './Popover.vue';
import PopoverContainer from './PopoverContainer.vue';

describe('PopoverContainer', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverContainer />
        </Popover>`,
      components: {
        Popover,
        PopoverContainer,
      },
    });

    const $popoverContainer = wrapper.findComponent(PopoverContainer);
    expect($popoverContainer.element.tagName).toBe('DIV');
    expect($popoverContainer.classes('bg-white')).toBe(true);
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(PopoverContainer)).toThrowError();
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverContainer>
            <span>foobar</span>
          </PopoverContainer>
        </Popover>`,
      components: {
        Popover,
        PopoverContainer,
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverContainer tag="section" />
        </Popover>`,
      components: {
        Popover,
        PopoverContainer,
      },
    });

    const $popoverContainer = wrapper.findComponent(PopoverContainer);
    expect($popoverContainer.element.tagName).toBe('SECTION');
  });
});
