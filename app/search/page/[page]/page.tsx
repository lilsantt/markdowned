import Categories from "@/app/components/Categories/Categories";
import PostList from "@/app/components/PostList/PostList";
import { Search } from "@/app/components/Search/Search";
import Section from "@/app/components/Section/Section";
import { SITE_NAME } from "@/app/constants/names";
import { getCurrentPage } from "@/app/utils/getCurrentPage";
import { redirect } from "next/navigation";

interface SearchParams {
  searchParams: { s?: string; cat?: string };
  params: { page: string };
}

export async function generateMetadata({ searchParams, params }: SearchParams) {
  return {
    title: `${SITE_NAME} - Поиск по ${searchParams.s} - Страница ${params.page}`,
  };
}
export default function SearchPage({ searchParams, params }: SearchParams) {
  const searchQuery = searchParams.s;
  const catQuery = searchParams.cat;
  const page = getCurrentPage(params.page);
  if (!searchQuery) redirect("/");

  return (
    <main>
      <Section contentClassName="row-gap">
        <Search searchQuery={searchQuery} category={catQuery} />
        <Categories activeCat={catQuery} />
      </Section>
      <Section title={`Поиск по ${searchQuery}`}>
        <PostList
          searchQuery={searchQuery}
          category={catQuery}
          page={page}
          postsOnPage={6}
        />
      </Section>
    </main>
  );
}
