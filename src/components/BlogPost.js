import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, excerpt, date, author, imageUrl, slug }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          {author && (
            <>
              <span className="mx-2">•</span>
              <span>{author}</span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-serif font-bold mb-2">
          <Link to={`/blog/${slug}`} className="hover:text-accent transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${slug}`} 
          className="inline-flex items-center text-accent font-medium hover:text-accent-light transition-colors"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;