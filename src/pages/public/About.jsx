import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="pb-20">
                {/* Hero Section */}
                <div className="relative py-20 bg-gray-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                        About Vignan's Lara
                    </h1>
                    <p className="max-w-3xl text-xl text-gray-600 leading-relaxed font-light">
                        Established in 2007, Vignan's Lara Institute of Technology & Science in Vadlamudi, Guntur, stands as a premier engineering institution committed to academic excellence and holistic development.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 -mt-10">
                    <img
                        src="/images/carousel1.jpg"
                        alt="Vignan's Lara Campus"
                        className="w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-2xl mb-16"
                    />

                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-indigo-900 font-serif">A Legacy of Excellence</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Approved by AICTE, New Delhi, and affiliated to JNTUK, Kakinada, Vignan's Lara is an ISO 9001:2015 certified institution. We pride ourselves on offering top-tier B.Tech and M.Tech programs across various disciplines, fostering an environment where innovation meets tradition.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our curriculum is designed to not only impart technical knowledge but also to instill ethical values, ensuring our graduates are well-rounded professionals ready to tackle global challenges.
                            </p>
                        </div>
                        <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-indigo-800 mb-6 font-serif">Vision & Mission</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">Vision</h4>
                                    <p className="text-gray-700 italic">
                                        "To evolve into a center of excellence in technical education and research to produce technocrats with global competence and social commitment."
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">Mission</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                        <li>Provide high-quality technical education through creative teaching-learning processes.</li>
                                        <li>Establish state-of-the-art laboratories and research facilities.</li>
                                        <li>Foster industry-institute interaction for better employability.</li>
                                        <li>Inculcate ethical values and social responsibility.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chairman Section */}
                    <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-24 text-white">
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-96 md:h-auto">
                                <img
                                    src="/images/lavu_rathaiah.png"
                                    alt="Dr. Lavu Rathaiah"
                                    className="absolute inset-0 w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/90 via-transparent to-transparent md:via-gray-900/10 md:to-transparent" />
                            </div>
                            <div className="p-10 md:p-16 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold font-serif mb-2">Dr. Lavu Rathaiah</h3>
                                    <p className="text-indigo-400 font-medium uppercase tracking-wider text-sm">Chairman, Vignan Group</p>
                                </div>
                                <blockquote className="text-xl leading-relaxed text-gray-300 italic mb-8 border-l-4 border-indigo-500 pl-6">
                                    "Education is not just about gaining knowledge, it's about learning how to think, apply, and innovate. At Vignan's Lara, we strive to empower students to become the leaders of tomorrow."
                                </blockquote>
                                <p className="text-gray-400">
                                    A visionary educationalist, Dr. Rathaiah has dedicated his life to transforming education in Andhra Pradesh and Telangana, establishing institutions that are benchmarks of quality and discipline.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Be Part of Our Story</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Whether you are an alumnus, student, or faculty member, you play a vital role in our vibrant community.
                        </p>
                        <Link to="/auth/register">
                            <Button size="xl" className="bg-indigo-600 hover:bg-indigo-700 shadow-xl hover:shadow-2xl shadow-indigo-900/20 px-10">
                                Join Our Alumni Network
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
