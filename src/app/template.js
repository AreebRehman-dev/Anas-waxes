// Re-mounts on every navigation, so each page fades in as it arrives.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
