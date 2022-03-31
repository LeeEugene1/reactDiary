import { useState } from "react";

const DiaryItem = ({
  onEdit,
  onDelete,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번째 게시글 삭제?`)) {
      onDelete(id);
    }
  };
  const handleUpdate = () => {
    console.log("update");
    onEdit(id, localContent);
    toggleIsEdit();
  };
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const resetContent = () => {
    toggleIsEdit();
    setLocalContent(content);
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author}| 감정점수 : {emotion}|
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit === true ? (
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={localContent}
            onChange={(e) => {
              setLocalContent(e.target.value);
            }}
          ></textarea>
        ) : (
          <div>{content}</div>
        )}
      </div>
      {isEdit ? (
        <div>
          <button onClick={handleUpdate}>수정</button>
          <button onClick={resetContent}>취소</button>
        </div>
      ) : (
        <div>
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </div>
      )}
    </div>
  );
};

export default DiaryItem;
