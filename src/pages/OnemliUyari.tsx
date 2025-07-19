import React from 'react';

const OnemliUyari: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Önemli Uyarı</h1>
    <p className="text-lg text-gray-700 mb-4">
      Kullanıcılarımızın güvenliği ve yasal hakları için önemli uyarılar ve bilgilendirmeler bu sayfada yer almaktadır. Lütfen aşağıdaki hususlara dikkat ediniz:
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Web sitemizdeki tüm içerik bilgilendirme amaçlıdır.</li>
      <li>Kişisel verileriniz KVKK kapsamında korunmaktadır.</li>
      <li>Yasal haklarınız ve sorumluluklarınız için ilgili sayfaları inceleyiniz.</li>
    </ul>
    <p className="mt-6 text-gray-700">Detaylı bilgi için <a href="mailto:info@iletisimgroup.com" className="text-blue-600 underline">info@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default OnemliUyari;
