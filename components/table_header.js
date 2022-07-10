const TableHeader = ({ data }) => {
  return (
    <thead className="">
      <tr className="">
        {data?.map((data) => {
          return <th className="" key={data}>{data}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
