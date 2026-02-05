import { MapPin, Building, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const JobCard = ({ job }) => {
    return (
        <Card className="hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 border-white/10 group cursor-pointer relative overflow-hidden glass-card">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain rounded-lg bg-white/90" />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">{job.title}</h3>
                            <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                        </div>
                    </div>
                    {job.isNew && (
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none px-2.5 py-0.5">New</Badge>
                    )}
                </div>

                <div className="space-y-2 mt-4">
                    <div className="flex flex-wrap gap-2 text-sm text-foreground/70">
                        <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
                            <MapPin className="h-3.5 w-3.5 text-primary" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
                            <Building className="h-3.5 w-3.5 text-primary" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
                            <DollarSign className="h-3.5 w-3.5 text-primary" /> {job.salary}
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                        {job.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="bg-white/5 p-4 flex justify-between items-center border-t border-white/10">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary/70" /> Posted {job.postedAt}
                </span>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-foreground hover:bg-white/10">Save</Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_10px_rgba(123,51,126,0.2)]">Apply Now</Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
