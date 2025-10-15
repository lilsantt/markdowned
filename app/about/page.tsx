import React from "react";
import About from "../components/About/About";
import PostList from "../components/PostList/PostList";
import Section from "../components/Section/Section";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Section>
        <About />
      </Section>
      <Section title="Недавние записи">
        <PostList postsOnPage={3} />
      </Section>
    </div>
  );
};

export default page;
