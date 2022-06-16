import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseUrl from "../../api/BaseUrl";

const Datatable = ({ dataRows, title }) => {
  const loction = useLocation();
  const path = loction.pathname.split("/")[1];

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseUrl.get(`/${path}`);
        // console.log({ res: response.data.data });
        setList(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path]);

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
        <Link to={`/${path}/addnew${path}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" className="link">
            Add New{" "}
          </Button>
        </Link>
      </div>
      <DataGrid
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
