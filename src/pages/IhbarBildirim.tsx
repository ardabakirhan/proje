import React from 'react';

const IhbarBildirim: React.FC = () => (
  <div className="container-custom py-16">
    <h1 className="text-3xl font-bold mb-6">İhbar Bildirimi</h1>
    <p className="text-lg text-gray-700 mb-4">
      İletişim Group olarak, etik ilkelere ve yasal düzenlemelere uygun hareket etmekteyiz. Her türlü usulsüzlük, yolsuzluk veya etik dışı davranışları bildirmek için bu sayfayı kullanabilirsiniz.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>İhbarlar gizli tutulur ve titizlikle değerlendirilir.</li>
      <li>Yasal koruma ve anonimlik sağlanır.</li>
      <li>İhbar için <a href="mailto:ihbar@iletisimgroup.com" className="text-blue-600 underline">ihbar@iletisimgroup.com</a> adresine e-posta gönderebilirsiniz.</li>
    </ul>
    <p className="mt-6 text-gray-700">Daha fazla bilgi için <a href="mailto:info@iletisimgroup.com" className="text-blue-600 underline">info@iletisimgroup.com</a> adresinden bize ulaşabilirsiniz.</p>
  </div>
);

export default IhbarBildirim;
