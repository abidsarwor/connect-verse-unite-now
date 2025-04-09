
import { Link } from "react-router-dom";
import { Bell, Home, Mail, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-connectverse-primary to-connectverse-secondary text-transparent bg-clip-text">
              ConnectVerse
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn && (
              <>
                <div className="relative w-64">
                  <Input
                    type="search"
                    placeholder="Search ConnectVerse..."
                    className="pl-10 pr-4"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Home className="h-6 w-6 text-connectverse-primary" />
                </Link>
                <Link to="/messages" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Mail className="h-6 w-6 text-connectverse-primary" />
                </Link>
                <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                  <Bell className="h-6 w-6 text-connectverse-primary" />
                  <span className="absolute top-0 right-0 h-5 w-5 bg-connectverse-accent text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-6 w-6 text-connectverse-primary" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link to="/profile" className="w-full">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/settings" className="w-full">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
                <Button className="bg-connectverse-primary hover:bg-blue-600">
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 space-y-3 pb-3">
            {isLoggedIn && (
              <>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search ConnectVerse..."
                    className="pl-10 pr-4"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex justify-around pt-2">
                  <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Home className="h-6 w-6 text-connectverse-primary" />
                  </Link>
                  <Link to="/messages" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Mail className="h-6 w-6 text-connectverse-primary" />
                  </Link>
                  <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                    <Bell className="h-6 w-6 text-connectverse-primary" />
                    <span className="absolute top-0 right-0 h-5 w-5 bg-connectverse-accent text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </Link>
                  <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <User className="h-6 w-6 text-connectverse-primary" />
                  </Link>
                </div>
                <div className="pt-2">
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </Button>
                </div>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login
                </Button>
                <Button className="w-full bg-connectverse-primary hover:bg-blue-600">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
