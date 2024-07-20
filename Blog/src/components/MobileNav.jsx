"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "login",
    path: "/login",
  },
  {
    name: "cadastro",
    path: "/register",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const location = useLocation();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link to={"/"}>
            <h1 className="text-4xl font-semibold">
              Sexo<span className="text-accent">_</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link to={link.path} key={index}>
                <div
                  className={`text-xl capitalize hover:text-accent transition-all ${
                    link.path === location.pathname &&
                    "text-accent border-b-2 border-accent"
                  }`}
                >
                  {link.name}
                </div>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
