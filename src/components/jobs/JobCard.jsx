import { MapPin, Building, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const JobCard = ({ job }) => {
    return (
        <Card className="hover:shadow-md transition-shadow duration-300 border-gray-100 group">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center p-2">
                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                            <p className="text-sm font-medium text-gray-600">{job.company}</p>
                        </div>
                    </div>
                    {job.isNew && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">New</Badge>
                    )}
                </div>

                <div className="space-y-2 mt-4">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                            <MapPin className="h-3.5 w-3.5" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                            <Building className="h-3.5 w-3.5" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                            <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                        </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                        {job.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> Posted {job.postedAt}
                </span>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Save</Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Apply Now</Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
