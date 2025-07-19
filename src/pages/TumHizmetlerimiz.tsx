import React from "react";

const services = [
  {
    title: "Hukuk Hizmetleri",
    description: "Bireysel ve kurumsal hukuki danışmanlık hizmetleri.",
    href: "/hukuk",
    icon: "📄",
  },
  {
    title: "Ofis ve Gayrimenkul",
    description: "Modern ofis alanları ve gayrimenkul yatırım fırsatları.",
    href: "/ofis-gayrimenkul",
    icon: "🏢",
  },
  {
    title: "Medya ve İletişim",
    description: "Yaratıcı medya çözümleri, dijital pazarlama ve prodüksiyon hizmetleri.",
    href: "/medya",
    icon: "🎥",
  },
  {
    title: "Ticaret ve İhracat",
    description: "Global pazarlarda ithalat, ihracat ve ticaret hizmetleri.",
    href: "/trade",
    icon: "🚚",
  },
  {
    title: "İnşaat ve Yapı",
    description: "Güvenilir inşaat çözümleri ve kaliteli yapı projeleri.",
    href: "/insaat",
    icon: "🏗️",
  },
  {
    title: "Yatırımcı İlişkileri",
    description: "Yatırımcılar için şeffaf ve güncel bilgi paylaşımı.",
    href: "/yatirimci-iliskileri",
    icon: "💼",
  },
  {
    title: "Sürdürülebilirlik",
    description: "Çevre dostu uygulamalar ve sürdürülebilir iş modelleri.",
    href: "/surdurulebilirlik",
    icon: "🌱",
  },
  {
    title: "İletişimde Hayat",
    description: "Toplumsal fayda ve sosyal sorumluluk projeleri.",
    href: "/iletisimde-hayat",
    icon: "🤝",
  },
];

const unsplashBg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";

const TumHizmetlerimiz: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-2"
      style={{
        backgroundImage: `url(${unsplashBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full mx-auto py-20 px-4">
        <h1 className="text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg tracking-tight">Tüm Hizmetlerimiz</h1>
        <p className="mb-12 text-xl text-white/80 text-center max-w-2xl mx-auto backdrop-blur-sm bg-black/30 rounded-lg px-4 py-2 shadow-md">
          Aşağıda İletişim Group'un sunduğu tüm hizmetleri bulabilirsiniz. Her bir hizmete tıklayarak detaylı bilgi alabilirsiniz.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <a
              key={idx}
              href={service.href}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 shadow-xl hover:shadow-2xl p-8 transition-all duration-300 border border-white/20 hover:border-blue-400 backdrop-blur-lg"
            >
              <span className="text-4xl mb-4">{service.icon}</span>
              <h2 className="text-lg font-bold text-white mb-2 text-center">{service.title}</h2>
              <p className="text-white/80 mb-4 text-sm text-center">{service.description}</p>
              <span className="inline-block text-blue-200 font-semibold text-sm mt-auto">Daha Fazla Bilgi →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TumHizmetlerimiz;
