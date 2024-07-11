import { NavLink } from "react-router-dom";
import { CircleUser, Menu, Package2, Package2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavBar = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 grid grid-flow-row-dense grid-cols-2 md:grid-cols-2 content-center place-content-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          {/* name Logo */}
          <div className="flex w-full justify-start items-center gap-4 md:ml-auto md:gap-2 lg:gap-10 md:h-10 border border-black">
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
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <NavLink
                    to="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </NavLink>
                  <NavLink
                    to="src/components/NavLinks/About.tsx"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="src/components/NavLinks/MyProjects.tsx"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    MyProjects
                  </NavLink>
                  <NavLink
                    to="src/components/NavLinks/Contact.tsx"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
            <NavLink to="/" className="hidden md:block gap-2 ">
              <Package2Icon className="h-6 w-6" />
            </NavLink>
            <div>
              <p className="text-md md:text-xl font-bold font-inter uppercase text-violet-900 ">
                Umar
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 content-between">
            <nav className="hidden flex-col justify-evenly items-center w-full gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-md lg:gap-6 ">
              <NavLink
                to="src/components/NavLinks/About.tsx"
                className="hover:underline text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </NavLink>

              <NavLink
                to="src/components/NavLinks/MyProjects.tsx"
                className="hover:underline text-muted-foreground transition-colors hover:text-foreground"
              >
                MyProjects
              </NavLink>
              <NavLink
                to="src/components/NavLinks/Contact.tsx"
                className="hover:underline text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </NavLink>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
