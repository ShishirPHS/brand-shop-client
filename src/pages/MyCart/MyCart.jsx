import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";

const MyCart = () => {
  const productsOfCart = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2 gap-6 mt-36">
        {productsOfCart.map((singleCartProduct) => (
          <div
            key={singleCartProduct._id}
            className="card card-side bg-base-100 shadow-xl h-full"
          >
            <figure className="h-[300px] mr-8">
              <img
                className="h-full w-[250px] object-cover"
                src={singleCartProduct.image}
                alt="Movie"
              />
            </figure>
            <div className="h-full flex flex-col justify-center">
              <h4 className="font-bold text-2xl mb-4">
                {singleCartProduct.name}
              </h4>
              <h5 className="text-[#ff4b4b] text-xl font-semibold mb-2">
                ${singleCartProduct.price}
              </h5>
              <h6>
                Brand Name:{" "}
                <span className="font-semibold">{singleCartProduct.brand}</span>
              </h6>
              <h6>
                Product Type:{" "}
                <span className="font-semibold">{singleCartProduct.type}</span>
              </h6>
              <div>
                <p>
                  Rating:{" "}
                  <span className="font-semibold">
                    {singleCartProduct.rating} out of 5
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
