const Break = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center p-12">
      <img
        src="https://picsum.photos/1920/1080"
        alt="bg-image"
        className="w-full h-full object-cover contrast-125 brightness-50 absolute inset-0"
      />
      <div className="relative max-w-7xl mx-auto flex flex-col gap-8 text-blue-100">
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100/5 px-24 py-12">
          <p className="text-6xl text-center mb-16 font-bold tracking-tight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit corporis repudiandae
            dolorem corrupti error.
          </p>
          <progress className="progress progress-info" value="50" max="100" color="#fff"></progress>
          <div className="font-bold flex justify-center align-center text-2xl  mt-10">
            <button className="px-4 py-2 flex justify-center items-center hover:underline">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Break
