import React from 'react';

const Surdurulebilirlik: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Sürdürülebilirlik</h1>
    <p className="text-lg text-gray-700 mb-4">
      Çevresel, sosyal ve yönetişim (ESG) ilkeleri doğrultusunda sürdürülebilirlik projelerimiz ve topluma katkı sağlayan faaliyetlerimiz bu sayfada yer almaktadır.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Çevre dostu projeler</li>
      <li>Sosyal sorumluluk çalışmaları</li>
      <li>Yönetişim ve etik ilkeler</li>
      <li>Gelecek nesillere değer katmak</li>
    </ul>
    <p className="mt-6 text-gray-700">Sürdürülebilirlik ile ilgili sorularınız için <a href="mailto:surdurulebilirlik@iletisimgroup.com" className="text-blue-600 underline">surdurulebilirlik@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default Surdurulebilirlik;
