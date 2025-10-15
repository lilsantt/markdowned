import Categories from "@/app/components/Categories/Categories";
import PostList from "@/app/components/PostList/PostList";
import { Search } from "@/app/components/Search/Search";
import Section from "@/app/components/Section/Section";
import { POSTS_ON_STANDART_PAGE } from "@/app/constants/counts";
import { SITE_NAME } from "@/app/constants/names";
import { getCurrentPage } from "@/app/utils/getCurrentPage";
import { redirect } from "next/navigation";

interface SearchParams {
  searchParams: Promise<{ s?: string; cat?: string }>;
  params: Promise<{ page: string }>;
}

export async function generateMetadata({ searchParams, params }: SearchParams) {
  const { page } = await params;
  const { s } = await searchParams;
  return {
    title: `${SITE_NAME} - Поиск по ${s} - Страница ${page}`,
  };
}

export default async function SearchPage({
  searchParams,
  params,
}: SearchParams) {
  const { page } = await params;
  const { s, cat } = await searchParams;
  const searchQuery = s;
  const catQuery = cat;
  const currentPage = getCurrentPage(page);

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
          page={currentPage}
          postsOnPage={POSTS_ON_STANDART_PAGE}
        />
      </Section>
    </main>
  );
}
