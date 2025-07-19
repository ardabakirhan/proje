import React from 'react';

const IletisimdeHayat: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">İletişim'de Hayat</h1>
    <p className="text-lg text-gray-700 mb-4">
      İletişim Group'ta iş hayatı, kurum kültürü, ekip ruhu ve çalışan deneyimi hakkında detaylı bilgiye bu sayfadan ulaşabilirsiniz. Modern çalışma ortamı ve gelişim fırsatları sunuyoruz.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Çalışan deneyimi ve başarı hikayeleri</li>
      <li>Kurum içi etkinlikler</li>
      <li>Eğitim ve gelişim fırsatları</li>
      <li>Takım ruhu ve iş birliği</li>
    </ul>
    <p className="mt-6 text-gray-700">Kariyer ve iş başvuruları için <a href="mailto:kariyer@iletisimgroup.com" className="text-blue-600 underline">kariyer@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default IletisimdeHayat;
