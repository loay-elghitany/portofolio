export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col h-full group">
      {/* جسم الكارت */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* عنوان المشروع */}
          <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          {/* وصف المشروع */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* التكنولوجيات المستخدمة */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* زر المعاينة في الأسفل */}
      <div className="p-6 pt-0 border-t border-slate-50 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors gap-2"
        >
          معاينة المشروع الحية
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
