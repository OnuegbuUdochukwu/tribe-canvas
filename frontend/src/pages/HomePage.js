import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center" 
                     style={{
                         backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNC1_4FoQAdwyx-Kg3HG7HqmbTuohHlPYDfH6Dvc1WknnU94hsa74Ff02qq2aR1rUgjDu7CszgXGYd32t0DiQqW9PYJ223PNehSUlS5o6RR8Z50i8bEsjEy0qyyPwdcYMfQbHl3_Iy9NCLqAxrsVKj85PhjwE7rP33Q84oR9wupZTmj8Eo2c0QNsVqv_RpxPGQ68qQC59BpQhwfqr0MZteLEW_zjqfJ3FaVUla_Jz1uWJdm6D76CQ07BO13HsM4Xf5nzLgKJBTg28")'
                     }}>
                <div className="container mx-auto flex h-full flex-col items-center justify-center px-6 text-center text-white">
                    <h1 className="text-4xl font-bold leading-tight md:text-6xl" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Discover the Soul of Nigeria Through Art
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl">
                        A curated platform connecting you with the vibrant and diverse art scene of Nigeria.
                    </p>
                    <Link to="/gallery" className="mt-8 rounded-full bg-[var(--terracotta-orange)] px-8 py-3 text-lg font-bold text-white transition-all hover:opacity-90">
                        Explore Art
                    </Link>
                </div>
            </section>

            {/* Featured Artists Section */}
            <section className="py-20 bg-[var(--warm-sand)]">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-3xl font-bold text-[var(--deep-blue)]">Featured Artists</h2>
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
                        <div className="group text-center">
                            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                                <img 
                                    alt="Aisha Bello" 
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUy8CFR_LxzLPC3HH_j_hw6zxKsL_R_lOcKC86kUbg5qj31upVDbC60CSUkfmUn77DsPvye-8kUe_MiyyrG_6yYceNfRMWUJ1-HCc1I3AhZv6UT5hA1ZeIKzgGmqDlmzdHhdgazFm2tQROI438ww4O7qnpPYewB2M_tKXSKW4NiWdpZlBJ6dEHbCSdq_ZuO3CYbK-36vlSTESBEdrtICPp58l1romanaS1Yy4EUFkPWSwlbZ-cW06MtIpP59q3Ebi5dwS5t5JLmi8"
                                />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-[var(--deep-blue)]">Aisha Bello</h3>
                            <p className="text-[var(--body-text)]">Contemporary Painter</p>
                        </div>
                        <div className="group text-center">
                            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                                <img 
                                    alt="Chukwudi Okafor" 
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCFkvZFZBZXXqcQANRLuG2xeeMl5zRL-O-gExtlzTLzGbf4llII5Fh9DlKQSreH6VQ3p-3FLJtlfpeqHV6AsmwQqxAo9IPmgp3a_to_ZQru33HQqhDHb4nB-R5DGTlo_shVjaxf10atT1atpulpgExfXgLHyj1j5sBhGzlzgwrwYei5cdS9ng8g8z5acMelN5COOAv8SwGg866R18h9J05flJITv00yntl5MsFrgUj31cyXxPF_K09WJQZng-ut_AxZTGXMxMzLcM"
                                />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-[var(--deep-blue)]">Chukwudi Okafor</h3>
                            <p className="text-[var(--body-text)]">Sculptor</p>
                        </div>
                        <div className="group text-center">
                            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                                <img 
                                    alt="Ngozi Eze" 
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPj1NzOU5nCQwZXkBnEbhgbPzmh7C9_AA4UUji-E_I6GbvHtdlthhhhi06OMx-WExV_Wik2m2mY9Cu2G6F79rh9khxF4MrGwjOJrc8LscaprPwklOZo_veByUu7vDFc-DndxC_O5U2fSGJ6Qq6VOXrWFObSHwBKxdAUydLmFiVbT59yKUMcGtjzK7bWw7djko9GtidwOd2X1FX7_Jv7Pinf2IwaRAdVOuE_SRqiZPY-MfuS-lK_qfFWGeCOF-gqtJ_fBxX3ybGdTY"
                                />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-[var(--deep-blue)]">Ngozi Eze</h3>
                            <p className="text-[var(--body-text)]">Mixed Media Artist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artwork Collection Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-3xl font-bold text-[var(--deep-blue)]">Explore Our Collection</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="group overflow-hidden rounded-lg shadow-lg">
                            <div className="relative">
                                <img 
                                    alt="Artwork" 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSmVCbe2m3k6oEobImvGu7dYBZc0gyz95kytHEDAusX9Va86hJ3BeG0c88KVUHLo6JA5Z4HXtoAokLdd6SpeYuDc4wZtioqdUUgTsfY_uYwikCRt-YFqwqtvtC17pcUeHOxv2b_PD9RfeQNqTbznVjMPLwmoln4CvWDKq1MJfFRHXXokrzvxcXc6SzyfnyPnWf6hkXyAqzSuJuL9JukcSsceQrp7c1O5S_JWtKkDBOm_AfQ4r5Z-8WS7aVfc8NLoaD1URhH7SiTh0"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="font-bold text-white">Ethereal Dreams</h3>
                                    <p className="text-sm text-gray-200">By Jide Adenuga</p>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden rounded-lg shadow-lg">
                            <div className="relative">
                                <img 
                                    alt="Artwork" 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGeF4ec0LqOqPXCKUXVn2-B6o562CfaEy82-vRVKM-d6SCTiL-T2MoQqdksBk4-uSV3q9ZecqbEhLz3GWClpnqSRQS7owuvy4BHGmbn_9Y1DXKOWzhc3cyNIIiz2MWDQEGi_5x8GTgflVA7Zq8pG9Sjn8jfQW2MFBTdq11cT3q75o9BHOl8pf9yN9A1zCVdlzOO6djeduP7wUnUY0XCnceqScEac4yqNMY8OrCpg6Ods4GSSu9JbeXLxWNpDwsNfmkPvQGJw8_90"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="font-bold text-white">Urban Pulse</h3>
                                    <p className="text-sm text-gray-200">By Fatima Lawal</p>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden rounded-lg shadow-lg">
                            <div className="relative">
                                <img 
                                    alt="Artwork" 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKnLqOCh0m7cGKar202t54e8RitzaFAJ5PLTp77tYO4Eaoor8nEFAZEbB9DmBBXbBl9-97SbmswW1BGyhusR9gb1Hp1E0bLxxUwrgfyARyvUK-hDtRxUPsI8CkyvUrH_BP1ulfCbiWjXezmY4YsdNn4WZvmaJuB87Q6g6lZhgSEas-zCQVpOE1LU6-8SfaA5bTlYNnBi9rHj3gCu48FnOrWQkQIKNYJ6SMsjpgxzKE7v2VFTfLZCdjwCV6h4MISCMsMVfHYgn3Gz4"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="font-bold text-white">Ancestral Voices</h3>
                                    <p className="text-sm text-gray-200">By Emeka Okoro</p>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden rounded-lg shadow-lg">
                            <div className="relative">
                                <img 
                                    alt="Artwork" 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5MaDq8B4DUrvsIp4UFuJqU7Zk_30F-kbOgN7KIEDv5HyB40PPg8xF_gBtKBTzBBQ073LcvOjE1kut85zgDOFVr-iEhE14nqgIobcON3agqdbWqbpO1hUXWQj9Sbm7SPQAXfFLwiS-7nwWlK58ZFBx6Mq2_N8BNTV5pVExHJdKm6QPD26BFLLP3GUp_BO57sLtPmb8iQDcP1Mjjq0-lmn2WmYxSuV0xxRsaLWQ7iCdLOWmtP_QUsJLxjYYdimS9cKv7weEKlyztOw"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="font-bold text-white">Golden Horizon</h3>
                                    <p className="text-sm text-gray-200">By Aisha Bello</p>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden rounded-lg shadow-lg">
                            <div className="relative">
                                <img 
                                    alt="Artwork" 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBns5ug7llmihwpULk6Jwr1YoBF2y99f5zKuyAeJ0gCzt5e5veAarcoYyicU6V_CgFdFjDFpNzToWgPrXYvOcOCctNGPtSy5nWjKOcRgQiIuI9ZgrABUfWcfLb024dfJlsRE83i_C1MM7VY1TjhyHXHZpUl46dnspBW3QJCTetJuwmqZzxs1RRUQ2Hs4B6GX4KCrKsptMIjj7P-w8ZER9aa2db8J4-1qHQYvFhd_S9W8o2XjljLi9hSEUwdhlAiFrik8osss7TxgvU"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="font-bold text-white">Market Day</h3>
                                    <p className="text-sm text-gray-200">By Ngozi Eze</p>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden rounded-lg shadow-lg">
                            <div className="relative">
                                <img 
                                    alt="Artwork" 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClB15_s8i0d2RP1eVCOjZmjg0DYpmGBcb2fk-wZuCWtVXTrBNM76iCsP27Kx0v5TC0bm6yEGf5oHHB_nY2vfQuQsQOgRC5aZJ848AX0Am--RFYSn2EUisqcnQF7FnETdyho-Gb5sbNKaZkga0yUOONQr7OIKFv2WKK72IZYK_pYgTr8SY1NTxJrt1SajymR0kjzlyGvPRvD5VY8mDHNLq-Hn7ZjVQUuQ4vaAx63eMaa_wOTwcAYFJbYOyf9DWj_MM72x8C683b0j4"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="font-bold text-white">Celebration</h3>
                                    <p className="text-sm text-gray-200">By Chukwudi Okafor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
