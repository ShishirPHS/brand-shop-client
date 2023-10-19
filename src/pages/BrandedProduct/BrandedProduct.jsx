import { useLoaderData, useParams } from "react-router-dom";

const BrandedProduct = () => {
  const brandedProducts = useLoaderData();
  const { brandName } = useParams();

  const selectedBrandedProducts = brandedProducts.filter(
    (selectedBrand) => selectedBrand.brand == brandName
  );

  return (
    <div>
      <h2>brand based product will show here</h2>
      <div>{selectedBrandedProducts.length}</div>
    </div>
  );
};

export default BrandedProduct;
