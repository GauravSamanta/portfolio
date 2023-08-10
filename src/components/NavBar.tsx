function NavBar() {
  return (
    <nav className="ok">
      <div className="container mx-auto px-4 py-2 sm:px lg:px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="item-list">
            <div className="flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-5 sm:block">
              <div className="flex space-x-6">
                <a href="#" className=" item text-white font-medium">
                  About
                </a>
                <a
                  href="#"
                  className="item hover:text-white font-medium"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="item hover:text-white font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="item hover:text-white font-medium"
                >
                  Experience
                </a>
                <a
                  href="#"
                  className="item hover:text-white font-medium"
                >
                  Achievements
                </a>
                <a
                  href="#"
                  className="item hover:text-white font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="hidden sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-white block px-3 py-2 font-medium bg-gray-900"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="item hover:text-white block px-3 py-2 font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="item hover:text-white block px-3 py-2 font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="item hover:text-white block px-3 py-2 font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
