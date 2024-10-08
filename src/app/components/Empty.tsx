const EmptyState = () => {
  return (
    <div
      className="
        px-4 
        py-10 
        sm:px-6 
        lg:px-8 
        lg:py-6 
        h-full 
        flex 
        justify-center 
        items-center 
       bg-gradient-to-br from-blue-500 to-red-400
      "
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold  text-gray-200">
          Select a chat 
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
