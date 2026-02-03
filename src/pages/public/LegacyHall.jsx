import { Link } from "react-router-dom";

const LegacyHall = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="pb-20">
                {/* Hero section */}
                <div className="bg-indigo-900 text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Legacy Hall</h1>
                    <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light leading-relaxed">
                        Honoring the milestones, accreditations, and historic moments that mark our journey of excellence at Vignan's Lara.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 -mt-10">
                    {/* Accreditations Section - Floating Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                img: "/images/nba_logo.png",
                                alt: "NBA Accreditation",
                                title: "NBA Accredited",
                                desc: "Recognized for excellence in technical education across multiple undergraduate programs."
                            },
                            {
                                img: "/images/naac_logo.png",
                                alt: "NAAC A+ Grade",
                                title: "NAAC A+ Grade",
                                desc: "Awarded the prestigious A+ grade, reflecting our superior standards in quality and performance."
                            },
                            {
                                img: "/images/aicte_logo.png",
                                alt: "AICTE Approved",
                                title: "AICTE Approved",
                                desc: "Approved by the All India Council for Technical Education, ensuring national-level compliance."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-32 w-full flex items-center justify-center mb-6">
                                    <img src={item.img} alt={item.alt} className="max-h-full max-w-full object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Our Journey</span>
                            <h2 className="text-3xl font-bold text-gray-900 mt-2 font-serif">Milestones in History</h2>
                        </div>

                        <div className="space-y-12">
                            {[
                                { year: "2007", title: "Inception", desc: "Established in Vadlamudi, Guntur, with a vision to redefine technical education." },
                                { year: "2022", title: "NBA Accreditation", desc: "A major milestone validating our commitment to quality education." },
                                { year: "2022", title: "NAAC A+ Accreditation", desc: "Achieved the highest grade, setting a benchmark in the region." },
                                { year: "2023", title: "Autonomous Status", desc: "Granted UGC Autonomous status, enabling academic freedom and innovation." }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                                    <div className="md:w-1/3 text-center md:text-right">
                                        <span className="text-5xl font-bold text-indigo-100 font-serif">{item.year}</span>
                                    </div>
                                    <div className="md:w-2/3 border-l-4 border-indigo-500 pl-6 py-2">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-lg text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Campus Life / Event Section */}
                    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-inner mb-20">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="p-10 md:p-16">
                                <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">Campus Life</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif">
                                    Vibrant & Dynamic Atmosphere
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Life at Vignan's Lara, Vadlamudi, is a perfect blend of academic rigor and cultural vibrancy. Our campus in Guntur is a hub of energy, creativity, and talent.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    From flash mobs to tech fests, our students engage in activities that foster team spirit and leadership. The lush green campus provides an inspiring backdrop for holistic growth.
                                </p>
                            </div>
                            <div className="h-full min-h-[400px]">
                                <img
                                    src="/images/college_event.png"
                                    alt="Campus Event - Flashmob"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegacyHall;
