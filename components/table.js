import TableBody from "./table_body";
import TableHeader from "./table_header";

const Table = ({ headerData, children }) => {
  return (
    <table className="" cellSpacing="0" border="1" width="100%">
      <TableHeader data={headerData} />
      <TableBody>{children}</TableBody>
    </table>
  );
};

export default Table;
