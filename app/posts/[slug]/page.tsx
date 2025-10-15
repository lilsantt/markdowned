import { Post } from "@/app/components/Post/Post";
import { SITE_NAME } from "@/app/constants/names";
import { getPostContent } from "@/app/utils/getPostContend";
import getPostMetadata from "@/app/utils/getPostMetadata";
import { redirect } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => {
    return { slug: post.slug };
  });
};

export const generateMetadata = async ({ params }: Params) => {
  const post = getPostContent(params.slug);
  if (!post)
    return {
      title: "Перенеправление...",
    };
  return {
    title: `${SITE_NAME} — ${post.data.title}`,
    description: post.data.excerpt,
  };
};

interface Params {
  params: {
    slug: string;
  };
}
export default function PostPage({ params }: Params) {
  const post = getPostContent(params.slug);
  if (!post) redirect("/posts");
  return (
    <main>
      <Post post={post} />
    </main>
  );
}
