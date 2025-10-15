import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import styles from "./Pagination.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  postsCount: number;
  postsOnPage?: number;
  currentPageNumber: number;
};

function Pagintaion({
  postsCount,
  postsOnPage = 6,
  currentPageNumber,
}: PaginationProps) {
  const pagesCount = Math.ceil(postsCount / postsOnPage);
  if (currentPageNumber <= 0 || currentPageNumber > pagesCount)
    redirect("/posts/page/1");
  const pages: number[] = getPaginationArray(pagesCount, currentPageNumber, 4);
  return (
    <div className={styles.pagination}>
      {currentPageNumber > 1 && (
        <Link href={`./${currentPageNumber - 1}`} className={styles.arrow}>
          <ArrowLeft className={styles.icon} width={15} height={15} />
          <span>Назад</span>
        </Link>
      )}

      <ul className={styles.list}>
        {pages.map((num) => {
          return (
            <li
              key={num}
              className={
                num === currentPageNumber
                  ? `${styles.item} ${styles.itemActive}`
                  : `${styles.item}`
              }
            >
              <Link href={`./${num}`} className={styles.link}>
                {num}
              </Link>
            </li>
          );
        })}
      </ul>
      {currentPageNumber < pagesCount && (
        <Link href={`./${currentPageNumber + 1}`} className={styles.arrow}>
          <span>Вперёд</span>
          <ArrowRight className={styles.icon} width={15} height={15} />
        </Link>
      )}
    </div>
  );
}

export default Pagintaion;

function getPaginationArray(
  pagesCount: number,
  currentPageNumber: number,
  pagesToShow: number
): number[] {
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  let pagesToRender = pagesToShow;
  let index = currentPageNumber - (pagesToShow - 1);
  const finalPages = [];
  while (pagesToRender) {
    if (pages[index - 1]) {
      finalPages.push(pages[index - 1]);
      pagesToRender--;
    }
    index++;
    if (index > pagesCount + 1) return finalPages;
  }
  return finalPages;
}
