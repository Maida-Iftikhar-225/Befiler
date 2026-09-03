import { ChevronDown } from "lucide-react";

function NavDropdown({
  label,
  links,
  sections,
  isOpen,
  onOpen,
  onClose,
  isMobile = false,
}) {
  if (isMobile) {
    return (
      <div className="border-b border-gray-200 py-3">
        <div className="font-semibold transition-colors duration-300 hover:text-red-600">
          {label}
        </div>

        <div className="mt-2 space-y-2 pl-3">
          {links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block  text-sm text-zinc-600 transition-colors duration-300 hover:text-red-600"
            >
              {link.label}
            </a>
          ))}

          {sections?.map((section) => (
            <a
              key={section.heading}
              href="#"
              className="block text-sm text-zinc-600 transition-colors duration-300 hover:text-red-600"
            >
              {section.mobileLabel || section.heading}
            </a>
          ))}
        </div>
      </div>
    );
  }

  const isMegaMenu = sections?.length > 0;

  return (
    <div className="relative py-2" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        onClick={isOpen ? onClose : onOpen}
        aria-expanded={isOpen}
        className={`
          flex items-center gap-1 rounded-lg
          px-2.5 py-1.5 text-sm font-semibold
          transition-colors duration-300 
          ${
            isOpen
              ? "bg-red-50 text-red-600"
              : "text-zinc-900 hover:bg-red-50 hover:text-red-600"
          }
        `}
      >
        {label}

        <ChevronDown
          size={15}
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180 text-red-600" : ""}
          `}
        />
      </button>

      {isMegaMenu && (
        <>
          {isOpen && (
            <div
              className="
          absolute left-1/2 top-full
          z-60 h-4 w-4 
          -translate-x-1/2
          rotate-45
          bg-white
        "
            />
          )}

          <div
            className={`
            fixed left-0 top-16 z-50 w-full
            bg-white shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]
            transition-all duration-300 ease-out
            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }
          `}
          >
            <div className="mx-auto max-w-7xl px-6 py-6">
              <div className="grid grid-cols-6 gap-6">
                {sections.map((section, index) => {
                  const isLastCard = index === sections.length - 1;

                  const Icon = section.icon;

                  return (
                    <div
                      key={section.heading}
                      className={`
                      rounded-xl border p-2.5
                      transition-all duration-300
                      ${
                        isLastCard
                          ? "border-dashed hover:border-double hover:-translate-y-1 hover:bg-red-50/80  border-red-300 bg-red-50/40"
                          : `
                            border-transparent
                            hover:-translate-y-1
                            hover:border-red-300
                            hover:bg-red-50/80
                            hover:shadow-md
                          `
                      }
                    `}
                    >
                      {Icon && (
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-500">
                          <Icon className="text-xl" />
                        </div>
                      )}

                      <h4
                        className={`
                        mt-2 text-sm font-bold
                        ${
                          isLastCard
                            ? "text-red-600"
                            : "text-zinc-800 transition-colors duration-300 hover:text-red-600"
                        }
                      `}
                      >
                        {section.heading}
                      </h4>

                      <p className="mt-1 text-xs leading-snug text-zinc-500">
                        {section.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {!isMegaMenu && (
        <>
          {isOpen && (
            <div
              className="
          absolute left-1/2 top-full
          z-51 h-4 w-4 
          -translate-x-1/2
          rotate-45
          bg-white
        "
            />
          )}

          <div
            className={`
        
        absolute left-1/2 top-full z-50
        w-60 -translate-x-1/2 pt-2 
        transition-all duration-300 ease-out
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }
      `}
          >
            <div className="rounded-xl border border-zinc-100 bg-white p-2 shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]">
              {links?.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm text-zinc-700 transition-colors duration-300 hover:bg-red-50 hover:text-red-600"
                  >
                    {Icon && <Icon className="h-6 w-6" />}

                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NavDropdown;
