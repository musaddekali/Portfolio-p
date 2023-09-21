import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../Icons";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[400px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-600">
          MD. Parves Ali
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700 sm:text-xl">
          Lead Engineer at EzyCourese
        </h2>
        <p className="mt-4 max-w-xs">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500  group-hover:text-gray-800 group-focus-visible:text-gray-800">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500  group-hover:text-gray-800 group-focus-visible:text-gray-800">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500  group-hover:text-gray-800 group-focus-visible:text-gray-800">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            title="GitHub"
            href="#"
            className="block text-sky-900 hover:text-sky-600 transition"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            title="Linkedin"
            href="#"
            className="block text-sky-900 hover:text-sky-600 transition"
          >
            <span className="sr-only">Linkedin</span>
            <LinkedinIcon className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            title="Instagram"
            href="#"
            className="block text-sky-900 hover:text-pink-800 transition"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            title="Facebook"
            href="#"
            className="block text-sky-900 hover:text-sky-600 transition"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="w-7 h-7" />
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
