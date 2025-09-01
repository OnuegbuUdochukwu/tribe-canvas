const artworks = [
    {
        title: "Dreamscape",
        artist: "Ada Lovelace",
        image: require("../design/tribe_canvas_homepage/artwork1.png"),
        price: "1.2 ETH",
    },
    {
        title: "Urban Jungle",
        artist: "Banksy",
        image: require("../design/tribe_canvas_homepage/artwork2.png"),
        price: "2.5 ETH",
    },
    {
        title: "Infinity Dots",
        artist: "Yayoi Kusama",
        image: require("../design/tribe_canvas_homepage/artwork3.png"),
        price: "0.9 ETH",
    },
    {
        title: "Neo Expression",
        artist: "Jean-Michel Basquiat",
        image: require("../design/tribe_canvas_homepage/artwork4.png"),
        price: "3.1 ETH",
    },
    {
        title: "Viva La Vida",
        artist: "Frida Kahlo",
        image: require("../design/tribe_canvas_homepage/artwork5.png"),
        price: "1.8 ETH",
    },
    {
        title: "Color Burst",
        artist: "Ada Lovelace",
        image: require("../design/tribe_canvas_homepage/artwork6.png"),
        price: "1.0 ETH",
    },
];

export default function ArtworkGrid() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    Featured Artworks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {artworks.map((art, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                        >
                            <img
                                src={art.image}
                                alt={art.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {art.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        by {art.artist}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-indigo-600 font-bold">
                                        {art.price}
                                    </span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
