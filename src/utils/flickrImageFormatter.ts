import { Photo } from "../types/photo";

export function flickrImageFormatter(imageDetails: Photo) {
  const { farm, server, id, secret } = imageDetails;
  return 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"/>';
}