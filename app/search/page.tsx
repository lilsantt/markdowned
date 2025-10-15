import { redirect } from "next/navigation";
import PostList from "../components/PostList/PostList";
import { Search } from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import { SITE_NAME } from "../constants/names";
import { POSTS_ON_STANDART_PAGE } from "../constants/counts";

interface SearchParams {
  searchParams: Promise<{ s?: string; cat?: string }>;
}

export async function generateMetadata({ searchParams }: SearchParams) {
  const { s } = await searchParams;
  return {
    title: `${SITE_NAME} - Поиск по ${s}`,
  };
}

export default async function SearchPage({ searchParams }: SearchParams) {
  const { s, cat } = await searchParams;
  const searchQuery = s;
  const catQuery = cat;

  if (!searchQuery) redirect("/");

  return (
    <main>
      <Search searchQuery={searchQuery} category={catQuery} />
      <Categories activeCat={catQuery} />
      <PostList
        searchQuery={searchQuery}
        category={catQuery}
        postsOnPage={POSTS_ON_STANDART_PAGE}
      />
    </main>
  );
}
