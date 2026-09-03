import React from 'react'
import SlickSlider from 'react-slick'
import { FaStar, FaPlay, FaQuoteLeft, FaBookOpen, FaClock } from 'react-icons/fa'
import { FaArrowRight } from "react-icons/fa6";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Slider = SlickSlider.default || SlickSlider
const ReviewsAndResources = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sehrish Khan',
      initial: 'S',
      bgColor: 'bg-blue-600',
      role: '8 months ago',
      rating: 5,
      text: ' I had an excellent experience working with Samrah at Befiler for my tax filing. She was professional, knowledgeable, and extremely patient in guiding me through the entire process. Samrah made everything smooth and stress-free — from clarifying my queries to ensuring timely submission. I really appreciate her responsiveness and attention to detail. Highly recommended for anyone looking for a reliable and efficient tax consultant!',
    },
    {
      id: 2,
      name: 'Ayesha Ali',
      initial: 'A',
      bgColor: 'bg-emerald-600',
      role: '7 months ago',
      rating: 5,
      text: 'I had an excellent experience working with Samrah at Befiler for my tax filing. She was professional, knowledgeable, and extremely patient in guiding me through the entire process. Samrah made everything smooth and stress-free — from clarifying my queries to ensuring timely submission. I really appreciate her responsiveness and attention to detail. Highly recommended for anyone looking for a reliable and efficient tax consultant!',
    },
    {
      id: 3,
      name: 'Ali Raza',
      initial: 'A',
      bgColor: 'bg-purple-600',
      role: '4 months ago',
      rating: 5,
      text: 'I’m sincerely grateful to Samrah Qazalbash from Befiler for her exceptional support. When my case was left unattended by another representative just before the filing deadline, she stepped in, understood the issue instantly, and resolved everything within a day. Her professionalism, efficiency, and dedication truly stood out. Befiler is lucky to have her on their team!',
    },
  ]
  const resources = [
    {
      id: 1,
      badge: 'Video',
      title: 'How to Become an Active Taxpayer in Pakistan',
      duration: '6 min watch',
      thumbnail: '/src/assets/home/Wasim-.jpg',
      videoUrl: '#',
    },
    {
      id: 2,
      badge: 'Video',
      title: 'Sole Proprietorship vs Private Limited Company',
      duration: '4 min watch',
      thumbnail: '/src/assets/home/pic-2.jpg',
      videoUrl: '#',
    },
    {
      id: 3,
      badge: 'Video',
      title: 'Sales Tax Registration & Monthly Returns Guide',
      duration: '8 min watch',
      thumbnail: '/src/assets/home/befilerApp.jpg',
      videoUrl: '#',
    },
  ]
 const slickSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  dotsClass: 'slick-dots custom-slick-dots',
  customPaging: () => <button aria-label="Go to slide"></button>,
}
  return (
    <section className="bg-white px-4 pt-2 pb-12 font-sans sm:px-4 lg:px-4">
      <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      {/* CARD 1 — REVIEWS */}
      <div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-[#ffffff] p-6 sm:p-7 shadow-xl">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-1">
              
              <h2 className="md:text-2xl font-bold  md:font-extrabold text-slate-900 text-lg">
                Trusted by Thousands of Pakistanis
              </h2>
            </div>
            
            <div className='flex items-center gap-1'>
            <span className="md:text-sm text-xs hover:underline font-semibold text-red-600">
              View all Reviews
              </span>
            <span> <FaArrowRight className='h-3 w-3 hover:underline text-red-600 ' /></span> 
           
           
            </div>
          </div>

          {/* SLICK SLIDER (Active on xs, sm, md) */}
          <div className="lg:hidden ">
            <Slider {...slickSettings}>
              {reviews.map((review) => (
                <div key={review.id} className="px-1.5">
                  <div className="flex h-full flex-col justify-between rounded-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 bg-white p-5 sm:p-4 shadow-xs">
                    <div>
                      <div className="mb-2 flex items-center gap-1 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        ))}
                      </div>
                      <p className="text-xs line-clamp-4 leading-snug italic text-slate-500 ">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-3">
                      <div className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full text-xs sm:text-sm font-bold text-white ${review.bgColor}`}>
                        {review.initial}
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-xs font-bold text-slate-900 sm:text-sm">
                          {review.name}
                        </h3>
                        <p className="truncate text-[10px] sm:text-[11px] text-slate-400">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* DESKTOP GRID LAYOUT (Active on lg & xl) */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`
                  flex flex-col hover:-translate-y-1 transition-all duration-300justify-between rounded-xl border  duration-300 border-slate-200 bg-white p-5 shadow-md
                  ${index === 2 ? 'lg:col-span-2 lg:w-2/3 lg:justify-self-center xl:col-span-1 xl:w-full' : ''}
                `}
              >
                <div>
                  <div className="mb-3 flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="text-[12px] line-clamp-4 italic leading-relaxed text-slate-500 ">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.bgColor}`}>
                    {review.initial}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                      {review.name}
                    </h3>
                    <p className="truncate text-[11px] text-slate-400">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CARD 2 — RESOURCES */}
      <div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-7 sm:p-6 shadow-xl">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              
              <h2 className="md:text-2xl text-lg font-bold md:font-extrabold text-slate-900 ">
                Latest Resources
              </h2>
            </div>
             <div className='flex items-center gap-1'>
            <span className="md:text-sm text-xs hover:underline font-semibold text-red-600">
              View all 
              </span>
            <span> <FaArrowRight className='h-3 w-3 hover:underline text-red-600 ' /></span> 
           
           
            </div>
          </div>

          
          <div className="lg:hidden">
            <Slider  {...slickSettings}>
              {resources.map((resource) => (
                <div key={resource.id} className="px-1.5 py-1">
                 <div className=" flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 bg-white shadow-md">
                    <div>
                      <div className="relative h-26 sm:h-32 w-full overflow-hidden bg-slate-100">
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="h-full w-full object-cover transition-transform duration-300 "
                        />
                        <a
                          href={resource.videoUrl}
                          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all group-hover:bg-black/20"
                        >
                          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-transform duration-300 ">
                            <FaPlay className="ml-0.5 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          </div>
                        </a>
                      </div>

                      <div className="mt-2.5 px-3 sm:mt-3">
                        <span className="inline-block rounded-md bg-red-50 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-red-600">
                          {resource.badge}
                        </span>
                      </div>

                      <h3 className="mt-1.5 px-3 sm:mt-2 line-clamp-2 text-xs font-bold leading-snug text-slate-900 transition-colors group-hover:text-red-600 sm:text-sm">
                        {resource.title}
                      </h3>
                    </div>

                    <div className="mt-2.5 px-3 py-1 sm:mt-3 flex items-center gap-1.5 border-t border-slate-100 pt-2 sm:pt-2.5 text-slate-400">
                      <FaClock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span className="text-[10px]  sm:text-[11px] font-medium">
                        {resource.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* DESKTOP GRID LAYOUT (Active on lg & xl) */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className={`
                  group flex flex-col hover:-translate-y-1 duration-300 transition-all justify-between rounded-xl border border-slate-100 bg-white  shadow-md
                 ${index === 2 ? 'lg:col-span-2 lg:w-2/3 lg:justify-self-center xl:col-span-1 xl:w-full' : ''}
                `}
              >
                <div>
                  <div className="relative h-32 w-full overflow-hidden rounded-lg  bg-slate-100">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="h-full w-full object-cover transition-transform duration-300 "
                    />
                    <a
                      href={resource.videoUrl}
                      className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all group-hover:bg-black/20"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-transform duration-300 ">
                        <FaPlay className="ml-0.5 h-3.5 w-3.5" />
                      </div>
                    </a>
                  </div>

                  <div className="mt-3 px-3">
                    <span className="inline-block rounded-md bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-600">
                      {resource.badge}
                    </span>
                  </div>

                  <h3 className="mt-2 px-3 line-clamp-2 text-xs font-bold leading-snug text-slate-900 transition-colors  sm:text-sm">
                    {resource.title}
                  </h3>
                </div>

                <div className="mt-3 px-3 py-1 flex items-center gap-1.5 border-t border-slate-100 pt-2.5 text-slate-400">
                  <FaClock className="h-3 w-3" />
                  <span className="text-[11px] font-medium">
                    {resource.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
  )
}
export default ReviewsAndResources