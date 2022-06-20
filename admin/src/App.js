import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Instructors from "./pages/instructors/Instructors";
import Packages from "./pages/packages/Packages";
import Payments from "./pages/payments/Payments";
import WorkoutDetails from "./pages/workoutDetails/WorkoutDetails";
import AddUser from "./pages/addUser/AddUser";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AddInstructor from "./pages/addInstructor/AddInstructor";
import AddPackage from "./pages/addPackage/AddPackage";
import AddPayment from "./pages/addPayment/AddPayment";
import AddWorkoutPlan from "./pages/addWorkoutPlan/AddWorkoutPlan";
import UpdateUser from "./pages/updateUser/UpdateUser";
import UpdateInstructor from "./pages/updateInstructor/UpdateInstructor";
import UpdatePackage from "./pages/updatePackage/UpdatePackage";
import UpdatePayment from "./pages/updatePayment/UpdatePayment";
import UpdateWorkoutPlan from "./pages/updateWorkoutPlan/UpdateWorkoutPlan";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="addnewusers"
                element={
                  <ProtectedRoute>
                    <AddUser />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id/updateusers"
                element={
                  <ProtectedRoute>
                    <UpdateUser />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="instructors">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Instructors />
                  </ProtectedRoute>
                }
              />
              <Route
                path="addnewinstructors"
                element={
                  <ProtectedRoute>
                    <AddInstructor />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id/updateInstructors"
                element={
                  <ProtectedRoute>
                    <UpdateInstructor />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="packages">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Packages />
                  </ProtectedRoute>
                }
              />
              <Route
                path="addnewpackages"
                element={
                  <ProtectedRoute>
                    <AddPackage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id/updatePackages"
                element={
                  <ProtectedRoute>
                    <UpdatePackage />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="payments">
              <Route
                index
                element={
                  <ProtectedRoute>
                    {" "}
                    <Payments />{" "}
                  </ProtectedRoute>
                }
              />
              <Route
                path="addnewpayments"
                element={
                  <ProtectedRoute>
                    <AddPayment />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id/updatePayments"
                element={
                  <ProtectedRoute>
                    <UpdatePayment />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="workoutDetails">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <WorkoutDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="addnewworkoutDetails"
                element={
                  <ProtectedRoute>
                    <AddWorkoutPlan />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id/updateworkoutDetails"
                element={
                  <ProtectedRoute>
                    <UpdateWorkoutPlan />
                  </ProtectedRoute>
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
