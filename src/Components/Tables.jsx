import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const Tables = () => {
  const pageNumber = sessionStorage.getItem("currentPage")
    ? parseInt(sessionStorage.getItem("currentPage"))
    : 0;

  const selectedData = sessionStorage.getItem("selectedData")
    ? parseInt(sessionStorage.getItem("selectedData"))
    : 0;

  const [currentPage, setCurrentPage] = useState(pageNumber);
  const [selectionModel, setSelectionModel] = useState(selectedData);

  const navigate = useNavigate();
  const users = [];

  const handlePageSize = (params) => {
    setCurrentPage(params.page);
  };

  const columns = [
    { field: "id", headerName: "#", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "view",
      headerName: "View",
      width: 100,
      renderCell: (params) => (
        <button
          className="btn btn-primary mb-2"
          onClick={() => handleViewClick(params.row)}
          style={{ textDecoration: "none" }}
        >
          View
        </button>
      ),
    },
  ];

  const handleViewClick = (data) => {
    sessionStorage.setItem("currentPage", currentPage);
    sessionStorage.setItem("selectedData", data.id);
    navigate(`/singleView/${data.id}`, {
      state: { user: data, page: currentPage },
    });
  };

  for (let i = 1; i <= 100; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@gmail.com`,
    });
  }

  return (
    <Container>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 mt-5">
          <DataGrid
            autoHeight
            columns={columns}
            rows={users}
            rowSelectionModel={[selectionModel]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: currentPage },
              },
            }}
            onPaginationModelChange={(val) => handlePageSize(val)}
          />
        </div>
        <div className="col-lg-2"></div>
      </div>
    </Container>
  );
};

export default Tables;
