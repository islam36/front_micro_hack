import { useRouter } from "next/router";
import { Grid, Typography, Alert, AlertTitle, Stack } from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SalesOverview from "../../src/components/dashboard/SalesOverview";

const machineData = {
  id: 4,
  nom: "machine assemblage num 1",
  modele: "25CE7",
  service: "assemblage",
  etat: "bon état",
  date: "12/02/2017",
};

export default function MachineDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} md={4}>
        <BaseCard   title="Information technique">
          <Timeline style={{margin : 0,padding:0}}
          >
            {Object.keys(machineData).map((key, index) => (
              <TimelineItem  key={index}>
                <TimelineOppositeContent
                  sx={{
                    fontSize: "2px",
                    fontWeight: "700",
                    flex: "0"
                  }}
                ></TimelineOppositeContent>
                <TimelineSeparator >
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: "success.main",
                    }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  color="text.secondary"
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  <b>{`${key.toUpperCase()}: `}</b>
                  {machineData[key]}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </BaseCard>
      </Grid>

      <Grid item xs={12} md={8}>
        <BaseCard title="Les alertes déclanchées pour la machine">
          <Stack spacing={2}>
            <Alert severity="error">
              <AlertTitle>{"PANNE [02/03/2023 13:05]"} </AlertTitle>
              {"aux niveau de l'articulation du bras métalique num 4"}
            </Alert>

            <Alert severity="warning">
              <AlertTitle>{"POTENIELLE PANNE [01/03/2023 12:58]"} </AlertTitle>
              {"au niveau de l'articulation du bras métalique num 4"}
            </Alert>

            <Alert severity="warning">
              <AlertTitle>{"POTENIELLE PANNE [28/02/2023 12:52]"} </AlertTitle>
              {"au niveau de l'articulation du bras métalique num 4"}
            </Alert>

            <Alert severity="info">
              <AlertTitle>{"RAPPEL [25/02/2023 12:00]"} </AlertTitle>
              {"RAPPEL de maintenance du bras métalique num 4"}
            </Alert>
          </Stack>
        </BaseCard>
      </Grid>
    </Grid>
  );
}
