import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const product = { image, name, brand, type, price, description, rating };
    console.log(product);

    // send product to the server side
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Product added successfully",
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-center text-4xl font-bold mb-20">Add Product</h2>
      <form onSubmit={handleAddProduct} className="w-3/4 mx-auto mb-32">
        <div className="">
          <label className="label">
            <span className="label-text font-semibold">Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full  input input-bordered"
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
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text font-semibold">Short Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Short description of product"
            className="w-full  input input-bordered"
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
          <input className="btn" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
