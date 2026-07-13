import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Satrio Adi Prakoso | Frontend Engineer | High-Performance Web & SEO";
  const description =
    "Frontend engineer specializing in Next.js, TypeScript, and web performance. I build scalable, SEO-friendly web applications that drive user acquisition and retention.";
  const canonicalUrl = `https://caffeinjunkie.com`;

  return {
    title: `${title}`,
    description: `${description}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title}`,
      description: `${description}`,
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      title: `${title}`,
      description: `${description}`,
      card: "summary_large_image",
    },
  };
}
