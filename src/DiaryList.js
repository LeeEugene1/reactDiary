import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div>
      <div>{diaryList.length}개의 일기가 있습니다.</div>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

// undefined로 설정될것같은애들의 초기값 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
