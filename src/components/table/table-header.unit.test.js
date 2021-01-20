import { enableAutoDestroy, mount, shallowMount } from '@vue/test-utils';
import Table from './Table';
import TableHead from './TableHead';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHead>
            <TableHeader />
          </TableHead>
        </Table>`,
      components: {
        Table,
        TableHead,
        TableHeader,
      },
    });

    const $tableTitle = wrapper.findComponent(TableHeader);
    expect($tableTitle.element.tagName).toBe('TH');
    expect($tableTitle.find('svg').exists()).toBe(false);
  });

  it('checks parent presence', async () => {
    spyOn(console, 'error');
    expect(() => shallowMount(TableHeader)).toThrowError();
  });

  it('renders default slot content', async () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHead>
            <TableHeader>
              <span>foobar</span>
            </TableHeader>
          </TableHead>
        </Table>`,
      components: {
        Table,
        TableHead,
        TableHeader,
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
          <TableHeader
            textAlign="center"
            sort="asc"
          />
        </TableHead>
      </Table>`,
      components: {
        Table,
        TableHead,
        TableHeader,
      },
    });

    const $tableTitle = wrapper.findComponent(TableHeader);
    expect($tableTitle.classes('text-center')).toBe(true);
    expect($tableTitle.classes('sticky')).toBe(true);
    expect($tableTitle.find('svg').exists()).toBe(true);
  });
});
