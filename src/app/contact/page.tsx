'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { config } from '@/lib/data';
import { getWhatsappUrl } from '@/lib/utils';
import { PhoneIcon, EmailIcon, LocationIcon, TelegramIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/ui/icons';

export default function ContactPage() {
  const whatsappUrl = getWhatsappUrl(config.whatsappNumber, config.whatsappMessage);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="اتصل بنا"
          subtitle="نحن هنا للإجابة على استفساراتك ومساعدتك"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">معلومات الاتصال</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">رقم الهاتف</h4>
                    <a href={`tel:${config.phone}`} className="text-gray-400 hover:text-primary transition-all">
                      {config.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <EmailIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">البريد الإلكتروني</h4>
                    <a href={`mailto:${config.email}`} className="text-gray-400 hover:text-primary transition-all">
                      {config.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <LocationIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">العنوان</h4>
                    <p className="text-gray-400">{config.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">تواصل مباشر</h3>
              <div className="space-y-4">
                <WhatsAppButton variant="whatsapp" size="lg" fullWidth />

                <a
                  href={config.social.telegram || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all"
                >
                  <TelegramIcon className="w-5 h-5" />
                  تواصل عبر تليجرام
                </a>

                <Button href={`tel:${config.phone}`} variant="secondary" size="lg" className="w-full">
                  <PhoneIcon className="w-5 h-5" />
                  اتصال هاتفي
                </Button>
              </div>

              <hr className="border-gray-800 my-6" />

              <div className="flex justify-center gap-4">
                {config.social.facebook && (
                  <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                    <FacebookIcon className="w-6 h-6" />
                  </a>
                )}
                {config.social.instagram && (
                  <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                )}
                {config.social.youtube && (
                  <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                    <YoutubeIcon className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-bold text-white mb-2">ساعات العمل</h3>
            <p className="text-gray-400 mb-6">نحن متاحون لخدمتك في الأوقات التالية:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { day: 'السبت - الخميس', time: '9:00 صباحاً - 8:00 مساءً' },
                { day: 'الجمعة', time: '2:00 مساءً - 8:00 مساءً' },
              ].map((item) => (
                <div key={item.day} className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 p-4 bg-gray-950 rounded-xl border border-gray-800">
                  <span className="text-gray-400 text-sm sm:text-base">{item.day}</span>
                  <span className="text-white font-medium text-sm sm:text-base">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}