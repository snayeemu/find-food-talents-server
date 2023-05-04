import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-light p-2 my-5">
      <div className="container ">
        <div className="row d-flex justify-content-between text-center align-items-center">
          <div className="col-md-6">
            <h2 className="mb-3 fw-bold text-secondary">
              {" "}
              Discover Top-Rated Chefs Near You
            </h2>
            <p className=" text-secondary">
              {" "}
              <small>
                Are you tired of eating the same boring meals day in and day
                out? Our chef finder website can help you discover talented
                chefs near you who can take your dining experience to the next
                level. From gourmet dishes to comfort food favorites, our chefs
                specialize in a wide range of cuisines and are ready to bring
                their culinary skills to your table. Start browsing now and
                discover the best chefs in your area!
              </small>
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid w-50"
              src={
                "https://images.unsplash.com/photo-1517741858398-433087302cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
