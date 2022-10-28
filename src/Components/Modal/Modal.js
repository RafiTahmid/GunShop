import React from "react";

const Modal = ({ data, setModalData }) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p className="py-2 font-semibold">Capacity: {data.capacity}</p>
          <p className="font-semibold">Bullet Size: {data.bullet}</p>
          <p className="font-semibold">Price: {data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
