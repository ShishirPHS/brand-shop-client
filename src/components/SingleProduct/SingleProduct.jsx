import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProduct = ({ singleProd }) => {
  const { _id, image, name, price, brand, type, rating } = singleProd;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-full">
        <figure className="h-[300px] mr-8">
          <img
            className="h-full w-[250px] object-cover"
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
            <Link className="mr-3" to={`/prodDetails/${_id}`}>
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
