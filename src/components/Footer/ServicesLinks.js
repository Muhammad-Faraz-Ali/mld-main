import Link from "./Link";

function ServicesLinks() {
  return (
    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto w-52">
      <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
      <ul className="text-md">
        <Link text="Web Development" link="/#services" />
        <Link text="Mobile App Development" link="/#services" />
        <Link text="DevOps/Cloud Computing" link="/#services" />
        <Link text="Marketing Services" link="/#services" />
        <Link text="Generative AI" link="/#services" />
      </ul>
    </div>
  );
}

export default ServicesLinks;
