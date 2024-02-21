const Header = ({ totalTodos, totalDoneTodos }) => {
  return (
    <div className="border-b-black/5 border-b-[1px] min-h-12 flex items-center justify-between px-2">
      <div className="flex gap-2">
        <div className="bg-orange-300 rounded-full size-4"></div>
        <div className="bg-orange-300 rounded-full size-4"></div>
        <div className="bg-orange-300 rounded-full size-4"></div>
      </div>
      {totalTodos ? (
        <div className="">
          {totalDoneTodos} / {totalTodos} todos done
        </div>
      ) : (
        "No todos added."
      )}
    </div>
  );
};

export default Header;
