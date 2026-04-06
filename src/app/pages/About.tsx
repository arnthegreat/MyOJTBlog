import { User, BookOpen, Code, Target, Lightbulb, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-amber-50/30 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-yellow-500/30">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 dark:from-yellow-500 dark:via-yellow-600 dark:to-black flex items-center justify-center shadow-2xl">
                <User className="h-14 w-14 text-black dark:text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-yellow-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-6 text-center">
            About Me
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8 text-xl leading-relaxed">
              I am an IT student documenting my learning journey during my OJT.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-6 border border-yellow-300 dark:border-yellow-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 rounded-xl shadow-md">
                    <BookOpen className="h-6 w-6 text-black dark:text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    What I'm Learning
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Through my OJT, I'm gaining hands-on experience in software development, 
                  team collaboration, and professional work practices. Every day brings new 
                  challenges and opportunities to grow.
                </p>
              </div>
              
              <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl p-6 border border-amber-300 dark:border-amber-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-xl shadow-md">
                    <Code className="h-6 w-6 text-black dark:text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Why This Blog
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This blog serves as a reflection of my internship journey. By documenting 
                  my experiences, challenges, and lessons learned, I hope to help other 
                  students and track my own growth.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-yellow-50 via-amber-50/50 to-yellow-100/50 dark:from-yellow-900/10 dark:via-amber-900/10 dark:to-yellow-800/10 rounded-2xl border-2 border-yellow-300 dark:border-yellow-500/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-yellow-600 rounded-lg">
                  <Target className="h-6 w-6 text-black dark:text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Goals
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 p-1.5 bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-4 w-4 text-black dark:text-gray-900" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Apply theoretical knowledge to real-world projects</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 p-1.5 bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-4 w-4 text-black dark:text-gray-900" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Develop professional skills and work ethics</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 p-1.5 bg-gradient-to-br from-yellow-600 to-yellow-700 dark:from-yellow-500 dark:to-yellow-600 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-4 w-4 text-black dark:text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Build a foundation for my future career in IT</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 p-1.5 bg-gradient-to-br from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-4 w-4 text-black dark:text-gray-900" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Share knowledge and experiences with fellow students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}