import { Dispatch, SetStateAction, useState } from "react";
import { Photo } from "../../../types/photo";
import { Style } from "./imageViewer.styles";
import _ from "underscore";
import { flickrImageFormatter } from "../../../utils/flickrImageFormatter";
import ArrowButton from "../../atoms/ArrowButton/arrowButton.atom";
import Image from "next/image";

interface ImageViewerProps {
  collection: Photo[],
  currentImage: string,
}

function ImageViewer({ collection, currentImage }: ImageViewerProps) {
  const indexOfImageToShow = _.findIndex(collection, { id: currentImage });
  const [imageIndex, setImageIndex] = useState(indexOfImageToShow);

  function goBackward() {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex => imageIndex - 1);
    }
  }

  function goForward() {
    if (imageIndex !== collection.length) {
      setImageIndex(imageIndex => imageIndex + 1);
    }
  }

  console.log(imageIndex)

  const photoToShow = flickrImageFormatter(collection[imageIndex]);
  const photoTitle = collection[imageIndex].title;

  return (
    <Style.Container>
      <article className="image-viewer-display">
        <ArrowButton handleClick={goBackward}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.293 12.707C1.20036 12.6139 1.12696 12.5035 1.077 12.382C1.02618 12.2611 1 12.1312 1 12C1 11.8688 1.02618 11.7389 1.077 11.618C1.12696 11.4965 1.20036 11.3861 1.293 11.293L9.293 3.293C9.38525 3.19749 9.4956 3.12131 9.6176 3.0689C9.7396 3.01649 9.87082 2.98891 10.0036 2.98775C10.1364 2.9866 10.2681 3.0119 10.391 3.06218C10.5139 3.11246 10.6255 3.18672 10.7194 3.28061C10.8133 3.3745 10.8875 3.48615 10.9378 3.60905C10.9881 3.73195 11.0134 3.86363 11.0123 3.99641C11.0111 4.12919 10.9835 4.26041 10.9311 4.38241C10.8787 4.50441 10.8025 4.61476 10.707 4.707L4.41401 11H22C22.2652 11 22.5196 11.1054 22.7071 11.2929C22.8946 11.4804 23 11.7348 23 12C23 12.2652 22.8946 12.5196 22.7071 12.7071C22.5196 12.8946 22.2652 13 22 13H4.41401L10.707 19.293C10.8892 19.4816 10.99 19.7342 10.9877 19.9964C10.9854 20.2586 10.8802 20.5094 10.6948 20.6948C10.5094 20.8802 10.2586 20.9854 9.99641 20.9877C9.73421 20.99 9.48161 20.8892 9.293 20.707L1.293 12.707Z" fill="black" />
          </svg>

        </ArrowButton>
        <figure>
          <img src={photoToShow} alt={photoTitle ?? "This is the accessible title"} />
          <figcaption>{photoTitle}</figcaption>
        </figure>
        <ArrowButton handleClick={goForward}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.707 20.707C14.5184 20.8892 14.2658 20.9899 14.0036 20.9877C13.7414 20.9854 13.4906 20.8802 13.3052 20.6948C13.1198 20.5094 13.0146 20.2586 13.0123 19.9964C13.01 19.7342 13.1108 19.4816 13.293 19.293L19.586 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H19.586L13.293 4.70699C13.1108 4.51839 13.01 4.26579 13.0123 4.00359C13.0146 3.7414 13.1198 3.49058 13.3052 3.30518C13.4906 3.11977 13.7414 3.0146 14.0036 3.01232C14.2658 3.01004 14.5184 3.11084 14.707 3.293L22.707 11.293C22.7996 11.3861 22.873 11.4965 22.923 11.618C22.9738 11.7389 23 11.8688 23 12C23 12.1312 22.9738 12.2611 22.923 12.382C22.873 12.5035 22.7996 12.6139 22.707 12.707L14.707 20.707Z" fill="black" />
          </svg>

        </ArrowButton>
      </article>
      <article className="image-viewer-preview">

      </article>
    </Style.Container>
  )
}

export default ImageViewer;