import NewsFeed from "@/components/dashboard/NewsFeed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Users, MapPin, Briefcase, ExternalLink, Plus, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto pt-6">
            {/* Left Sidebar - User Profile & Stats */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
                <Card className="overflow-hidden border-none shadow-xl glass-card relative group">
                    <div className="h-28 bg-gradient-to-r from-primary to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-1.5 rounded-full bg-background/50 backdrop-blur-sm">
                            <Avatar className="w-24 h-24 border-4 border-card shadow-lg">
                                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                <AvatarFallback className="bg-primary/20 text-primary text-2xl font-bold">JD</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="pt-14 pb-6 px-4 text-center">
                        <h2 className="font-bold text-xl text-foreground">John Doe</h2>
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                            <Briefcase className="w-3 h-3" /> Software Engineer
                        </p>
                        <p className="text-xs text-muted-foreground/80 mt-1">Class of 2020 • Computer Science</p>

                        <div className="mt-6 flex justify-center gap-6 text-sm border-t border-white/10 pt-4">
                            <div className="text-center hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
                                <p className="font-bold text-lg text-primary">548</p>
                                <p className="text-muted-foreground text-xs font-medium">Connections</p>
                            </div>
                            <div className="text-center hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
                                <p className="font-bold text-lg text-primary">1.2k</p>
                                <p className="text-muted-foreground text-xs font-medium">Views</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Link to="/profile/1">
                                <Button variant="outline" size="sm" className="w-full rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary">
                                    View Profile
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Middle - Feed */}
            <div className="col-span-1 lg:col-span-6 space-y-6">
                <NewsFeed />
            </div>

            {/* Right Sidebar - Suggested & Events */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
                <Card className="border-none shadow-xl glass-card">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/10">
                        <CardTitle className="text-base font-bold text-foreground">Suggestions For You</CardTitle>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10"><ExternalLink className="w-4 h-4" /></Button>
                    </CardHeader>
                    <CardContent className="space-y-5 pt-4">
                        {[
                            { name: "Ujjwal Yadav", role: "BDA", color: "bg-blue-500" },
                            { name: "Ankit Gupta", role: "Software Developer", color: "bg-purple-500" },
                            { name: "Deepak Sharma", role: "Tech Lead", color: "bg-orange-500" }
                        ].map((user, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Avatar className="h-9 w-9 border border-white/10">
                                    <AvatarFallback className={`${user.color} text-white text-xs`}>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
                                    <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                                </div>
                                <Button size="sm" variant="outline" className="h-7 text-xs px-3 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all rounded-full">
                                    Follow
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <div className="text-center">
                    <p className="text-xs text-muted-foreground/50">© 2026 Alumni Connect. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
