import { useEffect } from "react";
import { bioConfig } from "@/config/bio";
import { trackBioEvent } from "@/lib/bioAnalytics";

type BioPageOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  pageId: string;
};

const setMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
};

export const useBioPage = ({ title, description, canonicalPath, pageId }: BioPageOptions) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:image"]', "property", "og:image", `${bioConfig.siteUrl}${bioConfig.seo.shareImage}`);
    setMeta('meta[property="og:url"]', "property", "og:url", `${bioConfig.siteUrl}${canonicalPath}`);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${bioConfig.siteUrl}${canonicalPath}`;

    trackBioEvent("page_view", { pageId });
  }, [canonicalPath, description, pageId, title]);
};

