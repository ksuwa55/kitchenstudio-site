"use client";

import { useEffect } from "react";

type Post = { id: string; url: string; description: string };

export default function NewsSection({ posts }: { posts: Post[] }) {
  useEffect(() => {
    const w = window as typeof window & {
      instgrm?: { Embeds?: { process?: () => void } };
    };
    const processEmbeds = () => w?.instgrm?.Embeds?.process?.();

    const existing = document.querySelector('script[data-ig-embed="true"]');
    if (existing) {
      processEmbeds();
      return;
    }

    const s = document.createElement("script");
    s.async = true;
    s.defer = true;
    s.src = "https://www.instagram.com/embed.js";
    s.setAttribute("data-ig-embed", "true");
    s.onload = () => processEmbeds();
    document.body.appendChild(s);
    processEmbeds();
  }, []);

  return (
    <div className="igGrid">
      {posts.map((post) => (
        <div className="igCard" key={post.id}>
          {post.description && <p className="igCardDesc">{post.description}</p>}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={post.url}
            data-instgrm-version="14"
            style={{ background: "#fff", border: 0, margin: 0, padding: 0, width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}
