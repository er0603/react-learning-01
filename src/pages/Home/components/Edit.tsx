import { useState } from "react";
import { v4 } from "uuid";
import { EditProps } from "../interfaces/editProps.dto";

const Edit: React.FC<EditProps> = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  const noteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const [date, setDate] = useState("");
  const dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const [time, setTime] = useState("");
  const timeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const addItem = () => {
    // Set submittingStatus flag to "true".
    submittingStatus.current = true;
    add((prevData: React.MouseEventHandler<HTMLButtonElement>[]) => {
      return [{ id: v4(), note, date, time }, ...prevData];
    });
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
