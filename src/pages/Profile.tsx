
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PostCard from "@/components/feed/PostCard";
import CreatePostForm from "@/components/feed/CreatePostForm";
import { TabsContent } from "@/components/ui/tabs";

const Profile = () => {
  // Mock user data
  const user = {
    id: "user1",
    name: "John Doe",
    username: "johndoe",
    avatar: "https://github.com/shadcn.png",
    coverPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Web developer, photographer, and coffee enthusiast. Building awesome things for the web.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    joinDate: "March 2022",
    followers: 1543,
    following: 320,
    isFollowing: false,
    isCurrentUser: true,
  };

  // Mock posts data
  const posts = [
    {
      id: "1",
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
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
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
      content: "Beautiful sunset today! 🌅 #nature #photography #sunset",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      timestamp: "3 days ago",
      likes: 42,
      comments: 12,
      isLiked: true,
    },
    {
      id: "3",
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
      content: "Just finished reading 'Atomic Habits' by James Clear. Highly recommend to anyone looking to improve their habits and productivity. What are you reading these days?",
      timestamp: "1 week ago",
      likes: 18,
      comments: 7,
      isLiked: false,
    },
  ];

  // Filter posts that have images for the Media tab
  const mediaPosts = posts.filter(post => post.image);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader user={user} />
          
          <div className="mt-4">
            <TabsContent value="posts" className="space-y-4">
              {user.isCurrentUser && <CreatePostForm />}
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </TabsContent>
            
            <TabsContent value="media" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mediaPosts.map((post) => (
                  <div key={post.id} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Media content" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="likes">
              <div className="py-8 text-center text-gray-500">
                <p>Posts liked by {user.name} will appear here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="about">
              <div className="connectverse-card mt-6">
                <h3 className="text-xl font-bold mb-4">About</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Bio</h4>
                    <p>{user.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Location</h4>
                    <p>{user.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Website</h4>
                    <a 
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-connectverse-primary hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Joined</h4>
                    <p>{user.joinDate}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
