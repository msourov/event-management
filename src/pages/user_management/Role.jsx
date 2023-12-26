import React, { useState, useEffect } from "react";
import axios from "axios";

function Role() {
  // const [data, setData] = useState("");
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const apiURL = "http://192.168.60.86:8000/";
  //   axios
  //     .get(apiURL)
  //     .then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //     });
  // });
  return (
    <div
      // style={{
      //   outline: "auto",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      Role
      {/* {console.log("data", data)} */}
    </div>
  );
}

export default Role;
