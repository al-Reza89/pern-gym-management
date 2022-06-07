import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Datatable = () => {
  const loction = useLocation();
  const path = loction.pathname.split("/")[1];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="editButton">Edit</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Users
        <Link to={`/${path}/addnew`} style={{ textDecoration: "none" }}>
          <Button variant="contained" className="link">
            Add New{" "}
          </Button>
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
