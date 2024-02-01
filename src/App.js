import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { data, ApiUrl } from './data';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(data[0].title);


  useEffect(() => {
    
    async function getdata() {
      try{
      setLoading(true)
      let response = await fetch(ApiUrl);
      let output = await response.json();
      console.log(output);
      setCourses(output.data);

      setLoading(false);
    }
    catch(error)
    {
      toast.error(error);
    }
  }

    getdata();
    console.log(courses);

  }, []);




  return (
    <div className="flex flex-col min-h-screen bg-slate-500 ">
      <div>
        <Navbar />
      </div>
      <div>
        <div className=' flex gap-3 w-fit mx-auto my-3'>
          <Filters filterdata={data} setCategory={setCategory} category={category} />
        </div>
        <div>
          {
            (loading) ? <Spinner /> : <Cards Courses={courses} category={category} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
