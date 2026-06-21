"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* اللوجو */}
        <div className="font-bold text-xl tracking-tight text-blue-600">
          <Link href="/">لؤي الغيطاني .</Link>
        </div>

        {/* لينكات الشاشات الكبيرة */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <li>
            <Link
              href="#hero"
              className="hover:text-blue-600 transition-colors"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              المشاريع
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="hover:text-blue-600 transition-colors"
            >
              الخدمات
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              تواصل معي
            </Link>
          </li>
        </ul>

        {/* زرار الـ CTA بالنافبار */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm shadow-blue-200"
          >
            وظفني
          </Link>
        </div>

        {/* زرار الهامبرجر للموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* قائمة الموبايل المنسدلة */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            الرئيسية
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            المشاريع
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            الخدمات
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            تواصل معي
          </Link>
        </div>
      )}
    </header>
  );
}
