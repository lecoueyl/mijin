import { enableAutoDestroy, mount, shallowMount } from '@vue/test-utils';
import Table from './Table.vue';
import TableHead from './TableHead.vue';

describe('TableHead', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHead />
        </Table>`,
      components: {
        Table,
        TableHead,
      },
    });

    const $tableHead = wrapper.findComponent(TableHead);
    expect($tableHead.element.tagName).toBe('THEAD');
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHead>
            <span>foobar</span>
          </TableHead>
        </Table>`,
      components: {
        Table,
        TableHead,
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(TableHead)).toThrowError();
  });
});
