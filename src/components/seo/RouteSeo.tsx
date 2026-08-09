import { useLocation } from "react-router-dom";
import { getRouteSeo } from "@/seo/routeSeo";
import { usePageSeo } from "@/hooks/use-page-seo";

export const RouteSeo = () => {
  const location = useLocation();
  const seo = getRouteSeo(location.pathname);

  usePageSeo({
    title: seo.title,
    description: seo.description,
    canonicalPath: seo.path,
    type: seo.type,
    robots: seo.index === false ? "noindex,follow" : "index,follow",
    structuredData: seo.structuredData,
  });

  return null;
};
