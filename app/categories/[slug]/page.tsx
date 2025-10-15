import { redirect } from "next/navigation";

export default function RedirectCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/categories/${params.slug}/page/1`);
}
