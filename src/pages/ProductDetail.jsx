import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        width="250"
      />
      <h1>{product.name}</h1>
      <h2>Rs. {product.price}</h2>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <button>
        Add to Cart
      </button>
    </div>
  );
  
}

export default ProductDetail;