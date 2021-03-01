import { enableAutoDestroy, shallowMount, mount } from '@vue/test-utils';
import List from './List.vue';
import ListItem from './ListItem.vue';

describe('List', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <List>
          <ListItem />
        </List>`,
      components: {
        List,
        ListItem,
      },
    });

    const $listItem = wrapper.findcomponent(ListItem);
    expect($listItem.element.tagName).toBe('LI');
    expect($listItem.classes('list-item')).toBe(true);
    expect($listItem.classes('float-left')).toBe(false);
    expect($listItem.classes('py-1')).toBe(true);
    expect($listItem.classes('px-1')).toBe(false);
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(ListItem)).toThrowError();
  });

  it('receives inline props from parent List', async () => {
    const wrapper = mount({
      template: `
        <List inline>
          <ListItem />
        </List>`,
      components: {
        List,
        ListItem,
      },
    });

    const $listItem = wrapper.findcomponent(ListItem);
    expect($listItem.classes('float-left')).toBe(true);
    expect($listItem.classes('py-1')).toBe(false);
    expect($listItem.classes('px-1')).toBe(true);
  });

  it('receives gutter props from parent List', async () => {
    const wrapper = mount({
      template: `
        <List gutter="lg">
          <ListItem />
        </List>`,
      components: {
        List,
        ListItem,
      },
    });

    const $listItem = wrapper.findcomponent(ListItem);
    expect($listItem.classes('py-1')).toBe(false);
    expect($listItem.classes('py-2')).toBe(true);
  });
});
