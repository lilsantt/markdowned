import React from "react";
import styles from "./Date.module.css";
import { Timer } from "lucide-react";
type Props = {
  date: string;
  minutes_to_read: string;
};

function getMinutes(timeToRead: string): string {
  const time = +timeToRead;
  if (!time || time === 1) return `${timeToRead ?? 0} минута`;
  else if (time >= 2 && time <= 4) return `${timeToRead} минуты`;
  else if (time >= 5 && time <= 10) return `${timeToRead} минут`;
  else if (time > 10) return `>10 минут`;
  return "";
}

const Date = ({ date, minutes_to_read }: Props) => {
  return (
    <div className={styles.cont}>
      <span className={styles.date}>{date}</span>
      <span className={styles.time}>
        {getMinutes(minutes_to_read)} <Timer className={styles.icon} />
      </span>
    </div>
  );
};

export default Date;
