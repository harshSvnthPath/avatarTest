import { Container, Table, TableBody, TableContainer } from "@mui/material";
import { _avatars } from "@/@mockup/avatar";
import { TableHeadCustom, useTable } from "@/components/table";
import AvatarTableRow from "@/sections/avatar/avatar-table-row";

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "createdAt", label: "CreatedAt" },
  { id: "", width: 88 },
];

type Props = {};

export default function AvatarListView(props: Props) {
  const table = useTable();

  const tableData = _avatars;

  return (
    <>
      <Container>
        <TableContainer>
          <Table>
            <TableHeadCustom
              headLabel={TABLE_HEAD}
              rowCount={tableData.length}
              numSelected={table.selected.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
            />

            <TableBody>
              {tableData.map((row) => (
                <AvatarTableRow
                  key={row.id}
                  row={row}
                  selected={table.selected.includes(row.id)}
                  onSelectRow={() => table.onSelectRow(row.id)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
