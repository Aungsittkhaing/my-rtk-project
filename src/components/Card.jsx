import React from "react";
import { Link } from "react-router-dom";
import { useDeleteStoreMutation } from "../services/storeApi";
import { BsFillTrashFill } from "react-icons/bs";

const Card = ({ item: { id, title, price, description, category, image } }) => {
  const [deleteStore] = useDeleteStoreMutation();
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={image} className="card-img-top" style={{ height: "15rem" }} />
      <div className="card-body">
        <h5 className="card-title">{title.substring(0, 20)}</h5>
        <p className="card-text">{description.substring(0, 30)}...</p>
        <span className="badge text-bg-primary">{category}</span>
        <p className="text-info fw-bolder">${price}</p>
        <Link to={`/stores/${id}`}>
          <button className="btn btn-outline-primary">See More</button>
        </Link>
        <button className="btn btn-danger ms-2" onClick={() => deleteStore(id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default Card;
