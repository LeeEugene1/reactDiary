import { useRef, useState } from "react";
import "./App.css";
import DiaryList from "./DiaryList";
import DirayEditor from "./DirayEditor";

function App() {
  const [data, setDate] = useState([]);
  let countId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newPost = {
      id: countId.current,
      author,
      content,
      emotion,
      created_date,
    };
    countId.current += 1;
    setDate([newPost, ...data]);
  };
  //   const dummyList = [
  //     {
  //       id: 1,
  //       author: "lee",
  //       content: "hi",
  //       emotion: 5,
  //       created_date: new Date().getTime(),
  //     },
  //     {
  //       id: 2,
  //       author: "kim",
  //       content: "hi2",
  //       emotion: 3,
  //       created_date: new Date().getTime(),
  //     },

  //     {
  //       id: 3,
  //       author: "hong",
  //       content: "hi2",
  //       emotion: 2,
  //       created_date: new Date().getTime(),
  //     },
  //   ];
  return (
    <>
      <DirayEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </>
  );
}

export default App;
