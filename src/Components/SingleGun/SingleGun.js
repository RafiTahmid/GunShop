import React from "react";

const SingleGun = ({ gun }) => {
  const { action, bullet, capacity, category, id, img, name, price } = gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl mt-5">
        <figure>
          <img className="w-11/12 h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
