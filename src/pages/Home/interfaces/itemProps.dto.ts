export interface ItemProps {
    id: string;
    note: string;
    date: string;
    time: string;
    deleteData: Function;
    submittingStatus: React.MutableRefObject<boolean>;
}