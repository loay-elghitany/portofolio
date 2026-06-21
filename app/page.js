import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  // بيانات المشاريع
  const myProjects = [
    {
      title: "MyDoc90 - نظام إدارة العيادات الطبي الذكي",
      description:
        "منصة SaaS متكاملة لإدارة العيادات الطبية، تسهّل على المرضى حجز المواعيد أونلاين، وتساعد الأطباء في تنظيم الجداول، إدارة السجلات الطبية للمرضى، وكتابة الروشتات الإلكترونية، مع نظام إشعارات ذكي ومصفوفة ربط مع واتساب لتأكيد الحجوزات فورياً.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "WhatsApp API",
        "Tailwind CSS",
      ],
      link: "https://www.mydoc90.com/",
    },
    // {
    //   title: "M&M Shop - متجر إلكتروني للهواتف الذكية",
    //   description:
    //     "متجر تجارة إلكترونية متطور مخصص لبيع الهواتف المحمولة وإدارتها. يتميز بواجهة مستخدم عصرية مقسمة بسلاسة (الرئيسية، الأفضل مبيعاً، العروض السريعة، والمتجر) مع دعم كامل للحسابات والأسعار بالجنيه المصري (EGP)، ونظام رفع وإدارة صور المنتجات السحابي.",
    //   tags: ["Next.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    //   link: "#",
    // },
    {
      title: "منصة المنيو التفاعلي السريع",
      description:
        "موقع منيو تفاعلي ذكي للمطاعم والكافيهات، يسمح للعميل بتصفح الوجبات واختيار الطلبات وتجميعها في عربة التسوق الديناميكية، ثم إرسال الطلب بتفاصيله كاملة وبنقرة واحدة مباشرة إلى واتساب المطعم لتسريع عملية البيع.",
      tags: ["JavaScript ES6", "HTML5", "CSS3", "WhatsApp Integration"],
      link: "https://loay-elghitany.github.io/fetohBrathers/",
    },
    {
      title: "موقع إلكتروني لجيم يساعده على تقديم خدمه أفضل لأعضاء الجيم",
      description:
        "موقع يسهل على المدرب والمتدرب رحلتهم التدريبية من خلال تنظيم التمارين والأنظمة الغذائية للمتدرب وإعلمه بعدد المتدربين الحاليين في الجيم وغيرها من الخدمات.",
      tags: ["Next.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
      link: "https://fitnessgym.mydoc90.com/",
    },
  ];

  // بيانات الخدمات الاحترافية اللي بتقدمها
  const myServices = [
    {
      title: "تطوير تطبيقات الويب الكاملة (Full-Stack)",
      description:
        "بناء مواقع وأنظمة قوية من الصفر باستخدام MERN Stack و Next.js، تضمن لك أداءً سريعاً وحماية كاملة لبياناتك السحابية.",
      icon: "💻",
    },
    {
      title: "ربط وبرمجة الـ APIs الخارجية",
      description:
        "ربط مشروعك بأنظمة الإشعارات التلقائية (مثل إرسال رسائل الحجوزات أو الفواتير عبر WhatsApp) أو بوابات الدفع الإلكتروني وخدمات الـ Cloud.",
      icon: "🔌",
    },
    {
      title: "لوحات تحكم ذكية (Admin Dashboards)",
      description:
        "تصميم وبناء لوحات تحكم مرنة وسهلة الاستخدام تتيح لأصحاب المشاريع إدارة المنتجات، الحجوزات، والعملاء، ومتابعة الإحصائيات الحية بكل سلاسة.",
      icon: "📊",
    },
  ];

  return (
    <div className="space-y-32 pb-24">
      {/* 1. Hero Section */}
      <section
        id="hero"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            متاح للمشاريع الجديدة
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            تبحث عن حل رقمي يسهّل <br />
            <span className="text-blue-600">إدارة ونمو عملك؟</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            أنا <strong className="text-slate-900">لؤي الغيطاني</strong>، مطور
            ويب متكامل (Full-Stack Developer) متخصص في بناء وتصميم مواقع وأنظمة
            متكاملة تخدم طبيعة مشروعك وتسهّل إدارته. أركز على الأداء السريع،
            تجربة المستخدم المريحة، والحلول البرمجية الذكية.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md shadow-blue-100"
            >
              تصفح مشاريعي
            </Link>
            <a
              href="https://wa.me/201090748215"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/50 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <h3 className="font-bold text-xl text-slate-800 border-b border-slate-50 pb-4">
            تخصصات متكاملة (MERN Stack)
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
              <span className="font-semibold text-slate-700">
                تطوير الواجهات الخلفية والـ APIs
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded">
                Node.js / Express
              </span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
              <span className="font-semibold text-slate-700">
                بناء واجهات تفاعلية وسريعة
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-700 font-medium px-2 py-1 rounded">
                React / Next.js
              </span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
              <span className="font-semibold text-slate-700">
                إدارة قواعد البيانات السحابية
              </span>
              <span className="text-xs bg-amber-100 text-amber-700 font-medium px-2 py-1 rounded">
                MongoDB / Mongoose
              </span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
              <span className="font-semibold text-slate-700">
                ربط خدمات الطرف الثالث (Third-party)
              </span>
              <span className="text-xs bg-purple-100 text-purple-700 font-medium px-2 py-1 rounded">
                WhatsApp / Cloudinary
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-right space-y-2 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            معرض أعمالي ومشاريعي
          </h2>
          <p className="text-slate-500 text-base max-w-xl">
            مجموعة من الأنظمة والتطبيقات الحية التي قمت بتطويرها لحل مشاكل
            حقيقية وتسهيل الأعمال.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-right space-y-2 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              كيف يمكنني مساعدتك في مشروعك القادم؟
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              أقدم خدمات برمجية متكاملة تركز على الأداء، حل المشكلات اليومية،
              وتحويل فكرتك إلى منتج رقمي ناجح.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {myServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100/50 flex flex-col md:flex-row gap-12 items-start">
          {/* معلومات التواصل الجانبية */}
          <div className="w-full md:w-1/3 space-y-6 md:text-right">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                لنبدأ العمل معاً
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                هل لديك فكرة مشروع أو ترغب في تطوير نظام لشركتك؟ لا تتردد في
                مراسلتي.
              </p>
            </div>
            <div className="space-y-4 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a
                  href="mailto:loayelghitany10@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  loayelghitany10@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                <a
                  href="tel:+201090748215"
                  className="hover:text-blue-600 transition-colors"
                >
                  +201090748215
                </a>
              </div>
            </div>
          </div>

          {/* نموذج التواصل (Form) المطور مع Formspree */}
          <div className="w-full md:flex-grow">
            <form
              action="https://formspree.io/f/xeewybko" // حط الرابط بتاعك هنا مكان YOUR_FORM_ID_HERE
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-slate-700"
                  >
                    الاسم الكريم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // الـ name مهم جداً لـ Formspree
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="أحمد محمد"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-slate-700"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-left focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-slate-700"
                >
                  تفاصيل فكرتك أو مشروعك
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-slate-400"
                  placeholder="اكتب هنا تفاصيل الخدمة أو النظام الذي ترغب في بنائه..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-blue-100 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                إرسال الرسالة الحية
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
