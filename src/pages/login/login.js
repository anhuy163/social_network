import React, { useContext, useRef, useState } from "react";
import { Input, Divider } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import {} from "@mui/icons-material";
import "./login.css";
import Register from "../register/register";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const registerCancelBtnClick = () => {
    setOpenRegister(false);
  };
  const registerBtnClick = () => {
    setOpenRegister(true);
  };
  console.log(openRegister);

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    loginCall({ usernameRef, passwordRef });
    // console.log(usernameRef.current.input.value);
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <div className='loginLogo'>H-Social</div>
          <div className='loginTitle'>Connect your life in your way</div>
        </div>
        <div className='loginRight'>
          <form className='loginBoard' onSubmit={loginHandler}>
            <div className='loginBoardLogo'></div>
            <Input
              ref={usernameRef}
              className='loginBoardInput'
              placeholder='Username'
              size='large'
              prefix={<UserOutlined />}></Input>
            <br />
            <Input.Password
              ref={passwordRef}
              className='loginBoardInput'
              placeholder='Password'
              size='large'
              prefix={<KeyOutlined />}></Input.Password>
            <br />
            <button className='loginBoardSigninBtn'>Log in</button>
            <Divider style={{ fontWeight: "400" }}>Not signed up yet ?</Divider>
            <button className='loginBoardSignupBtn' onClick={registerBtnClick}>
              Register here
            </button>
          </form>
        </div>
        <div className='loginRegisterOpening'>
          <Register visible={openRegister} cancel={registerCancelBtnClick} />
        </div>
      </div>
    </div>
  );
};

export default Login;
