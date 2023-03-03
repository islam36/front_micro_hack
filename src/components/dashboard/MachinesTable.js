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
  Pagination
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

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

const MachinesTable = () => {
  return (
    <BaseCard title="Liste des machines">
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
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Nom
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Modèle
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Service
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Etat
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
            <TableRow key={machine.id} className="table-row">
              <TableCell>
                <Typography variant="h6">{machine.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{machine.nom}</Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {machine.modele}
                </Typography>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Stack spacing={2} sx={{
        mt: "20px"
      }}>
        <Pagination count={10} color="primary" />
      </Stack>
    </BaseCard>
  );
};

export default MachinesTable;