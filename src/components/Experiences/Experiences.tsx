import { BsBoxArrowUpRight } from "react-icons/bs";
const Experiences = () => {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="scroll-mt-16 lg:scroll-mt-24 mb-16 md:mb-24"
    >
      {/*Section title  */}
      <div className="sticky top-0 z-20 mb-4 bg-sky-100/25 px-5 py-4 backdrop-blur flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Experience
        </h2>
        <button className="title_btn group">
          View more{" "}
          <BsBoxArrowUpRight className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </button>
      </div>
      {/* End Section title  */}
      {/* Experience List */}
      <ul aria-label="Experience list" className="flex flex-col gap-6">
        <li>
          <div className="exprnc_card">
            <header className="col-span-full md:col-span-3">
              <span className="uppercase text-xs font-semibold text-slate-600 leading-6 flex">
                2018 - Present
              </span>
            </header>
            <article className=" col-span-full md:col-span-9">
              <div className="mb-2">
                <a
                  href="#"
                  className="text-base leading-tight font-medium hover:text-sky-600"
                >
                  Lead Engineer · EzyCourse
                </a>
                <div className="text-slate-500">Senior Engineer</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                possimus nihil, a obcaecati delectus harum non perferendis ullam
                ex nulla.
              </p>
              <ol aria-label="skills" className="flex flex-wrap gap-2 mt-4">
                <li className="skills_tag">React</li>
                <li className="skills_tag">Next</li>
                <li className="skills_tag">Typescript</li>
                <li className="skills_tag">SQL</li>
                <li className="skills_tag">Aws</li>
              </ol>
            </article>
          </div>
        </li>
        <li>
          <div className="exprnc_card">
            <header className="col-span-full md:col-span-3">
              <span className="uppercase text-xs font-semibold text-slate-600 leading-6 flex">
                2018 - Present
              </span>
            </header>
            <article className=" col-span-full md:col-span-9">
              <div className="mb-2">
                <a
                  href="#"
                  className="text-base leading-tight font-medium hover:text-sky-600"
                >
                  Lead Engineer · EzyCourse
                </a>
                <div className="text-slate-500">Senior Engineer</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                possimus nihil, a obcaecati delectus harum non perferendis ullam
                ex nulla.
              </p>
              <ol aria-label="skills" className="flex flex-wrap gap-2 mt-4">
                <li className="skills_tag">React</li>
                <li className="skills_tag">Next</li>
                <li className="skills_tag">Typescript</li>
                <li className="skills_tag">SQL</li>
                <li className="skills_tag">Aws</li>
              </ol>
            </article>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Experiences;
