import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative px-6">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold xt-gray-600 text-black tracking-wider uppercase sm:text-6xl">
              Umar farookh <span className="font-allura">syed</span>
            </h1>
            <div className="flex flex-col">
              <p className="font-semibold underline underline-offset-4 text-xl text-black font-serif capitalize mx-auto ">
                Front end Developer
              </p>
              <a
                href="https://www.linkedin.com/company/konic-technologies/"
                target="_blank"
              >
                <span className="text-violet-600 hover:text-red-600 bg-clip-text font-bold text-xl font-mono">
                  Konic Technologies
                </span>
              </a>
            </div>
            <NavLink to="/projects" className="">
              <p className="text-lg leading-8 text-gray-800 hover:ease-linear">
                Building Responsive, Dynamic & User-Friendly web applications
              </p>
            </NavLink>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="flex flex-wrap justify-center gap-6">
                <a className="relative" href="#">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    <a
                      href="https://drive.google.com/file/d/1J610yUSXMZnig7PP2GS-aWqNvqD5b2rQ/view?usp=drive_link"
                      target="_blank"
                    >
                      View resume
                    </a>
                  </span>
                </a>

                <NavLink to="About" className="relative">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                  <button>
                    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 ">
                      let's get started &rarr;
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
