import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function SinglePage() {
  const { pageId } = useParams();
  return (
    <Box>
      <PageTitle>Single page: {pageId}</PageTitle>
    </Box>
  );
}
