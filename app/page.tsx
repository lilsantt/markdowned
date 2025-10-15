import PostList from "./components/PostList/PostList";
import Categories from "./components/Categories/Categories";
import { Search } from "./components/Search/Search";
import RecentPostList from "./components/RecentPostList/RecentPostList";
import Section from "./components/Section/Section";

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
        <PostList postsOnPage={6} animatedOnLoad animatedOnLoadDelay={0.5} />
      </Section>
    </>
  );
}
