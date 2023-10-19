import { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Popular Brands
      </h2>
      <div className="flex justify-evenly">
        {brands.map((brand) => (
          <div
            className="flex flex-col items-center border p-5 rounded-lg cursor-pointer"
            key={brand.id}
          >
            <div className="flex-grow mb-5">
              <img
                className="w-[150px]"
                src={brand.brand_image}
                alt={`logo of ${brand.brand_name}`}
              />
            </div>
            <h4 className="text-3xl ">{brand.brand_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;