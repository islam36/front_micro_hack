import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <Card  >
      <Box px={2}  display="flex" alignItems="center">
        <Typography style={{fontSize : 16,letterSpacing : 1.2}} variant="h2">{props.title}</Typography>
      </Box>
      <CardContent   >{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
