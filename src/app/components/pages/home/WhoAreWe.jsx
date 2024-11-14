"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/assets/images/img-who-are-we-1.jpg",
  "/assets/images/img-who-are-we-2.jpg",
  "/assets/images/img-who-are-we-3.jpg",
  "/assets/images/img-who-are-we-4.jpg",
  "/assets/images/img-who-are-we-6.jpg",
];

export default function WhoAreWe() {
  const [visibleImages, setVisibleImages] = useState(
    images.slice(0, images.length)
  );

  useEffect(() => {
    const updateVisibleImages = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 640 && screenWidth < 1280) {
        setVisibleImages(images.slice(0, 3));
      } else {
        setVisibleImages(images.slice(0, images.length));
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  return (
    <section className="section-top-padding">
      <div className="container space-y-8 sm:space-y-10 xl:space-y-12 3xl:space-y-16">
        <div className="flex items-end justify-between">
          <h2>
            Кто мы? <br /> <span className="text-brand-red">Основатели</span>
            <br />
            Foshan.
            <br className="xs:hidden" />
            Furniture
          </h2>

          {/* Team Images */}
          <div className="relative hidden md:flex items-center">
            <div className="flex items-center mr-30px">
              {visibleImages.map((img, idx) => (
                <div
                  key={idx}
                  className="size-16 xl:size-[72px] 3xl:size-[110px] shrink-0 bg-white rounded-full overflow-hidden -mr-30px p-1"
                >
                  <Image
                    src={img}
                    alt="Avatar"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>

            <button className="size-[22px] xl:size-6 3xl:size-10 shrink-0 absolute right-0 grid place-content-center bg-brand-red text-white text-sm xl:text-13 3xl:text-xl leading-[14px] xl:leading-4 3xl:leading-[26px] rounded-full">
              +11
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid xl:grid-cols-2">
          <div className="flex flex-col justify-end xl:max-w-[496px] 3xl:max-w-[700px] space-y-5 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-5 xl:leading-[21px] 3xl:leading-[26px]">
            <p>
              Нами запущена программа{" "}
              <span className="text-brand-red">
                «Verified by Foshan.Furniture»
              </span>
              . С ее помощью мы формируем каталог производств и магазинов,
              которые соответствуют высоким стандартам обслуживания. Такие
              владельцы бизнесов заботятся о своей репутации.
            </p>
            <p>
              В последнее время мы стали получать больше информации о
              недобросовестной работе посредников («мебельные туры в Китай»),
              поэтому мы запустили услугу комплектации интерьеров на дистанции,
              где собрали только проверенных партнеров.
            </p>
            <p>
              Проект <span className="text-brand-red">Foshan.Furniture</span>{" "}
              был создан в 2018 году с целью объединить интерьерный рынок
              региона Гуандун (Китай) и помочь в выборе поставщиков клиентам со
              всего мира. Основатели проекта работают в мебельной индустрии
              региона с 2008 года.
            </p>
            <p>
              Мы гордимся тем, что с помощью нашего ресурса люди имеют
              возможность находить проверенных партнеров на рынке Китая.
            </p>
          </div>

          <div className="max-h-[460px] mt-30px 3xl:mt-10 xl:mt-0">
            <Image
              src="/assets/images/img-who-are-we-main.png"
              alt="Image"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
