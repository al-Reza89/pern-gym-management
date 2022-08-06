import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const Datatable = ({ Columns, title }) => {
  const navigate = useNavigate();
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

  const handleView = (id) => {
    navigate(`/${path}/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/${path}/${id}/update${path}`);
  };

  const handleDelete = async (id) => {
    try {
      await BaseUrl.delete(`/${path}/${id}`);
      list.filter((alist) => {
        return alist.id !== id;
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleView(params.row.id)}
            >
              View
            </div>
            <div
              className="editButton"
              onClick={() => handleUpdate(params.row.id)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle" style={{ padding: "20px" }}>
        {title}
        <Link to={`/${path}/addnew${path}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            className="link"
            startIcon={<PersonAddAlt1Icon />}
          >
            Add New{" "}
          </Button>
        </Link>
      </div>
      <DataGrid
        style={{margin: '10px', color:'#00b976' }}
        rows={list}
        columns={Columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // getRowId={(row) => row.id}
        headerHeight={75}
        rowHeight={65}
      />
    </div>
  );
};

export default Datatable;
