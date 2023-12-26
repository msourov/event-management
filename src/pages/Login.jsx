import { loginUser } from "../action/auth";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../state/reducers/loginSlice";
import { useNavigate } from "react-router-dom";
import { clearError } from "../state/reducers/errorSlice";
import MessageAlert from "../action/MessageAlert";
import { useEffect, useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.error);
  const [loginError, setLoginError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const reduxState = useSelector((state) => state);

  // useEffect(() => {
  //   if (showAlert) {
  //     const timer = setTimeout(() => {
  //       setShowAlert(false);
  //       dispatch(clearError());
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showAlert, dispatch]);

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await loginUser({ ...values, dispatch });
      if (response && response.access_token && response.name) {
        // <Alert message="Loggin in successfully" type="success" showIcon />;
        dispatch(setToken(response.access_token));
        dispatch(setUser(response.name));
        dispatch(clearError());
        navigate("/");
      } else {
        setLoginError(error);
      }
    } catch (error) {
      console.error("Error logging in...", error);
      setShowAlert(true);
    }
  };

  const onFinishFailed = () => {
    console.error("form submission failed");
  };
  console.log("redux state", reduxState);
  return (
    <>
      {loginError && (
        <div>
          <MessageAlert type="error" value={error.message} />
          {/* <Alert message={error.message} type="error" showIcon /> */}
        </div>
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          width: "40vw",
          margin: "auto",
          marginBlock: "10%",
          marginInline: "15%",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="user_id"
          rules={[{ required: true, message: "Please input your user id!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
