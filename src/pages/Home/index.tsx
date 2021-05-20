import { useState, useEffect, useRef } from "react";
import { DEFAULT_CONTENT_TYPE, GET_DATA_API } from "../../shared/constants";
import { ListDataDTO } from "./interfaces/listData.dto";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

// Fetch note list.
const getNoteList = async (
  setData: React.Dispatch<React.SetStateAction<ListDataDTO[]>>
) => {
  const res = await fetch(GET_DATA_API);
  const { data } = await res.json();
  setData(data);
};

// Add note item.
const addNoteItem = async (data: ListDataDTO[]) => {
  await fetch(GET_DATA_API, {
    method: "PUT",
    headers: DEFAULT_CONTENT_TYPE,
    body: JSON.stringify({ data }),
  });
};

const Home = () => {
  const [data, setData] = useState([] as ListDataDTO[]);
  const submittingStatus: React.MutableRefObject<boolean> = useRef(false);

  // Get data from json-server
  useEffect(() => {
    getNoteList(setData);
  }, []);

  // POST data to json-server
  useEffect(() => {
    // If not submit data submittingStatus is false.
    if (!submittingStatus.current) {
      return;
    }
    addNoteItem(data).then(() => {
      submittingStatus.current = false;
    });
  }, [data]);

  return (
    <div className="app">
      {/* Two components */}
      {/* Edit component */}
      <Edit add={setData} submittingStatus={submittingStatus} />
      {/* List component */}
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
