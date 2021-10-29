import { useState, useEffect } from "react";
const lesson = [
  {
    id: 1,
    name: " Lesson 1",
  },
  {
    id: 2,
    name: " Lesson 2",
  },
  {
    id: 3,
    name: " Lesson 3",
  },
];

function Content() {
  const [active, setActive] = useState(1);
  const handleComment = (e) => {
    console.log(e.detail);
  };
  useEffect(() => {
    window.addEventListener(`lesson-${active}`, handleComment);
    // clean up
    return () => {
      window.removeEventListener(`lesson-${active}`, handleComment);
    };
  }, [active]);

  return (
    <div>
      <ul>
        {lesson.map((lessons) => (
          <li
            style={lessons.id === active ? { color: "red" } : {}}
            onClick={() => setActive(lessons.id)}
            key={lessons.id}
          >
            {lessons.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
