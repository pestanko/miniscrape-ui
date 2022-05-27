import axios from "axios";

export interface PageInfo {
  codename: string;
  name: string;
  homepage: string;
  url: string;
  tags: string[];
  category: string;
  resolver: string;
}

export interface CategoryInfo {
  name: string;
  pages: PageInfo[];
}

export interface PageContent {
  page: PageInfo;
  content: string;
  status: string;
}

export class PagesService {
  private api: string;

  constructor(api: string) {
    this.api = api;
  }

  public static getInstance(): PagesService {
    return new PagesService(process.env.REACT_APP_API_URL as string);
  }

  public async getPagesInCategories(): Promise<CategoryInfo[]> {
    const response = await this.get(this.getUri("pages"));

    return (await response.data) as CategoryInfo[];
  }

  public async getPagesContent(
    category: string = "food"
  ): Promise<PageContent[]> {
    const url = this.getUri("content") + `?c=${category}`;
    const response = await this.get(url);

    return (await response.data) as PageContent[];
  }

  public async getCategoriesList(): Promise<string[]> {
    const response = await this.get(this.getUri("categories"));
    return response.data;
  }

  public async getPagesInCategory(category: string): Promise<CategoryInfo[]> {
    const url = this.getUri("pages") + `?c=${category}`;
    const response = await this.get(url);

    return (await response.data) as CategoryInfo[];
  }

  private async get(url: string) {
    const response = await axios.get(url);
    console.log(`response[${response.status}] ${url}: `, response);
    return response;
  }

  private getUri(endpoint: string = ""): string {
    return this.api + "/api/v1/" + endpoint;
  }
}
