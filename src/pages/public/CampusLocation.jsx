import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CampusLocation = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="pb-20 px-6 max-w-7xl mx-auto h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Contact Us</h1>
                        <p className="text-gray-600">
                            Visit our campus to witness the vibrant academic environment and state-of-the-art facilities.
                        </p>
                    </div>

                    <Card className="border-l-4 border-l-indigo-600">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Campus Address</h3>
                                    <p className="text-gray-600 text-sm">
                                        Vignan's Lara Institute of Technology & Science,<br />
                                        Vadlamudi, Chebrolu Mandal,<br />
                                        Guntur District - 522213,<br />
                                        Andhra Pradesh, India.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-indigo-600" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Phone</h3>
                                    <p className="text-gray-600 text-sm">0863 - 2381200, 9440626355</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-indigo-600" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600 text-sm">vignanlara@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Globe className="w-6 h-6 text-indigo-600" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Website</h3>
                                    <a href="https://www.vignanlara.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-sm hover:underline">
                                        www.vignanlara.org
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full md:w-2/3 h-96 md:h-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.736573529187!2d80.55174731487576!3d16.231563588700253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0952629d4601%3A0x864f3a1980b47e3e!2sVignan&#39;s%20LARA%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1706367123456!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vignan's Lara Campus Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default CampusLocation;
