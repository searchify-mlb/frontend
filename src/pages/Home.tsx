import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  function handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }

  return (
    <main className="w-full h-screen">
      <Navbar />
      <div className="container flex flex-col justify-center w-5/6 mx-auto mt-16 space-y-8">
        <SearchBar onSearch={handleSearch} />
        <p className="text-center">Find some interesting clip.</p>
      </div>
    </main>
  );
}
