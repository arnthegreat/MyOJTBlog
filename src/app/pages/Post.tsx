import { useParams, Link, Navigate } from "react-router";
import { Calendar, ArrowLeft, Clock, Image as ImageIcon } from "lucide-react";
import { posts } from "../data/posts";

export function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-amber-50/30 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 mb-8 transition-all font-medium group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-yellow-500/30">
          {/* Week badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-yellow-600 rounded-full text-black dark:text-gray-900 text-sm font-semibold mb-6">
            Week {post.id}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{readingTime} min read</span>
            </div>
            {post.images && post.images.length > 0 && (
              <div className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span className="text-sm">{post.images.length} {post.images.length === 1 ? 'photo' : 'photos'}</span>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          {post.images && post.images.length > 0 && (
            <div className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-yellow-500/30 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={image}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph is a heading (starts with **)
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const headingText = paragraph.slice(2, -2);
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-yellow-600 rounded-full"></span>
                    {headingText}
                  </h2>
                );
              }
              
              // Check if paragraph contains bold text
              if (paragraph.includes('**')) {
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={index} className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-lg">
                    {parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="font-semibold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              }
              
              return (
                <p key={index} className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-lg">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
}