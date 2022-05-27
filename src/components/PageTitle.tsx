import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface PageTitleProps {}

export default function PageTitle({
  children,
}: PropsWithChildren<PageTitleProps>) {
  return (
    <Typography className="page-title" variant="h4">
      {children}
    </Typography>
  );
}
