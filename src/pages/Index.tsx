
import Navbar from "@/components/layout/Navbar";
import AuthForms from "@/components/auth/AuthForms";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-connectverse-primary to-connectverse-secondary">
                    Connect, Share, Thrive
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Join ConnectVerse today and become part of a vibrant community where ideas flow freely, connections are meaningful, and every voice matters.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/feed">
                    <Button className="bg-connectverse-primary hover:bg-blue-600">
                      Explore Feed
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline">Learn more</Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-connectverse-secondary" />
                    <span>10k+ Users</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-connectverse-secondary" />
                    <span>100k+ Messages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-connectverse-secondary" />
                    <span>Safe & Secure</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <AuthForms />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose ConnectVerse?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform combines the best features of social networking with cutting-edge technology to create a seamless experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:max-w-5xl md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-connectverse-primary/10 p-4">
                  <Users className="h-6 w-6 text-connectverse-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect With Friends</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Build meaningful connections with friends, family, and like-minded individuals from around the globe.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-connectverse-secondary/10 p-4">
                  <MessageCircle className="h-6 w-6 text-connectverse-secondary" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Messaging</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Chat instantly with your connections through our seamless and responsive messaging system.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-connectverse-accent/10 p-4">
                  <Shield className="h-6 w-6 text-connectverse-accent" />
                </div>
                <h3 className="text-xl font-bold">Privacy & Security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Your data is protected with industry-leading security measures and transparent privacy controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to join the community?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up now to connect with friends, share your moments, and be part of the conversation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-connectverse-secondary hover:bg-violet-600">
                  Get Started
                </Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="border-t bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Help</h4>
              <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Support Center</a></li>
                <li><a href="#" className="hover:underline">Safety Center</a></li>
                <li><a href="#" className="hover:underline">Community Guidelines</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Connect</h4>
              <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} ConnectVerse. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
