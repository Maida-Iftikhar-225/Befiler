import { useState } from "react";
import NavDropdown from "./NavDropdown";
import { FaCalculator, FaRegEnvelope, FaArrowRight } from "react-icons/fa";
import { BsQuestionOctagon } from "react-icons/bs";
import { MdInsertPageBreak } from "react-icons/md";
import { TiClipboard } from "react-icons/ti";
import { FaBuildingLock } from "react-icons/fa6";
import {
  RiErrorWarningLine,
  RiGlobalLine,
  RiBloggerFill,
} from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const taxToolsLinks = [
    {
      label: "Salary Calculator",
      href: "#salary-calculator",
      icon: FaCalculator,
    },
    {
      label: "FAQs",
      href: "#faqs",
      icon: BsQuestionOctagon,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: FaRegEnvelope,
    },
  ];

  const resourceLinks = [
    {
      label: "Blog",
      href: "#blog",
      icon: RiBloggerFill,
    },
    {
      label: "Videos",
      href: "#videos",
      icon: PiVideoLight,
    },
  ];

  const businessServicesSections = [
    {
      icon: MdInsertPageBreak,
      heading: "Income Tax",
      mobileLabel: "Income Tax Return",
      description:
        "Manage and file income tax returns for your business with expert guidance.",
    },
    {
      icon: TiClipboard,
      heading: "Sales Tax",
      mobileLabel: "Sales Tax Registration",
      description:
        "Complete registration and monthly return filing for sales tax and stay compliant.",
    },
    {
      icon: FaBuildingLock,
      heading: "Company Reg.",
      mobileLabel: "Company Registration",
      description:
        "Incorporate private limited with SECP, sole proprietorship, or partnerships, paperless.",
    },
    {
      icon: RiErrorWarningLine,
      heading: "Intellectual Property",
      mobileLabel: "Intellectual Property",
      description:
        "Protect your brand, trademarks, assets, logo designs, and copyrights.",
    },
    {
      icon: RiGlobalLine,
      heading: "USA Services",
      mobileLabel: "USA LLC & Tax Filing",
      description:
        "Handle your American tax from Pakistan and expand your business internationally.",
    },
    {
      icon: FaArrowRight,
      heading: "View all Services",
      mobileLabel: "View all Services",
      description:
        "Explore our full range of tax services and business solutions.",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5">
        <a href="#" className="shrink-0 flex items-center">
          <img
            src="/src/assets/home/logo.png"
            alt="Befiler"
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-1.5 font-semibold lg:flex shrink-0">
          <NavDropdown
            label="Tax Tools"
            links={taxToolsLinks}
            isOpen={openMenu === "Tax Tools"}
            onOpen={() => setOpenMenu("Tax Tools")}
            onClose={() => setOpenMenu(null)}
          />

          <NavDropdown
            label="Business Services"
            sections={businessServicesSections}
            isOpen={openMenu === "Business Services"}
            onOpen={() => setOpenMenu("Business Services")}
            onClose={() => setOpenMenu(null)}
          />

          <a
            href="#sales-tax"
            className="shrink-0 rounded-lg px-2.5 py-1.5 text-sm transition-colors duration-300 hover:bg-red-50 hover:text-red-600"
          >
            Sales Tax
          </a>

          <NavDropdown
            label="Resources"
            links={resourceLinks}
            isOpen={openMenu === "Resources"}
            onOpen={() => setOpenMenu("Resources")}
            onClose={() => setOpenMenu(null)}
          />

          <a
            href="#usa-services"
            className="shrink-0 flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm transition-colors duration-300 hover:bg-red-50 hover:text-red-600"
          >
            <img
              src="/src/assets/home/USAflag.png"
              alt="usa"
              className="h-4 w-4 rounded-full shrink-0"
            />
            USA Services
          </a>

          <div className="shrink-0 flex rounded-md border border-gray-300 p-0.5 text-sm">
            <button className="shrink-0 rounded-md bg-red-600 px-2 py-1 font-semibold text-white">
              English
            </button>
            <button className="shrink-0 rounded-md px-2.5 py-1.5 font-bold transition-colors duration-300 hover:bg-gray-100">
              اردو
            </button>
          </div>

          <a
            href="#signin"
            className="shrink-0 whitespace-nowrap rounded-md border border-gray-400 px-3 py-1.5 text-sm transition-all duration-300 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
          >
            Sign In
          </a>

          <a
            href="#file-tax"
            className="shrink-0 whitespace-nowrap rounded-md bg-red-600 px-3.5 py-2 text-sm text-white transition-all duration-300 hover:bg-red-700 hover:shadow-md"
          >
            File Tax Return
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="shrink-0 rounded-lg p-2 text-2xl text-zinc-800 transition-colors duration-300 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <div
        className={`
          absolute right-0 top-full w-full max-h-[calc(100vh-4.5rem)] overflow-y-auto
          border-t border-gray-200 bg-white
          px-4 shadow-lg
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="border-b border-gray-200 py-3">
          <div className="inline-flex rounded-md border border-gray-300 p-0.5">
            <button className="shrink-0 rounded-md bg-red-600 px-3 py-1.5 font-semibold text-white text-sm">
              English
            </button>
            <button className="shrink-0 mx-0.5 rounded-md px-3 py-1.5 font-bold transition-colors duration-300 hover:bg-gray-100 text-sm">
              اردو
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <NavDropdown label="Tax Tools" links={taxToolsLinks} isMobile />

          <NavDropdown
            label="Business Services"
            sections={businessServicesSections}
            isMobile
          />

          <a
            href="#sales-tax"
            className="block border-b border-gray-200 py-3 font-semibold transition-colors duration-300 hover:text-red-600"
          >
            Sales Tax
          </a>

          <NavDropdown label="Resources" links={resourceLinks} isMobile />

          <a
            href="#usa-services"
            className="flex items-center gap-2 border-b border-gray-200 py-3 font-semibold transition-colors duration-300 hover:text-red-600"
          >
            USA Services
          </a>
        </div>

        <div className="flex flex-col gap-2.5 py-4">
          <a
            href="#signin"
            className="w-full shrink-0 rounded-md border border-gray-400 py-2.5 text-center font-semibold transition-all duration-300 hover:border-red-700 hover:bg-red-50 hover:text-red-700"
          >
            Sign In
          </a>

          <a
            href="#file-tax"
            className="w-full shrink-0 rounded-md bg-red-600 py-2.5 text-center font-semibold text-white transition-all duration-300 hover:bg-red-700"
          >
            File Tax Return
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
