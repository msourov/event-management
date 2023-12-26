import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Alert, message } from "antd";
import { clearError } from "../state/reducers/errorSlice";

const MessageAlert = ({ type, value }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearError());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div
      style={{
        position: "fixed",
        right: "100px",
        top: "0px",
        width: "400px",
        zIndex: 10000000,
      }}
    >
      <Alert
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        message={value}
        type={type}
        showIcon
        closable
      />
    </div>
  );
};

export default MessageAlert;
