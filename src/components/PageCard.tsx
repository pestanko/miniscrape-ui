import { Box, Button, Collapse } from "@mui/material";
import { PropsWithChildren, useState } from "react";

interface PageCardProps {
  pageName: string;
  homepage: string;
}

export default function PageCard({ pageName, children }: PropsWithChildren<PageCardProps>) {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box>
        <Button className="page-card-title" color="primary" onClick={() => setOpen((state) => !open)}>
          Page: {pageName}
        </Button>
      </Box>
      <Collapse className="page-card-colapsible" in={open}>
        <Box>
            {children}
        </Box>
      </Collapse>
    </Box>
  );
}
