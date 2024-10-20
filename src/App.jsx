import CoreComponent from "./components/CoreComponent";
import Examples from "./components/Examples";
import Header from "./components/Header";
function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreComponent/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
