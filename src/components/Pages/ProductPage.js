import {
  useParams,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Review from "./Review";
import Demo from "./Demo";

const ProductPage = () => {
  const params = useParams();
  return (
    <>
      <NavBar />
      <Review />
      <Route path={`/ProductPage/${params.id}/demo/`}>
        <Demo />
      </Route>
      <Link to={`${`/ProductPage/${params.id}/demo/:dm`}`}>Go to Demo</Link>
      <Footer />
    </>
  );
};

export default ProductPage;
