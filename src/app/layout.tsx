import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Portfolio | Urooj Ahmad",
  description: "Portfolio of Urooj Ahmad, a full-stack developer specializing in Next.js, TypeScript, Appwrite, and cloud technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Urooj Ahmad",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Appwrite",
    "React",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Urooj Ahmad", url: "https://urzahmed.vercel.app/" }],
  creator: "Urooj Ahmad",
  openGraph: {
    title: "Urooj Ahmad | Full-Stack Developer & Software Engineer",
    description: "Explore the portfolio of Urooj Ahmad, a skilled full-stack developer experienced in Next.js, TypeScript, and cloud solutions.",
    url: "https://urzahmed.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urooj Ahmad | Full-Stack Developer & Software Engineer",
    description: "Discover Urooj Ahmad’s expertise in web development, Next.js, TypeScript, and cloud solutions.",
    images: ["https://urzahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.7e576f9c.png&w=256&q=75"],
    site: "@urzahmed",
    creator: "@urzahmed",
  },
  robots: "index, follow",
  other: {
    "linkedin:url": "https://www.linkedin.com/in/urooj-ahmad",
    "linkedin:title": "Urooj Ahmad | Full-Stack Developer & Software Engineer",
    "linkedin:description": "Hi, I'm Urooj. I'm a full-stack developer with a passion for building sleek, scalable applications with robust backends. I developed and manage Hitiste, a dynamic TypeScript-based community platform using Next.js, Tailwind CSS, and TanStack Query, engaging 200+ active users. I enjoy solving complex problems and optimizing performance to create seamless user experiences.As an aspiring software engineer and Software Trainee at Wipro, my focus was on crafting reliable backend solutions using Java, Spring Boot, and RESTful APIs. I embraced Agile practices to enhance team collaboration and efficiency, reflecting my dedication to developing high-quality software and contributing to our collective success.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ThemeProvider attribute="class">
          <main className="land relative z-10">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
