import React, { useState } from "react";
import { generateDate, months } from "../utils/calender";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Home = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="h-96 w-96">
        <div className="flex justify-between">
          <h1>
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <GrFormPrevious
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1 className="cursor-pointer">Today</h1>
            <GrFormNext
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1 className="h-14 border-t grid place-content-center text-sm text-gray-500 ">
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="h-14 border-t grid place-content-center text-sm"
                >
                  {currentMonth ? (
                    <h1
                      className={
                        today
                          ? "bg-red-500 h-10 w-10 grid place-content-center rounded-full"
                          : "h-10 w-10 grid place-content-center rounded-full hover:bg-green-500 transition-all cursor-pointer"
                      }
                    >
                      {date.date()}
                    </h1>
                  ) : (
                    <h1 className="text-gray-400">{date.date()}</h1>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="h-96 w-96 px-5">
        <h1>Schedule for Tue Oct 06 2023</h1>
        <p>no meeting for today</p>
      </div>
    </div>
  );
};

export default Home;
