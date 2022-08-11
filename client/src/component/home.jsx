import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { user, loading } = useContext(AuthContext);
  // console.log({ loading, user });

  // return (
  //   <>
  //     {loading ? (
  //       <div id="main">
  //         <div className="pr-heading">
  //           <h2>STEP UP YOUR</h2>
  //           <h1>
  //             <span>FITNESS</span>WITH US
  //           </h1>
  //           <p className="details">
  //             Buils Your Body And Fitness With Professional Touch
  //           </p>
  //           <div className="header-btns">
  //             {!user ? (
  //               <Link to={"/register"}>
  //                 <button className="header-btn">JOIN US</button>
  //               </Link>
  //             ) : (
  //               <Link to={`/user/47`}>
  //                 <button className="header-btn">VIEW PROFILE</button>
  //               </Link>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     ) : (
  //       <div id="main">
  //         <div className="pr-heading">
  //           <h2>STEP UP YOUR</h2>
  //           <h1>
  //             <span>FITNESS</span>WITH US
  //           </h1>
  //           <p className="details">
  //             Buils Your Body And Fitness With Professional Touch
  //           </p>
  //           <div className="header-btns">
  //             {!user ? (
  //               <Link to={"/register"}>
  //                 <button className="header-btn">JOIN US</button>
  //               </Link>
  //             ) : (
  //               <Link to={`/user/${user.data.id}`}>
  //                 <button className="header-btn">VIEW PROFILE</button>
  //               </Link>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );

  return (
    <div id="main">
      <div className="pr-heading">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span>WITH US
        </h1>
        <p className="details">
          Buils Your Body And Fitness With Professional Touch
        </p>
        <div className="header-btns">
          {!user ? (
            <Link to={"/register"}>
              <button className="header-btn">JOIN US</button>
            </Link>
          ) : (
            <Link to={`/user/${user.user.id}`}>
              <button className="header-btn">VIEW PROFILE</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
