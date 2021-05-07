import "./HomePage.css";
import "../Layout";
import Layout from "../Layout";

function HomePage() {
  return (
    <Layout>
      <div className="Home">
        <header className="HomeHeader">
          <h1 className="Title">Data Structures and Algorithms</h1>
          <p>
            <code>A data structure </code>
            is a named location that can be used to store and organize data.
          </p>
          <p>
            <code>An algorithm</code> is a collection of steps to solve a
            particular problem.
          </p>
        </header>
        <h3>Group Members (Group 12 EVE)</h3>
        <table className="GroupTable">
          <tr>
            <td>Wotsuna Derick</td> <td>19/U/18059/EVE</td> <td>1900718059</td>
          </tr>
          <tr>
            <td>Mubangizi Allan</td> <td>16/U/7136/PS</td> <td>216005099</td>
          </tr>
          <tr>
            <td>Etyang John Bright</td> <td>19/U/16422/EVE</td>
          </tr>
          <tr>
            <td>Berocan Samuel</td> <td>19/U/16399/EVE</td> <td>1900716399</td>
          </tr>
        </table>
      </div>
    </Layout>
  );
}

export default HomePage;
