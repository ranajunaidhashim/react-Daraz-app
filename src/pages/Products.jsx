import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [Data, setData] = useState([]);
  const [filter, setFilter] = useState(Data);
  const [loading, setLoading] = useState(false);
  const componentMounted = true;

  useEffect(() => {
    let getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedlist = Data.filter((x) => x.category === cat);
    setFilter(updatedlist);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-end mb-5 pb-5">
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => setFilter(Data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
        </div>
        {filter.map((p) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={p.id}>
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt={p.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {p.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead">Rs: {p.price}</p>
                    <NavLink to={"/products"} className="btn btn-outline-primary">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container w-100vw my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 text-center">
                <hr />
                <i className="fa fa-cart-plus"></i>
                Latest Products
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
