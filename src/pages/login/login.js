import React, { useState } from "react";
import { Input, Divider } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import {} from "@mui/icons-material";
import "./login.css";
import Register from "../register/register";

const Login = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const registerCancelBtnClick = () => {
    setOpenRegister(false);
  };
  const registerBtnClick = () => {
    setOpenRegister(true);
  };
  console.log(openRegister);
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <div className='loginLogo'>H-Social</div>
          <div className='loginTitle'>Connect your life in your way</div>
        </div>
        <div className='loginRight'>
          <div className='loginBoard'>
            <div className='loginBoardLogo'></div>
            <Input
              className='loginBoardInput'
              placeholder='Username'
              size='large'
              prefix={<UserOutlined />}></Input>
            <br />
            <Input
              className='loginBoardInput'
              placeholder='Password'
              size='large'
              prefix={<KeyOutlined />}></Input>
            <br />
            <button className='loginBoardSigninBtn'>Log in</button>
            <Divider style={{ fontWeight: "400" }}>Not signed up yet ?</Divider>
            <button className='loginBoardSignupBtn' onClick={registerBtnClick}>
              Register here
            </button>
          </div>
        </div>
        <div className='loginRegisterOpening'>
          <Register visible={openRegister} cancel={registerCancelBtnClick} />
        </div>
      </div>
    </div>
  );
};

export default Login;
