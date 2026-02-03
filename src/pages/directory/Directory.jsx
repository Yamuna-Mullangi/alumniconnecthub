import { useState } from "react";
import AlumniCard from "@/components/directory/AlumniCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Mock Data
const MOCK_ALUMNI = [
    {
        id: 1,
        name: "Jane Smith",
        role: "Senior Software Engineer",
        company: "Google",
        gradYear: "2018",
        location: "San Francisco, CA",
        avatar: "https://i.pravatar.cc/150?u=jane",
    },
    {
        id: 2,
        name: "Michael Johnson",
        role: "Product Designer",
        company: "Airbnb",
        gradYear: "2019",
        location: "New York, NY",
        avatar: "https://i.pravatar.cc/150?u=michael",
    },
    {
        id: 3,
        name: "Sarah Williams",
        role: "Data Scientist",
        company: "Netflix",
        gradYear: "2017",
        location: "Los Angeles, CA",
        avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        id: 4,
        name: "David Brown",
        role: "Founder & CEO",
        company: "TechStart",
        gradYear: "2015",
        location: "Austin, TX",
        avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
        id: 5,
        name: "Emily Davis",
        role: "Marketing Manager",
        company: "Spotify",
        gradYear: "2020",
        location: "London, UK",
        avatar: "https://i.pravatar.cc/150?u=emily",
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Investment Banker",
        company: "Goldman Sachs",
        gradYear: "2016",
        location: "Chicago, IL",
        avatar: "https://i.pravatar.cc/150?u=james",
    },
];

const Directory = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAlumni = MOCK_ALUMNI.filter((alumni) =>
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Alumni Directory</h1>
                    <p className="text-gray-500">Connect with {MOCK_ALUMNI.length}+ alumni across the globe</p>
                </div>
                <Button>
                    <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                    placeholder="Search by name, company, or role..."
                    className="pl-10 h-12 text-lg bg-white shadow-sm border-gray-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredAlumni.map((alumni) => (
                    <AlumniCard key={alumni.id} alumni={alumni} />
                ))}
            </div>

            {filteredAlumni.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No alumni found matching your search.</p>
                </div>
            )}
        </div>
    );
};

export default Directory;
