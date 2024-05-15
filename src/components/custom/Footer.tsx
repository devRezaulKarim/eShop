import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

type footerLink = {
  url: string;
  name: string;
};
interface Links {
  title: string;
  footerLinks: footerLink[];
}

const Footer = () => {
  const companyLinks: Links = {
    title: "company",
    footerLinks: [
      { url: "#", name: "About" },
      { url: "#", name: "Features" },
      { url: "#", name: "Works" },
      { url: "#", name: "Career" },
    ],
  };
  const helpLinks: Links = {
    title: "help",
    footerLinks: [
      { url: "#", name: "Customer Support" },
      { url: "#", name: "Delivery Details" },
      { url: "#", name: "Terms & Conditions" },
      { url: "#", name: "Privacy Policy" },
    ],
  };
  const FAQLinks: Links = {
    title: "faq",
    footerLinks: [
      { url: "#", name: "Account" },
      { url: "#", name: "Manage Deliveries" },
      { url: "#", name: "Orders" },
      { url: "#", name: "Payments" },
    ],
  };
  const resourcesLinks: Links = {
    title: "resources",
    footerLinks: [
      { url: "#", name: "Free eBook" },
      { url: "#", name: "Development Tutorial" },
      { url: "#", name: "How to - Blog" },
      { url: "#", name: "Youtube Playlist" },
    ],
  };
  return (
    <footer className="container max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-6 py-10 px-4 lg:px-0">
        <div className="col-span-2 lg:pr-10 ">
          <Link
            href={"/"}
            className="cursor-pointer text-3xl lg:text-4xl font-black"
          >
            eSHOP
          </Link>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            ad.
          </p>
          <ul className="flex gap-4">
            <li>
              <Link
                href={"#"}
                className="text-xl border border-gray-400 block p-2 rounded-full hover:text-white hover:bg-black duration-200"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-xl border border-gray-400 block p-2 rounded-full hover:text-white hover:bg-black duration-200"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-xl border border-gray-400 block p-2 rounded-full hover:text-white hover:bg-black duration-200"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-xl border border-gray-400 block p-2 rounded-full hover:text-white hover:bg-black duration-200"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>

        <FooterLinks links={companyLinks} />

        <FooterLinks links={helpLinks} />

        <FooterLinks links={FAQLinks} />

        <FooterLinks links={resourcesLinks} />
      </div>
      <div className="border-t py-5 text-gray-500">
        <p>eShop © 2024 all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
