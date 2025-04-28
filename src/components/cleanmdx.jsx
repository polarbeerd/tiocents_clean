"use client";
import Image from "next/image";

const components = {
  h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props) => (
    <h2 className="text-3xl font-semibold mt-10 mb-6" {...props} />
  ),
  h3: (props) => <h3 className="text-2xl font-semibold mb-8 mt-8" {...props} />,
  p: (props) => <p className="leading-7 text-gray-300 mb-6" {...props} />,
  a: (props) => (
    <a
      className="text-blue-400 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc list-inside mb-6" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-6" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 pl-4 italic text-gray-400 my-6"
      {...props}
    />
  ),
  img: (props) => (
    <Image
      src={props.src}
      alt={props.alt || ""}
      width={800}
      height={600}
      className="rounded-lg my-6"
      priority
    />
  ),
  strong: (props) => <strong className="text-white font-semibold" {...props} />,
  em: (props) => <em className="text-gray-400 italic" {...props} />,
};

export default components;
