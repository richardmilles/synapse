import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogArticle } from "@/data/blogArticles";

interface BlogCardProps {
    article: BlogArticle;
}

export const BlogCard = ({ article }: BlogCardProps) => {
    const categoryColors: Record<string, string> = {
        "Juridique": "bg-primary/10 text-primary border-primary/20",
        "Finance": "bg-accent/10 text-accent border-accent/20",
        "RH": "bg-secondary/10 text-secondary border-secondary/20",
        "Formation": "bg-synapse-violet/10 text-synapse-violet border-synapse-violet/20",
        "IT": "bg-synapse-blue/10 text-synapse-blue border-synapse-blue/20",
        "Services": "bg-synapse-green/10 text-synapse-green border-synapse-green/20",
        "Bâtiment": "bg-destructive/10 text-destructive border-destructive/20",
    };

    return (
        <Link to={`/blog/${article.slug}`}>
            <article className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[article.category] || categoryColors["Services"]}`}>
                        {article.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(article.publishedDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.readTime} min</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-xs text-muted-foreground">
                        Par <span className="font-medium text-foreground">{article.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </article>
        </Link>
    );
};
