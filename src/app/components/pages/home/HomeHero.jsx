"use client";

import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import Button from "../../shared/Button";

export default function HomeHero() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full py-0">
        <div className="h-screen relative">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper h-full"
          >
            <SwiperSlide className="h-full">
              <Image
                alt="Home"
                width={1920}
                height={1080}
                className="absolute inset-0 z-0 w-full h-full object-cover"
                src="/assets/images/img-home-hero.png"
              />

              {/* Overlay */}
              <div className="absolute inset-0 w-full h-full bg-black/50 z-20"></div>

              <div className="h-full container mx-auto relative z-20 flex flex-col sm:flex-row sm:items-end justify-end sm:justify-between gap-8 pb-20">
                {/* Title and Fraction */}
                <div className="space-y-5 3xl:space-y-9">
                  <div className="text-white 3xl:text-3xl">
                    01
                    <span className="text-white/50">
                      <span>/</span> 04
                    </span>
                  </div>

                  <h1 className="text-white">
                    Мебельный <br /> тур в Китай
                  </h1>
                </div>

                {/* Text & Buttons */}
                <div className="max-w-[550px] w-full space-y-7 3xl:space-y-10">
                  <p className="text-sm sm:text-15 lg:text-base 3xl:text-xl text-white">
                    Премиум-услуга по комплектации интерьера <br /> с
                    консьерж-сервисом от компании Mebel.tours
                  </p>

                  <div className="flex flex-col xs:flex-row items-center gap-2.5 3xl:gap-5">
                    <Button
                      variant="red"
                      className="w-full h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4"
                    >
                      Забронировать тур
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 sm:w-auto fill-white group-hover:fill-white/50 transition-all duration-300"
                      >
                        <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
                      </svg>
                    </Button>
                    <Button
                      variant="whiteOutline"
                      className="w-full h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4"
                    >
                      Узнать подробнее
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 sm:w-auto fill-white group-hover:fill-white/50 transition-all duration-300"
                      >
                        <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
