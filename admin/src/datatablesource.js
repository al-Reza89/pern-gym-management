export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "username",
    headerName: "Name",
    width: 300,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "joining_date",
    headerName: "Joining Date",
    width: 250,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "No name",
    img: "",
    status: "active",
    email: "noName@gmail.com",
    gender: "male",
    joining_date: "20-11-2012",
  },
];
