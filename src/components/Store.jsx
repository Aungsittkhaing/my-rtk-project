import React from "react";
import { Link } from "react-router-dom";
import { useGetStoresQuery } from "../services/storeApi";
import Card from "./Card";

const Store = () => {
  const { data: items } = useGetStoresQuery();
  console.log(items);
  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <h2 className="text-primary fw-bold text-uppercase">My Items</h2>
        <Link to="/create">
          <button className="btn btn-primary text-capitalize">
            create new items
          </button>
        </Link>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {items?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Store;
