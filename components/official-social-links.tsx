import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const networks = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "tiktok", label: "TikTok" },
] as const;

type Network = (typeof networks)[number]["key"];

// Brand glyphs are local SVGs because the installed Lucide library omits them.
function SocialIcon({ network }: { network: Network }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true" focusable="false" fill="currentColor">
      {network === "instagram" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.2" />
        </>
      ) : network === "facebook" ? (
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
      ) : (
        <path d="M16.7 1h-3.5v14.8a3.1 3.1 0 1 1-2.7-3.07V9.2a6.6 6.6 0 1 0 6.2 6.6V8.3a9.3 9.3 0 0 0 5.3 1.6V6.4A5.3 5.3 0 0 1 16.7 1Z" />
      )}
    </svg>
  );
}

export function OfficialSocialLinks({ className, linkClassName, emptyMessage }: { className?: string; linkClassName?: string; emptyMessage?: string }) {
  const links = networks.filter(({ key }) => Boolean(siteConfig.social[key]));
  if (!links.length) return emptyMessage ? <p className="mt-3 text-sm leading-6 text-stone-500">{emptyMessage}</p> : null;

  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {links.map(({ key, label }) => (
        <a key={key} href={siteConfig.social[key]} target="_blank" rel="noopener noreferrer" className={cn("inline-flex min-h-6 items-center gap-2 whitespace-nowrap rounded-sm focus-visible:outline-2 focus-visible:outline-current", linkClassName)}>
          <SocialIcon network={key} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
