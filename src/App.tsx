import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./app/components/Navbar";
import { Footer } from "./app/components/Footer";
import { Home } from "./app/pages/Home";
import { About } from "./app/pages/About";  
import { Post } from "./app/pages/Post";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter basename="/MyOJTBlog">
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}