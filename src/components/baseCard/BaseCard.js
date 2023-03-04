import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
  Button
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <Card  >
      <Box px={2}  display="flex" alignItems="center">
        <Typography style={{fontSize : 20,letterSpacing : 1.2, fontWeight: 700}} variant="h2">{props.title}</Typography>
        {props.btn != null ? <Button sx={{ ml: "auto" }} onClick={props.btn.onClick} variant="contained" color="primary" >{props.btn.text}</Button> : null}
      </Box>
      <CardContent   >{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
