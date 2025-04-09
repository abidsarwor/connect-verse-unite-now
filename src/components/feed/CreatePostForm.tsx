
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, MapPin, X, Send } from "lucide-react";

const CreatePostForm = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setSelectedImage(event.target.result);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postContent.trim() && !selectedImage) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Post submitted:', { content: postContent, image: selectedImage });
      setPostContent("");
      setSelectedImage(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="connectverse-card mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <img src="https://github.com/shadcn.png" alt="User Avatar" />
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="min-h-[100px] border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 resize-none"
            />
          </div>
        </div>

        {selectedImage && (
          <div className="relative mt-3">
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="rounded-lg w-full h-auto max-h-[300px] object-contain bg-gray-100"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              type="button"
              onClick={removeSelectedImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          <div className="flex gap-2">
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="flex items-center gap-1 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300">
                <Image className="h-5 w-5" />
                <span className="text-sm">Photo</span>
              </div>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-1 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300"
            >
              <Smile className="h-5 w-5" />
              <span className="text-sm">Feeling</span>
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-1 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300"
            >
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Location</span>
            </Button>
          </div>
          <Button 
            type="submit" 
            className="bg-connectverse-primary hover:bg-blue-600"
            disabled={(!postContent.trim() && !selectedImage) || isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Posting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Post
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
