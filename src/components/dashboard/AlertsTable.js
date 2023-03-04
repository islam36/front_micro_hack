import React from "react";
import {
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Pagination,
  AlertTitle,
  Alert,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Feather from "feather-icons-react";
import { useRouter } from "next/router";

const machines = [
  {
    id: 1,
    nom: "alert 1",
    machine : "machine 1",
    status : 0,
    date: "12-02-2017",
    descr : "aux niveau de l'articulation du bras métalique num 4"
  },
  {
    id: 2,
    nom: "alert 2",
    status : 1,
    machine : "machine 2",
    date: "12-02-2017",
    descr : "aux niveau de l'articulation du bras métalique num 4"
  },
  {
    id: 3,
    status : 1,
    nom: "Alert 3",
    machine : "machine 3",
    date: "12-02-2017",
    descr : "aux niveau de l'articulation du bras métalique num 4"
  },
  {
    id: 3,
    status : 2,
    nom: "alert 4",
    machine : "machine 4",
    date: "12-02-2017",
    descr : "maintenance du bras métalique num 4"
  },
];

const bg = {
  "bon état": "#03c9d7",
  'endommagée': "#e46a76",
  'fonctionnel': "#fb9678",
};

const AlertsTable = () => {
  const router = useRouter();

  return (
    <BaseCard title="Liste des alertes" className='width:full'>
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                type
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Machine
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Description
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {machines.map((machine) => (
            <TableRow
              key={machine.id}
              className="table-row"
              onClick={() => {
                router.push(`/machines/${machine.id}`);
              }}
            >
              <TableCell>
                <Typography variant="h6">{machine.status === 0? (<Alert severity="error" sx={{ width: "fit-content", pt:"10px"}}>
              <AlertTitle>PANNE</AlertTitle>
            </Alert>):machine.status === 1? (<Alert severity="warning" sx={{ width: "fit-content", pt:"10px"}}>
              <AlertTitle>POTENTIELLE PANNE</AlertTitle>
            </Alert>):<Alert severity="info" sx={{ width: "fit-content", pt:"10px"}}>
              <AlertTitle>RAPPEL</AlertTitle>
            </Alert>}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{machine.machine}</Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {machine.date}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {machine.descr}
                </Typography>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Stack
        spacing={2}
        sx={{
          mt: "20px",
        }}
      >
        <Pagination count={10} color="primary" />
      </Stack>
    </BaseCard>
  );
};

export default AlertsTable;
