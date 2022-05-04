import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Bar } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pagination = () => {
  const {
    postsPerPage,
    page,
    alldata,
    currentpage,
    setCurrentpage,
    currentPosts,
  } = useContext(Bar);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [settings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,  
  });
console.log(`pageNumbers.length`, pageNumbers.length)
  useEffect(() => {
    const totalPage = Math.ceil(alldata.length / postsPerPage);
    const pagenumbers = [];
    let start = 1;
    if (currentpage) {
      if (currentpage <= totalPage) start = currentpage;
      else start = totalPage;
    }
    for (let i = start; i < start + 1; i++) {
      pagenumbers.push(i);
    }
    setPageNumbers(pagenumbers);
  }, [alldata.length, postsPerPage, currentpage]);

  const handleclick = (page) => {
    setCurrentpage(page);
  };

  return (
    <div className="post md:container md:mx-auto">
      <div className="flex flex-wrap justify-end">
        <div
          style={{ cursor: currentpage === 1 ? "not-allowed" : "pointer" }}
          className="text-center mx-1 w-8 border border-b-2 border-fuchsia-600 h-7 px-1"
          onClick={currentpage === 1 ? "" : () => handleclick(currentpage - 1)}
        >
          &laquo;
        </div>

        {pageNumbers.map((i) => (
          <div
            key={i}
            className={`text-center mx-1 w-8 border border-b-2 border-fuchsia-600 h-7 px-1 ${
              currentpage === i ? "bg-white" : ""
            }`}
            onClick={() => handleclick(i)}
          >
            {i}
          </div>
        ))}
        <div
            style={{ cursor: currentpage <= pageNumbers.length+1 ? "pointer":"not-allowed"   }}
          className="text-center mx-1 w-8 border border-b-2 border-fuchsia-600 h-7 px-1"
          onClick={currentpage <= pageNumbers.length +1 ? () => handleclick(currentpage + 1): ""}
        >
          &raquo;
        </div>
      </div>
    </div>
  );
};

export default Pagination;
