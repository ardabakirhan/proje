import React from 'react';

const YatirimciIliskileri: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Yatırımcı İlişkileri</h1>
    <p className="text-lg text-gray-700 mb-4">
      Şirketimizin finansal durumu, yatırımcı sunumları, raporlar ve paydaşlarımıza yönelik bilgilendirmeler bu sayfada yer almaktadır. Şeffaflık ve güvenilirlik ilkesiyle hareket ediyoruz.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Finansal tablolar ve raporlar</li>
      <li>Yatırımcı sunumları</li>
      <li>Ortaklık yapısı ve yönetim</li>
      <li>Yasal duyurular</li>
    </ul>
    <p className="mt-6 text-gray-700">Daha fazla bilgi için <a href="mailto:yatirimci@iletisimgroup.com" className="text-blue-600 underline">yatirimci@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default YatirimciIliskileri;
