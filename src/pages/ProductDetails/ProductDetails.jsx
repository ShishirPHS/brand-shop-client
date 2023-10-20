import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, image, name, brand, type, price, rating, description } = product;

  return (
    <div className="container mx-auto my-40">
      <div className="card card-side bg-base-100 shadow-xl h-full pr-8">
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
          <p className="mt-5">{description}</p>
          <div className="mt-5">
            <Link className="mr-3" to={`/prodCart/${_id}`}>
              <button className="btn">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
