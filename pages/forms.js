import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";

const Forms = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Ajouter une machine">
          <Stack spacing={3}>
            <TextField id="name-basic" label="Nom" variant="outlined" />
            <TextField id="email-basic" label="Service" variant="outlined" />
            <TextField id="outlined-multiline-static" label="Modele" />
            <TextField
              id="er-basic"
              label="Date de mise en place              "
              variant="outlined"
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Terms & Condition"
              />
            </FormGroup>
          </Stack>
          <br />
          <Button variant="contained" mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Forms;
