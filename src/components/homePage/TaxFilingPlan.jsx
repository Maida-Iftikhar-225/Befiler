import React, { useRef, useState } from "react";
import {
  FaFileAlt,
  FaBolt,
  FaUserTie,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const ServicesSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 1,
      icon: FaFileAlt,
      title: "Essential Filing",
      price: "Rs. 3,900",
      subtitle: "Best for regular tax return filing",

      features: [
        "Processing time: 48 hours to 5 working days",
        "Ideal for standard filing cases",
        "Prepared and filed by our tax team",
        "Suitable for salaried individuals, & routine cases",
        "Timeline starts after payment and complete documents",
      ],

      buttonText: "Get Started",
      href: "#file-tax",
    },

    {
      id: 2,
      icon: FaBolt,
      title: "Priority Filing",
      price: "Rs. 5,500",
      subtitle: "For urgent and time-sensitive cases",

      features: [
        "Priority handling by the tax team",
        "Processing time: 24 to 48 hours",
        "Faster turnaround for urgent submissions",
        "Best for clients needing quick filing",
        "Depends on timely document submission",
      ],

      buttonText: "Choose Priority",
      href: "#priority-filing",
      popular: true,
    },

    {
      id: 3,
      icon: FaUserTie,
      title: "Premium Consultant Filing",
      price: "PKR 14,500",
      subtitle: "One-on-one support from a senior consultant",

      features: [
        "Zoom or in-person consultation",
        "Personal guidance from a senior consultant",
        "Review and improve your tax return",
        "Better understanding of financial management",
        "Ideal for personalized assistance",
      ],

      buttonText: "Book Consultation",
      href: "#consultation",
    },
  ];

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    const cardWidth = container.clientWidth;

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    const scrollPosition = container.scrollLeft;

    const cardWidth = container.clientWidth;

    const newIndex = Math.round(scrollPosition / cardWidth);

    setActiveIndex(newIndex);
  };

  return (
    <section className="bg-[#fdfdfd] px-4 py-12 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
              sm:text-3xl
              lg:text-4xl
            "
          >
            Choose Your Tax Filing Plan
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
              sm:text-base
            "
          >
            Flexible options for every filing need
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="
            flex
            w-full
            gap-5
            overflow-x-auto
            scroll-smooth
            pt-6
            pb-4
            px-1
            snap-x
            snap-mandatory
            scrollbar-none
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`
                  relative
                  flex 
                  h-auto
                  w-full
                  min-w-full
                  shrink-0
                  snap-center
                  flex-col
                  rounded-xl
                  border
                  bg-white
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:min-w-[calc(50%-10px)]
                  sm:w-[calc(50%-10px)]
                  lg:min-w-0
                  lg:w-[calc(33.333%-14px)]
                  lg:shrink
                  ${service.popular ? "border-red-500" : "border-gray-200"}
                `}
              >
                {service.popular && (
                  <div
                    className="
                      absolute
                      -top-3
                      left-1/2
                      z-20
                      -translate-x-1/2
                      whitespace-nowrap
                      rounded-full
                      bg-linear-to-b from-[#ec1f1f] to-[#dd1919]
                      px-5
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      text-white
                      shadow-sm
                    "
                  >
                    MOST POPULAR
                  </div>
                )}

                <div className="flex justify-center">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-red-100
                      text-red-600
                     
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h3
                  className="
                    mt-4
                    text-center
                    text-[15px]
                    font-bold
                    text-slate-800
                    
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-center
                    text-2xl
                    font-bold
                    text-red-600
                    sm:text-3xl
                  "
                >
                  {service.price}
                </p>

                <p
                  className="
                    mt-1
                    text-center
                    text-xs
                    text-slate-500
                  "
                >
                  {service.subtitle}
                </p>

                <div
                  className="
                    my-6
                    border-t border-slate-100
                  "
                />

                <div
                  className="
                    flex-1
                    space-y-3
                  "
                >
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <FaCheckCircle
                        className="
                          mt-0.5
                          h-5
                          w-5
                          shrink-0
                          text-red-600
                        "
                      />

                      <p
                        className="
                          text-xs
                          leading-relaxed
                          text-slate-800
                          sm:text-sm
                        "
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href={service.href}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg bg-linear-to-b from-[#e42828] to-[#d10202]
                      px-4
                      py-3
                      text-[15px]
                      font-bold
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      shadow-red-200
                      hover:shadow-lg
                      hover:shadow-[#ec5b5b]
                    "
                  >
                    {service.buttonText}

                    <FaArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            lg:hidden
          "
        >
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2.5

                rounded-full

                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? "w-7 bg-red-600"
                    : "w-2.5 bg-red-200 hover:bg-red-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
