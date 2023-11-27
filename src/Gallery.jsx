import { Grid, GridItem, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
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
      margin='20px'
      h='200px'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}>
      {loading
        ? Array(5)
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
                <Image
                  src={image}
                  fallback={<Skeleton height='100%' width='100%' />}
                />
              </ErrorBoundary>
            </GridItem>
          ))}
    </Grid>
  );
}

export default Gallery;
