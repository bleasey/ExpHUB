import { Formik, Field, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { selectUser } from "../../features/user";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import axios from "axios";

const EditUser = () => {
  const admin = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAxios({
    method: "GET",
    url: `http://localhost:5000/admin/user/${location.state.id}`,
    headers: {
      Authorization: `Bearer ${admin.token}`,
    },
  });

  const categories = useAxios({
    method: "GET",
    url: `http://localhost:5000/admin/category`,
    headers: {
      Authorization: `Bearer ${admin.token}`,
    },
  });

  return (
    <section className="mt-4">
      <div className="container mx-auto">
        {user.loading || categories.loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1 className="underline text-3xl text-center uppercase font-bold text-orange-500">
              Edit User
            </h1>
            <div>{user.response.name}</div>
            <Formik
              initialValues={{
                status: user.response.status,
                categories: user.response.categories.map(category=> category._id),
              }}
              onSubmit={async (values) =>{
                 console.log(values)
                    await axios.patch(`http://localhost:5000/admin/user/${user.response._id}`,{...values},{headers:{
                        Authorization:`Bearer ${admin.token}`
                    }})
                    navigate('/admin/users')
                }}
            >
              {({ values }) => (
                <Form>
                  <div role="group">
                    <label>
                      <Field type="radio" name="status" value="none" />
                      None
                    </label>
                    <label>
                      <Field type="radio" name="status" value="interned" />
                      Interned
                    </label>
                    <label>
                      <Field type="radio" name="status" value="placed" />
                      Placed
                    </label>
                  </div>
                  <div role="group">
                    {categories.response.map((category) => (
                      <label key={category._id}>
                        <Field
                          type="checkbox"
                          name="categories"
                          value={category._id}
                        />
                        {category.name.toUpperCase()}
                      </label>
                    ))}
                  </div>
                  <Button type="submit">Edit</Button>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </section>
  );
};
export default EditUser;
