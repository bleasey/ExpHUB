const UserRecord = ({name,value}) => {
  return (
    <p>
      <span className="text-orange-500 text-lg font-bold mr-2">{name}:</span>
      <span>{value}</span>
    </p>
  );
}
export default UserRecord