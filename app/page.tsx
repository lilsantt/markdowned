import PostList from "./components/PostList/PostList";
import Categories from "./components/Categories/Categories";
import { Search } from "./components/Search/Search";
import RecentPostList from "./components/RecentPostList/RecentPostList";
import Section from "./components/Section/Section";
import { POSTS_ON_STANDART_PAGE } from "./constants/counts";

export default function Home() {
  return (
    <>
      <Section contentClassName="row-gap">
        <Search />
        <Categories animatedOnLoad />
      </Section>
      <Section title="Недавние посты">
        <RecentPostList />
      </Section>
      <Section title="Все записи">
        <PostList
          postsOnPage={POSTS_ON_STANDART_PAGE}
          animatedOnLoad
          animatedOnLoadDelay={0.5}
        />
      </Section>
    </>
  );
}
