import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      Hello world
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
};

export default ProductDetail;
