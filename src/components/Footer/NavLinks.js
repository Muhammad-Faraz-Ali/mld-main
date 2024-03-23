import Link from "./Link";

function NavLinks() {
  return (
    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
      <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
      <ul className="text-md">
        <Link text="Home" link={"/#home"} />
        <Link text="About" link={"/#about"} />
        <Link text="Services" link={"/#services"} />
        <Link text="Clients" link={"/#clients"} />
        <Link text="Contact" link={"/contact#contact"} />
      </ul>
    </div>
  );
}

export default NavLinks;
