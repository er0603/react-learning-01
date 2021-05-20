export interface ListDataDTO {
    note: string;
    date: string;
    time: string;
    id: string;
}
export interface ListProps {
    listData: ListDataDTO[];
    deleteData: Function;
    submittingStatus: React.MutableRefObject<boolean>;
}