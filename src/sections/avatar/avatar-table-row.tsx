import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import { Button, Stack } from "@mui/material";
import { useBoolean } from "@/hooks";
import { ConfirmDialog } from "@/components/custom-dialog";
import { useCallback } from "react";

type Props = { row: IAvatarItem; selected: boolean; onSelectRow: VoidFunction };

export default function AvatarTableRow({ row, selected, onSelectRow }: Props) {
  const confirm = useBoolean();

  const { id } = row;

  const onDeleteRow = useCallback(() => {}, []);

  return (
    <>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>
        <TableCell>Avatar1</TableCell>
        <TableCell>2023.10.12</TableCell>
        <TableCell>
          <Stack direction="row" gap={2}>
            <Button variant="contained">Edit</Button>

            <Button variant="contained" color="error" onClick={confirm.onTrue}>
              Delete
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}
