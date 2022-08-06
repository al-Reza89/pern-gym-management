export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "first_name",
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

export const instructorColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "instructor_name",
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
    field: "instructor_email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "instructor_address",
    headerName: "Address",
    width: 400,
  },
  {
    field: "member_id",
    headerName: "Associate Member",
    width: 250,
  },
];

export const paymentColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "amount",
    headerName: "Amount",
    width: 300,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    width: 300,
  },

  {
    field: "payment_type",
    headerName: "Payment Type",
    width: 200,
  },
  {
    field: "date_created",
    headerName: "Payment Date",
    width: 250,
  },
  {
    field: "member_id",
    headerName: "Associate Id",
    width: 250,
  },
];

export const packageColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "package",
    headerName: "Package",
    width: 300,
  },
  {
    field: "descriptions",
    headerName: "Description",
    width: 400,
  },

  {
    field: "amount",
    headerName: "Package Amount",
    width: 200,
  },
  {
    field: "member_id",
    headerName: "Associate Id",
    width: 250,
  },
];

export const workoutPlanColumns = [
  { field: "id", headerName: "ID", width: 100 },

  {
    field: "member_id",
    headerName: "Associate Member",
    width: 300,
  },

  {
    field: "instructor_id",
    headerName: "Associate Instructor",
    width: 200,
  },
  {
    field: "workout_time",
    headerName: "Workout Time",
    width: 250,
  },
  {
    field: "details",
    headerName: "Details",
    width: 250,
  },
];
