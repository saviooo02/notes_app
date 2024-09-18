function Hero() {
    return (
      <>
        <div className="relative min-h-[calc(100vh-56px)] flex justify-center items-center">
          <p className="text-2xl font-inter md:text-4xl lg:text-5xl text-neutral-500 text-center font-bold absolute top-32 md:px-14 dark:text-neutral-200 ">
            Turn your ideas into structured notes <br />with ease, all in one place.
          </p>
            <button type="button" className="text-neutral-500 font-inter hover:bg-neutral-200 font-bold rounded-md text-sm px-5 py-2.5 me-2 lg:mb-40 md:mb-48 sm:mb-60 mb-60 flex dark:text-neutral-200 dark:hover:bg-neutral-700">Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
      </>
    );
  }
  
  export default Hero;
  