import React from "react";

interface NotificationProps {
  type: "warning" | "error" | "notification";
  textContent: string;
}

export const Notification = ({ type, textContent }: NotificationProps) => {
  return (
    <div>
      <span className={`${type}`}>{textContent}</span>
    </div>
  );
};
