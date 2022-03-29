import { useState, useRef } from "react";

const DiaryEditor = (onCreate) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    //   console.log(state)
    if (state.author.length === 0) {
      authorInput.current.focus();
    }
    if (state.content.length === 0) {
      contentInput.current.focus();
    }
    onCreate(state.author, state.content, state.emotion);
    //초기화
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          onChange={handleChangeState}
          value={state.author}
          name="author"
          placeholder="작성자"
          type="text"
          ref={authorInput}
        />
      </div>
      <div>
        <textarea
          onChange={handleChangeState}
          value={state.content}
          name="content"
          placeholder="일기"
          type="text"
          ref={contentInput}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
