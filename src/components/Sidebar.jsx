import React from "react";
import Orders from "../pages/Orders";
import Events from "../pages/Events";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Alerts from "../pages/Alerts";

function Sidebar() {
  return (
    <div>
      <Orders />
      <Events />
      <Reports />
      <Settings />
      <Alerts />
    </div>
  );
}

export default Sidebar;
