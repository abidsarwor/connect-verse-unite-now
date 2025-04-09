
import Navbar from "@/components/layout/Navbar";
import CreatePostForm from "@/components/feed/CreatePostForm";
import PostCard from "@/components/feed/PostCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Bell, Mail, Home, Users, Bookmark, Settings, Calendar } from "lucide-react";

const Feed = () => {
  // Mock data for posts
  const posts = [
    {
      id: "1",
      user: {
        id: "user1",
        name: "John Doe",
        avatar: "https://github.com/shadcn.png",
      },
      content: "Just launched my new portfolio website! Check it out and let me know what you think. #webdev #portfolio #design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
      isLiked: false,
    },
    {
      id: "2",
      user: {
        id: "user2",
        name: "Jane Smith",
        avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=random",
      },
      content: "Beautiful sunset today! 🌅 #nature #photography #sunset",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      timestamp: "4 hours ago",
      likes: 42,
      comments: 12,
      isLiked: true,
    },
    {
      id: "3",
      user: {
        id: "user3",
        name: "Alex Johnson",
        avatar: "https://ui-avatars.com/api/?name=Alex+Johnson&background=random",
      },
      content: "Just finished reading 'Atomic Habits' by James Clear. Highly recommend to anyone looking to improve their habits and productivity. What are you reading these days?",
      timestamp: "Yesterday",
      likes: 18,
      comments: 7,
      isLiked: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="hidden md:block md:col-span-1">
            <div className="connectverse-card mb-4">
              <ul className="space-y-1">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="mr-2 h-5 w-5 text-connectverse-primary" />
                    <span>Home</span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="mr-2 h-5 w-5 text-connectverse-primary" />
                    <span>Friends</span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bookmark className="mr-2 h-5 w-5 text-connectverse-primary" />
                    <span>Saved Posts</span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="mr-2 h-5 w-5 text-connectverse-primary" />
                    <span>Events</span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-5 w-5 text-connectverse-primary" />
                    <span>Settings</span>
                  </Button>
                </li>
              </ul>
            </div>
            
            <div className="connectverse-card">
              <h3 className="font-semibold mb-3">People You May Know</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                        alt={`User ${i}`}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">User {i}</p>
                        <p className="text-xs text-gray-500">3 mutual friends</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <UserPlus className="h-4 w-4 mr-1" />
                      <span>Follow</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Feed */}
          <div className="md:col-span-2">
            <Tabs defaultValue="foryou">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="foryou">For You</TabsTrigger>
                  <TabsTrigger value="following">Following</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            
            <CreatePostForm />
            
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="connectverse-card mb-4">
              <h3 className="font-semibold mb-3">Notifications</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Bell className="h-5 w-5 text-connectverse-accent mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">User {i}</span> liked your post.
                      </p>
                      <p className="text-xs text-gray-500">{i * 10}m ago</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-2 text-sm text-connectverse-primary">
                View All
              </Button>
            </div>
            
            <div className="connectverse-card mb-4">
              <h3 className="font-semibold mb-3">Messages</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                        alt={`User ${i}`}
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">User {i}</p>
                        <p className="text-xs text-gray-500 truncate w-32">Hey! How are you doing?</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 bg-connectverse-primary rounded-full"></div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-2 text-sm text-connectverse-primary">
                View All
              </Button>
            </div>
            
            <div className="connectverse-card">
              <h3 className="font-semibold mb-3">Trending Topics</h3>
              <div className="space-y-2">
                {["#WebDevelopment", "#AI", "#Photography", "#Travel", "#Music"].map((tag) => (
                  <div key={tag} className="text-sm">
                    <a href="#" className="text-connectverse-primary hover:underline">{tag}</a>
                    <p className="text-xs text-gray-500">{Math.floor(Math.random() * 5000) + 100} posts</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
