import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface Props {
  children: string;
}

/**
 * Renders a markdown string with JJ-styled typography.
 * Used for destination detail pages, package detail pages, and any
 * long-form content where the markdown is the source of truth.
 */
export function MarkdownContent({ children }: Props) {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16 font-serif text-[#081d01]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-display text-4xl md:text-5xl mb-8 leading-tight tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-reform text-2xl md:text-3xl mt-12 mb-6 leading-tight uppercase tracking-[0.04em]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-serif font-semibold text-xl md:text-2xl mt-10 mb-4 leading-tight">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-display text-lg md:text-xl mt-8 mb-3 leading-tight">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-base md:text-lg leading-relaxed mb-5">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-base md:text-lg leading-relaxed">{children}</li>
          ),
          a: ({ children, href }) => {
            if (href && href.startsWith('/')) {
              return (
                <Link
                  href={href}
                  className="text-[#e79e23] hover:text-[#c8841a] underline underline-offset-4 transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                className="text-[#e79e23] hover:text-[#c8841a] underline underline-offset-4 transition-colors"
              >
                {children}
              </a>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#e79e23] pl-6 my-8 italic text-base md:text-lg text-[#081d01]/80">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-[#081d01]">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          table: ({ children }) => (
            <div className="overflow-x-auto my-8 -mx-6 md:mx-0">
              <table className="min-w-full border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#ede4d1]">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-[#081d01]/20 px-4 py-3 text-left font-display text-sm md:text-base">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-[#081d01]/15 px-4 py-3 text-sm md:text-base align-top">
              {children}
            </td>
          ),
          hr: () => <hr className="my-12 border-[#081d01]/15" />,
          code: ({ children }) => (
            <code className="bg-[#ede4d1] px-1.5 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
