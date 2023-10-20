import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../components/Header/Header";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, image, name, brand, type, price, rating } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const newProduct = { image, name, brand, type, price, rating };

    // send request to server for update product
    fetch(
      `https://brandshop-server-hfxxp71yu-shishir-ahmeds-projects.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            icon: "success",
            text: "Product Updated successfully",
          });
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto mt-24">
        <h2 className="text-center text-4xl font-bold mb-20">Update Product</h2>
        <form onSubmit={handleUpdateProduct} className="w-3/4 mx-auto mb-32">
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="w-full  input input-bordered"
              defaultValue={image}
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full  input input-bordered"
              defaultValue={name}
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Brand Name</span>
            </label>
            {/* <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            className="w-full  input input-bordered"
            required
          /> */}
            <select
              className="w-full border-2 rounded-lg py-3 px-2"
              name="brand"
              id=""
              defaultValue={brand}
              required
            >
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Gucci">Gucci</option>
              <option value="Zara">Zara</option>
              <option value="H&M">H&M</option>
              <option value="Levi's">Levis</option>
            </select>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Type</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="Product Type"
              className="w-full  input input-bordered"
              defaultValue={type}
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full  input input-bordered"
              defaultValue={price}
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            {/* <input
            type="text"
            name="rating"
            placeholder="Rating out of 5"
            className="w-full  input input-bordered"
            required
          /> */}
            <select
              className="w-full border-2 rounded-lg py-3 px-2"
              name="rating"
              id=""
              defaultValue={rating}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="mt-6">
            <input className="btn" type="submit" value="Update Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
