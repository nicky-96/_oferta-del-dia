import React from "react";

class App extends React.Component {
  render(){
    return (
    <form className="store-selector">
    <h2>Please, pick a store</h2>
    <input type="text" required placeholder="Store Name" />
    <button type= "submit">Enter a Store</button>
    </form>
    );
  }
}

export default App;