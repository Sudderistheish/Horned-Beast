import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./MainP";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <Main />
      </div>
    );
  }
}
export default App;
