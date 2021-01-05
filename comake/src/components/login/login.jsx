import React from "react";
import styled from "styled-components";

function Login(props) {
    const { onChange, onSubmit, values, errors } = props
  return (
    <LoginStyled>
      <h1>COMAKE</h1>
      <h3>Welcome Back!</h3>
      <div className="errors">
          <p>{errors.username}</p>
          <p>{errors.password}</p>
      </div>
      <form>
        <input name="username" type="text" placeholder="username" onChange={onChange} value={values.username}/>
        <input name="password" type="password" placeholder="password" onChange={onChange} value={values.password}/>
        <button onClick={onSubmit}>Go!</button>
      </form>
    </LoginStyled>
  );
}
export default Login;

//styled components-------------------------

const LoginStyled = styled.div`
 background-image: radial-gradient(
      circle at top right,
      #27a5e9,
      transparent 30%
    ),
    radial-gradient(circle at right, #eb52a9, transparent 40%),
    radial-gradient(circle at bottom right, #ffb892, transparent 35%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  h1 {
    margin: 0;
    padding: 4%;
    padding-bottom: 0;
    font-size: 300%;
    font-family: "sarabun", sans-serif;
    font-weight: bold;
    font-style: italic;
  }
  h3 {
    color: black;
    font-size: 200%;
    margin: 0;
    padding: 5%;
  }
  form {
    padding: 10%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form input {
    margin: 3%;
    border: 2px solid black;
    border-radius: 50px;
    padding: 2%;
  }
  form button {
    margin: 15%;
    border: 2px solid black;
    border-radius: 75px;
    padding: 3% 70%;
    background-color: black;
    color: white;
    font-size: 100%;
    font-family: "Open Sans", sans-serif;
  }
  form button:hover {
    border-color: black;
    background-color: white;
    color: black;
  }

  .errors {
    color: red;
  }

  @media only screen and (max-width: 600px) {
    background-image: radial-gradient(
        circle at bottom left,
        #27a5e9,
        transparent 30%
      ),
      radial-gradient(circle at bottom, #eb52a9, transparent 40%),
      radial-gradient(circle at bottom right, #ffb892, transparent 35%);
  }
`