import { useState } from "react";

const PASSWORD_HASH = "214dee38ccab3ca1b2d04ca0dacb7e9970a6010905efca9ebe07f3ebc6b4fa7e";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hash = await sha256(input);
    if (hash === PASSWORD_HASH) {
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0a",
      fontFamily: "sans-serif",
    }}>
      <div style={{
        background: "#111",
        border: "1px solid #222",
        borderRadius: 12,
        padding: "48px 40px",
        width: 360,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", letterSpacing: -1 }}>
            Electra
          </div>
          <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>
            Accès protégé — entrez le mot de passe
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Mot de passe"
            autoFocus
            style={{
              background: "#1a1a1a",
              border: `1px solid ${error ? "#ef4444" : "#333"}`,
              borderRadius: 8,
              padding: "10px 14px",
              color: "#fff",
              fontSize: 15,
              outline: "none",
            }}
          />
          {error && (
            <div style={{ fontSize: 12, color: "#ef4444" }}>Mot de passe incorrect.</div>
          )}
          <button
            type="submit"
            style={{
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "10px 0",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Accéder
          </button>
        </form>
      </div>
    </div>
  );
}
