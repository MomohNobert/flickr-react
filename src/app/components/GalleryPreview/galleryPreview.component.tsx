import { Gallery } from "../../../types/gallery";
import { Photo } from "../../../types/photo";
import NavigationPreview from "../NavigationPreview/navigationPreview.component";
import PreviewPhoto from "../PreviewPhoto/previewPhoto.component";
import { Style } from "./galleryPreview.styles";

interface GalleryPreviewProps {
  title: string,
  images: Photo[],
  subtitle: string,
  previewSize: number
}

function GalleryPreview({ title, subtitle, images = [], previewSize }: GalleryPreviewProps) {
  return (
    <Style.Container>
      <article className="gallery-preview-header">
        <hgroup>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </hgroup>
        <NavigationPreview />
      </article>
      <article className="gallery-preview-content">
        {images.slice(0, 10).map(photo => <PreviewPhoto previewSize={previewSize ?? 300} key={photo.id} imageDetails={photo} />)}
      </article>
    </Style.Container>
  )
}

export default GalleryPreview