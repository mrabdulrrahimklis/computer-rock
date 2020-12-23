import './App.scss';
import { Calculator } from "./Screens/Calculator/Calculator";
import { Layout } from "./components";

function App() {
  return (
    <div className="App">
      <Layout height={'100vh'} width={'100vw'} background={'#434343'}>
        <Calculator />
      </Layout>
    </div>
  );
}

export default App;
