import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddStoreMutation } from "../services/storeApi";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const [addStore] = useAddStoreMutation();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newStore = { id: Date.now(), title, price, description, image };
    addStore(newStore);
    navigate("/");
    console.log(newStore);
  };
  return (
    <>
      <form className="form-control my-5" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="title"
              value={title}
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
              value={price}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="8"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Image
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="form-control"
              placeholder="Image"
            />
          </div>
          <button className="btn btn-outline-primary">Create</button>
          <Link to="/">
            <button className="btn btn-warning ms-2">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Create;
