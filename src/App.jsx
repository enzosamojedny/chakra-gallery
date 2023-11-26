import Gallery from "./Gallery";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [images, setImages] = useState([]);
  const [findName, setFindName] = useState([]);
  useEffect(() => {
    async function imagesFunction() {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random?count=5&client_id=93dnPHHdnQvZmZTRVtg9xTlo3necfAvfZiZJ8Tv286w"
      );
      const mappedResults = response.data.map((image) => image.urls.regular);
      setImages(mappedResults);
    }
    imagesFunction();
  }, []);

  const searchImages = async (term) => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${term}&client_id=93dnPHHdnQvZmZTRVtg9xTlo3necfAvfZiZJ8Tv286w`
    );
    const findName = response.data.results.filter(
      (image) =>
        (image.description || image.alt_description) &&
        image.description?.includes(term)
    );
    setFindName(findName);
  };

  return (
    <>
      <ChakraProvider>
        <Navbar findName={findName} searchImages={searchImages} />
        <Gallery />
        <Routes>
          <Route path='/' element={<Gallery images={images} />} />
          <Route path='/new-window' element={<div>New Window</div>} />
          <Route path='/open-closed-tab' element={<div>Open Closed Tab</div>} />
          <Route path='/open-file' element={<div>Open File</div>} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
