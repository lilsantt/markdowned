import { redirect } from "next/navigation";

export default async function RedirectCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/categories/${slug}/page/1`);
}
