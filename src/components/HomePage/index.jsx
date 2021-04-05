import "./HomePage.css";
import "../Layout";
import Layout from "../Layout";

function HomePage() {
  return (
    <Layout>
      <div className="Home">
        <header className="HomeHeader">
          <h1 className="Title">Data Structures</h1>
          <p>
            <code>A data structure </code>
            is a named location that can be used to store and organize data.
          </p>
          <p>
            <code>An algorithm</code> is a collection of steps to solve a
            particular problem.
          </p>
        </header>
      </div>
    </Layout>
  );
}

export default HomePage;
