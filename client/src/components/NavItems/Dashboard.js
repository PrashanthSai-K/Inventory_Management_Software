import React, { Fragment, useEffect, useState, useContext } from "react";
import { UserContext } from "../../App.js";

function Dashboard(props) {
  const [open, setOpen] = useState(false);

  const user = useContext(UserContext);

  return (
    <>
      <h1 className="text-2xl font-semibold ">Dashboard</h1>
      {user.length ? (
        <div className="text-2xl">
          {user.email_id},{user.role},{user.dept_code}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
