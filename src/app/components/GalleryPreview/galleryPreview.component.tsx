import { Photo } from "../../../types/photo";
import NavigationPreview from "../NavigationPreview/navigationPreview.component";
import PreviewPhoto from "../PreviewPhoto/previewPhoto.component";
import { Style } from "./galleryPreview.styles";

import gsap from "gsap";
import { useRef, useState } from "react";
import useModal from "../../shared/Modal/useModal";
import Modal from "../../shared/Modal/modal.component";
import ImageViewer from "../../containers/ImageViewer/imageViewer.component";

interface GalleryPreviewProps {
  title: string,
  images: Photo[],
  subtitle: string,
  previewSize: number
}

function GalleryPreview({ title, subtitle, images = [], previewSize }: GalleryPreviewProps) {
  const imagesRef = useRef(null);
  const [currentView, setCurrentView] = useState(1);
  const [currentImage, setCurrentImage] = useState("");
  const { toggle, modal } = useModal();
  console.log("IMAGES>>", images)

  let animationLength = (previewSize * 4) + 100;

  function forwardAnimation() {
    if (currentView && currentView <= 4) {
      animationLength = animationLength * currentView;
      setCurrentView(prevCurrentView => prevCurrentView + 1);
    } else if (currentView >= 4) {
      animationLength = 0;
      setCurrentView(1);
    }

    gsap.to(imagesRef.current, { x: `-${animationLength}px` });
  };

  function showImageViewer(imageId: string) {
    setCurrentImage(imageId);
    toggle();
  }



  return (
    <>
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
          {images
            .slice(0, 20)
            .map(photo =>
              <PreviewPhoto
                previewSize={previewSize ?? 300}
                key={photo.id}
                imageDetails={photo}
                handleClick={() => showImageViewer(photo.id)}
              />
            )
          }
        </article>
      </Style.Container>

      <Modal modal={modal} toggle={toggle} hideClose>
        <ImageViewer
          collection={images}
          currentImage={currentImage}
        />
      </Modal>
    </>
  )
}

export default GalleryPreview