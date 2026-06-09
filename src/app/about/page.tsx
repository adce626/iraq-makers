import { SectionTitle } from '@/components/ui/SectionTitle';
import { config } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="من نحن"
          subtitle="نحن هنا لتمكين المبتكرين والمطورين في العراق"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">{config.name}</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                {config.name} هو متجر إلكتروني عراقي متخصص في بيع المكونات الإلكترونية 
                ولوحات التطوير مثل Arduino و ESP32 و Raspberry Pi. 
                نهدف إلى توفير مكونات أصلية عالية الجودة للمطورين والهواة 
                والطلاب في العراق بأسعار منافسة.
              </p>
              <p>
                نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع، 
                لذلك نوفر مع كل منتج أكواد برمجة جاهزة ودروساً تعليمية 
                لتساعدك على البدء فوراً دون انتظار.
              </p>
              <p>
                فريقنا مكون من مهندسين ومطورين عراقيين ذوي خبرة في مجال 
                الإلكترونيات وإنترنت الأشياء (IoT)، نحن هنا لدعمك في كل خطوة.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'رؤيتنا', desc: 'أن نكون المنصة الأولى في العراق للمكونات الإلكترونية وتمكين جيل جديد من المبتكرين.' },
              { title: 'رسالتنا', desc: 'توفير مكونات أصلية مع دعم فني متكامل وأكواد جاهزة لتسهيل رحلة التعلم والتطوير.' },
              { title: 'قيمنا', desc: 'الجودة، المصداقية، السرعة في التوصيل، والدعم الفني المستمر.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">تواصل معنا</h3>
            <p className="text-gray-400 mb-6">نحن هنا للإجابة على جميع استفساراتك</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${config.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl text-white hover:bg-primary transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {config.phone}
              </a>
              <a href={`mailto:${config.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl text-white hover:bg-primary transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {config.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}