import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 5px;
  img {
    max-width: 100%;
  }
`;

const ProductImage = React.memo(({ src, name }) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAC4CAQAAAC4eZ3bAAAA9klEQVR42u3QMREAAAgEID+ZCe1sB0cPIpDp4ijy5MmTJw958uTJQ548efLkIU+ePHnIkydPHvLkyZMnD3ny5MlDnjx58pAnT548eciTJ08e8uTJkycPefLkyUOePHnykCdPnjx5yJMnTx7y5MmThzx58uTJQ548efKQJ0+ePHnIkydPHvLkyZOHPHny5MlDnjx58pAnT5485MmTJ08e8uTJk4c8efLkyUOePHnykCdPnjzkyZMnTx7y5MmThzx58uQhT548efKQJ0+ePOTJkydPHvLkyZOHPHny5CFPnjx58pAnT5485MmTJw958uTJk4c8efL+Wugck1lTgeYlAAAAAElFTkSuQmCC";
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <ImageWrapper>
      <img
        src={currentSrc}
        style={{
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
        }}
        alt={name}
      />
    </ImageWrapper>
  );
});

export default ProductImage;
