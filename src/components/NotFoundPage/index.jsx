import "./NotFoundPage.css";
import "../Layout";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Layout>
      <div className="NotFoundPage">
        <header className="NotFoundHeader">
          <h1>404</h1>
          <code>The page you are looking for is not yet available.</code>
          <br />
          <code>
            Please click <Link to="/">here</Link> to go back to home page
          </code>
        </header>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
