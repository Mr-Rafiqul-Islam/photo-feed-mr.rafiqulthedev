import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionaries = await getDictionary(lang);
  return (
    <div className="container">
      Welcome to PhotoFeed
      <h1>{dictionaries.followers}....</h1>
    </div>
  );
}
