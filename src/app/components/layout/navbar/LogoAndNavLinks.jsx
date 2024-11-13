import Link from "next/link";

const links = ["Компания", "Услуги", "Каталоги мебели", "Блог"];

export default function LogoAndNavLinks({ scrolling }) {
  return (
    <div className="flex items-center gap-10">
      {/* Menu Btn & Logo */}
      <div className="flex items-center gap-5 sm:gap-7">
        <button>
          <svg
            width="32"
            height="18"
            viewBox="0 0 32 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-4 3xl:w-auto 3xl:h-auto ${
              scrolling ? "fill-brand-dark" : "fill-white"
            }`}
          >
            <rect width="32" height="2" />
            <rect y="8" width="22" height="2" />
            <rect y="16" width="22" height="2" />
          </svg>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="uppercase font-medium font-unbounded text-lg 3xl:text-2xl"
        >
          Mebel.tours
        </Link>
      </div>

      {/* Links */}
      <ul className="hidden xl:flex items-center gap-7 3xl:gap-12 text-sm 3xl:text-base">
        {links.map((link) => (
          <li key={link}>
            <button className="flex items-center gap-1 3xl:gap-0.5">
              <span>{link}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={scrolling ? "stroke-brand-dark" : "stroke-white"}
              >
                <path
                  d="M3.0625 5.03125L7 8.96875L10.9375 5.03125"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
