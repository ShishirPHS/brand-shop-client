import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProduct = ({ singleProd }) => {
  const { _id, image, name, price, brand, type, rating } = singleProd;

  return (
    <div>
      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}
        className="flex flex-col lg:flex-row p-5 rounded-lg bg-base-100 border h-full"
      >
        <figure className="h-[300px] lg:mr-8 mb-6 lg:mb-0">
          <img
            className="h-full w-full lg:w-[250px] object-cover rounded-lg"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="h-full flex flex-col justify-center">
          <h4 className="font-bold text-2xl mb-4">{name}</h4>
          <h5 className="text-[#ff4b4b] text-xl font-semibold mb-2">
            ${price}
          </h5>
          <h6>
            Brand Name: <span className="font-semibold">{brand}</span>
          </h6>
          <h6>
            Product Type: <span className="font-semibold">{type}</span>
          </h6>
          <div>
            <p>
              Rating: <span className="font-semibold">{rating} out of 5</span>
            </p>
          </div>
          <div className="mt-5">
            <Link className="mr-3" to={`/prodUpdate/${_id}`}>
              <button className="btn">Update</button>
            </Link>
            <Link className="mr-3" to={`/productDetails/${_id}`}>
              <button className="btn">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  singleProd: PropTypes.object.isRequired,
};

export default SingleProduct;
