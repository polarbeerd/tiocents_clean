"use client";

import Image from "next/image";

const MDXcomponents = {
  h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props) => (
    <h2 className="text-3xl font-semibold mb-5 mt-10" {...props} />
  ),
  h3: (props) => <h3 className="text-2xl font-semibold mb-4 mt-8" {...props} />,
  p: (props) => <p className="leading-7 text-gray-300 mb-6" {...props} />,
  a: (props) => (
    <a
      {...props}
      className="text-blue-400 hover:text-blue-300 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  ul: (props) => <ul className="list-disc list-inside mb-6" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-6" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 my-6">
      {props.children}
    </blockquote>
  ),
  img: ({ src, alt = "" }) => (
    <div className="relative w-full h-64 sm:h-96 my-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>
  ),
  strong: (props) => <strong className="text-white font-semibold" {...props} />,
  em: (props) => <em className="text-gray-400 italic" {...props} />,
};

export default MDXcomponents;
