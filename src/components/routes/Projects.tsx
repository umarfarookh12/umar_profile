const Projects = () => {
  return (
    <div className="dark:bg-black bg-white">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 dark:bg-neutral-900/30 bg-white"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-black dark:text-gray-400 my-3 flex items-center justify-center font-bold uppercase tracking-wider">
            Why choose me
          </span>
          <h2 className="block w-full bg-gradient-to-b from-violet-700 to-black dark:from-white dark:to-violet-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Build a Website beyond Customer's expections
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-bold leading-relaxed tracking-wide text-orange-500 ">
            I have worked in many projects but these are some of my most recent
            ones – feel free to visit the projects.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <a href="https://sikandartea.edgecompute.app/" target="_blank">
            <div className="rounded-lg dark:bg-neutral-900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div
                className="button-text mx-auto flex h-16 w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-color-swatch"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-dark dark:text-gray-400 font-bold hover:underline">
                THE COFFEE SHOP
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black dark:text-gray-400 text-pretty text-sm  ">
                "Welcome to our coffee shop, where you can easily order your
                favorite coffee and conveniently pay using UPI for a seamless
                and delightful experience."
              </p>
              <div className="mt-5 flex justify-evenly items-center">
                <a
                  href="https://sikandartea.edgecompute.app/"
                  target="_blank"
                  className="font-semibold hover:underline text-violet-900"
                >
                  Live link
                </a>
                <a
                  href="https://github.com/konic-technologies/sikandar-tea-cafe"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
          <a href="https://main--todo-focusflow.netlify.app/" target="_blank">
            <div className="rounded-lg dark:bg-neutral-900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div
                className="button-text mx-auto flex h-16 w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    " linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-tools"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                  <polyline points="12 8 7 3 3 7 8 12"></polyline>
                  <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                  <polyline points="16 12 21 17 17 21 12 16"></polyline>
                  <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-black font-bold dark:text-gray-400 hover:underline">
                TODO APP
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black dark:text-gray-400 text-pretty text-sm ">
                "A user-friendly to-do list application that allows users to
                effortlessly create, manage & organize their tasks."
              </p>
              <div className="mt-5 flex justify-evenly items-center">
                <a
                  href="https://main--todo-focusflow.netlify.app/"
                  target="_blank"
                  className="font-semibold hover:underline text-violet-900"
                >
                  Live link
                </a>
                <a
                  href="https://github.com/umarFarookh212/TODO"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>

          <a
            href="
                https://github.com/umarFarookh212/weather_app"
            target="_blank"
          >
            <div className="rounded-lg dark:bg-neutral-900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div
                className="button-text mx-auto flex h-16 w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bolt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
              </div>
              <h3 className="mt-6 text-dark dark:text-gray-400 font-bold hover:underline">
                WEATHER APP
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black dark:text-gray-400 text-pretty text-sm ">
                "users can select from a dropdown list of countries to find
                accurate and up-to-date weather information for their chosen
                location."
              </p>
              <div className="mt-5 flex justify-center items-center">
                <a
                  href="https://github.com/umarFarookh212/weather_app"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/umarfarookh12/umar_profile"
            target="_blank"
          >
            <div className="rounded-lg dark:bg-neutral-900/50 p-5 h-68 text-center border border-violet-300 hover:border-violet-900">
              <div
                className="button-text mx-auto flex w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                }}
              >
                <img src="src/images/profile_logo.png" alt="portfolio" />
              </div>
              <h3 className="mt-6 text-dark dark:text-gray-400 font-bold hover:underline">
                My Portfolio
              </h3>
              <p className="my-4 mb-0 font-medium leading-relaxed tracking-wide text-black dark:text-gray-400 text-pretty text-sm  ">
                "This portfolio showcases front-end developer in ReactJS,
                JavaScript, and tailwind.css through various projects that to
                creating dynamic and user-friendly web applications."
              </p>
              <div className="mt-5 flex justify-center items-center">
                <a
                  href="https://github.com/umarfarookh12/umar_profile"
                  className="font-semibold hover:underline text-violet-900"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={
            {
              backgroundImage:
                "linear-gradient(to right top, rgba(79, 80, 239, 0.7) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            } as React.CSSProperties
          }
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Projects;
