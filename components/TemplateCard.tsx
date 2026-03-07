interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
  price?: string;
  imagePlaceholder?: string;
}

export default function TemplateCard({
  title,
  description,
  category,
  href,
  price,
  imagePlaceholder,
}: TemplateCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="template-card group">
      {/* Image placeholder */}
      <div className="template-card-image">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400">
          <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
          </svg>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
            {category}
          </span>
          {price ? (
            <span className="text-sm font-bold text-stone-900">{price}</span>
          ) : (
            <span className="text-sm font-bold text-green-600">Free</span>
          )}
        </div>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-500">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-stone-900">
          {price ? "Purchase" : "Get Template"}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}
