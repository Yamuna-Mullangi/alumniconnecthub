import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Briefcase, Mail, Globe, Linkedin, FileText, GraduationCap, Award } from "lucide-react";

// Mock user data fetcher
const getUser = (id) => ({
    id,
    name: "John Doe",
    role: "Senior Software Engineer",
    company: "Google",
    gradYear: "2020",
    degree: "B.Tech Computer Science",
    location: "Bangalore, India",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    bio: "Passionate about building scalable distributed systems. Previously worked at Amazon and Microsoft. Love hiking and photography.",
    skills: ["React", "Node.js", "System Design", "Cloud Computing", "Python"],
    experience: [
        {
            role: "Senior Software Engineer",
            company: "Google",
            period: "2023 - Present",
            description: "Leading the development of new cloud infrastructure tools."
        },
        {
            role: "Software Engineer",
            company: "Amazon",
            period: "2020 - 2023",
            description: "Worked on the Prime Video team improving streaming quality."
        }
    ],
    education: [
        {
            school: "Vignan's Lara Institute of Technology & Science",
            degree: "B.Tech in Computer Science & Engineering",
            period: "2016 - 2020",
            grade: "8.9 CGPA"
        },
        {
            school: "Sri Chaitanya Junior College",
            degree: "Intermediate (MPC)",
            period: "2014 - 2016",
            grade: "96.5%"
        }
    ]
});

const Profile = () => {
    const { id } = useParams();
    const user = getUser(id);

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">
            {/* Header Card */}
            <div className="relative rounded-2xl shadow-xl overflow-hidden glass-card border-none">
                <div className="h-48 bg-gradient-to-r from-primary via-purple-700 to-indigo-900 opacity-90"></div>
                <div className="px-8 pb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6 gap-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-primary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <Avatar className="w-32 h-32 border-[6px] border-background shadow-2xl relative bg-background">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback className="text-3xl font-bold bg-primary/20 text-primary">JD</AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="flex-1 mt-2 md:mt-0 pt-2">
                            <h1 className="text-3xl font-bold text-foreground tracking-tight">{user.name}</h1>
                            <p className="text-lg text-muted-foreground font-medium">{user.role} at {user.company}</p>
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground/80">
                                <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full"><MapPin className="h-4 w-4 text-primary" /> {user.location}</span>
                                <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full"><GraduationCap className="h-4 w-4 text-primary" /> Class of {user.gradYear}</span>
                            </div>
                        </div>

                    </div>

                    <p className="text-foreground/80 max-w-3xl leading-relaxed text-lg">{user.bio}</p>

                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 -ml-2">
                            <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                            <Globe className="h-5 w-5 mr-2" /> Website
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                            <Mail className="h-5 w-5 mr-2" /> Email
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                            <FileText className="h-5 w-5 mr-2" /> Resume
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Experience & Education */}
                <div className="md:col-span-2 space-y-8">
                    <Card className="glass-card border-none shadow-lg">
                        <CardHeader className="border-b border-white/10 pb-4">
                            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                                <Briefcase className="h-5 w-5 text-primary" /> Experience
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8 pt-6">
                            {user.experience.map((exp, i) => (
                                <div key={i} className="flex gap-4 relative group">
                                    {i !== user.experience.length - 1 && <div className="absolute left-5 top-12 bottom-[-20px] w-0.5 bg-white/10"></div>}
                                    <div className="mt-1 flex-shrink-0 relative z-10">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-white/10 shadow-sm group-hover:scale-110 transition-transform">
                                            <Briefcase className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                        <p className="text-muted-foreground text-sm mt-0.5">{exp.period}</p>
                                        <p className="text-foreground/70 mt-3 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="glass-card border-none shadow-lg">
                        <CardHeader className="border-b border-white/10 pb-4">
                            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                                <GraduationCap className="h-5 w-5 text-primary" /> Education Qualifications
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8 pt-6">
                            {user.education.map((edu, i) => (
                                <div key={i} className="flex gap-4 relative group">
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-white/10 shadow-sm group-hover:scale-110 transition-transform">
                                            <GraduationCap className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">{edu.school}</h3>
                                        <p className="text-foreground/80 font-medium">{edu.degree}</p>
                                        <div className="flex items-center gap-4 mt-1">
                                            <p className="text-muted-foreground text-sm">{edu.period}</p>
                                            {edu.grade && <Badge variant="secondary" className="text-xs bg-green-900/20 text-green-400 border-green-800">Grade: {edu.grade}</Badge>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Skills & Certifications */}
                <div className="space-y-8">
                    <Card className="glass-card border-none shadow-lg">
                        <CardHeader className="border-b border-white/10 pb-4">
                            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                                <Award className="h-5 w-5 text-primary" /> Skills
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="flex flex-wrap gap-2">
                                {user.skills.map((skill) => (
                                    <Badge key={skill} className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 text-sm transition-colors cursor-default">{skill}</Badge>
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
