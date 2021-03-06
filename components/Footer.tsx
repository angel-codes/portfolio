const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap-reverse items-center justify-between lg:flex-nowrap lg:space-y-0">
          <div className="flex flex-col items-center justify-center w-full space-y-4 lg:flex-row lg:justify-start lg:w-auto lg:space-x-4 lg:space-y-0">
            <p className="flex items-center text-gray-900 text-base">
              Made with ❤ by Angel Martinez &copy; 2021
            </p>
            <span className="hidden text-primary-200 lg:block">-</span>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="https://twitter.com/angelmtztrc" target="_blank">
                  {/* TODO: ICONS HERE */}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mb-4 w-full lg:mb-0 lg:w-auto">
            {/* TODO: Fix this button */}
            <button className="text-primary-600 hover:bg-primary-600 border-primary-600 px-4 py-2 hover:text-white text-base font-medium border-2 transition-colors duration-300 ease-in">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
