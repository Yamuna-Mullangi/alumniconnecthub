import Topbar from "@/components/layout/Topbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center px-6">
                <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </header>

            <main className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">
                    About Vignan's Lara
                </h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p className="lead text-xl text-gray-800 font-medium">
                        Vignan's Lara Institute of Technology & Science, established in 2007, is a premier engineering institution located in Vadlamudi, Guntur district, Andhra Pradesh.
                    </p>

                    <img
                        src="/images/carousel1.jpg"
                        alt="Vignan's Lara Campus"
                        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg my-8"
                    />

                    <p>
                        The college is approved by AICTE, New Delhi and affiliated to JNTUK, Kakinada. It is an ISO 9001:2015 certified institution. The college offers B.Tech programmes in CSE, ECE, EEE, IT, Mech, Civil, CSE (AI&ML), CSE (DS) and M.Tech programmes in CSE, VLSI & ES, PE & ED, and Thermal Sciences.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Vision & Mission</h2>
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                        <h3 className="font-bold text-indigo-900 mb-2">Vision</h3>
                        <p className="mb-4">
                            To evolve into a center of excellence in technical education and research to produce technocrats with global competence and social commitment.
                        </p>

                        <h3 className="font-bold text-indigo-900 mb-2">Mission</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To provide high-quality technical education through a creative teaching-learning process.</li>
                            <li>To establish state-of-the-art laboratories and research facilities.</li>
                            <li>To foster industry-institute interaction for better employability.</li>
                            <li>To inculcate ethical values and social responsibility among students.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link to="/auth/register">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                            Join Our Alumni Network
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default About;
