import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
  const productsOfCart = useLoaderData();
  const [cartP, setCartP] = useState(productsOfCart);

  const handleDeleteFromCart = (id) => {
    console.log("btn clicked");

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brandshop-server-six.vercel.app/deleteFromCart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Deleted from your cart.", "success");
            }
            const remaining = cartP.filter(
              (singleCartItem) => singleCartItem._id !== id
            );
            setCartP(remaining);
          });
      }
    });
  };

  return (
    <div>
      <Header></Header>
      <h2 className="text-center font-bold text-4xl mt-32">My Shopping Cart</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-32 px-5 lg:px-0">
        {cartP?.map((singleCartProduct) => (
          <div
            key={singleCartProduct._id}
            style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}
            className="flex flex-col lg:flex-row p-5 rounded-lg bg-base-100 h-full border"
          >single
            <figure className="h-[300px] lg:mr-8">
              <img
                className="h-full w-full lg:w-[250px] object-cover rounded-lg"
                src={singleCartProduct.image}
                alt="Movie"
              />
            </figure>
            <div className="h-full py-5 flex flex-col justify-between items-start">
              <div>
                <h4 className="font-bold text-2xl mb-4">
                  {singleCartProduct.name}
                </h4>
                <h5 className="text-[#ff4b4b] text-xl font-semibold mb-2">
                  ${singleCartProduct.price}
                </h5>
                <h6>
                  Brand Name:{" "}
                  <span className="font-semibold">
                    {singleCartProduct.brand}
                  </span>
                </h6>
                <h6>
                  Product Type:{" "}
                  <span className="font-semibold">
                    {singleCartProduct.type}
                  </span>
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
              <button
                className="mt-5 btn"
                onClick={() => handleDeleteFromCart(singleCartProduct._id)}
              >
                Delete from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
