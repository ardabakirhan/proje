import React from 'react';

const MedyaMerkezi: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Medya Merkezi</h1>
    <p className="text-lg text-gray-700 mb-4">
      Basın bültenleri, haberler, etkinlikler ve medya ile ilgili tüm güncel bilgilere bu sayfadan ulaşabilirsiniz. Şirketimizin medya görünürlüğü ve iletişim faaliyetleri burada yer alır.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Basın bültenleri</li>
      <li>Haberler ve duyurular</li>
      <li>Etkinlikler</li>
      <li>Medya ile iletişim</li>
    </ul>
    <p className="mt-6 text-gray-700">Medya ile ilgili sorularınız için <a href="mailto:medya@iletisimgroup.com" className="text-blue-600 underline">medya@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default MedyaMerkezi;
