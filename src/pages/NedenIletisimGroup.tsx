import React from 'react';
import { Users, TrendingUp, ShieldCheck, HeartHandshake, Rocket, Award } from 'lucide-react';


const NedenIletisimGroup: React.FC = () => (
  <div className="container-custom py-16">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 text-brand-blue">Neden İletişim Group?</h1>
      <p className="text-lg text-gray-700 mb-6">
        İletişim Group, yenilikçi yaklaşımı, güçlü iş ortaklıkları ve uzman kadrosu ile müşterilerine sürdürülebilir değer sunar. Dijital dönüşüm, güvenilirlik ve müşteri memnuniyeti odaklı hizmetlerimizle sektörde fark yaratıyoruz.
      </p>
    </div>

    {/* Vizyon & Misyon */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-12">
      <div className="bg-white rounded-2xl shadow p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-brand-blue mb-3">Vizyonumuz</h2>
        <p className="text-gray-700">Türkiye'nin ve dünyanın lider dijital dönüşüm şirketlerinden biri olmak, müşterilerimize en yenilikçi ve güvenilir çözümleri sunmak.</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-brand-blue mb-3">Misyonumuz</h2>
        <p className="text-gray-700">Müşterilerimizin iş süreçlerini kolaylaştırmak, sürdürülebilir başarıya ulaşmalarını sağlamak ve topluma değer katmak.</p>
      </div>
    </div>

    {/* Avantajlar */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-brand-blue text-center mb-8">Bizi Farklı Kılan Avantajlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow">
          <Users className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Uzman Kadro</h3>
          <p className="text-gray-600 text-sm text-center">Alanında deneyimli ve dinamik ekibimizle her zaman yanınızdayız.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow">
          <TrendingUp className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Yenilikçi Çözümler</h3>
          <p className="text-gray-600 text-sm text-center">Dijital dönüşüm ve inovasyon odaklı projelerle işinizi ileriye taşıyoruz.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow">
          <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Güvenilirlik</h3>
          <p className="text-gray-600 text-sm text-center">Şeffaflık, etik değerler ve yasal uyumluluk ile güveninizi kazanıyoruz.</p>
        </div>
      </div>
    </div>

    {/* İstatistikler */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-brand-blue text-center mb-8">Başarılarımız</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Award className="w-10 h-10 text-yellow-500 mb-2" />
          <span className="text-3xl font-bold text-gray-900">20+</span>
          <span className="text-gray-600">Yıl Sektör Deneyimi</span>
        </div>
        <div className="flex flex-col items-center">
          <Rocket className="w-10 h-10 text-purple-500 mb-2" />
          <span className="text-3xl font-bold text-gray-900">100+</span>
          <span className="text-gray-600">Başarılı Proje</span>
        </div>
        <div className="flex flex-col items-center">
          <HeartHandshake className="w-10 h-10 text-pink-500 mb-2" />
          <span className="text-3xl font-bold text-gray-900">500+</span>
          <span className="text-gray-600">Mutlu Müşteri</span>
        </div>
      </div>
    </div>

    {/* İletişim */}
    <div className="max-w-2xl mx-auto text-center mt-10">
      <p className="text-gray-700 text-lg mb-2">Daha fazla bilgi almak veya iş birliği için bize ulaşabilirsiniz.</p>
      <a href="mailto:info@iletisimgroup.com" className="text-blue-600 font-semibold underline">info@iletisimgroup.com</a>
    </div>
  </div>
);

export default NedenIletisimGroup;
