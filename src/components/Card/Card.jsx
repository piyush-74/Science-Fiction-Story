import { Button } from "../Button/Button";

export const Card = ({ story }) => {
    // console.log(story.Storyadvenure.content[0]._id);
  
    // Check if story.Image exists and is an array with at least one element
    const imageUrl = story.Image.length > 0 
      ? `https://ik.imagekit.io/dev24/${story.Storyadvenure.content[0]._id}` 
      : 'https://via.placeholder.com/300'; // Placeholder image if no image is available
  
    return (
      <div className="bg-gradient-to-r from-purple-900 to-blue-500 rounded-2xl shadow-lg">
        <div key={story._id} className="p-4 w-72 shadow-md">
          <div className="w-full">
            <img 
                src={imageUrl} 
                alt={story.Title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
            />
          </div>
          <h2 className="text-xl font-bold mb-2">{story.Title}</h2>
          {story.Storyadvenure && (
            <h3 className="text-lg text-gray-700">{story.Storyadvenure.Storytitle}</h3>
          )}

          <div className="flex justify-center bg-white text-black rounded-2xl p-1 mt-2 w-full hover:cursor-pointer">
            <button>Completed</button>
          </div>
        </div>
      </div>
    );
  };
  