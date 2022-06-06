import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Instructors from "./pages/instructors/Instructors";
import Packages from "./pages/packages/Packages";
import Payments from "./pages/payments/Payments";
import WorkoutDetails from "./pages/workoutDetails/WorkoutDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users" element={<Users />} />
            <Route path="instructors" element={<Instructors />} />
            <Route path="packages" element={<Packages />} />
            <Route path="payments" element={<Payments />} />
            <Route path="workoutDetails" element={<WorkoutDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
