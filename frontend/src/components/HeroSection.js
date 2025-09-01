export default function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-100 py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: Headline and CTA */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Discover, Collect, and Sell{" "}
                        <span className="text-indigo-600">Unique Artworks</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Tribe Canvas is the leading marketplace for digital art.
                        Explore exclusive collections from top artists and
                        creators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
                            Explore Gallery
                        </button>
                        <button className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                            Become an Artist
                        </button>
                    </div>
                </div>
                {/* Right: Hero Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                        src={require("../design/tribe_canvas_homepage/hero-art.png")} // Replace with actual image path
                        alt="Hero Art"
                        className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
