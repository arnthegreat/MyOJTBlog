import { Link } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "../data/posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/post/${post.id}`} className="group block">
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-yellow-500/30 hover:border-yellow-400 dark:hover:border-yellow-400 hover:-translate-y-2">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-amber-500/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Week number badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-black dark:text-gray-900 font-bold text-sm">
            {post.id}
          </span>
        </div>

        <div className="relative p-6 h-full flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
            {post.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-1 leading-relaxed">
            {post.preview}
          </p>

          <div className="flex items-center text-yellow-600 dark:text-yellow-400 font-semibold group-hover:gap-3 gap-2 transition-all">
            Read More
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}