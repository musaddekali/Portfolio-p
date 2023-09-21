/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="container  min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:flex-cols lg:gap-6">
        <Header />
        <main className="pt-24 lg:py-24">
          <h1 className="text-primary">main</h1>
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I've also released
            an online video course that covers everything you need to know to
            build a web app with the Spotify API.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p className="mb-4" key={i}>
              When I’m not at the computer, I’m usually rock climbing, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds...
            </p>
          ))}
        </main>
      </div>
    </div>
  );
}
