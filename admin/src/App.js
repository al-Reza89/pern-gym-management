import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
                path="addnew"
                element={
                  <ProtectedRoute>
                    <AddUser inputs={userInputs} title="Add New User" />
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
                path="addnew"
                element={
                  <ProtectedRoute>
                    <AddUser
                      inputs={instructorInputs}
                      title="Add New instructor"
                    />
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
                path="addnew"
                element={
                  <ProtectedRoute>
                    <AddUser inputs={packageInputs} title="Add new Package" />
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
                path="addnew"
                element={
                  <ProtectedRoute>
                    <AddUser inputs={paymentInputs} title="Add new Payment" />
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
                path="addnew"
                element={
                  <ProtectedRoute>
                    <AddUser
                      inputs={workoutdetailInputs}
                      title="Add new workout plan"
                    />
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
