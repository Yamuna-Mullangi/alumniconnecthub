import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LegacyHall = () => {
    return (
        <div className="min-h-screen bg-white">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center px-6">
                <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </header>

            <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Legacy Hall</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Honoring the milestones and historic moments that defined Vignan's Lara Institute of Technology & Science.
                    </p>
                </div>

                <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-0 md:mx-auto max-w-4xl space-y-12">
                    {[
                        {
                            year: "2007",
                            title: "Inception",
                            description: "Vignan's Lara Institute of Technology & Science was established with a vision to provide quality technical education.",
                            image: "/images/legacy/2007.jpg"
                        },
                        {
                            year: "2011",
                            title: "First Batch Graduated",
                            description: "The pioneering batch of students successfully graduated, marking the beginning of our alumni network.",
                            image: "/images/legacy/2011.jpg"
                        },
                        {
                            year: "2015",
                            title: "NBA Accreditation",
                            description: "Received NBA accreditation for multiple undergraduate programs, validating our educational standards.",
                            image: "/images/legacy/2015.jpg"
                        },
                        {
                            year: "2018",
                            title: "Autonomy Status",
                            description: "Granted Autonomous status by UGC, empowering us to design our own curriculum and evaluation systems.",
                            image: "/images/legacy/2018.jpg"
                        },
                        {
                            year: "2022",
                            title: "NAAC A+ Grade",
                            description: "Achieved the prestigious NAAC A+ accreditation, a testament to our ongoing commitment to excellence.",
                            image: "/images/legacy/2022.jpg"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>

                            <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="flex-1 text-right hidden md:block">
                                    {index % 2 === 0 && (
                                        <>
                                            <span className="text-5xl font-bold text-indigo-100 font-serif block mb-2">{item.year}</span>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </>
                                    )}
                                </div>

                                <div className="w-8 h-8 rounded-full bg-indigo-600 border-4 border-white shadow-md z-10 hidden md:block absolute left-1/2 -translate-x-1/2"></div>

                                <div className="flex-1">
                                    <div className="md:hidden">
                                        <span className="text-4xl font-bold text-indigo-200 font-serif block mb-1">{item.year}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    </div>
                                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md group">
                                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white/50 text-4xl font-serif">
                                            {item.year}
                                        </div>
                                    </div>
                                    <div className="md:hidden mt-2">
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>

                                    <div className="hidden md:block">
                                        {index % 2 !== 0 && (
                                            <div className="text-left">
                                                <span className="text-5xl font-bold text-indigo-100 font-serif block mb-2">{item.year}</span>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default LegacyHall;
