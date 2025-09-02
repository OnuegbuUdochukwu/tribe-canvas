import React, { useState } from 'react';

const artwork = {
  id: 1,
  title: 'Urban Rhythm',
  artist: 'Anya Okafor',
  artistUrl: '#',
  description:
    "Anya Okafor's work explores the intersection of urban life and artistic expression, capturing the dynamic energy of Lagos through bold colors and abstract forms.",
  price: 25000,
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7FTCu5aJycp3SkbZkr1Fmhlltxx6fNl5mgZ2Q2_xDc5Hp8LqbcBO-1n2rsQrbsdwmLvzFLKV1HA20EnZn_hJVsmc2rsIE-H2lf5O2yppf85Wp-VKseALpgTGa77e-P6rBYF23qxzxzXODylX0fyNfccbg0gypeg3jXtQtP5gqQX5e0Y3bFtd9h9x8od4CJ2mUi9wOw9l5To6UOyB90wG0iM80BA52Gck9pThQaAVhZapBk5vw9NWwmxCJH-GCJ904DawXGuc9fDE',
  sizes: ['12" x 16"', '18" x 24"', '24" x 36"'],
  frames: ['No Frame', 'Black Wood', 'White Wood', 'Natural Oak'],
  details:
    "This vibrant abstract print captures the essence of Lagos' bustling energy, blending bold colors and dynamic shapes to evoke the city's vibrant spirit. Printed on high-quality archival paper with pigment-based inks, this piece adds a touch of modern sophistication and lasting color to any space.",
};

const recommendations = [
  {
    title: 'Eko Motion',
    artist: 'Jide Adebayo',
    price: 22000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyuwDF-hpFxbZFbEBgdcltMZMbvju8WU0aFRWI-a9qkyhIdTpGMARaZGJkut2FSMitCpn3MEYSGJwKXPHt_uHYDln1J-8JaIZy9a0piTvJIL8QB6JeCtY0sifMpx0YO1jD2sJcLsCVj-QFpfENDo_94-WssPATt3SRgWsvxZcNxZjOOmpGhzYrVvXhfRawMhOZQqOSS9LBAgGBx9Qwq5l5Sgx_3CpzuiSGKhx20ZuBeziQNMlsPiWDYpDOXcS9OR4Gyp40H0N5LCQ',
  },
  {
    title: 'Coastal Breeze',
    artist: 'Sade Bello',
    price: 28000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkAS7aiAeyV9UezuBzL1pg3ATKOqbsysxaim1B6_u5Up0-gGYTf4-EENM2lPh6xBITdtuMWh8zFUfCGEYhzgAQBmu91Ec2j07voMRZGYO9tBX185YkUrqUQZrHkvsI2YlfQ2TMtUPMuyr-_0BrkhspyRkx9jgMnabLGmTb6-sUoLo_fBHS8Nc4EeVSb5kEk5sXbzYKg4jFF3NxPRt-p69qwRzJEJaRcHTMIAVaKclyDK6PHKyktunbpkB8M65T_jas51BVSD1QdUM',
  },
  {
    title: 'Oasis Bloom',
    artist: 'Femi Adekunle',
    price: 31000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0mxjj0ZFy1pQHNzQ5-FDkdX_eOBJV0q_UNWjhCEamcVDHWE3OS5jqxHRKtvoHh_srOifHLoKs8p-KC673ZP0xT79qdMbaqeuZyMUadnshoh-28YJhCZAYkYjxw9hkemFOZ1IAj4id5AaTrz1XyWCm3Llry_gQ0jFmGVlaSO4yXTEbEjMvh3o3EvehVFYnjEvyGCd3H-_I7YNbD09YA4PNb9RjIubhmwnmW1I10LM1Nb6K-HifGTdu0QgXii2EYON4rgqL4WbXCug',
  },
];

function ProductPage() {
  const [size, setSize] = useState(artwork.sizes[0]);
  const [frame, setFrame] = useState(artwork.frames[0]);
  const [tab, setTab] = useState('Details');

  return (
    <div className="bg-slate-50 min-h-screen font-['Newsreader'] text-gray-800">
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-110"
                  style={{ backgroundImage: `url(${artwork.image})` }}
                ></div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{artwork.title}</h1>
              <p className="mt-2 text-lg text-gray-600">
                By{' '}
                <a className="font-medium text-[#1193d4] hover:underline" href={artwork.artistUrl}>
                  {artwork.artist}
                </a>
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">{artwork.description}</p>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900">₦{artwork.price.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</h2>
                <p className="mt-1 text-sm text-gray-500">Starting price</p>
              </div>
              <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="size">Size</label>
                  <select
                    className="mt-1 block w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-base focus:border-[#1193d4] focus:outline-none focus:ring-[#1193d4] sm:text-sm"
                    id="size"
                    name="size"
                    value={size}
                    onChange={e => setSize(e.target.value)}
                  >
                    {artwork.sizes.map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="frame">Frame Style</label>
                  <select
                    className="mt-1 block w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-base focus:border-[#1193d4] focus:outline-none focus:ring-[#1193d4] sm:text-sm"
                    id="frame"
                    name="frame"
                    value={frame}
                    onChange={e => setFrame(e.target.value)}
                  >
                    {artwork.frames.map(f => (
                      <option key={f}>{f}</option>
                    ))}
                  </select>
                </div>
                <button
                  className="flex w-full items-center justify-center rounded-lg border border-transparent bg-[#1193d4] px-8 py-3 text-base font-medium text-white shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:ring-offset-2"
                  type="submit"
                >
                  Add to Cart
                </button>
                <button
                  className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:ring-offset-2"
                  type="button"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9.5V14.5C3 15.6046 3.89543 16.5 5 16.5H6.5M16 11.5L21 9V15L16 12.5V11.5ZM3 9.5L8 7V17L3 14.5V9.5ZM8 7L13 4.5V19.5L8 17V7Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M16 11.5L8 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  View on Your Wall
                </button>
              </form>
            </div>
          </div>
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                {['Details', 'About the Artist', 'Shipping & Returns'].map(t => (
                  <button
                    key={t}
                    className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                      tab === t
                        ? 'border-[#1193d4] text-[#1193d4]'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </nav>
            </div>
            <div className="py-10">
              {tab === 'Details' && (
                <p className="text-base text-gray-700">{artwork.details}</p>
              )}
              {tab === 'About the Artist' && (
                <p className="text-base text-gray-700">Anya Okafor is a contemporary Nigerian artist known for her vibrant abstract works that reflect the pulse of urban life. Her art has been exhibited in galleries across Africa and Europe.</p>
              )}
              {tab === 'Shipping & Returns' && (
                <p className="text-base text-gray-700">Shipping within Nigeria is free. International shipping rates apply. Returns are accepted within 14 days of delivery for undamaged artworks.</p>
              )}
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">You Might Also Like</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {recommendations.map((rec, idx) => (
                <div className="group relative" key={idx}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <div
                      className="h-full w-full bg-cover bg-center object-cover object-center group-hover:opacity-75"
                      style={{ backgroundImage: `url(${rec.image})` }}
                    ></div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{rec.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">By {rec.artist}</p>
                  <p className="mt-1 text-base font-medium text-gray-800">₦{rec.price.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
