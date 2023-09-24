import { BsBoxArrowUpRight } from "react-icons/bs";

const Products = () => {
  return (
    <section
      id="products"
      aria-label="My Products"
      className="scroll-mt-16 lg:scroll-mt-24 mb-16 md:mb-24"
    >
      {/*Section title  */}
      <div className="sticky top-0 z-20 mb-4 bg-sky-100/25 px-5 py-4 backdrop-blur flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Products
        </h2>
        <button className="title_btn group">
          Find out more{" "}
          <BsBoxArrowUpRight className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </button>
      </div>
      {/* End Section title  */}
      {/* Product List */}
      <ul aria-label="Product list" className="flex flex-col gap-8">
        <li>
            <h3>Product list will goes here...</h3>
        </li>
      </ul>
    </section>
  );
};
export default Products;
