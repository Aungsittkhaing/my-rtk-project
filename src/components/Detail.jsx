import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleStoreQuery } from "../services/storeApi";
import { BsPencilSquare } from "react-icons/bs";

const Details = () => {
  const { id } = useParams();
  const { data: store } = useGetSingleStoreQuery(id);
  console.log(store);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={store?.image} width="300px" alt="" />
      </div>
      <h5 className="text-primary fw-semibold text-uppercase">
        {store?.title}
      </h5>
      <span className="badge text-bg-primary">{store?.category}</span>
      <p className="text-black-50">{store?.description}</p>
      <h4 className="text-secondary fw-bold">${store?.price}</h4>
      <Link to="/">
        <button className="btn btn-outline-danger">Back</button>
      </Link>
      <Link to={`/edit/${store?.id}`}>
        <button className="btn btn-warning ms-2">
          <BsPencilSquare />
        </button>
      </Link>
    </div>
  );
};

export default Details;
