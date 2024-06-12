import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 p-5 bg-transparent z-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold hover:cursor-pointer">
          Brainy Logo
        </div>

        <div className="flex justify-around w-2/4 text-white">
          <div className="hover:cursor-pointer hover:text-gray-300">
            Home
          </div>
          <div className="hover:cursor-pointer hover:text-gray-300">
            Leaderboard
          </div>
          <div className="hover:cursor-pointer hover:text-gray-300">
            Daily Quiz
          </div>
          <div className="hover:cursor-pointer hover:text-gray-300">
            Genre
          </div>
        </div>

        <div>
          <Button label={'Sign Out'} />
        </div>
      </div>
    </div>
  );
};
