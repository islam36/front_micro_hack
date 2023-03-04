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
    nom: "machine assemblage num 1",
    modele: "25CE7",
    service: "assemblage",
    etat: "bon état",
    date: "12/02/2017",
  },
  {
    id: 2,
    nom: "machine assemblage num 1",
    modele: "25CE7",
    service: "assemblage",
    etat: "fonctionnel",
    date: "12/02/2017",
  },
  {
    id: 3,
    nom: "machine assemblage num 1",
    modele: "25CE7",
    service: "assemblage",
    etat: "bon état",
    date: "12/02/2017",
  },
  {
    id: 4,
    nom: "machine assemblage num 1",
    modele: "25CE7",
    service: "assemblage",
    etat: "endommagée",
    date: "12/02/2017",
  },
];

const bg = {
  "bon état": "#03c9d7",
  endommagée: "#e46a76",
  fonctionnel: "#fb9678",
};

const AlertsTable = () => {
  const router = useRouter();

  return (
    <BaseCard title="Liste des alertes" style="width:100%">
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
                Nom
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
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Date de mise en place
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
                <Typography variant="h6">
                  {machine.id === 1 ? (
                    <Alert
                      severity="error"
                      sx={{
                        ml: "0px",
                        mr: "0px",
                      }}
                    >
                      <AlertTitle></AlertTitle>
                    </Alert>
                  ) : machine.id === 2 ? (
                    <Alert severity="warning">
                      <AlertTitle></AlertTitle>
                    </Alert>
                  ) : (
                    <Alert severity="info">
                      <AlertTitle></AlertTitle>
                    </Alert>
                  )}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{machine.nom}</Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {machine.service}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: bg[machine.etat],
                    color: "#fff",
                  }}
                  size="small"
                  label={machine.etat}
                ></Chip>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{machine.date}</Typography>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                ></div>
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
