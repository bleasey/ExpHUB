import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../features/user"
import { useNavigate } from "react-router-dom"

const UserDashboard = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user.token)
            navigate('/login')
    },[user])
  return (
    <section>
        <div className="container mx-auto">
            <img src={user.avatar} alt={user.name} />
        </div>
    </section>
  )
}
export default UserDashboard