import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

const BrandedProduct = () => {
  const brandedProducts = useLoaderData();
  const { brandName } = useParams();
  const [adImages, setAdImages] = useState([]);

  const selectedBrandedProducts = brandedProducts.filter(
    (selectedBrand) => selectedBrand.brand == brandName
  );

  useEffect(() => {
    fetch(`http://localhost:5000/adImg`)
      .then((res) => res.json())
      .then((data) => setAdImages(data));
  }, []);

  const adImgForSelectedBrand = adImages.filter(
    (singleAdImg) => singleAdImg.brand_name == brandName
  );

  return (
    <div>
      <Header></Header>
      <div>
        <div className="container mx-auto">
          <div>
            <div className="carousel h-[500px] w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src={adImgForSelectedBrand[0]?.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src={adImgForSelectedBrand[1]?.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src={adImgForSelectedBrand[2]?.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center text-3xl font-semibold mt-24 mb-20">
            Products of {brandName}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-40">
            {selectedBrandedProducts.map((singleProd) => (
              <SingleProduct
                key={singleProd._id}
                singleProd={singleProd}
              ></SingleProduct>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandedProduct;
