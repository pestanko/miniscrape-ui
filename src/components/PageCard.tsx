import {
  Box,
  Button,
  Collapse,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";

interface PageCardProps {
  pageName: string;
  homepage: string;
  tags: string[];
}

export default function PageCard({
  pageName,
  children,
  homepage,
  tags,
}: PropsWithChildren<PageCardProps>) {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box>
        <Button
          className="page-card-title"
          color="primary"
          onClick={() => setOpen((state) => !open)}
        >
          {pageName}
        </Button>
      </Box>
      <Collapse
        className="page-card-colapsible"
        sx={{
          ml: "15px",
        }}
        in={open}
      >
        <Stack>
          <Link href={homepage}>
            <Typography>Homepage</Typography>
          </Link>
          <Stack direction="row" spacing={2}>
            <Typography>Tags:</Typography>
            {tags.map((tag) => (
              <Link href={`/pages?t=${tag}`} className="tag" key={tag}>
                <Typography>{tag}</Typography>
              </Link>
            ))}
          </Stack>
          <Typography variant="h6">Content: </Typography>
          <Box>{children}</Box>
        </Stack>
      </Collapse>
    </Box>
  );
}
