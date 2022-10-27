import React, { useEffect, useState } from "react";

const AllGuns = () => {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div>
      <h1>Hello 2.28</h1>
    </div>
  );
};

export default AllGuns;
