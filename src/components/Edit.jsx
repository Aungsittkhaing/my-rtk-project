import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleStoreQuery,
  useUpdateStoreMutation,
} from "../services/storeApi";

const Edit = () => {
  const { id } = useParams();
  const { data: store } = useGetSingleStoreQuery(id);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [updateStore] = useUpdateStoreMutation();
  useEffect(() => {
    setTitle(store?.title);
    setPrice(store?.price);
    setDescription(store?.description);
    setImage(store?.image);
    setCategory(store?.category);
  }, [store]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData = { id, title, price, description, image, category };
    updateStore(newData);
    navigate("/");
  };
  return (
    <form className="form-control my-5" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="title"
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="8"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            placeholder="category"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
            placeholder="Image"
          />
        </div>
        <button className="btn btn-outline-primary">Update</button>
        <Link to="/">
          <button className="btn btn-warning ms-2">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default Edit;
