import { enableAutoDestroy, mount, shallowMount } from '@vue/test-utils';
import Table from './Table.vue';
import TableBody from './TableBody.vue';

describe('TableBody', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableBody />
        </Table>`,
      components: {
        Table,
        TableBody,
      },
    });

    const $tableBody = wrapper.findComponent(TableBody);
    expect($tableBody.element.tagName).toBe('TBODY');
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(TableBody)).toThrowError();
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableBody>
            <span>foobar</span>
          </TableBody>
        </Table>`,
      components: {
        Table,
        TableBody,
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });
});
