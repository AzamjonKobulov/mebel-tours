import Link from "next/link";
import Image from "next/image";

export default function BuyInChina() {
  return (
    <section className="pt-[60px] sm:pt-20 lg:pt-[120px] 3xl:pt-40">
      <div className="container space-y-8 sm:space-y-10 xl:space-y-12 3xl:space-y-60px">
        <h2 className="text-brand-dark">
          Что можно <br /> приобрести
          <span className="text-brand-red">в Китае</span>
        </h2>

        {/* Cards */}
        <div className="w-full grid sm:grid-cols-3 gap-5 text-white">
          {/* Card 1 */}
          <div className="space-y-5">
            <Link
              href="/"
              className="block min-h-40 sm:min-h-80 xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden"
            >
              <Image
                src="/assets/images/img-buy-in-china-1.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Мебель</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  11 324 позиций
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="block min-h-40 sm:min-h-80 xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden"
            >
              <Image
                src="/assets/images/img-buy-in-china-4.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Текстиль</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  15 657 позиций
                </p>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="space-y-5 sm:pt-5 3xl:pt-10">
            <Link
              href="/"
              className="block min-h-40 sm:min-h-80 xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden"
            >
              <Image
                src="/assets/images/img-buy-in-china-2.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Свет</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  21 125 позиций
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="block min-h-40 sm:min-h-80 xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden"
            >
              <Image
                src="/assets/images/img-buy-in-china-5.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Уличная мебель</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  5 212 позиций
                </p>
              </div>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="space-y-5">
            <Link
              href="/"
              className="block min-h-40 sm:min-h-80 xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden"
            >
              <Image
                src="/assets/images/img-buy-in-china-3.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Сантехника</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  9 356 позиций
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="block min-h-40 sm:min-h-80 xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden"
            >
              <Image
                src="/assets/images/img-buy-in-china-6.png"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Отделочные материалы</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  1 121 позиций
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
