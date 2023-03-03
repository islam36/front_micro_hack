import { Grid } from "@mui/material";
import MachinesTable from '../../src/components/dashboard/MachinesTable'

export default function MachinesIndex() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <MachinesTable />
      </Grid>
    </Grid>
  );
}
