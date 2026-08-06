import { useEffect } from "react";

type PageSeoOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  type?: "website" | "article";
  structuredData?: Record<string, unknown>;
};

const SITE_URL = "https://www.synapse-lab.co";

const setMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
};

export const usePageSeo = ({ title, description, canonicalPath, type = "website", structuredData }: PageSeoOptions) => {
  const structuredDataJson = structuredData ? JSON.stringify(structuredData) : "";

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "page-structured-data";
    document.getElementById(schemaId)?.remove();
    if (structuredDataJson) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.text = structuredDataJson;
      document.head.appendChild(script);
    }

    return () => document.getElementById(schemaId)?.remove();
  }, [canonicalPath, description, structuredDataJson, title, type]);
};
