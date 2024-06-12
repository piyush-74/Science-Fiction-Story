import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";

export const HeroSection = () => {
  const [stories, setStories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://child.onrender.com/api/sciencefiction');
      setStories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative bg-indigo-950">
        <div className="w-full h-96 relative">
            <img className="w-full h-full object-cover" src="https://wallup.net/wp-content/uploads/2018/09/26/659171-sci-fi-futuristic-city-cities-art-artwork.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <div className="text-white font-medium text-4xl mt-24 mb-10">
                  Science Fiction Stories
              </div>

              <div className="flex justify-around w-full mt-4">
                  <div className="flex items-center hover:cursor-pointer text-white bg-blue-500 px-14 py-2 h-12 rounded-full">
                      <div className="w-8 h-8">
                          <img className="w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                      </div>

                      <div className="pl-3">
                          <button>New</button>
                      </div>
                  </div>

                  <div className="flex items-center hover:cursor-pointer text-white bg-yellow-500 px-14 py-2 h-12 rounded-full">
                      <div className="w-9 h-8">
                          <img className="w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                      </div>

                      <div className="pl-3">
                          <button>In Progress</button>
                      </div>
                  </div>

                  <div className="flex items-center hover:cursor-pointer text-white bg-green-500 px-14 py-2 h-12 rounded-full">
                      <div className="w-8 h-8">
                          <img className="w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                      </div>

                      <div className="pl-3">
                          <button>Completed</button>
                      </div>
                  </div>

                  <div className="flex flex-row items-center hover:cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-14 py-2 h-12 rounded-full">
                      Clear All
                  </div>
              </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-4 p-5">
            {stories.map((story) => (
                <div className="gap-20 grid grid-cols-4">
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                    <Card key={Math.random} story={story}/>
                </div>
            ))}
        </div>
    </div>
  );
};
