import Link from "next/link";

const projectsData = {
  mydoc90: {
    title: "MyDoc90 - نظام إدارة العيادات الطبي الذكي",
    // هنا جمعنا كل المشاكل والحلول في مصفوفة واحدة عشان جافاسكريبت تقراهم كلهم بدون Override
    caseStudies: [
      {
        challenge:
          "ضياع التاريخ المرضي للمريض بين الدفاتر المكدسة، وصعوبة استرجاع تفاصيل زياراته السابقة مما يستهلك وقت الكشف ويعرض دقة التشخيص للخطر.",
        solution:
          "بناء قاعدة بيانات مركزية قوية ومؤمنة. بمجرد إدخال رقم هاتف المريض، يستدعي النظام فوراً ملفه الطبي الشامل وتاريخ زياراته وكل تفصيله عنه، حتى لو كانت آخر زيارة له منذ 10 سنوات.",
      },
      {
        challenge:
          "الأطباء يستغرقون وقتاً طويلاً في كتابة الروشتات وتكرار أسماء الأدوية والجرعات يدوياً، مع صعوبة تذكر البدائل المتاحة فورياً لكل دواء في السوق.",
        solution:
          "دمج تقنية التعرف على الصوت المستمر (Web Speech API) مع محرك ذكاء اصطناعي يقوم بتحليل صوت الطبيب وتفصيص الروشتة في جداول الجرعات والتشخيص تلقائياً في 5 ثوانٍ، بالإضافة إلى محرك بحث ذكي لاقتراح البدائل الدوائية فورياً لمساعدة الطبيب.",
      },
      {
        challenge:
          "عدم قدرة الطبيب على متابعة سير العمل في عيادته، والمدفوعات، والمواعيد عن بُعد، والاعتماد بالكامل على الحسابات الورقية التي يسهل فقدانها أو التلاعب بها.",
        solution:
          "لوحة تحكم سحابية متجاوبة بالكامل (Cloud-Based Admin & Doctor Dashboards) تمكن الدكتور من متابعة كافة المواعيد الحية والتقارير المالية والمدفوعات بالعملة المحلية (EGP) لحظة بلحظة من شاشة موبايله وهو في أي مكان.",
      },
    ],
    features: [
      "نظام حجز وتأكيد مواعيد تلقائي بالكامل.",
      "لوحة تحكم طبيب لإدارة السجلات والروشتات الإلكترونية.",
      "مصفوفة ربط مع WhatsApp لتسهيل وإرسال الإشعارات الفورية للمرضى.",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "WhatsApp API",
      "Tailwind CSS",
    ],
  },
  fetohbrathers: {
    title: "منصة المنيو التفاعلي السريع",
    caseStudies: [
      {
        challenge:
          "خسارة المطاعم للعملاء بسبب بطء الرد وتجميع الطلبات يدوياً وعشوائياً عبر شات الواتساب العادي.",
        solution:
          "بناء واجهة منيو تفاعلية سريعة تتيح للعملاء تصفح الأقسام واختيار الطلبات وتجميعها في عربة تسوق ذكية تحسب الإجمالي تلقائياً، ثم إرسال الطلب بالكامل بضغطة زر واحدة منسقاً إلى واتساب المطعم مباشرة لتسهيل الطلب وضمان دقة البيانات وسرعة التنفيذ.",
      },
    ],
    features: [
      "عربة تسوق تفاعلية محدثة لحظياً بكود جافاسكريبت نظيف.",
      "إرسال منسق وتلقائي لتفاصيل الطلبات لـ WhatsApp بكبسة زر.",
      "تصميم متجاوب وسريع جداً مخصص لشاشات الموبايل.",
    ],
    tech: ["JavaScript ES6", "HTML5", "CSS3", "WhatsApp Integration"],
  },
  fitnessgym: {
    title: "منصة اللياقة الرقمية وإدارة أعضاء الجيم",
    caseStudies: [
      {
        challenge:
          "صعوبة متابعة المتدربين لخططهم الغذائية والتدريبية اليومية، وعشوائية معرفة أوقات ذروة وازدحام الجيم.",
        solution:
          "بناء موقع متكامل للجيم يربط بين المدرب والمتدرب بشكل ذكي، حيث يتيح للمدرب تحديث الأنظمة التدريبية والغذائية لكل مشترك ومتابعة أدائهم, ويوفر للمشتركين معرفة تفاصيل اشتراكاتهم وتحديثات الجيم وعدد المتدربين المتواجدين حالياً لتنظيم أوقات تمرينهم.",
      },
    ],
    features: [
      "لوحة تحكم مخصصة للمدربين لإدارة الأنظمة الغذائية والتمارين.",
      "مؤشر حركي لإعلام الأعضاء بعدد المتدربين الحاليين في الجيم.",
      "تخزين سحابي آمن لصور وبيانات المشتركين والمنتجات.",
    ],
    tech: ["Next.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
  },
};

export default async function ProjectDetails({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const project = projectsData[id?.toLowerCase()];

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">
          المشروع غير موجود!
        </h1>
        <p className="text-sm text-slate-500">
          المعرف الحالي:{" "}
          <code className="bg-slate-100 px-2 py-1 rounded text-red-500">
            {id}
          </code>
        </p>
        <Link
          href="/"
          className="text-blue-600 font-semibold hover:underline block pt-2"
        >
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 animate-fadeIn">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
      >
        ← العودة لمعرض المشاريع
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full border border-blue-100"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-slate-100" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* اللوب الجديد اللي بيلف على كل الـ caseStudies ويعرضهم ورا بعض بنظافة */}
        <div className="md:col-span-2 space-y-8">
          {project.caseStudies.map((item, index) => (
            <div
              key={index}
              className="space-y-4 bg-white border border-slate-100 p-6 rounded-2xl shadow-xs"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  ⚠️ التحدي والمشكلة{" "}
                  {project.caseStudies.length > 1 ? `#${index + 1}` : ""}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {item.challenge}
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-50">
                <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  💡 الحل الهندسي والبرمجي
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 sticky top-24">
          <h4 className="font-bold text-slate-900 border-b border-slate-50 pb-2">
            🚀 أهم مميزات النظام
          </h4>
          <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-blue-500 font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
