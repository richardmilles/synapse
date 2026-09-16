import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogArticles } from "@/data/blogArticles";
import { contentClusters } from "@/data/contentClusters";
import { usePageSeo } from "@/hooks/use-page-seo";

const BlogPage = () => {
    usePageSeo({
        title: "Conseils sur les processus et solutions numériques | Synapse",
        description: "Analyses concrètes pour structurer les processus, concevoir des solutions sur mesure, automatiser avec fiabilité et déployer des agents IA.",
        canonicalPath: "/blog",
    });

    return (
        <div className="site-page-premium relative min-h-screen bg-background overflow-x-hidden">
            <Header />

            <main className="relative z-10">
                <BlogHero />

                <section className="py-20" id="articles">
                    <div className="container px-4 sm:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12">
                                {/* Articles Grid */}
                                <div className="lg:col-span-2 space-y-16">
                                    {contentClusters.map((cluster) => {
                                        const articles = blogArticles.filter((article) => article.clusterId === cluster.id);
                                        if (articles.length === 0) return null;

                                        return (
                                            <section key={cluster.id} id={cluster.id} className="scroll-mt-28">
                                                <div className="mb-7 border-l-2 border-primary pl-5">
                                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{cluster.number}</p>
                                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{cluster.title}</h2>
                                                    <p className="mt-3 max-w-2xl leading-7 text-foreground/75">{cluster.description}</p>
                                                </div>
                                                <div className="grid gap-8">
                                                    {articles.map((article) => (
                                                        <BlogCard key={article.slug} article={article} />
                                                    ))}
                                                </div>
                                            </section>
                                        );
                                    })}
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
