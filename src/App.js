import { useEffect, useState } from "react";

const axios = require("axios").default;

export default function App() {
  const [getCharacterList, setCharacterList] = useState([]);
  useEffect(() => {
    const initcCall = async () => {
      const character_info = await (
        await axios.get("https://rickandmortyapi.com/api/character")
      )?.data?.results;
      setCharacterList(character_info);
    };
    initcCall();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {getCharacterList.map((character_one, index) => {
        return (<>
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{character_one?.name}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">{character_one?.status}</p>
            <p class="mb-3 font-normal text-gray-700">{character_one?.species}</p>
            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </>
        );
      })}

    </div>
  );
}
