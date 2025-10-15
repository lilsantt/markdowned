import { SearchIcon } from "lucide-react";
import styles from "./Search.module.css";
interface SearchProps {
  category?: string | null;
  searchQuery?: string;
}
export const Search = ({ category, searchQuery }: SearchProps) => {
  return (
    <div className={styles.box}>
      <form action="/search/page/1" method="GET" className={styles.form}>
        <input
          type="text"
          placeholder="Поиск..."
          name="s"
          defaultValue={searchQuery}
          className={styles.input}
        />
        <SearchIcon className={styles.icon} />
        {category && <input type="hidden" name="cat" value={category} />}
      </form>
    </div>
  );
};
