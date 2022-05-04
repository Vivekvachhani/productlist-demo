import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Printer from "./Component/printer";
import Setting from "./Component/Setting";
import Add from "./Component/Add";
import Tablel from "./Component/Table";
import React, { createContext, useEffect, useState } from "react";
import Sidebar from "./Component/Sidebar";
import Pagination from "./Component/Pagination";
import Customselect from "./Component/Customselect"
const Bar = createContext();
const App = () => {
  const [currentPosts, setCurrentposts] = useState([]);

  const [currentpage, setCurrentpage] = useState(1);
  const [postsPerPage] = useState(2);
  const [editedata, setEditedata] = useState();
  const [sidebar, setSidebar] = useState(false);
  const [alldata, setalldata] = useState([]);
  useEffect(() => {
    const AllData = JSON.parse(localStorage.getItem("product") || "[]");
    setalldata(AllData);
  }, []);

  useEffect(() => {
    const indexOfLastPost = currentpage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = alldata.slice(indexOfFirstPost, indexOfLastPost);

    setCurrentposts(currentPost);
  }, [currentpage, alldata]);
  const page = (number) => {
    setCurrentpage(number);
  };
  return (
    <>
      <Bar.Provider
        value={{
          sidebar,
          setSidebar,
          alldata,
          setalldata,
          editedata,
          setEditedata,
          currentPosts,
          currentpage,
          setCurrentpage,
          postsPerPage,
          page,
        }}
      >
        <Header />
        <div className="h-screen p-6 ... bg-gray-300">
          <div className="md:container md:mx-auto bg-white p-3 ... flex ... relative  flex-wrap ">
            <div className="pl-2 ...">
              <p className="font-medium ...">{alldata.length}Products</p>
            </div>
            <div className=" flex ... absolute inset-y-0 right-0 p-0   items-center ... flex-wrap">
              <div className="p-2 border-solid border-2 border-white-150 rounded ...">
                {/* <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className="p-2 border-solid border-2 border-white-150 rounded ..."
                /> */}
                <Customselect />
              </div>

              <div className="border-solid border-2 border-gray-150 ... p-2 bg-gray-100 cursor-pointer ... rounded ...  ">
                <Printer />
              </div>
              <div className="border-solid border-2 border-gray-150 ... p-2 mx-8 ... bg-gray-100 cursor-pointer ... rounded ...">
                <Setting />
              </div>
              <div className="border-solid border-2 border-blue-500 ... p-2 bg-blue-600 cursor-pointer ... rounded ...">
                <Add />
              </div>
            </div>
          </div>
          <div>
            <Tablel />
          </div>
          <Pagination />
          <Sidebar />
        </div>
      </Bar.Provider>
    </>
  );
};

export default App;
export { Bar };
