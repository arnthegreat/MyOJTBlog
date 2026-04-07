import { BlogCard } from "../components/BlogCard";
import { posts } from "../data/posts";
import { TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  // Add your custom hero background image URL here
  const heroBackgroundImage = "YOUR_IMAGE_URL_HERE";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-amber-50/30 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 dark:from-yellow-600 dark:via-yellow-700 dark:to-black">
        {/* Background Image */}
        {heroBackgroundImage &&
          heroBackgroundImage !== "YOUR_IMAGE_URL_HERE" && (
            <>
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={heroBackgroundImage}
                  alt="OJT Background"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 dark:from-black/70 dark:via-black/60 dark:to-black/70"></div>
            </>
          )}

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-full text-gray-900 dark:text-white text-sm font-medium mb-6 border border-black/30 dark:border-white/30">
            17 Weeks of Growth & Learning
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-lg">
            My OJT Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-yellow-100 mb-6 font-medium">
            Lessons, Challenges, and Growth during my On-the-Job
            Training
          </p>
          <p className="text-gray-900/90 dark:text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Welcome to my blog where I document my journey as an
            IT student during my On-the-Job Training. Here, I
            share insights, challenges, and valuable lessons
            learned throughout my internship experience.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center gap-3 mb-10">
          <TrendingUp className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
            Weekly Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}