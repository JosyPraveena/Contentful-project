
import React, { useEffect ,useState} from "react";
import "./App.css";
import Slider from "./components/Slider"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import ProductCard from "./components/productCard";
import Featured from "./components/featured";
import Product from "./components/Product"

function App() {

  const [comicBookData,setComicBookData] = useState([])
  const [bookdetails,setBookdetails] = useState({})
  
  
  useEffect( () => { 

    const contentful = require("contentful");
    const client = contentful.createClient({
    
      space: "judmcnqfm2ry",
    
      accessToken: "Cpz2_8v_83-s3bHAYAP1a8mUV1fkFUuT7MEK3UsW-Wg"
    });
    
    client
      .getEntries( { content_type: "comicBooks" } )
      .then(entry => setComicBookData(entry.items))
      .catch(err => console.log(err));

  }, [] )
  useEffect(() => {
    if (comicBookData.length) {
      setBookdetails(comicBookData[0].fields);
    }
  }, [comicBookData]);
console.log(comicBookData)
  return (
    <div className="App">
       {/* <Navbar/> */}
      {/* <Slider/>
      <Categories/>
      <Featured/>
      <ProductCard/> */}
      <Product bookdetails={bookdetails}/>
      <Footer/> 
      
    </div>
  );

}

export default App;
