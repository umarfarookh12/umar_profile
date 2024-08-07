// import { Button } from "../ui/button";
// import { Card } from "../ui/card";

const Home = () => {
  return (
    <>
      <div className="relative px-6">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 tracking-wider dark:text-white uppercase sm:text-6xl">
              Umar farookh syed
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
              Building responsive, dynamic, and user-friendly web applications
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
