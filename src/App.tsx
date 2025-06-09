import "./App.css";
import PlayerSearch from "./components/PlayerSearch";
import ProfileContentContainer from "./components/ProfileContentContainer";

function App() {
  return (
    <>
      <div className="p-4 flex flex-col min-h-screen md:p-8 lg:p-16">
        <main className="flex-grow">
          <h1 className="mb-8 text-2xl text-center md:text-4xl font-bold text-yellow-400">
            World of Warcraft Player Lookup
          </h1>
          <div>
            <PlayerSearch />
            <ProfileContentContainer />
          </div>
        </main>
        <footer>
          <p className="mt-4 font-semibold text-white">Powered By: Raider.io</p>
        </footer>
      </div>
    </>
  );
}

export default App;
