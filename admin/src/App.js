import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Instructors from "./pages/instructors/Instructors";
import Packages from "./pages/packages/Packages";
import Payments from "./pages/payments/Payments";
import WorkoutDetails from "./pages/workoutDetails/WorkoutDetails";
import AddUser from "./pages/addUser/AddUser";
import { userInputs } from "./formSource";

function App() {
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
            </Route>
            <Route path="packages">
              <Route index element={<Packages />} />
            </Route>
            <Route path="payments" element={<Payments />}>
              <Route index element={<Payments />} />
            </Route>
            <Route path="workoutDetails">
              <Route index element={<WorkoutDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
