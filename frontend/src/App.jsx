import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AddCategory from "./components/AddCategory";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Categories from "./pages/Categories";
import CategoryQuestions from "./pages/admin/CategoryQuestions";
import UsersList from "./pages/admin/UsersList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path='/add-category' element={<AddCategory/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin/questions/:id' element={<CategoryQuestions/>}/>
        <Route path='/admin/users' element={<UsersList/>}/>
        <Route path='/category' element={<Categories/>}/>
      </Routes>
    </>
  );
}

export default App;
