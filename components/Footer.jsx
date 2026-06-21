import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-center sm:text-right">
            &copy; {currentYear} | صُنع بكل شغف بواسطة لؤي الغيطاني. جميع الحقوق
            محفوظة.
          </p>
        </div>

        {/* روابط سريعة للمنصات المهنية */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/201090748215"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
