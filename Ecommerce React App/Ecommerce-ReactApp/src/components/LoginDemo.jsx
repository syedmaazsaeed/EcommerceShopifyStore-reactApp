// import React from "react";

// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from "../firebase/firebase.config";

// const provider = new GoogleAuthProvider();

// const auth = getAuth();

// const LoginDemo = () => {
//   const handleLogin = () => {
//     // console.log("Btn Clicked!");
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         alert("Login Successfully Done!");
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         console.log(errorMessage);
//       });
//   };
//   return (
//     <div className="m-5 p-5">
//       <button className="bg-dark text-light px-4" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// };

// export default LoginDemo;
