import React from 'react';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  // Mock blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Chapter 7 Bankruptcy: Is It Right for You?',
      slug: 'understanding-chapter-7-bankruptcy',
      excerpt: 'Chapter 7 bankruptcy can provide a fresh financial start, but it\'s important to understand if it\'s the right option for your specific situation.',
      date: 'February 15, 2025',
      author: 'Jane Smith, Esq.',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'How to Rebuild Your Credit After Bankruptcy',
      slug: 'rebuild-credit-after-bankruptcy',
      excerpt: 'Bankruptcy doesn\'t have to be the end of your financial journey. Learn effective strategies to rebuild your credit score after filing for bankruptcy.',
      date: 'February 8, 2025',
      author: 'Michael Johnson, Esq.',
      imageUrl: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Business Bankruptcy: Chapter 11 vs. Chapter 7',
      slug: 'business-bankruptcy-chapter-11-vs-chapter-7',
      excerpt: 'For struggling businesses, understanding the differences between Chapter 11 and Chapter 7 bankruptcy is crucial for making the right decision.',
      date: 'January 30, 2025',
      author: 'Sarah Williams, Esq.',
      imageUrl: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'The Automatic Stay: How Bankruptcy Stops Collection Actions',
      slug: 'automatic-stay-bankruptcy-stops-collections',
      excerpt: 'One of the most immediate benefits of filing for bankruptcy is the automatic stay, which halts most collection actions against you.',
      date: 'January 22, 2025',
      author: 'Robert Davis, Esq.',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Bankruptcy Myths Debunked: Separating Fact from Fiction',
      slug: 'bankruptcy-myths-debunked',
      excerpt: 'There are many misconceptions about bankruptcy that can prevent people from seeking the financial relief they need. Let\'s separate fact from fiction.',
      date: 'January 15, 2025',
      author: 'Lisa Thompson, Esq.',
      imageUrl: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      title: 'Chapter 13 Bankruptcy: Creating a Repayment Plan That Works',
      slug: 'chapter-13-bankruptcy-repayment-plan',
      excerpt: 'Chapter 13 bankruptcy allows you to keep your assets while repaying your debts through a structured plan. Learn how to create a plan that works for your situation.',
      date: 'January 8, 2025',
      author: 'David Wilson, Esq.',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div>
      {/* Blog Header */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold mb-4 text-white">Bankruptcy Law Blog</h1>
          <p className="text-xl max-w-3xl">
            Stay informed with the latest insights, tips, and news about bankruptcy law and financial recovery.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                imageUrl={post.imageUrl}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-secondary">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-serif font-bold mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600">
                Get the latest bankruptcy law updates and financial tips delivered directly to your inbox.
              </p>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;