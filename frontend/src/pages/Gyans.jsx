import { useEffect,useState } from "react"
import useAxios from "../hooks/useAxios"
import GyanItem from '../components/GyanItem'
import TableHeader from "../components/TableHeader";
import axios from "axios";
import { selectUser } from "../features/user";
import { useSelector } from "react-redux";

const Gyans = ({url}) => {
    const user = useSelector(selectUser)
  const [data, setData] = useState([]);
  const { response, error, loading } = useAxios({
    method: "GET",
    url: url || "http://localhost:5000/gyan",
  });

  // handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/gyan/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setData((prev) => {
        return prev.filter((item) => item._id != id);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (response != null) {
      setData(response);
      console.log(response);
    }
  }, [response]);
  return (
    <section className="m-4">
      <div className="container mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-2">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white border-b">
                        <tr>
                          <TableHeader />
                          <TableHeader text="Name" />
                          <TableHeader text="Branch" />
                          <TableHeader text="Batch" />
                          <TableHeader text="Category" />
                          <TableHeader text="Options" />
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <GyanItem
                            gyan={item}
                            handleDelete={() => handleDelete(item._id)}
                            key={item._id}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Gyans