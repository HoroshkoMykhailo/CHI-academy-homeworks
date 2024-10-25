import { renderAliveCell } from "../helpers/renderAliveCell";

const heroesColumns = [
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