import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex justify-evenly px-5 lg:px-0">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/brandedProduct/${brand.brand_name}`}>
            <div className="flex flex-col items-center border p-5 rounded-lg h-full">
              <div className="flex-grow mb-5">
                <img
                  className="w-[150px]"
                  src={brand.brand_image}
                  alt={`logo of ${brand.brand_name}`}
                />
              </div>
              <h4 className="text-3xl ">{brand.brand_name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
