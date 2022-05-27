import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface CopyrightProps {}

export default function Copyright({children}: PropsWithChildren<CopyrightProps>) {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {children}{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
