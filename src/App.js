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
  const onDelete = (targetedId) => {
    const newData = data.filter((it) => it.id !== targetedId);
    setDate(newData);
    console.log(`${targetedId}가 삭제되었습니다.`);
  };
  const onEdit = (targetedId, newContent) => {
    const updateData = data.map((it) =>
      it.id === targetedId ? { ...it, content: newContent } : it
    );
    setDate(updateData);
    console.log(`${targetedId}번째 내용: ${newContent}`);
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
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </>
  );
}

export default App;
