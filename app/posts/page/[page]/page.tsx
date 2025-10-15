import PostList from "@/app/components/PostList/PostList";
import Section from "@/app/components/Section/Section";
import { SITE_NAME } from "@/app/constants/names";
import getPostMetadata from "@/app/utils/getPostMetadata";
import { redirect } from "next/navigation";
import React from "react";

interface PostsPageParams {
  params: Promise<{
    page: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPostMetadata();
  const postsOnPage = 6;
  const totalPages = Math.ceil(posts.length / postsOnPage);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export async function generateMetadata({ params }: PostsPageParams) {
  const { page } = await params;
  return {
    title: `${SITE_NAME} - Записи - Страница ${page}`,
  };
}

const PostsPage = async ({ params }: PostsPageParams) => {
  const { page } = await params;
  const currentPageNumber = page && !isNaN(+page) ? +page : null;

  if (currentPageNumber === null) redirect("/posts/page/1");

  return (
    <Section title={`Все записи - Страница ${page}`}>
      <PostList
        postsOnPage={6}
        page={currentPageNumber}
        isPaginationEnable
        animatedOnLoad
      />
    </Section>
  );
};

export default PostsPage;
