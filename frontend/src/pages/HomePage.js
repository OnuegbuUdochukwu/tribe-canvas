import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturedArtists from "../components/FeaturedArtists";
import ArtworkGrid from "../components/ArtworkGrid";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <FeaturedArtists />
            <ArtworkGrid />
            <Footer />
        </div>
    );
}
