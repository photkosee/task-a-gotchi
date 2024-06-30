const Main = () => {
  return (
    <div
      className="bg-[url('https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
      w-full h-[calc(50vw)] bg-no-repeat bg-cover bg-center flex items-center justify-center relative px-10 min-h-[500px]"
    >
      <div className="w-full h-full bg-black/40 absolute" />
      <div className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold z-20 max-w-lg">
        Gamify your habits to beat your procrastination
      </div>
    </div>
  );
};

export default Main;
