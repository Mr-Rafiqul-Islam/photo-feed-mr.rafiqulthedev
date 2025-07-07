import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionaries = await getDictionary(lang);

  const baseUrl = process.env.BASE_API_URL;

  const res = await fetch(`${baseUrl}/photos`);
  const photos = await res.json();
  return (
    <>
      <div className="text-3xl mb-4">
        Welcome to PhotoFeed
      </div>
        <PhotoList photos={photos} />
      
    </>
  );
}
