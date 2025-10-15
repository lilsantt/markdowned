import { redirect } from "next/navigation";
import PostList from "../components/PostList/PostList";
import { Search } from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import { SITE_NAME } from "../constants/names";

interface SearchParams {
  searchParams: { s?: string; cat?: string };
}

export async function generateMetadata({ searchParams }: SearchParams) {
  return {
    title: `${SITE_NAME} - Поиск по ${searchParams.s}`,
  };
}
export default function SearchPage({ searchParams }: SearchParams) {
  const searchQuery = searchParams.s;
  const catQuery = searchParams.cat;

  if (!searchQuery) redirect("/");

  return (
    <main>
      <Search searchQuery={searchQuery} category={catQuery} />
      <Categories activeCat={catQuery} />
      <PostList searchQuery={searchQuery} category={catQuery} postsOnPage={6} />
    </main>
  );
}
