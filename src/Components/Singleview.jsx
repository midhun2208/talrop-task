import { Container } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Singleview = () => {
  const location = useLocation();
  const data = location?.state?.user;
  const navigate = useNavigate();

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
              Name: <b>{data?.name}</b>
            </h4>
            <h4 className="my-3">
              Email: <b>{data?.email}</b>
            </h4>

            <div class="d-grid gap-2 my-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate(-1)}
              >
                Go back
              </button>
            </div>
          </div>

          <div className="col-lg-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default Singleview;
