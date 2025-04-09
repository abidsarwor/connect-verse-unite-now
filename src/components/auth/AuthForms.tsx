
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, LogIn, AtSign, LockKeyhole, User, Eye, EyeOff } from "lucide-react";

export const AuthForms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </TabsTrigger>
          <TabsTrigger value="signup" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Sign Up</span>
          </TabsTrigger>
        </TabsList>

        {/* Login Form */}
        <TabsContent value="login">
          <div className="connectverse-card">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Welcome Back!</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  required
                />
              </div>
              
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </Button>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded text-connectverse-primary focus:ring-connectverse-primary" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="text-connectverse-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
              
              <Button type="submit" className="w-full bg-connectverse-primary hover:bg-blue-600">
                Log in
              </Button>
              
              <div className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setActiveTab("signup")} 
                  className="text-connectverse-primary hover:underline"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </TabsContent>

        {/* Sign Up Form */}
        <TabsContent value="signup">
          <div className="connectverse-card">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Create an Account</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="pl-10"
                  required
                />
              </div>
              
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  required
                />
              </div>
              
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </Button>
              </div>
              
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="pl-10 pr-10"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" id="terms" className="rounded text-connectverse-primary focus:ring-connectverse-primary" required />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="text-connectverse-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-connectverse-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-connectverse-secondary hover:bg-violet-600">
                Sign Up
              </Button>
              
              <div className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-connectverse-primary hover:underline"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForms;
