import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  tenNNT: string;
  MST: number;
  ghiChu: string;
}
type DataProps = {
  data: DataType[];
  columns: ColumnsType<DataType>;
  title: string;
};

const TableComponent: React.FC<DataProps> = ({ data, columns, title }) => {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <Table bordered columns={columns} dataSource={data} />
    </div>
  );
};

export default TableComponent;
