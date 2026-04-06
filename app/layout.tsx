import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEC | Free Notion Templates",
  description:
    "Get 3 free Notion templates: Finance Tracker, Project Management, and Habit Tracker. Organize your life today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
