# مكونات العراق - Arduino Iraq

متجر إلكتروني عراقي متخصص في بيع المكونات الإلكترونية ولوحات التطوير.

## التقنيات المستخدمة

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **RTL** (Arabic)

## المميزات

- تصميم RTL كامل باللغة العربية
- خط Cairo + Tajawal
- ثيم داكن (أسود، أخضر، أزرق)
- طلب عبر واتساب مباشر لكل منتج
- صور منتجات غير مقصوصة (object-contain)
- فيديوهات عبر API route مخصصة (تحقق من الامتداد + streaming)
- SSG لجميع الصفحات
- Sitemap + Robots.txt + Open Graph

## هيكل المشروع

```
src/
├── app/              # صفحات Next.js App Router
│   ├── products/     # المنتجات
│   ├── projects/     # المشاريع
│   ├── tutorials/    # دروس وأكواد
│   ├── about/        # من نحن
│   ├── contact/      # اتصل بنا
│   └── api/video/    # API لفيديو المنتجات
├── components/       # مكونات React
│   ├── home/         # الصفحة الرئيسية
│   ├── layout/       # Header, Footer, WhatsAppFloat
│   ├── products/     # ProductCard, ProductGrid, ProductFilter
│   ├── product-detail/  # تفاصيل المنتج
│   └── ui/           # Button, Badge, Icons, etc.
├── lib/              # دوال مساعدة
│   ├── data.ts       # طبقة البيانات
│   └── utils.ts      # أدوات
├── data/             # ملفات JSON
│   ├── products.json
│   ├── categories.json
│   ├── tutorials.json
│   ├── projects.json
│   └── site-config.json
└── types/            # TypeScript interfaces
```

## التطوير

```bash
npm run dev    # تشغيل بيئة التطوير
npm run build  # بناء المشروع
npm start      # تشغيل الإصدار النهائي
```

## النشر

المشروع مهيأ للنشر على Vercel. ادفع إلى GitHub واستورد المستودع.
