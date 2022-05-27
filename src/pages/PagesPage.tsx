import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PageCard from "../components/PageCard";
import PageTitle from "../components/PageTitle";
import { PageContent, PagesService } from "../services/PagesService";

export default function PagesPage() {
  const [pagesContent, setPagesContent] = useState<PageContent[]>([]);

  useEffect(() => {
    const service = PagesService.getInstance();
    service.getPagesContent().then((content) => {
      console.log("Received content: ", content);
      setPagesContent(content);
    });
  }, []); // Take a look: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a

  return (
    <Box>
      <PageTitle>Pages</PageTitle>
      <Box className="pages-contents-list">
        {pagesContent.map((pc) => (
          <PageCard key={pc.page.codename} pageName={pc.page.name} homepage={pc.page.homepage}>
            <pre>{pc.content}</pre>
          </PageCard>
        ))}
      </Box>
    </Box>
  );
}
