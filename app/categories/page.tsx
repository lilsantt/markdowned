import Link from "next/link";
import { getAllCategories } from "../utils/getAllCategories";
import Categories from "../components/Categories/Categories";

export default function CategoriesPage() {
  return (
    <>
      <Categories />
    </>
  );
}
