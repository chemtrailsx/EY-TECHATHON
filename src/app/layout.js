import "./globals.css";
import "../styles/theme.css";
import "../styles/animations.css";
import "../styles/components.css";

export const metadata = {
  title: "EY Team | Agentic AI Platform",
  description: "Conversational, intelligent, omnichannel sales agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
