export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-700 font-semibold text-lg mb-2 md:mb-0">
                    Tribe Canvas
                </div>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <button
                        className="hover:text-indigo-600 transition"
                        type="button"
                    >
                        About
                    </button>
                    <button
                        className="hover:text-indigo-600 transition"
                        type="button"
                    >
                        Contact
                    </button>
                    <button
                        className="hover:text-indigo-600 transition"
                        type="button"
                    >
                        Privacy Policy
                    </button>
                </div>
                <div className="text-gray-400 text-xs">
                    &copy; {new Date().getFullYear()} Tribe Canvas. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
