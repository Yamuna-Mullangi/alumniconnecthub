import { useState } from "react";
import GroupCard from "@/components/groups/GroupCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data
const MOCK_GROUPS = [
    {
        id: 1,
        name: "Class of 2018",
        category: "Alumni Year",
        members: 1240,
        description: "Official group for the graduating class of 2018. Connect with your batchmates!",
        image: "https://via.placeholder.com/150",
        coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
        isPrivate: true,
        joined: true,
    },
    {
        id: 2,
        name: "Tech Entrepreneurs",
        category: "Professional Interest",
        members: 856,
        description: "A community for alumni building the next big thing in tech. Share resources, find co-founders, and network.",
        image: "https://via.placeholder.com/150",
        coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
        isPrivate: false,
        joined: false,
    },
    {
        id: 3,
        name: "Bay Area Alumni",
        category: "Regional Chapter",
        members: 3200,
        description: "Connecting alumni living and working in the San Francisco Bay Area.",
        image: "https://via.placeholder.com/150",
        coverImage: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2000&auto=format&fit=crop",
        isPrivate: false,
        joined: false,
    },
    {
        id: 4,
        name: "Finance Club",
        category: "Professional Interest",
        members: 650,
        description: "Discussion group for alumni in investment banking, private equity, and fintech.",
        image: "https://via.placeholder.com/150",
        coverImage: "https://images.unsplash.com/photo-1611974765270-ca1258822981?q=80&w=2000&auto=format&fit=crop",
        isPrivate: true,
        joined: false,
    },
];

const Groups = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredGroups = MOCK_GROUPS.filter((group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Groups</h1>
                    <p className="text-gray-500">Discover communities that matter to you</p>
                </div>
                <Button className="bg-indigo-600">
                    <Plus className="mr-2 h-4 w-4" /> Create Group
                </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Tabs defaultValue="all" className="w-full sm:w-auto">
                    <TabsList>
                        <TabsTrigger value="all">All Groups</TabsTrigger>
                        <TabsTrigger value="my-groups">My Groups</TabsTrigger>
                        <TabsTrigger value="suggested">Suggested</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search groups..."
                            className="pl-9"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGroups.map((group) => (
                    <GroupCard key={group.id} group={group} />
                ))}
            </div>
        </div>
    );
};

export default Groups;
