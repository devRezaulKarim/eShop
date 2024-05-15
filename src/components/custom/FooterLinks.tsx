import Link from "next/link";

type footerLink = {
  url: string;
  name: string;
};

interface Links {
  title: string;
  footerLinks: footerLink[];
}

interface LinkProps {
  links: Links;
}

const FooterLinks = ({ links }: LinkProps) => {
  const { title, footerLinks } = links;
  return (
    <div className="pt-2 mt-8 lg:mt-0">
      <h3 className="uppercase text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-4">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
