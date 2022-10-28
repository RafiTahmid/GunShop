import React, { useEffect, useState } from "react";
import SingleGun from "../SingleGun/SingleGun";

const AllGuns = () => {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold mt-5">Welcome Hunters..!!!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum
        aliquam ratione porro minima alias voluptatem inventore error reiciendis
        in?
      </p>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {guns.map((gun) => (
          <SingleGun gun={gun}></SingleGun>
        ))}
      </div>
    </>
  );
};

export default AllGuns;
