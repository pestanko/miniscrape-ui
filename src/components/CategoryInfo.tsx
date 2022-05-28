import { Box, Stack, Typography } from "@mui/material";
import { Category } from "../services/PagesService";
import TagLink from "./TagLink";

interface CategoryInfoProps {
  category: Category | undefined;
}

export default function CategoryInfo({ category }: CategoryInfoProps) {
  if (!category) {
    return <Typography>No category has been loaded</Typography>;
  }

  return (
    <Box>
      <Typography>Category: {category.name}</Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography>Tags:</Typography>
        {category.tags.map((t) => (
          <TagLink name={t} />
        ))}
      </Stack>
    </Box>
  );
}
