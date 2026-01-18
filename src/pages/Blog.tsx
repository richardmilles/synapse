import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogArticles } from "@/data/blogArticles";

const BlogPage = () => {
    useEffect(() => {
        document.title = "Blog & Ressources IA | Synapse - Guides d'Automatisation";
    }, []);

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <BlogHero />

                <section className="py-20">
                    <div className="container px-4 sm:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12">
                                {/* Articles Grid */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="grid gap-8">
                                        {blogArticles.map((article) => (
                                            <BlogCard key={article.slug} article={article} />
                                        ))}
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-24">
                                        <BlogSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;
