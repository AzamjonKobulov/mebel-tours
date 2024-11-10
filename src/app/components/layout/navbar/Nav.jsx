"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import NavLangAndLocation from "./NavLangAndLocation";
import Contacts from "./NavContacts";
import LogoAndNavLinks from "./LogoAndNavLinks";
import Button from "../../shared/Button";

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Ensure window is available on the client-side
    if (typeof window === "undefined") return;

    function toggleScroll() {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", toggleScroll);

    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, [scrolling]);

  return (
    <header className="fixed z-50 left-0 w-full top-0">
      <nav>
        {/* Top */}
        <div
          className={`${
            scrolling ? "-translate-y-full" : "translate-y-0"
          } transition-all duration-300 border-b border-white/10 py-3 3xl:py-4`}
        >
          <div className="container flex items-center justify-between">
            {/* Langs & Location & Links */}
            <div className="flex items-center gap-[120px] 3xl:gap-40">
              <NavLangAndLocation />
              <ul className="hidden xl:flex items-center gap-11 text-white/60 text-13 xl:text-base">
                <li>
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    База знаний
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:text-white transition-all duration-300"
                  >
                    Дизайнерам
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacts */}
            <Contacts />
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`${
            scrolling
              ? "-mt-[2.7631rem] xl:-mt-[48.7296px] 3xl:-mt-[3.8006rem] text-brand-dark backdrop-blur-lg"
              : "mt-0"
          } text-white border-b border-white/10 transition-all duration-300 py-3 sm:py-4 3xl:py-6`}
        >
          <div className="container flex items-center justify-between">
            <LogoAndNavLinks />

            {/* Auth Buttons */}
            <div className="flex items-center gap-3.5">
              <Button
                variant="whiteOutline"
                className="sm:h-[34px] 3xl:h-11 hidden sm:block px-2.5 3xl:px-5"
              >
                Забронировать тур
              </Button>
              <Button
                variant="grayOutline"
                aria-label="Login"
                className="group h-10 sm:h-[34px] 3xl:h-11 flex items-center gap-1.5 px-2.5 3xl:px-5"
              >
                <span className="hidden sm:block">Вход</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white/50 group-hover:fill-white transition-all duration-300"
                >
                  <path d="M9.10214 1.68769C4.98957 1.63214 1.63214 4.98957 1.68769 9.10214C1.74253 13.0463 4.95406 16.2578 8.89824 16.3127C13.0115 16.3689 16.3682 13.0115 16.312 8.89894C16.2578 4.95406 13.0463 1.74253 9.10214 1.68769ZM13.5466 13.1926C13.5326 13.2077 13.5154 13.2196 13.4963 13.2274C13.4772 13.2351 13.4566 13.2386 13.436 13.2375C13.4154 13.2365 13.3953 13.2309 13.3771 13.2212C13.3589 13.2114 13.3431 13.1978 13.3307 13.1813C13.0163 12.7699 12.6312 12.4177 12.1934 12.1411C11.2984 11.5666 10.1642 11.2502 9.00019 11.2502C7.83617 11.2502 6.70203 11.5666 5.80695 12.1411C5.36921 12.4175 4.98411 12.7697 4.66964 13.181C4.65729 13.1975 4.64145 13.2111 4.62326 13.2208C4.60506 13.2305 4.58495 13.2361 4.56435 13.2372C4.54375 13.2383 4.52317 13.2348 4.50406 13.227C4.48495 13.2192 4.46779 13.2074 4.45378 13.1922C3.42219 12.0786 2.83783 10.6235 2.81269 9.10566C2.75539 5.68461 5.56261 2.82113 8.98507 2.81269C12.4075 2.80425 15.1877 5.58336 15.1877 9.00019C15.1889 10.5546 14.6027 12.052 13.5466 13.1926Z" />
                  <path d="M9.00009 5.0625C8.30681 5.0625 7.67998 5.3223 7.23455 5.79445C6.78912 6.2666 6.56658 6.91945 6.61685 7.62012C6.7188 9 7.78791 10.125 9.00009 10.125C10.2123 10.125 11.2793 9 11.3833 7.62047C11.4354 6.92648 11.2146 6.27961 10.7618 5.79867C10.3146 5.32406 9.6888 5.0625 9.00009 5.0625Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
