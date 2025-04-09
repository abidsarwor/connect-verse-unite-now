
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Share2, MoreVertical, BookmarkPlus, Flag, Trash2, Edit } from "lucide-react";

interface PostCardProps {
  post: {
    id: string;
    user: {
      id: string;
      name: string;
      avatar: string;
    };
    content: string;
    image?: string;
    timestamp: string;
    likes: number;
    comments: number;
    isLiked: boolean;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  // Check if current user is the post owner (would use auth context in real app)
  const isOwner = false;

  return (
    <div className="connectverse-card mb-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <img src={post.user.avatar} alt={post.user.name} />
          </Avatar>
          <div>
            <p className="font-semibold">{post.user.name}</p>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex gap-2 items-center">
              <BookmarkPlus className="h-4 w-4" /> Save Post
            </DropdownMenuItem>
            {isOwner ? (
              <>
                <DropdownMenuItem className="flex gap-2 items-center">
                  <Edit className="h-4 w-4" /> Edit Post
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-2 items-center text-red-500">
                  <Trash2 className="h-4 w-4" /> Delete Post
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem className="flex gap-2 items-center">
                <Flag className="h-4 w-4" /> Report Post
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="my-3">
        <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
      </div>

      {post.image && (
        <div className="mt-3 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <span>{likesCount} likes</span>
        <span>{post.comments} comments</span>
      </div>

      <Separator className="my-3" />

      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className={`flex-1 ${isLiked ? 'text-connectverse-accent' : ''}`}
          onClick={handleLike}
        >
          <Heart className={`h-5 w-5 mr-2 ${isLiked ? 'fill-connectverse-accent' : ''}`} />
          Like
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <MessageCircle className="h-5 w-5 mr-2" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Share2 className="h-5 w-5 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
