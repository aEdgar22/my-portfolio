import { PROJECTS } from "@/components/projects";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {

  const works = PROJECTS.map((p) => ({ url: `${baseURL}/work/${p.slug}` }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...works];
}
