import products from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md"
            />

            <h2 className="text-xl font-bold mt-3">
              {product.name}
            </h2>

            <p className="text-lg text-gray-600">
              ${product.price}
            </p>

            <Link
              to={`/products/${product.id}`}
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

// import { Link } from "react-router-dom";
// import products from "./products";

// function Products() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <div>
//         {products.map((product) => (
//           <div key={product.id}>
//             <img
//               src={product.image}
//               alt={product.name}
//               width="200"
//             />
//             <h2>{product.name}</h2>
//             <p>Rs. {product.price}</p>
//             <Link to={`/products/${product.id}`}>
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;