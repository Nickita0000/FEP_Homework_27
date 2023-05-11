import Header from "./Header";
import Content from "./Content";
import Navigation from "./Navigation";


function App() {
  return (
    <div className="homework_27" style={{padding: 50 + 'px'}}>
        <Header/>
        <div id="main" style={{ display: "flex"}}>
            <Navigation/>
            <Content/>
        </div>
    </div>
  );
}

export default App;
