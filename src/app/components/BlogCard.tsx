import { Link } from "react-router";

export function BlogCard({ post }: { post: any }) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl p-6 border border-gray-200 dark:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{post.preview}</p>
      <Link to={`/post/${post.id}`} className="inline-flex items-center text-sm font-semibold text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors">
        Read More &rarr;
      </Link>
    </div>
  );
}