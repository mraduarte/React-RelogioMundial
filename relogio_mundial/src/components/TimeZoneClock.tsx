import { useEffect, useState } from "react";

type props = {
  timeZone: string;
};

const TimeZoneClock = ({ timeZone }: props) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {

      const date = new Date();
      const timeString = date.toLocaleTimeString("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(timeString);
    }, 1000);
  }, [timeZone]);

  return (
    <div>
      <h2>{timeZone}</h2>
      <h3>{time}</h3>
    </div>
  );
};

export default TimeZoneClock;
