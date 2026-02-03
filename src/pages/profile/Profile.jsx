import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, GraduationCap, Mail, Globe, Linkedin, FileText } from "lucide-react";

// Mock user data fetcher
const getUser = (id) => ({
    id,
    name: "Jane Smith",
    role: "Senior Software Engineer",
    company: "Google",
    gradYear: "2018",
    degree: "B.S. Computer Science",
    location: "San Francisco, CA",
    avatar: "https://i.pravatar.cc/150?u=jane",
    bio: "Passionate about building scalable distributed systems. Previously worked at Amazon and Microsoft. Love hiking and photography.",
    skills: ["React", "Node.js", "System Design", "Cloud Computing", "Python"],
    experience: [
        {
            role: "Senior Software Engineer",
            company: "Google",
            period: "2021 - Present",
            description: "Leading the development of new cloud infrastructure tools."
        },
        {
            role: "Software Engineer",
            company: "Amazon",
            period: "2018 - 2021",
            description: "Worked on the Prime Video team improving streaming quality."
        }
    ],
    education: [
        {
            school: "Massachusetts Institute of Technology",
            degree: "B.S. Computer Science",
            period: "2014 - 2018"
        }
    ]
});

const Profile = () => {
    const { id } = useParams();
    const user = getUser(id); // In real app, fetch from API

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-indigo-600 to-blue-500"></div>
                <div className="px-6 pb-6">
                    <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 mb-4 gap-4">
                        <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 mt-2 md:mt-0">
                            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                            <p className="text-gray-600">{user.role} at {user.company}</p>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {user.location}</span>
                                <span className="flex items-center gap-1"><GraduationCap className="h-4 w-4" /> Class of {user.gradYear}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                            <Button className="flex-1 md:flex-none">Connect</Button>
                            <Button variant="outline" className="flex-1 md:flex-none">Message</Button>
                        </div>
                    </div>

                    <p className="text-gray-700 max-w-2xl">{user.bio}</p>

                    <div className="flex gap-4 mt-6">
                        <Button variant="ghost" size="sm" className="text-gray-600 h-auto p-0 hover:bg-transparent hover:text-indigo-600">
                            <Linkedin className="h-5 w-5 mr-1" /> LinkedIn
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 h-auto p-0 hover:bg-transparent hover:text-indigo-600">
                            <Globe className="h-5 w-5 mr-1" /> Website
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 h-auto p-0 hover:bg-transparent hover:text-indigo-600">
                            <Mail className="h-5 w-5 mr-1" /> Email
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 h-auto p-0 hover:bg-transparent hover:text-indigo-600">
                            <FileText className="h-5 w-5 mr-1" /> Resume
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {user.experience.map((exp, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Briefcase className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                                        <p className="text-indigo-600 text-sm font-medium">{exp.company}</p>
                                        <p className="text-gray-500 text-sm">{exp.period}</p>
                                        <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {user.education.map((edu, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <GraduationCap className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                                        <p className="text-gray-600 text-sm">{edu.degree}</p>
                                        <p className="text-gray-500 text-sm">{edu.period}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {user.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
