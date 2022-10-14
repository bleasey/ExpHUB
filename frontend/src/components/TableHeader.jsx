const TableHeader = ({text}) => {
  return (
    <th
      scope="col"
      class=" font-semibold text-gray-900 px-6 py-4 text-left"
    >
      {text}
    </th>
  );
}
export default TableHeader