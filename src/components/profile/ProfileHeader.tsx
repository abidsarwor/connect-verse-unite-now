
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, MapPin, Link as LinkIcon, Calendar, MessageSquare, UserPlus, UserCheck } from "lucide-react";

interface ProfileHeaderProps {
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
    coverPhoto: string;
    bio: string;
    location: string;
    website: string;
    joinDate: string;
    followers: number;
    following: number;
    isFollowing: boolean;
    isCurrentUser: boolean;
  };
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
      {/* Cover Photo */}
      <div className="relative h-48 md:h-64 bg-gray-200">
        <img 
          src={user.coverPhoto} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        
        {user.isCurrentUser && (
          <Button 
            size="icon" 
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full h-9 w-9"
          >
            <Camera className="h-5 w-5" />
          </Button>
        )}
      </div>
      
      {/* Profile Info */}
      <div className="relative px-4 pt-16 pb-4 sm:px-6">
        {/* Profile Picture */}
        <div className="absolute -top-12 left-4 sm:left-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="h-full w-full object-cover"
              />
            </div>
            
            {user.isCurrentUser && (
              <Button 
                size="icon" 
                className="absolute bottom-0 right-0 bg-black/50 hover:bg-black/70 text-white rounded-full h-7 w-7"
              >
                <Camera className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end">
          {!user.isCurrentUser && (
            <>
              <Button className="mr-2" variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              
              {user.isFollowing ? (
                <Button variant="outline">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Following
                </Button>
              ) : (
                <Button className="bg-connectverse-primary hover:bg-blue-600">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              )}
            </>
          )}
          
          {user.isCurrentUser && (
            <Button variant="outline">
              Edit Profile
            </Button>
          )}
        </div>
        
        {/* User Info */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">@{user.username}</p>
          
          {user.bio && (
            <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio}</p>
          )}
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-sm text-gray-500">
            {user.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{user.location}</span>
              </div>
            )}
            
            {user.website && (
              <div className="flex items-center">
                <LinkIcon className="h-4 w-4 mr-1" />
                <a 
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-connectverse-primary hover:underline"
                >
                  {user.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Joined {user.joinDate}</span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-3">
            <div>
              <span className="font-semibold">{user.following}</span>
              <span className="text-gray-500 ml-1">Following</span>
            </div>
            <div>
              <span className="font-semibold">{user.followers}</span>
              <span className="text-gray-500 ml-1">Followers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Navigation */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-4">
          <TabsTrigger value="posts" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-connectverse-primary">
            Posts
          </TabsTrigger>
          <TabsTrigger value="media" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-connectverse-primary">
            Media
          </TabsTrigger>
          <TabsTrigger value="likes" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-connectverse-primary">
            Likes
          </TabsTrigger>
          <TabsTrigger value="about" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-connectverse-primary">
            About
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfileHeader;
