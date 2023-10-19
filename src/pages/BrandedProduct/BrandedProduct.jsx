import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  console.log(adImgForSelectedBrand);

  return (
    <div className="container mx-auto">
      <h2>brand based product will show here</h2>
      <div>{selectedBrandedProducts.length}</div>
    </div>
  );
};

export default BrandedProduct;
