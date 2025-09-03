const artists = [
    {
        name: "Ada Lovelace",
        avatar: require("../assets/tribe_canvas_homepage/artist1.png"),
        role: "Digital Visionary",
    },
    {
        name: "Banksy",
        avatar: require("../assets/tribe_canvas_homepage/artist2.png"),
        role: "Street Artist",
    },
    {
        name: "Yayoi Kusama",
        avatar: require("../assets/tribe_canvas_homepage/artist3.png"),
        role: "Avant-garde Painter",
    },
    {
        name: "Jean-Michel Basquiat",
        avatar: require("../assets/tribe_canvas_homepage/artist4.png"),
        role: "Neo-expressionist",
    },
    {
        name: "Frida Kahlo",
        avatar: require("../assets/tribe_canvas_homepage/artist5.png"),
        role: "Surrealist Icon",
    },
];

export default function FeaturedArtists() {
    return (
        <section className="py-20 bg-[#f4e9d8]">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-3xl font-bold text-[#0d1e42]">
                    Featured Artists
                </h2>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
                    {artists.map((artist, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={artist.avatar}
                                    alt={artist.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-[#0d1e42]">
                                {artist.name}
                            </h3>
                            <p className="text-[#5a5a5a]">{artist.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
