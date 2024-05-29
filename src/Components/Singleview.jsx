import { Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Singleview = () => {
  const location = useLocation();
  const data = location?.state?.user;
  console.log(data);

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-lg-4"></div>
          <div
            className="col-lg-4 mt-5 text-center text-black"
            style={{ border: "1px solid black" }}
          >
            <img src="https://i.postimg.cc/s294kMGw/download.png" alt="" />
            <hr />
            <h4 className="my-3">
              Name: <b>{data?.firstName}</b>
            </h4>
            <h4 className="my-3">
              Email: <b>{data?.email}</b>
            </h4>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default Singleview;
