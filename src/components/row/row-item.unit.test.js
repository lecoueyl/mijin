import { enableAutoDestroy, shallowMount, mount } from '@vue/test-utils';
import Row from './Row';
import RowItem from './RowItem';

describe('RowItem', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Row>
          <RowItem />
        </Row>`,
      components: {
        Row,
        RowItem,
      },
    });

    const $listItem = wrapper.findComponent(RowItem);
    expect($listItem.element.tagName).toBe('DIV');
    expect($listItem.classes('flex-none')).toBe(true);
    expect($listItem.classes('flex-grow')).toBe(false);
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Row>
          <RowItem>
            <span>foobar</span>
          </RowItem>
        </Row>`,
      components: {
        Row,
        RowItem,
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('renders custom root element', async () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        tag: 'section',
      },
    });

    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(RowItem)).toThrowError();
  });

  it('receives gutter props from parent Row', async () => {
    const wrapper = mount({
      template: `
        <Row gutter="lg">
          <RowItem />
        </Row>`,
      components: {
        Row,
        RowItem,
      },
    });

    const $listItem = wrapper.findComponent(RowItem);
    expect($listItem.classes('px-8')).toBe(true);
  });

  it('accepts grow prop', async () => {
    const wrapper = mount({
      template: `
        <Row>
          <RowItem grow />
        </Row>`,
      components: {
        Row,
        RowItem,
      },
    });

    const $listItem = wrapper.findComponent(RowItem);
    expect($listItem.classes('flex-none')).toBe(false);
    expect($listItem.classes('flex-grow')).toBe(true);
  });
});
