import './App.css';
import Home from './components/Home';
import Footer from "./components/Footer"
import {ChakraProvider} from "@chakra-ui/react"
function App() {
  return (
    <ChakraProvider>
         <div className="App">
      <Home />
      <Footer />
    </div>
    </ChakraProvider>
   
  );
}

export default App;
