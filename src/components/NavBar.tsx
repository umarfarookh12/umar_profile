import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  return (
    <div>
      <div className="flex h-auto w-full flex-col">
        <header className="sticky top-0 grid grid-flow-row-dense grid-cols-2 md:grid-cols-2 content-center place-content-between h-16 items-center gap-4 border-b px-4 md:px-6 backdrop-blur-sm bg-white/30 dark:bg-black">
          <div className="flex w-full justify-start md:ps-5 items-center gap-4 md:ml-auto md:gap-2 lg:gap-10 md:h-10">
            <Sheet>
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
              <SheetContent side="left" className="w-[40%]">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link to="/">Home</Link>
                  <Link
                    to={`About`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                  <Link
                    to={`Projects`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </Link>
                  <Link
                    to={`contact`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </nav>
                {/* <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter> */}
              </SheetContent>
            </Sheet>
            <div>
              <Link to="/">
                <p className="text-md md:text-2xl font-bold font-monoton uppercase text-violet-600 tracking-widest">
                  Umar farookh
                </p>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 content-between">
            <nav className="hidden flex-col justify-evenly items-center w-full gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-md lg:gap-6 ">
              <Link
                to="/"
                className="text-muted-foreground transition-colors hover:text-blue-700 hover:underline on "
              >
                Home
              </Link>
              <Link
                to={`About`}
                className="text-muted-foreground transition-colors hover:text-blue-700 hover:underline on "
              >
                About
              </Link>
              <Link
                to={`Projects`}
                className="text-muted-foreground transition-colors  hover:text-blue-700 hover:underline on"
              >
                Projects
              </Link>
              <Link
                to={`contact`}
                className="text-muted-foreground transition-colors hover:text-blue-700 hover:underline"
              >
                Contact
              </Link>
            </nav>

            <div className="flex justify-end w-auto gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <a href="https://github.com/umarFarookh212" target="_blank">
                  <img
                    src="src/images/git_logo.png"
                    className="rounded-full h-7"
                  />
                </a>
              </Button>
              {/* for Dark mode */}
              <ThemeToggle />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
