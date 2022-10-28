import React from "react";
import Modal from "../Modal/Modal";

const SingleGun = ({ gun, countIncrease }) => {
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
          <div className="card-actions flex-col">
            <div className="flex-row">
              <div className="badge badge-outline">{action}</div>
              <div className="badge badge-outline mx-3">{category}</div>
            </div>
            <div className="mt-3">
              <button onClick={() => countIncrease()} className="btn btn-sm">
                Add To Cart
              </button>
              <label
                htmlFor="my-modal-3"
                className="btn modal-button btn-sm btn-success ml-3"
              >
                open modal
              </label>
            </div>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default SingleGun;
