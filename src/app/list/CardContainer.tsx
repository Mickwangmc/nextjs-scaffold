"use client";

import { useState, useMemo } from "react";
import Card from "./Card";

const CardContainer = ({ courses }) => {
  const [keyword, setKeyword] = useState("");

  const filterCourses = useMemo(() => {
    if (keyword) {
      return courses.filter((course) => course.courseName?.includes(keyword));
    } else {
      return courses;
    }
  }, [keyword]);

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <input value={keyword} onChange={handleInput} />
      {filterCourses?.map((course) => <Card {...course} />)}
    </div>
  );
};

export default CardContainer;
