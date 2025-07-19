import React from 'react';

const Cekince: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Çekince</h1>
    <p className="text-lg text-gray-700 mb-4">
      Bu web sitesinde yer alan tüm bilgiler, İletişim Group tarafından genel bilgilendirme amacıyla sunulmuştur. Bilgilerin doğruluğu ve güncelliği için azami özen gösterilse de, bilgilerde oluşabilecek hata veya eksikliklerden dolayı sorumluluk kabul edilmez.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Bilgiler tavsiye niteliğinde değildir.</li>
      <li>İçerik değiştirilebilir ve güncellenebilir.</li>
      <li>Yasal sorumluluk kullanıcıya aittir.</li>
    </ul>
    <p className="mt-6 text-gray-700">Herhangi bir sorunuz için <a href="mailto:info@iletisimgroup.com" className="text-blue-600 underline">info@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default Cekince;
