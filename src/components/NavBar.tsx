import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex h-auto w-full flex-col">
        <header className="sticky top-0 grid grid-flow-row-dense grid-cols-2 md:grid-cols-2 content-center place-content-between h-16 items-center gap-4 border-b px-4 md:px-6 backdrop-blur-sm bg-white/30">
          <div className="flex w-full justify-start md:ps-5 items-center gap-4 md:ml-auto md:gap-2 lg:gap-10 md:h-10">
            {/* <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[40%]">
                <nav className="grid gap-2 text-lg font-medium">
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                  <a
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </a>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet> */}
            <div>
              <Link to="/">
                <span className="text-md md:text-2xl font-bold font-monoton uppercase text-violet-600 tracking-widest">
                  Umar farookh
                </span>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-4 content-between">
            {/* <nav className="hidden flex-col justify-evenly items-center w-full gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-md lg:gap-6 ">
              <Link
                to="/"
                className="text-muted-foreground transition-colors hover:text-blue-700 hover:underline on "
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground transition-colors hover:text-blue-700 hover:underline on "
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-muted-foreground transition-colors  hover:text-blue-700 hover:underline on"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground transition-colors hover:text-blue-700 hover:underline"
              >
                Contact
              </Link>
            </nav> */}

            <div className="flex justify-end w-auto gap-3">
              <a
                href="https://github.com/umarfarookh12"
                target="_blank"
                className="rounded-full"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWGx49vyixrV2CW_xbXIDPiqg5tiabAH9yw&s"
                  className="rounded-full h-10 object-cover"
                />
              </a>
              <a href="https://linkedin.com/in/umarfarookh/" target="_blank">
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02TaqZih24YN97eRUm1GkN4XnrpDfJ-1ZRQ&s"
                  className="rounded h-10 object-cover"
                />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
