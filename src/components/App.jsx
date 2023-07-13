import React from "react";


import Header from "./Header";
import Footer from "./Footer";
import Main from "./MainP";
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
