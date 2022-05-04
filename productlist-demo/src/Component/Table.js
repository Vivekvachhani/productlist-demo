import React, { useContext } from "react";
import { Bar } from "../App";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
const Tablel = () => {
  const {
    sidebar,
    setSidebar,
    alldata,
    setalldata,
    editedata,
    setEditedata,
    currentPosts,
  } = useContext(Bar);

  const deleteitem = (key) => {
    const data = alldata.filter((val) => val.key !== key);
    setalldata(data);
    localStorage.setItem("product", JSON.stringify(data));
  };
  const updateitem = (key) => {
    console.log(`key`, key)
    const edata = alldata.find((val) => val.key === key);
    setEditedata(edata);

    setSidebar(!sidebar);
  };


  return (
    <>
      <Table
        striped
        bordered
        hover
        className="table-auto md:container md:mx-auto bg-white  mt-3 border-collapse"
      >
        <thead>
          <tr className=" border-b-2 border-fuchsia-600 ...">
            <th className="w-1/8 ... text-center ... p-2 ... ">Id</th>
            <th className="w-1/8 ... text-center ...">Product Name</th>
            <th className="w-1/8 ... text-center ...">Description</th>
            <th className="w-1/8 ... text-center ...">price</th>
            <th className="w-1/8 ... text-center ...">Product Imag</th>
            <th className="w-1/8 ... text-center ...">Discount</th>
            <th className="w-1/8 ... text-center ...">Available</th>
            <th className="w-1/8 ... text-center ...">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((data, index) => {
            return (
              <tr
                key={data.key}
                className=" sm:hover:bg-blue-500  border-b-2 border-fuchsia-600 ... "
              >
                <td className=" text-center ... p-2 ... ">{index + 1}</td>
                <td className=" text-center ...">{data.product}</td>
                <td className=" text-center ...">{data.textarea}</td>
                <td className=" text-center ...">{data.price}</td>
                <td className=" flex justify-around ... border-0 cursor-pointer ...">
                  <img
                    src={data.image}
                    alt={data.image}
                    className="bg-gray-100 rounded-full h-14 w-14 justify-center ..."
                  />
                </td>
                <td className=" text-center ...">{data.discount}</td>
                <td className=" text-center ...">{data.opction}</td>
                <td className=" flex justify-evenly ... border-0 cursor-pointer ...">
                  <RiDeleteBin7Fill onClick={() => deleteitem(data.key)} />
                  <FiEdit onClick={() => updateitem(data.key)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Tablel;
