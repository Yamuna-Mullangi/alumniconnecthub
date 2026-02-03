import { useState } from "react";
import { MessageSquare, Heart, Share2, MoreHorizontal, Image as ImageIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MOCK_POSTS = [
    {
        id: 1,
        author: {
            name: "Sarah Wilson",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            headline: "Product Manager at Google • Class of 2018",
        },
        content: "Excited to share that I'll be speaking at the upcoming Alumni Tech Talk series about 'Product Management in AI'. Hope to see many of you there! 🚀 #AlumniConnect #TechTalk",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2000&auto=format&fit=crop",
        likes: 42,
        comments: 12,
        time: "2h ago",
    },
    {
        id: 2,
        author: {
            name: "David Chen",
            avatar: "https://i.pravatar.cc/150?u=david",
            headline: "Senior Developer at Stripe • Class of 2016",
        },
        content: "Just finished a marathon coding session. The new campus library renovation looks amazing! Does anyone know if the alumni access card still works for the 24/7 study rooms?",
        likes: 18,
        comments: 5,
        time: "4h ago",
    },
    {
        id: 3,
        author: {
            name: "Emily Rodriguez",
            avatar: "https://i.pravatar.cc/150?u=emily",
            headline: "Marketing Director • Class of 2015",
        },
        content: "Hiring alert! 📢 We are looking for a Junior Graphic Designer to join our creative team. Remote friendly. DM me if interested or check the jobs board!",
        likes: 56,
        comments: 8,
        time: "6h ago",
    },
];

const NewsFeed = () => {
    const [posts, setPosts] = useState(MOCK_POSTS);
    const [newPost, setNewPost] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        if (!newPost.trim()) return;

        const post = {
            id: Date.now(),
            author: {
                name: "You",
                avatar: "",
                headline: "Software Engineer",
            },
            content: newPost,
            likes: 0,
            comments: 0,
            time: "Just now",
        };

        setPosts([post, ...posts]);
        setNewPost("");
    };

    return (
        <div className="space-y-6">
            {/* Create Post Widget */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <form onSubmit={handlePost}>
                            <Input
                                placeholder="Start a post..."
                                className="bg-gray-50 border-none focus-visible:ring-1 focus-visible:ring-indigo-200"
                                value={newPost}
                                onChange={(e) => setNewPost(e.target.value)}
                            />
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex gap-2">
                                    <Button type="button" variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-600">
                                        <ImageIcon className="h-4 w-4 mr-2" />
                                        Media
                                    </Button>
                                    <Button type="button" variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-600">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Event
                                    </Button>
                                </div>
                                <Button type="submit" size="sm" className="bg-indigo-600 hover:bg-indigo-700" disabled={!newPost.trim()}>
                                    <Send className="h-4 w-4 mr-2" />
                                    Post
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <Avatar>
                                        <AvatarImage src={post.author.avatar} />
                                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                                        <p className="text-xs text-gray-500">{post.author.headline}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{post.time}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-4 text-gray-800 whitespace-pre-wrap">
                                {post.content}
                            </div>

                            {post.image && (
                                <div className="mt-4 -mx-4">
                                    <img src={post.image} alt="Post content" className="w-full object-cover max-h-96" />
                                </div>
                            )}

                            <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-50">
                                <Button variant="ghost" size="sm" className="flex-1 text-gray-500 hover:text-red-500 hover:bg-red-50">
                                    <Heart className="h-4 w-4 mr-2" />
                                    {post.likes} Likes
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    {post.comments} Comments
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
import { Calendar } from "lucide-react";

export default NewsFeed;
