import { Photo } from "../../../types/photo";
import NavigationPreview from "../NavigationPreview/navigationPreview.component";
import PreviewPhoto from "../PreviewPhoto/previewPhoto.component";
import { Style } from "./galleryPreview.styles";

import gsap from "gsap";
import { useCallback, useRef, useState } from "react";

interface GalleryPreviewProps {
  title: string,
  images: Photo[],
  subtitle: string,
  previewSize: number
}

function GalleryPreview({ title, subtitle, images = [], previewSize }: GalleryPreviewProps) {
  const imagesRef = useRef(null);
  const [currentView, setCurrentView] = useState(1);
  let animationLength = (previewSize * 3) + 100;

  function forwardAnimation() {
    if (currentView && currentView <= 2) {
      animationLength = animationLength * currentView;
      setCurrentView(prevCurrentView => prevCurrentView + 1);
    } else if (currentView >= 2) {
      animationLength = 0;
      setCurrentView(1);
    }

    gsap.to(imagesRef.current, { x: `-${animationLength}px` });
  };


  console.log("current view >>>>>>", currentView)
  console.log("animation length >>>>", animationLength)

  return (
    <Style.Container>
      <article className="gallery-preview-header">
        <hgroup>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </hgroup>
        <NavigationPreview
          handleForwardClick={forwardAnimation}
        />
      </article>
      <article
        className="gallery-preview-content"
        ref={imagesRef}
      >
        {images.slice(0, 10).map(photo => <PreviewPhoto previewSize={previewSize ?? 300} key={photo.id} imageDetails={photo} />)}
      </article>
    </Style.Container>
  )
}

export default GalleryPreview