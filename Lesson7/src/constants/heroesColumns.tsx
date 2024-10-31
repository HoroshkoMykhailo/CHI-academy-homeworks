import { GridColDef } from "@mui/x-data-grid";
import { renderAliveCell } from "../helpers/renderAliveCell";

const heroesColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: renderAliveCell,
  },
];

export { heroesColumns };