export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container">
        <div className="color_check py-16">
          <div className="flex flex-col gap-2">
            <div className="bg-red sm:bg-primary md:bg-green lg:bg-yellow xl:bg-primary-lightest xxl:bg-purple text-white p-5">
              <button>Responsive test</button>
            </div>
            <div>
              <button className="btn_primary">Hello Button</button>
            </div>
            <h1 className="bg-primary text-white px-2 py-1 rounded mb-2 text-xs">
              Hello World
            </h1>
            <h1 className="bg-primary-light text-white px-2 py-1 rounded mb-2 text-sm">
              Hello World
            </h1>
            <h1 className="bg-primary-lightest text-white px-2 py-1 rounded mb-2 text-base">
              Hello World
            </h1>
            <h1 className="bg-primary-dark text-white px-2 py-1 rounded mb-2 text-lg">
              Hello World
            </h1>
            <h1 className="bg-primary-darkest text-white px-2 py-1 rounded mb-2 text-xl">
              Hello World
            </h1>
            <h1 className="bg-primary-darkest text-white px-2 py-1 rounded mb-2 text-2xl">
              Hello World
            </h1>
            <h1 className="bg-primary-darkest text-white px-2 py-1 rounded mb-2 text-3xl">
              Hello World
            </h1>
            <h1 className="bg-primary-darkest text-white px-2 py-1 rounded mb-2 text-4xl">
              Hello World
            </h1>
            <h1 className="bg-primary-darkest text-white px-2 py-1 rounded mb-2 text-5xl">
              Hello World
            </h1>
            <h1 className="bg-primary-darkest text-white px-2 py-1 rounded mb-2 text-6xl">
              Hello World
            </h1>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex gap-2">
            <div className="p-6 rounded-full bg-gray-50"></div>
            <div className="p-6 rounded-full bg-gray-100"></div>
            <div className="p-6 rounded-full bg-gray-200"></div>
            <div className="p-6 rounded-full bg-gray-300"></div>
            <div className="p-6 rounded-full bg-gray-400"></div>
            <div className="p-6 rounded-full bg-gray-500"></div>
            <div className="p-6 rounded-full bg-gray-600"></div>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex gap-2">
            <div className="p-6 rounded-full bg-red"></div>
            <div className="p-6 rounded-full bg-green"></div>
            <div className="p-6 rounded-full bg-blue-lite"></div>
            <div className="p-6 rounded-full bg-blue-dark"></div>
            <div className="p-6 rounded-full bg-purple"></div>
            <div className="p-6 rounded-full bg-yellow"></div>
            <div className="p-6 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
