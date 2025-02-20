// import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Save your inputs from hackers",
        excerpt: "Learn how to sanitize inputs in modern web applications with Next.js.",
        date: "2025-02-19",
    },
    {
        id: 2,
        title: "Save the Billion Dollar Mistake",
        excerpt: "Discover the Null Pointer Exception, one of the most common and frustrating bugs.",
        date: "2025-02-10",
    },
];

export default function BlogCardSection() {
    return (
        <section className="m-14">
            <p className="text-md mb-6">
                Welcome to my digital garden where I share what I am learning about becoming a better developer and growing a career in tech. 📝
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                    // <Link key={post.id} href={`/blogs/${post.id.toString()}`} className="block">

                        <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                        </div>
                    // </Link>
                ))}
            </div>
        </section>
    );
}
