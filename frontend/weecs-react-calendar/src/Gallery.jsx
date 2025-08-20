import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/gallery/")
      .then(r => r.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <ImageGallery
      items={items}
      showThumbnails={true} 
      showBullets={true}
      showNav={true}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
}