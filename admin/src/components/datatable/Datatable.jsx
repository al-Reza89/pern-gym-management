import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = ({ dataRows, title }) => {
  const loction = useLocation();
  const path = loction.pathname.split("/")[1];

  // const { data, loading, error } = useFetch(`${path}`)
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3001/api/v1/${path}`);
      console.log({ data: res.data });
      setList(res.data.data);
    })();
  }, []);
  // console.log({ data: res.data.data });
  console.log({ userRows });

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
        // rows={userRows}
        rows={list}
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
