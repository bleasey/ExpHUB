import { useEffect } from "react"
import useAxios from "../hooks/useAxios"

const Gyans = () => {
    const {response,error,loading} = useAxios({
        method:"GET",
        url:"http://localhost:5000/gyan"
    })
    useEffect(()=>{
        if(response!=null)
            console.log(response)
    },[response])
  return (
    <section className="m-4">
        <div className="container mx-auto">
            Hello
        </div>
    </section>
  )
}
export default Gyans