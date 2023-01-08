import {useNavigate} from "react-router-dom";
import { useState } from "react";


function authenticateUser(userName, password) {

}

export default function Login(props) {

  //Creating a state variable

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

    const handleClick = (location) => {
      console.log(location);
      navigate(location);
      authenticateUser(userName, password)
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

      <button type="submit" onClick={() => handleClick("/stage1")}>
                  
            Log In
      </button>

    </div>

  );

}