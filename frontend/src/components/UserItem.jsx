import {AiFillDelete,AiFillEdit,AiFillEye} from 'react-icons/ai'

const UserStatus = ({status})=>{
    const classes = `
     capitalize px-2 py-1 w-1/2 rounded-lg flex items-center justify-center
      ${status == "none" ? "bg-red-300 text-red-600" : null}
      ${status == "interned" ? "bg-blue-300 text-blue-600" : null}
      ${status == "placed" ? "bg-green-300 text-green-600" : null}
     `;
    return (
        <p className={classes}>{status}</p>
    )
}

const UserItem = ({user,handleDelete}) => {
  return (
    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <img src={user.avatar} alt="" className="w-12 rounded-full" />
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.name}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.branch}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.yearOfPassing}
      </td>
      <td class="text-sm text-gray-900 font-md px-6 py-4 whitespace-nowrap">
        <UserStatus status={user.status}/>
      </td>
      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
        <div className="flex space-x-2 justify-start items-center">
          <abbr title="Delete">
            <AiFillDelete className="cursor-pointer hover:text-orange-500 transition duration-100 ease-in-out" onClick={handleDelete} />
          </abbr>
          <abbr title="Edit">
            <AiFillEdit className="cursor-pointer hover:text-orange-500 transition duration-100 ease-in-out" />
          </abbr>
          <abbr title="View">
            <AiFillEye className="cursor-pointer hover:text-orange-500 transition duration-100 ease-in-out" />
          </abbr>
        </div>
      </td>
    </tr>
  );
}
export default UserItem