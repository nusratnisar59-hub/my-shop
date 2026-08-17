function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to MyShop
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Best products at best prices.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Shop Now
        </button>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="border rounded-lg p-6 text-center">
            <h3 className="font-bold text-lg">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Hum fast delivery karte hain.
            </p>
          </div>

          <div className="border rounded-lg p-6 text-center">
            <h3 className="font-bold text-lg">Best Quality</h3>
            <p className="text-gray-600 mt-2">
              Best quality products.
            </p>
          </div>

          <div className="border rounded-lg p-6 text-center">
            <h3 className="font-bold text-lg">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Hum hamesha help ke liye available hain.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;