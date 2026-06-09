import { SectionTitle } from '@/components/ui/SectionTitle';
import { config } from '@/lib/data';
import { PhoneIcon, EmailIcon } from '@/components/ui/icons';

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
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
                <PhoneIcon className="w-5 h-5" />
                {config.phone}
              </a>
              <a href={`mailto:${config.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl text-white hover:bg-primary transition-all">
                <EmailIcon className="w-5 h-5" />
                {config.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}