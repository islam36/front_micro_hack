import { Grid } from "@mui/material";
import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from "../src/components/dashboard/SalesOverview";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import BarOverview from "../src/components/dashboard/BarOverview";
import MachinesTable from "../src/components/dashboard/MachinesTable";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BarOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      {/* <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid> */}
        <Grid item xs={12} lg={12}>
        <MachinesTable index={true} />
      </Grid>
    </Grid>
  );
}
