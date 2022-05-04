   import React, { useContext, useState, useEffect, createContext } from "react";
import "../App.css";
import { Bar } from "../App";
const Sidebar = () => {
  const { sidebar, setSidebar, alldata, setalldata, editedata, setEditedata } =
    useContext(Bar);

  const [Data, setData] = useState({
    product: "",
    textarea: "",
    price: "",
    discount: "",
    opction: "",
    image: "",
    key: new Date().getTime().toString(),
  });

  useEffect(() => {
    if (editedata != null) {
      setData(editedata);
    }
  }, [editedata]);

  const handleinput = (event) => {
    const { name, value } = event.target;
    setData({ ...Data, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (editedata) {
      const updateData = alldata.map((val) => {
        if (val.key === editedata.key) {
          val = Data;
        }
        return val;
      });
      setalldata(updateData);
      localStorage.setItem("product", JSON.stringify(updateData) || []);
    } else {
      const datas = [...alldata, Data];
      setalldata(datas);
     
      localStorage.setItem("product", JSON.stringify(datas) || []);
    }
    setData("");
  };

  const uploadimg = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setData({ ...Data, image: reader.result });
    };
    reader.readAsDataURL(file);


  };
  // const toDataURL = (url) =>
  //   fetch(url)
  //     .then((response) => response.blob())
  //     .then(
  //       (blob) =>
  //         new Promise((resolve, reject) => {
  //           const reader = new FileReader();
  //           reader.onloadend = () => resolve(reader.result);
  //           reader.onerror = reject;
  //           reader.readAsDataURL(blob);
  //         })
  //     );

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <form onSubmit={submitForm}>
          <ul className="form-style-1">
            <div className="flex justify-between ... border-0 w-30px bg-gray-100 h-10 ">
              <div className=" justify-self-center ...">Form</div>
              <div className=" justify-self-center ..." onClick={() => setSidebar(!sidebar)}>&#x274C;</div>
            </div>

            <i className="far fa-times-circle"></i>
            <li>
              <input
                type="text"
                required
                name="product"
                className="field-divided"
                placeholder=" Product Name"
                value={Data.product}
               
                // defaultValue={editedata.product}
                onChange={handleinput}
              />
            </li>
            <li>
              <textarea
                name="textarea"
                id="field5"
                className="field-long field-textarea"
                placeholder="Description"
                value={Data.textarea}
                // defaultValue={editedata.textarea}
                onChange={handleinput}
                required
              ></textarea>
            </li>
            <li>
              <input
                type="number"
                name="price"
                className="field-long"
                placeholder=" Price"
                value={Data.price}
                required
                // defaultValue={editedata.price}
                onChange={handleinput}
              />
            </li>
            <li>
              <input
                type="number"
                name="discount"
                className="field-long"
                placeholder="Discount"
                value={Data.discount }
                required
                // defaultValue={editedata.discount}
                onChange={handleinput}
              />
            </li>
            <li>
              <select
                name="opction"
                className="field-select"
                onChange={handleinput}
                // defaultValue={editedata.opction}
                value={Data.opction}
                required
              >
                <option value="	&#128077;"  >Avalable</option>
                <option value="&#128078;">Not Avalable</option>
              </select>
            </li>
            <li>
              <input
                type="file"
                name="image"
                onChange={(event) => uploadimg(event)}
                // defaultValue={editedata.image}
              
                required
          
              />
            </li>
            <li>
              <img src={Data.image}></img>
            </li>

            <li>
              <input type="submit" onClick={() => setSidebar(!sidebar)} />
            </li>
          </ul>
        </form>
      </nav>
    </>
  );
};

export default Sidebar;
