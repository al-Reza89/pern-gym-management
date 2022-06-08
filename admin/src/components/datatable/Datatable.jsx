import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Datatable = ({ dataRows, title }) => {
  const loction = useLocation();
  const path = loction.pathname.split("/")[1];

  const { data, loading, error } = useFetch(`${path}`);
  const [list, setList] = useState();

  useEffect(() => {
    setList(data.data);
  }, [data]);

  console.log(list);

  // console.log(data.data);
  // console.log(userRows);

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
        {title}
        <Link to={`/${path}/addnew`} style={{ textDecoration: "none" }}>
          <Button variant="contained" className="link">
            Add New{" "}
          </Button>
        </Link>
      </div>
      <DataGrid
        // rows={list}
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[]}
        getRowId={(row) => row.id}
        headerHeight={75}
        rowHeight={65}
      />
    </div>
  );
};

export default Datatable;
