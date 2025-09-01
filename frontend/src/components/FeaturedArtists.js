const artists = [
    {
        name: "Ada Lovelace",
        avatar: require("../design/tribe_canvas_homepage/artist1.png"),
    },
    {
        name: "Banksy",
        avatar: require("../design/tribe_canvas_homepage/artist2.png"),
    },
    {
        name: "Yayoi Kusama",
        avatar: require("../design/tribe_canvas_homepage/artist3.png"),
    },
    {
        name: "Jean-Michel Basquiat",
        avatar: require("../design/tribe_canvas_homepage/artist4.png"),
    },
    {
        name: "Frida Kahlo",
        avatar: require("../design/tribe_canvas_homepage/artist5.png"),
    },
];

export default function FeaturedArtists() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Featured Artists
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {artists.map((artist, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img
                                src={artist.avatar}
                                alt={artist.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200 shadow mb-2"
                            />
                            <span className="text-gray-700 font-medium">
                                {artist.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
