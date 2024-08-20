// import { Button } from "../ui/button";
// import { Card } from "../ui/card";

const Home = () => {
  return (
    <>
      <div className="relative px-6 ">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 tracking-wider dark:text-white uppercase sm:text-6xl">
              Umar farookh <span className="font-allura">syed</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
              Building responsive, dynamic, and user-friendly web applications
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="flex flex-wrap justify-center gap-6">
                <a className="relative" href="#">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-400"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    <a href="src/umar_front_end_0.5Intern.pdf" download={true}>
                      Download resume
                    </a>
                  </span>
                </a>
                <a href="#" className="relative">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700 dark:bg-gray-400"></span>
                  <button
                    onClick={() => {
                      window.location.href = "/About";
                    }}
                  >
                    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 ">
                      let's get started &rarr;
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
