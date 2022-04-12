import React, { useEffect, useState } from "react";
import { Input, Modal, DatePicker, Radio, Select } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import { ArrowDropDown } from "@mui/icons-material";
import "./register.css";
const { Option } = Select;

const modalContent = (
  <>
    <div></div>
    <div className='registerNameInput'>
      <Input
        className='registerInput first'
        size='large'
        placeholder='First name'></Input>
      <Input
        className='registerInput last'
        size='large'
        placeholder='Last name'></Input>
    </div>
    <div className='registerUserInfo'>
      <Input
        className='registerInput info'
        size='large'
        placeholder='Username'></Input>
      <Input
        className='registerInput info'
        size='large'
        placeholder='Password'></Input>
      <Input
        className='registerInput info'
        size='large'
        placeholder='Confirm password'></Input>
    </div>
    <div className='registerMoreInfo'>
      <div className='registerMore birthday'>
        <div>Date of birth:</div>
        <DatePicker placement='bottomLeft' placeholder='yyyy-mm-dd' />
      </div>
      <div className='registerMore gender'>
        <div className=''>Gender:</div>
        <Radio.Group>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
          <Radio value={3}>Other</Radio>
        </Radio.Group>
      </div>
    </div>
  </>
);

const Register = (props) => {
  // console.log(props);
  // const [visible, setVisible] = useState(props.visible);
  useEffect(() => {
    setokBtnStyle();
  }, [props.visible]);

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(modalContent);
  const [gender, setGender] = useState();
  const genderSelectHandler = (e) => {
    setGender(e.target.value);
  };
  const [okBtnStyle, setokBtnStyle] = useState();
  const handleRegisterSubmission = () => {
    setModalText("Your submission is in checking process");
    setConfirmLoading(true);
    setTimeout(() => {
      setModalText("Successful register, congratulations");
      setConfirmLoading(false);
      setokBtnStyle("none");
    }, 2000);
  };
  const handleRegisterCancel = () => {
    props.cancel();
    setModalText(modalContent);
  };
  console.log(okBtnStyle);
  return (
    <div className='register'>
      <div className='registerWrapper'>
        <Modal
          okButtonProps={{ style: { display: okBtnStyle } }}
          destroyOnClose={true}
          title='Register'
          visible={props.visible}
          onOk={handleRegisterSubmission}
          confirmLoading={confirmLoading}
          onCancel={handleRegisterCancel}>
          <div>{modalText}</div>
        </Modal>
      </div>
    </div>
  );
};

export default Register;
