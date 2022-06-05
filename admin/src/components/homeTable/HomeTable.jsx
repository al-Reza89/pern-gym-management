import "./homeTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const HomeTable = () => {
  const rows = [
    {
      id: 1143155,
      first_name: "user ",
      last_name: "name",
      img: "",
      email: "noname@gmail.com",
      joining_date: "22-10-2022",
      gender: "male",
      status: "Approved",
    },
    {
      id: 1143155,
      first_name: "user ",
      last_name: "name",
      img: "",
      email: "noname@gmail.com",
      joining_date: "22-10-2022",
      gender: "male",
      status: "Pending",
    },
    {
      id: 1143155,
      first_name: "user ",
      last_name: "name",
      img: "",
      email: "noname@gmail.com",
      joining_date: "22-10-2022",
      gender: "male",
      status: "Approved",
    },
    {
      id: 1143155,
      first_name: "user ",
      last_name: "name",
      img: "",
      email: "noname@gmail.com",
      joining_date: "22-10-2022",
      gender: "male",
      status: "Pending",
    },
    {
      id: 1143155,
      first_name: "user ",
      last_name: "name",
      img: "",
      email: "noname@gmail.com",
      joining_date: "22-10-2022",
      gender: "male",
      status: "Approved",
    },
    {
      id: 1143155,
      first_name: "user ",
      last_name: "name",
      img: "",
      email: "noname@gmail.com",
      joining_date: "22-10-2022",
      gender: "male",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Member ID</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Joining Date</TableCell>
            <TableCell className="tableCell">Gender</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="cursor">
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.first_name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.last_name}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.joining_date}</TableCell>
              <TableCell className="tableCell">{row.gender}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomeTable;
