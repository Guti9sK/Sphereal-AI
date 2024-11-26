"use client";
import Link from "next/link";
import { useState } from "react";
import CenteredCircle from "@/components/CenteredCircle";
import Button, { ButtonProps } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import Logo from "@/components/Logo";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <header className="border-b border-[var(--color-border)] relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Logo />
              <p className="text-2xl font-extrabold">Sphereal.ai</p>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="h-full px-12 relative font-bold text-xs tracking-widest text-gray-400 uppercase hover:text-[#fffafa] transition duration-500 inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 after:absolute after:bottom-0 after:h-2 after:w-px after:bg-gray-200/20 after:right-0"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(href);
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex gap-x-4">
              {loginItems.map(({ buttonVariant, name, href }, i) => (
                <Link key={i} href={href}>
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="size-10 rounded-lg relative mobile-menu-border-gradient"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition",
                      isMobileNavOpen && "translate-y-0 rotate-45"
                    )}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition",
                      isMobileNavOpen && "translate-y-0 -rotate-45"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
          <div className="absolute-center isolate -z-10">
            <CenteredCircle />
          </div>
          <div className="absolute-center isolate -z-10">
            <CenteredCircle className="size-[350px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <CenteredCircle className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <CenteredCircle className="size-[650px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <CenteredCircle className="size-[800px]" />
          </div>
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-y-4 py-8 h-full justify-center">
              {navItems.map(({ name, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition duration-500 uppercase tracking-widest font-bold text-xs h-10"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                    setIsMobileNavOpen(false);
                  }}
                >
                  {name}
                </Link>
              ))}
              {loginItems.map(({ name, href, buttonVariant }, i) => (
                <Link key={i} href={href} className="w-full max-w-xs">
                  <Button block variant={buttonVariant}>
                    {name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
