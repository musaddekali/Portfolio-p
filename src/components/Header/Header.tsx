import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../Icons";

const LinkItem = ({
  href = "#",
  text = "Link text",
  isActive = false,
}: {
  href: string;
  text: string;
  isActive?: boolean;
}) => (
  <a
    className={`group flex items-center py-3 ${isActive ? "active_link" : ""}`}
    href={href}
  >
    <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none"></span>
    <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500  group-hover:text-gray-800 group-focus-visible:text-gray-800">
      {text}
    </span>
  </a>
);

const Header = () => {
  const socialItems = [
    {
      label: "Linkedin",
      icon: <LinkedinIcon className="w-7 h-7" />,
      link: "",
    },
    {
      label: "Github",
      icon: <GithubIcon className="w-7 h-7" />,
      link: "",
    },
    {
      label: "Instagram",
      icon: <InstagramIcon className="w-7 h-7" />,
      link: "",
    },
    {
      label: "Facebook",
      icon: <FacebookIcon className="w-7 h-7" />,
      link: "https://facebook.com",
    },
  ];
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
              <LinkItem href="#about" text="About" />
            </li>
            <li>
              <LinkItem href="#experience" text="Experience" />
            </li>
            <li>
              <LinkItem href="#products" text="Products" />
            </li>
          </ul>
        </nav>
      </div>
      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        {socialItems.map((social, i) => (
          <li key={i}>
            <a
              title={social.label}
              href={social.link || "#"}
              target="_blank"
              className="block text-sky-900 hover:text-sky-600 transition"
            >
              <span className="sr-only">{social.label}</span>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
