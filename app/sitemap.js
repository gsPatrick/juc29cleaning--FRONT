import { SITE_URL } from "@/lib/site";

const ROUTES = ["", "/privacy", "/terms"];

export default function sitemap() {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
