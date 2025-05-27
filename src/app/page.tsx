"use client"
import ProfileSearch from "./components/ProfileSearch";

export default function Home() {
  return (
    <div className="p-4 flex flex-col min-h-screen md:p-8 lg:p-16">
      <main className="flex-grow">
        <div>
          <h1 className="text-2xl text-center md:text-4xl font-bold text-yellow-400">World of Warcraft Player Searcher</h1>
          <ProfileSearch />
        </div>
      </main>
      <footer>
        <p className="mt-4 font-semibold text-white">Powered By: Raider.io</p>
      </footer>
    </div>
  );
}
