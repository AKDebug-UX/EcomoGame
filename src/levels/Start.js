import {BrowserRouter as Router, useHistory} from "react-router-dom";

import { useState } from "react";

// A function that authenticates the users

function authenticateUser(userName, password) {

// Some code to authenticate the user

}

// Hooks must be used inside a functional component

export default function Login(props) {

  //Creating a state variable

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  

  // Accessing the history instance created by React

  const history = useHistory();

  

  // Handle the user clicks the login button

  const handleClick = () => {

    // Authenticate the user

    authenticateUser(userName, password);

    // When the authentication is done

    // Redirect the user to the /profile/${userName} page

    // the below code adds the /profile/${userName} page

    // to the history stack.

    history.push(` /profile/${userName} `);

  };

  

  return (

    <div>
       <input type="text" value={userName} onChange={(e) => {
              setUserName(e.target.value);
            }}   required
        />

      <input type="text" value={password} onChange={(e) => {
             setPassword(e.target.value);
            }}   required
      />

      <button type="submit" onClick={handleClick}>
                  {" "}
            Log In{""}
      </button>

    </div>

  );

}