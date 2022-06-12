import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Instructors from "./pages/instructors/Instructors";
import Packages from "./pages/packages/Packages";
import Payments from "./pages/payments/Payments";
import WorkoutDetails from "./pages/workoutDetails/WorkoutDetails";
import AddUser from "./pages/addUser/AddUser";
import {
  instructorInputs,
  packageInputs,
  paymentInputs,
  userInputs,
  workoutdetailInputs,
} from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route
                path="addnew"
                element={<AddUser inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="instructors">
              <Route index element={<Instructors />} />
              <Route
                path="addnew"
                element={
                  <AddUser
                    inputs={instructorInputs}
                    title="Add New instructor"
                  />
                }
              />
            </Route>
            <Route path="packages">
              <Route index element={<Packages />} />
              <Route
                path="addnew"
                element={
                  <AddUser inputs={packageInputs} title="Add new Package" />
                }
              />
            </Route>
            <Route path="payments">
              <Route index element={<Payments />} />
              <Route
                path="addnew"
                element={
                  <AddUser inputs={paymentInputs} title="Add new Payment" />
                }
              />
            </Route>
            <Route path="workoutDetails">
              <Route index element={<WorkoutDetails />} />
              <Route
                path="addnew"
                element={
                  <AddUser
                    inputs={workoutdetailInputs}
                    title="Add new workout plan"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
