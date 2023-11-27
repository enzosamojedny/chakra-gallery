import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random?count=5&client_id=93dnPHHdnQvZmZTRVtg9xTlo3necfAvfZiZJ8Tv286w"
      );
      const imageUrls = response.data.map((image) => image.urls.regular);
      setImages(imageUrls);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (term) {
      searchImages(term);
    }
  }, [term]);

  const searchImages = async (searchTerm) => {
    try {
      setTerm(searchTerm);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&count=5&client_id=93dnPHHdnQvZmZTRVtg9xTlo3necfAvfZiZJ8Tv286w`
      );
      const imageMatches = response.data.results.filter(
        (image) =>
          (image.description && image.description.includes(searchTerm)) ||
          (image.alt_description &&
            image.alt_description.includes(searchTerm)) ||
          (image.slug && image.slug.includes(searchTerm))
      );
      setImages(imageMatches.map((img) => img.urls.regular));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <ChakraProvider>
      <Navbar setTerm={setTerm} searchImages={searchImages} />
      <Routes>
        <Route path='/' element={<Gallery images={images} />} />
        <Route path='/new-window' element={<div>New Window</div>} />
        <Route path='/open-closed-tab' element={<div>Open Closed Tab</div>} />
        <Route path='/open-file' element={<div>Open File</div>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
