import React from "react";
import { Link } from "@mui/material";
import {Typography} from '@mui/material'
const LogoIcon = () => {
  return (
    <Link href="/" sx={{
      "text-decoration": "none",
      color: "black"
      }}>
      <Typography variant="h1" sx={{
        fontWeight: "700",
        fontSize: "24px"
      }}>UpWork Insights</Typography>
    </Link>
  );
};

export default LogoIcon;
