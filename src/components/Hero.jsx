function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-start items-center pt-28 space-y-4 px-4">
      <p className="bg-slate-700 text-2xl font-inter md:text-4xl lg:text-5xl text-neutral-500 text-center font-bold dark:text-neutral-200">
        Turn your ideas into structured notes <br /> with ease, all in one place.
      </p>
      <button
        type="button"
        className="text-neutral-500 font-inter hover:bg-neutral-200 font-bold rounded-md text-sm dark:text-neutral-200 dark:hover:bg-neutral-700 flex items-center px-4 py-2"
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default Hero;

  