import { Photo } from "../../../types/photo";
import { flickrImageFormatter } from "../../../utils/flickrImageFormatter";
import { Style } from "./previewPhoto.styles";

import Image from 'next/image'

export interface PreviewPhotoProps {
  imageDetails: Photo,
  previewSize: number,
}

function PreviewPhoto({ imageDetails, previewSize }: PreviewPhotoProps) {
  return (
    <Style.Container size={previewSize}>
      <Image
        src={flickrImageFormatter(imageDetails)}
        alt={imageDetails.title ?? "There is no available title"}
        width={previewSize}
        height={previewSize}
      />
      <figcaption>{imageDetails.title}</figcaption>
    </Style.Container>
  )
}

export default PreviewPhoto;