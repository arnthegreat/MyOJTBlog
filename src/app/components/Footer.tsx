import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-black/90 backdrop-blur-sm border-t border-gray-200 dark:border-yellow-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Built with React + Typescript and Vite + Tailwind
            CSS.
          </p>

          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2026 My OJT Journey. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/arnthegreat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-yellow-500/10 dark:to-yellow-600/10 hover:from-gray-200 hover:to-gray-300 dark:hover:from-yellow-500/20 dark:hover:to-yellow-600/20 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 border border-transparent dark:border-yellow-500/20"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-700 dark:text-yellow-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-bonaobra-7a043428b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-500/10 dark:to-yellow-600/10 hover:from-yellow-200 hover:to-yellow-300 dark:hover:from-yellow-500/20 dark:hover:to-yellow-600/20 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 border border-yellow-300 dark:border-yellow-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-yellow-700 dark:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}