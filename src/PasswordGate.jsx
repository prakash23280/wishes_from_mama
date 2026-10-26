import { useState } from "react";

const PASSWORD = "2823";

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Wrong password... try again ❤️");
      setPassword("");
    }
  };

  if (unlocked) {
    return children;
  }

  return (
    <div className="password-screen">
      <div className="password-window">

        <div className="password-topbar">
          <span>wishes-from-mama.exe</span>
          <span>♥</span>
        </div>

        <div className="password-content">

          <div className="pixel-heart">♥</div>

          <div className="password-label">
            PRIVATE MESSAGE
          </div>

          <h1>For Bangaru</h1>

          <p className="password-subtitle">
            This little world is only for you.
          </p>

          <div className="password-divider">
            ─────────────────
          </div>

          <form onSubmit={handleSubmit}>

            <label htmlFor="password">
              ENTER PASSWORD
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="••••"
              autoFocus
            />

            <button type="submit">
              UNLOCK ♥
            </button>

          </form>

          {error && (
            <div className="password-error">
              {error}
            </div>
          )}

          <div className="password-footer">
            <span>ACCESS: RESTRICTED</span>
            <span>♥ ONLY FOR YOU ♥</span>
          </div>

        </div>
      </div>
    </div>
  );
}
