import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

import './Login.css'
import app from "../../firebase.config";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null)
  console.log(user)
  const googleProvider = new GoogleAuthProvider()
  const gitHubPrivider = new GithubAuthProvider()
  const auth = getAuth(app)

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  const handleGoogleClick = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        setUser(googleUser)
        console.log(googleUser)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const googleLogOut = ()=>{
    signOut(auth)
    .then(()=>{
      console.log('Sign-out successful')
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  const handleGithubClick = () => {
    signInWithPopup(auth, gitHubPrivider)
      .then(result => {
        const gitHubUser = result.user;
        console.log(gitHubUser)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  const handleFacebookClick = () => {

  }
  

  return (
    <div className="grid grid-cols-2 mt">
      <div >
        <div className="siginin-container">
          {/* <h2>Sign In</h2> */}
          <form className="signin-form" onSubmit={handleSubmit} >
            <label htmlFor="">Email:</label>
            <input type="email" name="email" id="" placeholder="Enter email address" />
            <label htmlFor="">Password:</label>
            <input type="password" name="submit" id="" placeholder="Enter email address" />
            <button type="submit" name="login" id="" >Log In</button>
          </form>
        </div>
        <div className="allButton">
          <h2 className="text-xl font-semibold text-center">Log In With Firebase</h2>
          {
            user ?<button className="btn text-white bg-[#4caf50] text-lg w-[300px] mt-4 " type="submit" name="submit" id="" onClick={handleGoogleClick}>Log Out</button> :           <button className="btn text-white bg-[#4caf50] text-lg w-[300px] mt-4 " type="submit" name="submit" id="" onClick={handleGoogleClick}>Login with google</button>
          }
          <button className="btn text-white bg-[#4caf50] text-lg w-[300px] mt-4 " type="submit" name="submit" id="" onClick={handleGithubClick}>Login with Github</button>
          <button className="btn text-white bg-[#4caf50] text-lg w-[300px] mt-4 " type="submit" name="submit" id="" onClick={handleFacebookClick}>Login with Facebook</button>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold">User Data</h1>
        {
          user && <div className="text-2xl font-semibold mt-10">
            <p>User Name: {user.displayName}</p>
            <p>Email:{user.email}</p>
            <p>Picture:{user.photoURL}</p>
            <p>Provider:{user.providerId}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;