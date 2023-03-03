import React from "react";
import { Link } from "@mui/material";
<<<<<<< HEAD
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/innoLogo.svg";

=======
import {Typography} from '@mui/material'
>>>>>>> aa4da4f9ac983f18bf231911cfbea6b1125eab92
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
