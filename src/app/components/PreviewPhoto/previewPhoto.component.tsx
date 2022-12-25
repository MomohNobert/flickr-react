import { Photo } from "../../../types/photo";
import { flickrImageFormatter } from "../../../utils/flickrImageFormatter";
import { Style } from "./previewPhoto.styles";

import Image from 'next/image'

export interface PreviewPhotoProps {
  imageDetails: Photo,
  previewSize: number,
  handleClick: () => void;
}

function PreviewPhoto({ imageDetails, previewSize, handleClick }: PreviewPhotoProps) {
  return (
    <Style.Container size={previewSize} onClick={handleClick}>
      <figure>
        <Image
          src={flickrImageFormatter(imageDetails)}
          alt={imageDetails.title ?? "There is no available title"}
          width={previewSize}
          height={previewSize}
        />
        <figcaption>{imageDetails.title}</figcaption>
      </figure>
      <article>
        <p><span>title: </span>{imageDetails.title?.length! <= 15 ? imageDetails.title : `${imageDetails.title?.slice(0, 15)}...`}</p>
        <p><span>owned by: </span>{imageDetails.owner}</p>
      </article>
    </Style.Container>
  )
}

export default PreviewPhoto;