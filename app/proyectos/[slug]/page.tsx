import { notFound, redirect } from "next/navigation";

// Retired URLs only. Legacy project content is intentionally not imported.
const retiredSlugs = new Set([
  "batey-cambelaches",
  "mochilas-con-proposito",
  "mesa-compartida",
  "red-de-esperanza",
]);

export default async function RetiredProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!retiredSlugs.has(slug)) notFound();
  redirect("/galeria");
}
