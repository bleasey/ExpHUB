import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../features/user"
import { useNavigate } from "react-router-dom"
import UserRecord from "../components/UserRecord"

const UserDashboard = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user.token)
            navigate('/login')
    },[user])
  return (
    <section className="mt-4">
        <div className="container mx-auto">
            <div className='flex flex-col space-y-6 md:flex-row md:space-x-20 md:justify-center px-4'>
                <div>
                <img src={user.avatar} alt={user.name} className="w-60"/>
                </div>
                <div>
                    <p className="text-2xl text-center uppercase underline mb-4">User Details</p>
                    <div className="flex flex-col space-y-4">
                        <UserRecord name="Name" value={user.name}/>
                        <UserRecord name="Branch" value={user.branch}/>
                        <UserRecord name="Batch" value={user.yearOfPassing}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default UserDashboard