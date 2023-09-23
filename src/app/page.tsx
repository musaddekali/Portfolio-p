/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header/Header";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <div className="container  min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:flex-cols lg:gap-6">
        <Header />
        <main className="pt-16 lg:pt-24 lg:py-24">
          {/* About  */}
          <section
            id="about"
            aria-label="About me"
            className="scroll-mt-16 lg:scroll-mt-24 mb-16 md:mb-24"
          >
            <SectionTitle title="About" />
            <div>
              <p className="mb-4">
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I’ve had the
                privilege of building software for an advertising agency, a
                start-up, a student-led design studio, and a huge corporation.
              </p>
              <p>
                My main focus these days is building products and leading
                projects for our clients at Upstatement. In my free time I've
                also released an online video course that covers everything you
                need to know to build a web app with the Spotify API.
              </p>
            </div>
          </section>
          {/* Experience  */}
          <section
            className="scroll-mt-16 lg:scroll-mt-24 mb-16 md:mb-24"
            aria-label="Work experience"
            id="experience"
          >
            <SectionTitle title="Experience" />
            <ul aria-label="Experience list" className="flex flex-col gap-10">
              <li>
                <div className="exp_card grid grid-cols-12 gap-4 p-6 bg-slate-50/25 backdrop-blur rounded-md">
                  <header className="col-span-2">
                    <span className="uppercase text-xs font-semibold text-slate-600 leading-normal flex">
                      2018 - Present
                    </span>
                  </header>
                  <article className="col-span-10">
                    <h3 className="text-base leading-tight font-medium mb-2">
                      Lead Engineer · EzyCourse
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel possimus nihil, a obcaecati delectus harum non
                      perferendis ullam ex nulla.
                    </p>
                    <ol aria-label="skills" className="flex flex-wrap gap-2 mt-4">
                      <li className="px-3 py-1 rounded-full text-xs font-medium bg-sky-200 leading-tight inline-flex items-center">
                        React
                      </li>
                      <li className="px-3 py-1 rounded-full text-xs font-medium bg-sky-200 leading-tight inline-flex items-center">
                        React
                      </li>
                      <li className="px-3 py-1 rounded-full text-xs font-medium bg-sky-200 leading-tight inline-flex items-center">
                        React
                      </li>
                    </ol>
                  </article>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
