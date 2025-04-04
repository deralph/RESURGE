import revamp from "../assets/revampImage.png";

const blogPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Short blog description or excerpt goes here. Learn more about our latest styles.",
    image: revamp,
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit",
    excerpt:
      "Quick snippet for the blog post. Discover the trends in fashion this season.",
    image: revamp,
  },
  {
    id: 3,
    title: "Vestibulum ante ipsum primis",
    excerpt:
      "Catch up with the new arrivals and how to style them. Our blog has all the tips.",
    image: revamp,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-8">
          OUR BLOG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-t"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
