import React, { useState } from "react";

function EditArtworkPage() {
    const [title, setTitle] = useState("Serenity in Chaos");
    const [price, setPrice] = useState(250);
    const [description, setDescription] = useState(
        "A vibrant abstract piece reflecting the calm found within life's turmoil."
    );
    const [tags, setTags] = useState("abstract, modern, vibrant, oil painting");
    const [image, setImage] = useState(
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAV6ZlJKlntHjtSTsqdlEF7U6eM8ZXUTyXFEXEACK8Z2stlxUOvBoqP7BEfUnEkuDCEmIh46bCLnixtHovH0NsB0j_dwZVfUwA4omMOoUFtbmOp5ws8uPJefWq8_bbusAZ06Ml9OEbGit3f5Yss7gi74-1YvLVgS1HgRqUUiTdHyTHYSsExfluP0J-piNeyDD_weFw1Tu_WiEsEJq216LIlKFqAMtlwYkmeFOOCIrjqmPMnFt6NG4iPYvSf6syzxutHaraO2ZBkCg8"
    );

    return (
        <div className="bg-slate-50 min-h-screen font-inter">
            <header className="flex items-center justify-between border-b border-b-slate-200 px-10 py-4">
                <div className="flex items-center gap-4 text-[#0d171b]">
                    <svg
                        className="h-8 w-8 text-[#1193d4]"
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                            fill="currentColor"
                        ></path>
                        <path
                            clipRule="evenodd"
                            d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                    <h2
                        className="text-[#0d171b] text-2xl font-bold leading-tight tracking-tighter"
                        style={{ fontFamily: "Newsreader, serif" }}
                    >
                        Tribe Canvas
                    </h2>
                </div>
                {/* ...existing code for nav and profile... */}
            </header>
            <main className="flex-1 px-10 py-12">
                <div className="mx-auto max-w-2xl">
                    <h1
                        className="text-4xl font-bold tracking-tighter mb-8"
                        style={{ fontFamily: "Newsreader, serif" }}
                    >
                        Edit Artwork
                    </h1>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <div
                                    className="w-full bg-center bg-no-repeat bg-cover aspect-[16/9] rounded-lg"
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                                <button
                                    className="mt-2 text-sm font-medium text-[#1193d4] hover:underline"
                                    type="button"
                                >
                                    Change image
                                </button>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-[#0d171b] pb-2"
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-[#1193d4] border border-slate-300 bg-slate-50 h-12 placeholder:text-[#4c809a] px-4 text-base font-normal leading-normal"
                                    id="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-[#0d171b] pb-2"
                                    htmlFor="price"
                                >
                                    Price ($)
                                </label>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-[#1193d4] border border-slate-300 bg-slate-50 h-12 placeholder:text-[#4c809a] px-4 text-base font-normal leading-normal"
                                    id="price"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    className="block text-sm font-medium text-[#0d171b] pb-2"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-[#1193d4] border border-slate-300 bg-slate-50 min-h-36 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
                                    id="description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    className="block text-sm font-medium text-[#0d171b] pb-2"
                                    htmlFor="tags"
                                >
                                    Tags
                                </label>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-[#1193d4] border border-slate-300 bg-slate-50 h-12 placeholder:text-[#4c809a] px-4 text-base font-normal leading-normal"
                                    id="tags"
                                    type="text"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Separate tags with commas.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 pt-4">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-slate-200 text-[#0d171b] text-sm font-bold leading-normal tracking-wide hover:bg-slate-300 transition-colors"
                                type="button"
                            >
                                <span className="truncate">Cancel</span>
                            </button>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-[#1193d4] text-slate-50 text-sm font-bold leading-normal tracking-wide hover:bg-sky-600 transition-colors"
                                type="submit"
                            >
                                <span className="truncate">Save Changes</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default EditArtworkPage;
