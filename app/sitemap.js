import { SITE_URL } from "@/lib/site";

const ROUTES = ["", "/services", "/why-us", "/reviews", "/before-after", "/contact", "/privacy", "/terms"];

export default function sitemap() {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
