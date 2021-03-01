import { enableAutoDestroy, mount, shallowMount } from '@vue/test-utils';
import Table from './Table.vue';
import TableBody from './TableBody.vue';
import TableRow from './TableRow.vue';
import TableCell from './TableCell.vue';

describe('TableCell', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableBody>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
        `,
      components: {
        Table,
        TableBody,
        TableRow,
        TableCell,
      },
    });

    const $tableBody = wrapper.findcomponent(TableCell);
    expect($tableBody.element.tagName).toBe('TD');
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(TableCell)).toThrowError();
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <span>foobar</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      `,
      components: {
        Table,
        TableBody,
        TableRow,
        TableCell,
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('accepts props', async () => {
    const wrapper = mount({
      template: `
        <Table fixed>
          <TableBody>
            <TableRow>
              <TableCell
                textAlign="center"
                truncate
                verticalAlign="bottom"
              />
            </TableRow>
          </TableBody>
        </Table>
      `,
      components: {
        Table,
        TableBody,
        TableRow,
        TableCell,
      },
    });

    const $tableBody = wrapper.findcomponent(TableCell);
    expect($tableBody.classes('text-center')).toBe(true);
    expect($tableBody.classes('truncate')).toBe(true);
    expect($tableBody.classes('align-bottom')).toBe(true);
  });

  it('requires fixed property with truncate prop', async () => {
    const consoleSpy = spyOn(console, 'warn');
    mount({
      template: `
        <Table>
          <TableBody>
            <TableRow>
              <TableCell truncate />
            </TableRow>
          </TableBody>
        </Table>`,
      components: {
        Table,
        TableBody,
        TableRow,
        TableCell,
      },
    });

    expect(consoleSpy).toHaveBeenCalledWith('Table must have "fixed" property set to true when using TableCell "truncate" property');
  });
});
