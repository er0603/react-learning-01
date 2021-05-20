import { ItemProps } from "../interfaces/itemProps.dto";
import { ListDataDTO } from "../interfaces/listData.dto";
const Item: React.FC<ItemProps> = ({
  id,
  note,
  date,
  time,
  deleteData,
  submittingStatus,
}) => {
  const deleteItem = () => {
    // Set submittingStatus flag to "true".
    submittingStatus.current = true;
    deleteData(function (prev: ListDataDTO[]) {
      return prev.filter((item: ListDataDTO) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
