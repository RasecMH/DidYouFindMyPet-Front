import axios from "axios";

export default async function uploadImage(image:FileList | null) {
  if(!image) {
    return null
  }
  let body = new FormData();
      body.set('key', '168ca21c894fe7abfdeaf61910b69ed5');
      body.append('image', image[0]);
      const imageUrl = await axios.post('https://api.imgbb.com/1/upload', body);
      return imageUrl.data.data.display_url;
}