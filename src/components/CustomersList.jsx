import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "username",
    headerName: "User Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "company",
    headerName: "Company",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    firstName: "Jon",
    username: "snow",
    email: "jhonsnow@gmail.com",
    city: "Night's watch",
    company: "stark industry",
  },
  {
    id: 2,
    firstName: "Cersei",
    username: "Lannister",
    email: "cersei123@gmail.com",
    city: "The Iron Throne",
    company: "The Failure",
  },
  {
    id: 3,
    firstName: "Jaime",
    username: "Lannister",
    email: "onehandjaime@gmail.com",
    city: "The Iron Throne",
    company: "The Dissapointment",
  },
  {
    id: 4,
    firstName: "Arya",
    username: "stark",
    email: "starkarya@gmail.com",
    city: "winter fall",
    company: "stark industry",
  },
  {
    id: 5,
    firstName: "Daenerys",
    username: "Targareyan",
    email: "villanwedidnotexpect@gmail.com",
    city: "Dragon stone",
    company: "The Mining Company",
  },
  {
    id: 6,
    firstName: "Abhi",
    username: "Kantipudi",
    email: "a4abhiram125t@gmail.com",
    city: "Kakinada",
    company: "blah blah",
  },
  {
    id: 7,
    firstName: "Ferrara",
    username: "Clifford",
    email: "a4abhiram125t@gmail.com",
    city: "Rajamundry",
    company: "Ferrara roacher",
  },
  {
    id: 8,
    firstName: "Rossini",
    username: "Frances",
    email: "a4abhiram125t@gmail.com",
    city: "New york",
    company: "The Crossant Company",
  },
  {
    id: 9,
    firstName: "Harvey",
    username: "Specter",
    email: "a4abhiram125t@gmail.com",
    city: "Chicago",
    company: "Pearson spector",
  },
];

const CustomerList = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableColumnMenu
      />
    </Box>
  );
};

export default CustomerList;
