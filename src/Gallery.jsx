import { Grid, GridItem, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { motion } from "framer-motion";
//eslint-disable-next-line
function Gallery({ images }) {
  const [renderedImages, setRenderedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setRenderedImages(images);
    }, 3000);
  }, [images]);
  function fallbackRender({ error, resetErrorBoundary }) {
    return (
      <div role='alert'>
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }
  return (
    <Grid
      margin='30px'
      h='200px'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={6}>
      {loading
        ? Array(10)
            .fill()
            .map((_, index) => (
              <Skeleton key={index} height='100%' width='100%'>
                <GridItem />
              </Skeleton>
            ))
        : renderedImages?.map((image, index) => (
            <GridItem key={index}>
              <ErrorBoundary
                fallbackRender={fallbackRender}
                onError={(error, info) => {
                  console.error("Logging to service: ", error, info);
                }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.9 }}>
                  <Image
                    src={image}
                    fallback={<Skeleton height='100%' width='100%' />}
                  />
                </motion.div>
              </ErrorBoundary>
            </GridItem>
          ))}
    </Grid>
  );
}

export default Gallery;
