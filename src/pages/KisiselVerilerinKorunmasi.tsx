import React from 'react';

const KisiselVerilerinKorunmasi: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">Kişisel Verilerin Korunması</h1>
    <p className="text-lg text-gray-700 mb-4">
      İletişim Group olarak, kişisel verilerinizin güvenliği ve gizliliği bizim için önceliklidir. 6698 sayılı KVKK ve ilgili mevzuat kapsamında verilerinizi koruyor, işliyor ve saklıyoruz.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Veri sorumlusu: İletişim Group A.Ş.</li>
      <li>Toplanan veriler: Kimlik, iletişim, işlem ve lokasyon bilgileri</li>
      <li>Veri işleme amaçları: Hizmet sunumu, iletişim, yasal yükümlülükler</li>
      <li>Haklarınız: Bilgi talebi, düzeltme, silme, itiraz</li>
    </ul>
    <p className="mt-6 text-gray-700">KVKK kapsamındaki haklarınız için <a href="mailto:kvkk@iletisimgroup.com" className="text-blue-600 underline">kvkk@iletisimgroup.com</a> adresinden başvurabilirsiniz.</p>
  </div>
);

export default KisiselVerilerinKorunmasi;
