import React from 'react';

const BilgiToplumuHizmetleri: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Bilgi Toplumu Hizmetleri</h1>
    <p className="text-lg text-gray-700 mb-4">
      İletişim Group olarak, Bilgi Toplumu Hizmetleri kapsamında şeffaflık ve erişilebilirlik ilkelerine uygun olarak tüm yasal yükümlülüklerimizi yerine getiriyoruz. Bu sayfada şirketimize ait ticari, finansal ve hukuki bilgilere ulaşabilirsiniz.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Şirket ticaret sicil bilgileri</li>
      <li>Finansal tablolar ve raporlar</li>
      <li>Yönetim kurulu ve ortaklık yapısı</li>
      <li>Yasal duyurular ve belgeler</li>
    </ul>
    <p className="mt-6 text-gray-700">Daha fazla bilgi için lütfen <a href="mailto:info@iletisimgroup.com" className="text-blue-600 underline">info@iletisimgroup.com</a> adresinden bize ulaşın.</p>
  </div>
);

export default BilgiToplumuHizmetleri;
