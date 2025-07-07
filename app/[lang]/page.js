import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionaries = await getDictionary(lang);

  const baseUrl = process.env.BASE_API_URL;

  const res = await fetch(`${baseUrl}/photos`);
  const photos = await res.json();
  return (
    <>
      <div className="container">
        Welcome to PhotoFeed
        <h1>{dictionaries.followers}....</h1>
      </div>
      <div className="container my-4 lg:my-8">
        <PhotoList photos={photos} />
      </div>
    </>
  );
}
