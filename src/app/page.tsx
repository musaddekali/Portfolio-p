import About from "@/components/About/About";
import Experiences from "@/components/Experiences/Experiences";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="container  min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:flex-cols lg:gap-6">
        <Header />
        <main className="pt-16 lg:pt-24 lg:py-24 lg:px-24">
          <About />
          <Experiences />
          <Products />
        </main>
      </div>
    </div>
  );
}
