import React from "react";
import About from "../components/About/About";
import PostList from "../components/PostList/PostList";
import Section from "../components/Section/Section";
import { POSTS_ON_CATEGORY_PAGE } from "../constants/counts";

const page = () => {
  return (
    <div>
      <Section>
        <About />
      </Section>
      <Section title="Недавние записи">
        <PostList postsOnPage={POSTS_ON_CATEGORY_PAGE} />
      </Section>
    </div>
  );
};

export default page;
