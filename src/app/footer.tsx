import Link from "next/link";

const Footer = () => {
  return (
    <div className="squeezetainer py-10 flex flex-col items-center gap-8 bg-text text-gray-400">
      <span className="tracking-widest text-4xl">portfolio</span>
      <div className="flex gap-8 max-xs:flex-col">
        <Link className="hover:text-white text-center" href="/#about">
          ABOUT
        </Link>
        <Link className="hover:text-white text-center" href="/#projects">
          PROJECTS
        </Link>
        <Link className="hover:text-white text-center" href="/#contact">
          CONTACT
        </Link>
      </div>

      <span>marcoeboone@outlook.com</span>
    </div>
  );
};

export default Footer;
