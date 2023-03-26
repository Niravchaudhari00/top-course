// import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from './data';
import Spinner from "./components/Spinner";



function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  // Fetch API
  const fetchData = async () => {
    setLoading(true);
    try {
      let respons = await fetch(apiUrl);
      let courses = await respons.json();
      setData(courses.data)

    }
    catch (error) {
      toast.error("Internet connection not available");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="min-h-screen pb-5 bg-slate-500">
      <Navbar />

      <Filter filterData={filterData} category={category} setCategory= {setCategory} />

      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={data} category = {category} />)
        }
      </div>

      <ToastContainer />

    </div>
  );
}

export default App;
