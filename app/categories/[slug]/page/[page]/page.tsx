import Categories from "@/app/components/Categories/Categories";
import PostList from "@/app/components/PostList/PostList";
import { Search } from "@/app/components/Search/Search";
import Section from "@/app/components/Section/Section";
import { POSTS_ON_STANDART_PAGE } from "@/app/constants/counts";
import { SITE_NAME } from "@/app/constants/names";
import { getAllCategories } from "@/app/utils/getAllCategories";
import { getCurrentPage } from "@/app/utils/getCurrentPage";
import getPostMetadata from "@/app/utils/getPostMetadata";
import { redirect } from "next/navigation";

interface CategoryPageParams {
  params: Promise<{
    slug: string;
    page: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPostMetadata();
  const postsOnPage = 1;
  const categoryMap = new Map<string, number>();

  posts.forEach((post) => {
    const cat = post.category?.toLowerCase();
    if (!cat) return;
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  });

  const staticParams: { slug: string; page: string }[] = [];

  for (const [slug, count] of categoryMap.entries()) {
    const pagesCount = Math.ceil(count / postsOnPage);
    for (let i = 1; i <= pagesCount; i++) {
      staticParams.push({ slug, page: i.toString() });
    }
  }
  return staticParams;
}

export async function generateMetadata({ params }: CategoryPageParams) {
  const { slug, page } = await params;
  const categories = getAllCategories();
  const currentCategory = categories.find((cat) => cat.title === slug);
  return {
    title: `${SITE_NAME} - ${
      currentCategory?.title ? currentCategory.visualTitle : "Категории"
    } - Страница ${page}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageParams) {
  const { slug, page } = await params;
  const currentPage = getCurrentPage(page);
  const categories = getAllCategories().find((cat) => cat.title === slug);

  if (!slug) redirect("/categories");

  return (
    <>
      <Section contentClassName="row-gap">
        <Search category={slug} />
        <Categories activeCat={slug} />
      </Section>
      <Section
        title={`Категория ${
          categories?.title ? categories.visualTitle : null
        } - Страница ${page}`}
      >
        <PostList
          category={slug}
          postsOnPage={POSTS_ON_STANDART_PAGE}
          page={currentPage}
          isPaginationEnable
          animatedOnLoad
        />
      </Section>
    </>
  );
}
