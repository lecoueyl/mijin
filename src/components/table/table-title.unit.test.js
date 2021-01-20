import { enableAutoDestroy, mount, shallowMount } from '@vue/test-utils';
import Table from './Table';
import TableHead from './TableHead';
import TableTitle from './TableTitle';

describe('TableTitle', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHead>
            <TableTitle />
          </TableHead>
        </Table>`,
      components: {
        Table,
        TableHead,
        TableTitle,
      },
    });

    const $tableTitle = wrapper.findComponent(TableTitle);
    expect($tableTitle.element.tagName).toBe('TH');
    expect($tableTitle.find('svg').exists()).toBe(false);
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(TableTitle)).toThrowError();
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHead>
            <TableTitle>
              <span>foobar</span>
            </TableTitle>
          </TableHead>
        </Table>`,
      components: {
        Table,
        TableHead,
        TableTitle,
      },
    });


    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('accepts props', async () => {
    const wrapper = mount({
      template: `
      <Table stickyHeader>
        <TableHead>
          <TableTitle
            textAlign="center"
            sort="asc"
          />
        </TableHead>
      </Table>`,
      components: {
        Table,
        TableHead,
        TableTitle,
      },
    });

    const $tableTitle = wrapper.findComponent(TableTitle);
    expect($tableTitle.classes('text-center')).toBe(true);
    expect($tableTitle.classes('sticky')).toBe(true);
    expect($tableTitle.find('svg').exists()).toBe(true);
  });
});
