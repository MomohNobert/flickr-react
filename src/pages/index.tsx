import Head from 'next/head'
import GalleryPreview from '../app/components/GalleryPreview/galleryPreview.component';
import Hero from '../app/containers/Home/Hero/hero.component';
import { Gallery } from '../types/gallery';

interface Props {
  recent: Gallery;
  popular: Gallery;
}

export default function Home({ recent, popular }: Props) {
  return (
    <>
      <Head>
        <title>Nobert{"'"}s Image Viewer</title>
      </Head>

      <Hero />
      <GalleryPreview
        title="Recent Posts"
        subtitle="Our users uploads thousands of videos in real time, look at some of the latest images from our Worldwide collection."
        images={recent.photo}
        previewSize={300}
      />
      <GalleryPreview
        title="Popular Posts"
        subtitle="This may not be available due to the non-existence of a user id, but would've been a good way to expand the view."
        images={popular.photo}
        previewSize={250}
      />
    </>
  )
}

export async function getStaticProps() {

  const getRecentImages = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.FLICKR_DEV_KEY}&format=json&nojsoncallback=true`,
  );

  const getPopularImages = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.FLICKR_DEV_KEY}&format=json&nojsoncallback=true`,
  );

  let recentImages;
  let popularImages;

  try {
    const { photos } = await getRecentImages.json();
    recentImages = photos
  } catch (err) {
    console.log("ERR:", err);
    recentImages = [];
  }

  try {
    const { photos } = await getPopularImages.json();
    popularImages = photos
  } catch (err) {
    console.log("ERR:", err);
    popularImages = [];
  }

  return { props: { recent: recentImages, popular: popularImages } }
}