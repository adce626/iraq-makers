import Link from 'next/link';
import { config, categories } from '@/lib/data';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TelegramIcon, PhoneIcon, EmailIcon, LocationIcon } from '@/components/ui/icons';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">مكونات</span> العراق
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {config.description}
            </p>
            <div className="flex items-center gap-3">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <FacebookIcon />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <InstagramIcon />
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <YoutubeIcon />
                </a>
              )}
              {config.social.telegram && (
                <a href={config.social.telegram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <TelegramIcon />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="block py-2 text-gray-400 hover:text-primary text-sm transition-all">جميع المنتجات</Link></li>
              <li><Link href="/projects" className="block py-2 text-gray-400 hover:text-primary text-sm transition-all">مشاريع الزبائن</Link></li>
              <li><Link href="/tutorials" className="block py-2 text-gray-400 hover:text-primary text-sm transition-all">دروس وأكواد</Link></li>
              <li><Link href="/about" className="block py-2 text-gray-400 hover:text-primary text-sm transition-all">من نحن</Link></li>
              <li><Link href="/contact" className="block py-2 text-gray-400 hover:text-primary text-sm transition-all">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">التصنيفات</h4>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products?category=${cat.id}`} className="block py-2 text-gray-400 hover:text-primary text-sm transition-all">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${config.phone}`} className="flex items-center gap-2 py-2 text-gray-400 hover:text-primary text-sm transition-all">
                  <PhoneIcon className="w-4 h-4" />
                  {config.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.email}`} className="flex items-center gap-2 py-2 text-gray-400 hover:text-primary text-sm transition-all">
                  <EmailIcon className="w-4 h-4" />
                  {config.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <LocationIcon className="w-4 h-4 mt-0.5 shrink-0" />
                {config.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} &copy; {config.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}