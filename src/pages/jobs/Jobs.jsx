import { useState } from "react";
import JobCard from "@/components/jobs/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Briefcase } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Mock Data
const MOCK_JOBS = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechFlow",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $150k",
        postedAt: "2 days ago",
        description: "We are looking for an experienced React developer to lead our frontend team. You will be responsible for architecting scalable UI components...",
        logo: "/images/logo.png",
        isNew: true,
    },
    {
        id: 2,
        title: "Product Designer",
        company: "CreativeStudio",
        location: "New York, NY",
        type: "Contract",
        salary: "$90k - $110k",
        postedAt: "5 days ago",
        description: "Join our award-winning design team. You will work closely with product managers and engineers to deliver stunning user experiences...",
        logo: "/images/logo.png",
        isNew: false,
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "DataSystems",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130k - $160k",
        postedAt: "1 week ago",
        description: "Building high-performance APIs for our data analytics platform. Experience with Python, Django, and PostgreSQL required...",
        logo: "/images/logo.png",
        isNew: false,
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "GrowthHacks",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$80k - $100k",
        postedAt: "1 week ago",
        description: "Lead our growth marketing initiatives. You will be in charge of SEO, SEM, and content marketing strategies...",
        logo: "/images/logo.png",
        isNew: false,
    },
];

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [jobType, setJobType] = useState("all");

    const filteredJobs = MOCK_JOBS.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = jobType === "all" || job.type.toLowerCase().includes(jobType);
        return matchesSearch && matchesType;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Career Center</h1>
                    <p className="text-muted-foreground">Discover exclusive opportunities from alumni network</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Briefcase className="mr-2 h-4 w-4" /> Post a Job
                </Button>
            </div>

            <div className="bg-white/5 p-4 rounded-lg shadow-sm border border-white/10 flex flex-col md:flex-row gap-4 glass-card">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        placeholder="Search by title, company, or keywords..."
                        className="pl-10 h-10 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/70"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex-shrink-0">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Select value={jobType} onValueChange={setJobType}>
                            <SelectTrigger className="w-full sm:w-[140px] bg-white/5 border-white/10 text-foreground">
                                <SelectValue placeholder="Job Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-white/10 text-foreground">
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="part-time">Part-time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                                <SelectItem value="internship">Internship</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full sm:w-[140px] bg-white/5 border-white/10 text-foreground">
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-white/10 text-foreground">
                                <SelectItem value="all">Any Location</SelectItem>
                                <SelectItem value="remote">Remote</SelectItem>
                                <SelectItem value="onsite">On-site</SelectItem>
                                <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full sm:w-[140px] bg-white/5 border-white/10 text-foreground">
                                <SelectValue placeholder="Experience" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-white/10 text-foreground">
                                <SelectItem value="all">Any Level</SelectItem>
                                <SelectItem value="entry">Entry Level</SelectItem>
                                <SelectItem value="mid">Mid Level</SelectItem>
                                <SelectItem value="senior">Senior Level</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {filteredJobs.length === 0 && (
                <div className="text-center py-12 bg-white/5 rounded-lg border border-dashed border-white/10">
                    <div className="mx-auto h-12 w-12 text-muted-foreground">
                        <Briefcase className="h-full w-full" />
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-foreground">No jobs found</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
    );
};

export default Jobs;
