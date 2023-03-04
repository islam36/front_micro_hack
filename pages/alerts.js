import { Grid, Alert, Stack, AlertTitle } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import AlertsTable from "../src/components/dashboard/AlertsTable";

const Alerts = () => {
  return (
    <Grid container spacing={0}>
    <Grid item xs={12} lg={12}>
      <AlertsTable/>
    </Grid>
    </Grid>

  );
};

export default Alerts;
