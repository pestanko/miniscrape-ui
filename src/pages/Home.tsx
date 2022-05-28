import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryInfo from "../components/CategoryInfo";
import PageTitle from "../components/PageTitle";
import { Category, PagesService } from "../services/PagesService";

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foodCategory, setFoodCategory] = useState<Category | undefined>(
    undefined
  );

  useEffect(() => {
    const pagesService = PagesService.getInstance();
    const categoriesPromise = pagesService.getCategoriesList();
    categoriesPromise.then((cats) => {
      setCategories(cats);
      const foodCat = cats.find((cat) => cat.name === "food");
      setFoodCategory(foodCat);
    });
  }, []);
  
  return (
    <Stack>
      <PageTitle>Home Page</PageTitle>
      <Stack direction={"row"}>
        <CategoryInfo category={foodCategory}></CategoryInfo>
      </Stack>
    </Stack>
  );
}
