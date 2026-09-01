import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function timeAgo(dateStr) {
  if (!dateStr) return "";
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (diff < 60)    return "Just now";
  if (diff < 3600)  return Math.floor(diff / 60) + "m ago";
  if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
  if (diff < 604800) return Math.floor(diff / 86400) + "d ago";
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function truncateText(text, max = 220) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(25,25,25,.06)",
      border: "1px solid rgba(25,25,25,.06)",
      animation: "li-pulse 1.5s ease-in-out infinite",
    }}>
      <div style={{ height: 200, background: "#E8E5E1" }} />
      <div style={{ padding: "20px 22px 24px" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#E8E5E1" }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 12, background: "#E8E5E1", borderRadius: 6, width: "60%", marginBottom: 6 }} />
            <div style={{ height: 10, background: "#E8E5E1", borderRadius: 6, width: "40%" }} />
          </div>
        </div>
        <div style={{ height: 11, background: "#E8E5E1", borderRadius: 6, marginBottom: 8 }} />
        <div style={{ height: 11, background: "#E8E5E1", borderRadius: 6, width: "85%", marginBottom: 8 }} />
        <div style={{ height: 11, background: "#E8E5E1", borderRadius: 6, width: "70%" }} />
      </div>
    </div>
  );
}

// ─── Post Card ────────────────────────────────────────────────────────────────

const COMPANY_NAME = "Catalyst Integrated Solutions";
const COMPANY_PAGE = "https://www.linkedin.com/company/catalyst-service-solutions-partners-pvt-ltd/";
const LI_LOGO = (
  <svg width="18" height="18" fill="#0A66C2" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const text = post.text || "";
  const needsTruncate = text.length > 220;
  const displayText = expanded ? text : truncateText(text);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(25,25,25,.06)",
        border: "1px solid rgba(25,25,25,.06)",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow .25s, transform .25s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(3,115,255,.12)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(25,25,25,.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Post Image */}
      {post.imageUrl && !imgError && (
        <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#F4F2EF" }}>
          <img
            src={post.imageUrl}
            alt="LinkedIn post"
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      )}

      {/* Card Body */}
      <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Author row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "linear-gradient(135deg,#0258cc,#43934A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "Outfit" }}>C</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#191919", lineHeight: 1.3 }}>{COMPANY_NAME}</div>
            <div style={{ fontSize: 12, color: "#9E9A93", marginTop: 2 }}>{timeAgo(post.publishedAt)}</div>
          </div>
          <div style={{ flexShrink: 0 }}>{LI_LOGO}</div>
        </div>

        {/* Post text */}
        {text && (
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#46433C", margin: 0 }}>{displayText}</p>
            {needsTruncate && (
              <button
                onClick={() => setExpanded(v => !v)}
                style={{
                  background: "none", border: "none", padding: 0, marginTop: 6,
                  fontSize: 13, fontWeight: 600, color: "#0373ff", cursor: "pointer", fontFamily: "Outfit",
                }}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}

        {/* Video badge */}
        {post.videoUrl && (
          <div style={{
            marginTop: 12, display: "inline-flex", alignItems: "center", gap: 6,
            background: "#F4F2EF", borderRadius: 8, padding: "6px 12px",
            fontSize: 12, fontWeight: 600, color: "#46433C",
          }}>
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video post
          </div>
        )}

        {/* View on LinkedIn */}
        <a
          href={post.postUrl || COMPANY_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600, color: "#0373ff",
            fontFamily: "Outfit", textDecoration: "none",
          }}
        >
          View on LinkedIn
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div style={{ textAlign: "center", padding: "48px 24px" }}>
      <div style={{
        width: 56, height: 56, borderRadius: 16, background: "rgba(3,115,255,.08)",
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px",
      }}>
        <svg width="26" height="26" fill="#0373ff" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </div>
      <div style={{ fontSize: 16, fontWeight: 600, color: "#191919", marginBottom: 8 }}>No posts yet</div>
      <div style={{ fontSize: 14, color: "#9E9A93", marginBottom: 20 }}>
        Follow us on LinkedIn to stay updated with our latest news.
      </div>
      <a
        href={COMPANY_PAGE}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#0A66C2", color: "#fff", fontWeight: 600, fontSize: 14,
          padding: "11px 22px", borderRadius: 999, textDecoration: "none",
          fontFamily: "Outfit",
        }}
      >
        Follow on LinkedIn <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LinkedInPosts({ limit = 6 }) {
  const [posts, setPosts]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      try {
        const res = await fetch(`/admin/api/linkedin/posts.php?limit=${limit}`, {
          headers: { "Accept": "application/json" },
        });
        if (!res.ok) throw new Error("Server error " + res.status);
        const json = await res.json();

        if (!cancelled) {
          if (json.success) {
            setPosts(json.data || []);
          } else {
            setError("Could not load LinkedIn posts.");
          }
        }
      } catch {
        if (!cancelled) setError(null); // Silent fail — site keeps working
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPosts();
    return () => { cancelled = true; };
  }, [limit]);

  // ─── Loading State ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <>
        <style>{`@keyframes li-pulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {Array.from({ length: 3 }, (_, i) => <SkeletonCard key={i} />)}
        </div>
      </>
    );
  }

  // ─── Error or Empty State ───────────────────────────────────────────────────
  if (error || posts.length === 0) {
    return <EmptyState />;
  }

  // ─── Posts Grid ─────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`@keyframes li-pulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Follow link */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <a
          href={COMPANY_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#0A66C2", color: "#fff", fontWeight: 600, fontSize: 14,
            padding: "12px 26px", borderRadius: 999, textDecoration: "none",
            fontFamily: "Outfit", transition: "opacity .2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Follow us on LinkedIn
          <ArrowUpRight size={14} />
        </a>
      </div>
    </>
  );
}
