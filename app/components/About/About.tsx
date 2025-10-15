import React from "react";
import Author from "../Author/Author";
import Socials from "../Socials/Socials";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.author}>
          <Author
            name="Антон Лебдев"
            post="Frontend-разработчик"
            img="/avatar.png"
          />
        </div>
        <p>
          Пока учусь фронтенду, но уже успел поработать на фрилансе с реальными
          проектами. Делаю адаптивную вёрстку, SPA на NextJS.
        </p>
        <p>
          Пишу о том, как решаю конкретные задачи: почему вёрстка иногда
          ломается в мобильной версии, как правильно организовать компоненты,
          какие ошибки допускал в начале работы. Хочу показать, что фронтенд —
          это не страшно, а учиться можно прямо в процессе работы над проектами.
          Главное — не бояться пробовать и разбираться в проблемах.
        </p>
        <Socials
          telegram="https://telegram.me/ont0sha"
          email="mailTo:ont0sha@proton.me"
        />
      </div>
    </div>
  );
};

export default About;
