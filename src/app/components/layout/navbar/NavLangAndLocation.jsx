import React from "react";

export default function NavLangAndLocation() {
  return (
    <div className="flex items-center gap-5 text-white/60">
      {/* Lang Dropdown */}
      <div className="">
        <button className="group flex items-center gap-1.5 uppercase">
          <span className="group-hover:text-white transition-all duration-300">
            ru
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white/60 group-hover:stroke-white transition-all duration-300"
          >
            <path
              d="M3.0625 5.03125L7 8.96875L10.9375 5.03125"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
      {/* Location */}
      <button className="group flex items-center gap-1.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white/60 group-hover:fill-white transition-all duration-300"
        >
          <path
            d="M8 1C5.23969 1 3 3.01594 3 5.5C3 9.5 8 15 8 15C8 15 13 9.5 13 5.5C13 3.01594 10.7603 1 8 1ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39991 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C9.99942 6.53026 9.78852 7.03863 9.41357 7.41357C9.03863 7.78852 8.53026 7.99942 8 8Z"
            fillOpacity="0.6"
          />
        </svg>
        <div className="flex items-center gap-0.5">
          <span className="group-hover:text-white transition-all duration-300">
            Москва
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white/60 group-hover:stroke-white transition-all duration-300"
          >
            <path
              d="M3.0625 5.03125L7 8.96875L10.9375 5.03125"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
