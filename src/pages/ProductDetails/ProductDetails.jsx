import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";

const ProductDetails = () => {
  const product = useLoaderData();
  const { image, name, brand, type, price, rating, description } = product;

  const handleAddToCart = (prod) => {
    // send product to the server side to add to cart
    fetch(
      "https://brandshop-server-5gtbugx2m-shishir-ahmeds-projects.vercel.app/productCart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(prod),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Product added to cart successfully",
          });
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto my-40">
        <h3 className="text-center font-bold text-3xl mb-12">
          Details of {name}
        </h3>
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
              <button onClick={() => handleAddToCart(product)} className="btn">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
