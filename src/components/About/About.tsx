/* eslint-disable react/no-unescaped-entities */
import { BsBoxArrowUpRight } from "react-icons/bs";
const About = () => {
  return (
    <>
      <section
        id="about"
        aria-label="About me"
        className="scroll-mt-16 lg:scroll-mt-24 mb-16 md:mb-24"
      >
        {/*Section title  */}
        <div className="sticky top-0 z-20 mb-4 -mx-6 lg:mx-0 bg-sky-100/25 px-5 py-4 backdrop-blur flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest">About</h2>
          <button className="title_btn group">
            Explore more{" "}
            <BsBoxArrowUpRight className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </button>
        </div>
        {/* End Section title  */}
        <div>
          <p className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I've also released
            an online video course that covers everything{" "}
            <strong>
              you need to know to build a web app with the Spotify API.
            </strong>
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
