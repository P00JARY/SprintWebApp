import React from "react";
import { useHistory } from "react-router";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
  const authToken = localStorage.getItem("token");
  const history = useHistory();
  if (!authToken) {
    history.push("/login");
  }
  return (
    <Layout title="Dashboard">
      <div className="container-fluid align-self-center bg-accent vh-100 p-0">
        <div className="col-md-12 d-flex">
          <div className="col-md-3 my-5 mx-3 ms-5 w-30">
            <div className="card border-0 border-rad-9 h-100 box-card p-4">
              <p className="fs-small-regular my-1">Total Sales</p>
              <p className="fs-title-semibold my-2">RS. 15,89,25,682.00</p>
              <p className="fs-small-regular  mb-0 text-grey mt-2">
                12 June 2022 - 12th July 2022
              </p>
            </div>
          </div>
          <div className="col-md-3 my-5 mx-3 w-30">
            <div className="card border-0 border-rad-9 h-100 box-card p-4">
              <p className="fs-small-regular my-1">Total Registered Users</p>
              <p className="fs-title-semibold my-2">17,765</p>
              <p className="fs-small-regular  mb-0 text-grey mt-2">
                12 June 2022 - 12th July 2022
              </p>
            </div>
          </div>
          <div className="col-md-3 my-5 mx-3 w-30">
            <div className="card border-0 border-rad-9 h-100 box-card p-4">
              <p className="fs-small-regular my-1">Total Orders Placed</p>
              <p className="fs-title-semibold my-2">57,365</p>
              <p className="fs-small-regular  mb-0 text-grey mt-2">All Time</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
