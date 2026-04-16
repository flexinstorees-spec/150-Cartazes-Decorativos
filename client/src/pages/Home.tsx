import React, { useState, useEffect } from "react";
import { 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Mail, 
  Printer, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown,
  Star,
  Check,
  Gamepad2,
  X,
  CreditCard,
  Download,
  School
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Import stock images
import heroBg from "@assets/stock_images/colorful_eva_foam_sh_59dfdb75.jpg";
import slide1 from "@assets/stock_images/kids_in_classroom_le_b8e756c7.jpg";
import slide2 from "@assets/stock_images/kids_in_classroom_le_23e6cce6.jpg";
import slide3 from "@assets/stock_images/kids_in_classroom_le_d60b13fe.jpg";
import learnIcon from "@assets/stock_images/happy_child_holding__5bdc9d4e.jpg";
import certificateBonusImage from "@assets/Baixe_agora_um_material_com_1775600312810.png";
import rewardBonusImage from "@assets/Sistema_de_recompensas_escolar_alegre_1775600178008.png";
import musicBonusImage from "@assets/Músicas_Matemáticas_para_aprender_brincando_1775600424569.png";
import bingoBonusImage from "@assets/BAA61E29-7C63-4B41-AE4D-98561B652FBD_1775586050292.png";
import unoBonusImage from "@assets/IMG_1161_1775585600425.png";
import testimonialImage1 from "@assets/img_0363_(1)_1775602956061.png";
import testimonialImage2 from "@assets/img_0363_(2)_1775602956061.png";
import testimonialImage3 from "@assets/img_0363_(3)_1775602956061.png";
import testimonialImage4 from "@assets/img_0363_(4)_1775602956061.png";
import dynamicsImage1 from "@assets/1_1775690645262.png";
import dynamicsImage2 from "@assets/2_1775690645262.png";
import dynamicsImage3 from "@assets/3_1775690645262.png";
import dynamicsImage4 from "@assets/4_1775690645262.png";
import dynamicsImage5 from "@assets/5_1775690645263.png";
import dynamicsImage6 from "@assets/6_1775690645263.png";
import dynamicsImage7 from "@assets/7_1775690645263.png";
import dynamicsImage8 from "@assets/10_1775867563169.png";
import dynamicsImage9 from "@assets/11_1775867563170.png";
import dynamicsImage10 from "@assets/8_1775867563170.png";
import dynamicsImage11 from "@assets/9_1775867563170.png";
import newOfferLogo from "@assets/5439FBF1-6AB6-45E4-994B-9B630889449C_1775774888310.png";
import basicOfferLogo from "@assets/image_1776184585306.png";
import apostilaImage from "@assets/da_1776121698891.png";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [dynamicsEmblaRef, dynamicsEmblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({ name: "", city: "" });
  const [discountPopupType, setDiscountPopupType] = useState<"upsell" | "exit" | null>(null);

  const buyers = [
    { name: "Patrícia", city: "São Paulo" },
    { name: "Mariana", city: "Rio de Janeiro" },
    { name: "Luciana", city: "Curitiba" },
    { name: "Beatriz", city: "Belo Horizonte" },
    { name: "Fernanda", city: "Porto Alegre" },
    { name: "Cláudia", city: "Salvador" },
    { name: "Renata", city: "Fortaleza" },
    { name: "Juliana", city: "Recife" },
    { name: "Camila", city: "Goiânia" },
    { name: "Aline", city: "Manaus" },
    { name: "Sandra", city: "Belém" },
    { name: "Marta", city: "Natal" },
    { name: "Bruna", city: "Vitória" },
    { name: "Carla", city: "Florianópolis" },
    { name: "Daniela", city: "Cuiabá" }
  ];

  useEffect(() => {
    const showRandomNotification = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentNotification(randomBuyer);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showRandomNotification();
    }, 12000);

    // Initial delay
    setTimeout(showRandomNotification, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setDiscountPopupType("exit");
      }
    };

    const handlePopState = (e: PopStateEvent) => {
      // Prevent default back behavior
      window.history.pushState(null, "", window.location.href);
      if (!discountPopupType) {
        setDiscountPopupType("exit");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Setup back button trap
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [discountPopupType]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    if (!dynamicsEmblaApi) return;

    const autoplay = window.setInterval(() => {
      dynamicsEmblaApi.scrollNext();
    }, 2600);

    return () => window.clearInterval(autoplay);
  }, [dynamicsEmblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const testimonials = [
    testimonialImage1,
    testimonialImage2,
    testimonialImage3,
    testimonialImage4
  ];

  const dynamicsGallery = [
    { image: dynamicsImage1, title: "Sempre Dez" },
    { image: dynamicsImage2, title: "Multiplicação em Ação" },
    { image: dynamicsImage3, title: "Amarelinha da Multiplicação" },
    { image: dynamicsImage4, title: "Número Secreto" },
    { image: dynamicsImage5, title: "Roleta da Soma" },
    { image: dynamicsImage6, title: "Sonho da Tabuada" },
    { image: dynamicsImage7, title: "Sorvete da Matemática" },
    { image: dynamicsImage8, title: "Bingo da Subtração" },
    { image: dynamicsImage9, title: "Roleta das Operações" },
    { image: dynamicsImage10, title: "Eu Tenho, Quem Tem?" },
    { image: dynamicsImage11, title: "Ditado da Adição" }
  ];

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Urgency Banner */}
      <div className="bg-brand-red text-white py-2 px-4 text-center text-sm font-medium">
        ⚡ Desconto só <span className="text-brand-yellow font-bold">HOJE</span> nessa página 19/1/2026
      </div>

      <div className="max-w-md mx-auto px-4 sm:max-w-lg md:max-w-2xl">
        {/* Hero Section */}
        <header className="py-4 text-center flex flex-col items-center">
          <h1 
            className="text-[30px] leading-[36px] md:text-[60px] md:leading-[60px] font-bold text-gray-900 tracking-tight mb-4" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="text-headline"
          >
            <span className="font-bold drop-shadow-sm" style={{ color: "#1d5336" }}>+150 Painéis Decorativos</span>{" "}
            Para Sala de Aula Prontos Para Imprimir
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-0 relative z-20" data-testid="text-subheadline">
            Material organizado por temas, personagens, animais e datas comemorativas. É só imprimir e usar.
          </p>

          {/* VSL Image */}
          <div className="w-full max-w-[500px] -mt-12 relative z-10">
            <img 
              src={apostilaImage} 
              alt="Apostila 120 Dinâmicas de Matemática" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Button below Image */}
          <div className="pt-0">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-black text-lg md:text-xl py-7 rounded-2xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-tight px-4 leading-tight"
            >
              <span className="shrink-0">👉</span> <span>Quero meus +150 Painéis</span>
            </Button>
          </div>
        </header>

        {/* What You Will Receive Section */}
        <section className="py-12 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-gray-900 font-display" data-testid="text-what-you-will-receive">
              Como Funciona?
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-brand-purple shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900" data-testid="text-receive-item-1-title">Você realiza a compra</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-brand-yellow shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900" data-testid="text-receive-item-2-title">Recebe o acesso imediatamente no seu e-mail</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900" data-testid="text-receive-item-3-title">Baixa os arquivos</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-brand-green shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Printer className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900" data-testid="text-receive-item-4-title">Imprime e utiliza na sua sala</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-gray-900 font-display" data-testid="text-dynamics-gallery-title">
              Algumas das Dinâmicas que Você Receberá
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 max-w-md mx-auto" data-testid="text-dynamics-gallery-description">
              Veja algumas ideias prontas que já vão chegar organizadas para você aplicar com as crianças.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-brand-green/15 bg-gradient-to-br from-emerald-50 via-white to-green-50 px-3 py-4 shadow-[0_20px_60px_rgba(29,83,54,0.08)]">
            <div className="overflow-hidden" ref={dynamicsEmblaRef}>
              <div className="flex">
                {dynamicsGallery.map((item, index) => (
                  <div className="min-w-0 flex-[0_0_82%] pl-2 sm:flex-[0_0_58%]" key={item.title}>
                    <div className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-lg ring-1 ring-black/5" data-testid={`card-dynamic-${index}`}>
                      <div className="relative overflow-hidden rounded-[1.35rem] bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-auto max-h-[420px] w-full object-contain object-center"
                          data-testid={`img-dynamic-${index}`}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 space-y-8 bg-gray-50 -mx-4 px-4">
          <h2 className="text-3xl font-black text-center text-gray-900 font-display">
            Quem comprou, adorou!
          </h2>
          <div className="relative max-w-[280px] sm:max-w-xs mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-lg" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((src, index) => (
                  <div className="flex-[0_0_100%] min-w-0" key={index}>
                    <div className="relative bg-white flex items-center justify-center p-2">
                      <img 
                        src={src} 
                        alt={`Depoimento ${index + 1}`} 
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={scrollPrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-gray-800 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-gray-800 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-brand-green w-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Bonuses Section */}
        <section className="py-12 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 font-display">
              E ainda você recebe 5 Bônus Grátis:
            </h2>
          </div>
          <div className="grid gap-8">
            {[
              {
                name: "Certificados de Conclusão para os Alunos",
                desc: "Modelos prontos para premiar e motivar as crianças ao final das atividades.",
                price: "R$ 47,00",
                image: certificateBonusImage
              },
              {
                name: "Sistema de Recompensas para Sala de Aula",
                desc: "Cartões e incentivos simples para aumentar o engajamento e participação dos alunos.",
                price: "R$ 67,00",
                image: rewardBonusImage
              },
              {
                name: "Músicas Matemáticas para Aprender Brincando",
                desc: "Áudios educativos para ensinar números e manter a turma envolvida durante as aulas.",
                price: "R$ 27,00",
                image: musicBonusImage
              },
              {
                name: "Super Bingo Matemático para Sala de Aula",
                desc: "Uma dinâmica pronta e divertida para ensinar números e envolver toda a turma de forma leve e interativa.",
                price: "R$ 37,00",
                image: bingoBonusImage
              },
              {
                name: "Desafio Uno Matemático",
                desc: "Um jogo de cartas dinâmico e competitivo inspirado em jogos populares, ideal para trabalhar números, sequência e atenção com as crianças.",
                price: "R$ 19,00",
                image: unoBonusImage
              }
            ].map((bonus, i) => {
              const Icon = bonus.icon;

              return (
                <div key={i} className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group text-center">
                  <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 animate-pulse">
                    Grátis
                  </div>
                  <div className="space-y-6">
                    <div className={`mx-auto flex items-center justify-center overflow-hidden border border-brand-green/15 bg-gradient-to-br from-white via-green-50 to-emerald-100 shadow-sm group-hover:scale-105 transition-transform ${bonus.image ? "h-40 w-40 rounded-[2.25rem]" : "h-28 w-28 rounded-[2rem]"}`}>
                      {bonus.image ? (
                        <img
                          src={bonus.image}
                          alt={bonus.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className={`rounded-2xl p-4 ${bonus.iconBg}`}>
                          <Icon className={`w-10 h-10 ${bonus.iconColor}`} />
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{bonus.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">{bonus.desc}</p>
                      <div className="pt-2">
                        <span className="text-red-500 line-through text-sm">Valor Original: {bonus.price}</span>
                        <p className="text-brand-green font-bold">Hoje: R$ 0,00</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pricing Card */}
        <section id="pricing-section" className="py-8 space-y-8">
          {/* Main Offer Card - 10,00 */}
          <div className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-xl max-w-sm mx-auto relative overflow-hidden transform scale-105 z-10 mt-12">
            <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider z-10 animate-bounce shadow-md">
              MAIS VENDIDO
            </div>
            <div className="absolute top-0 inset-x-0 h-2 bg-brand-green"></div>
            <div className="text-center mb-2 mt-2">
              <img 
                src={basicOfferLogo}
                alt="Logo 120 Dinâmicas de Matemática" 
                className="mx-auto w-full max-w-[280px] h-auto object-contain"
              />
            </div>

            <div className="text-center mb-6 mt-4">
              <p className="text-gray-500 text-sm" data-testid="text-offer-price-label-main">De R$ 97,00 por apenas:</p>
              <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">R$ 97,00</p>
              <p className="text-6xl font-black text-brand-green mt-2 tracking-tighter" data-testid="text-offer-price-main">R$ 10,00</p>
            </div>

            <p className="text-center text-sm font-semibold text-gray-700 mb-6" data-testid="text-offer-access-intro-main">
              Você recebe acesso imediato a:
            </p>

            <div className="space-y-4 mb-8">
              {[
                "+120 Dinâmicas de Matemática (Prontas para Aplicar)",
                "Bônus 1: Certificados de Conclusão",
                "Bônus 2: Sistema de Recompensas",
                "Bônus 3: Músicas Matemáticas",
                "Bônus 4: Super Bingo Matemático",
                "Bônus 5: Desafio Uno Matemático",
                "Suporte VIP 24/7",
                "Garantia de 7 Dias",
                "Acesso Imediato após a compra"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1.5 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-base text-left tracking-tight text-gray-900 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg py-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <a href="https://pay.wiapy.com/iK5ZWZeMKD" target="_blank" rel="noopener noreferrer">
                QUERO COMPRAR AGORA
              </a>
            </Button>
          </div>

          {/* Email Delivery Banner */}
          <div className="mt-6 bg-white rounded-2xl border-2 border-brand-green p-4 flex items-center gap-4 shadow-sm max-w-sm mx-auto z-10 relative">
            <div className="bg-brand-green rounded-full p-2 shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-900 font-bold text-sm leading-snug">
              Após a compra, você recebe acesso ao Material em PDF diretamente no seu E-mail
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <h2 className="text-2xl font-black text-center mb-8" data-testid="text-faq-heading">Perguntas Frequentes</h2>
          <div className="bg-gray-50 rounded-3xl p-6 shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Como vou receber o material?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O acesso é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  O material é físico ou digital?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O material é 100% digital. Você poderá acessar e baixar tudo imediatamente após a compra.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Preciso imprimir as atividades?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim. As dinâmicas são prontas para imprimir e aplicar em sala de aula.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Para qual idade é indicado?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O material foi desenvolvido para educação infantil, especialmente para crianças de 3 a 6 anos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  As atividades são difíceis de aplicar?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Não. Todas as dinâmicas são simples, práticas e pensadas para o dia a dia da sala de aula.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Posso usar em sala com vários alunos?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim. As dinâmicas foram pensadas para uso em grupo, facilitando a participação de toda a turma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Quais formas de pagamento são aceitas?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Você pode pagar via cartão de crédito, Pix ou outras opções disponíveis na página de checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Tem garantia?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim. Você tem 7 dias de garantia. Se não gostar do material, pode pedir reembolso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-10">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-faq-cta"
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-black text-lg md:text-xl py-7 rounded-2xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center uppercase tracking-tight px-4 leading-tight"
            >
              QUERO APROVEITAR A OFERTA AGORA
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-16 text-center space-y-8 bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-lg font-bold text-gray-900" data-testid="text-help-heading">
              <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-red-500">
                <Mail className="w-4 h-4" />
              </div>
              Precisa de ajuda?
            </div>
            <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed px-4" data-testid="text-help-description">
              Envie um e-mail para <span className="font-semibold text-gray-900">suporte@120dinamicasmatematicas.com</span> e nossa equipe responderá o mais rápido possível para te ajudar com qualquer dúvida.
            </p>
          </div>

          <div className="max-w-md mx-auto px-6 space-y-3">
            <h3 className="text-lg font-bold text-gray-900" data-testid="text-about-heading">Sobre o material</h3>
            <p className="text-sm text-gray-600 leading-relaxed" data-testid="text-about-paragraph-1">
              Desenvolvemos este material para ajudar professoras da educação infantil a tornarem suas aulas de matemática mais leves, dinâmicas e envolventes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed" data-testid="text-about-paragraph-2">
              Nosso objetivo é facilitar o seu dia a dia em sala de aula, oferecendo atividades prontas que ajudam a prender a atenção das crianças e tornar o aprendizado mais divertido.
            </p>
          </div>
        </footer>
      </div>

      {/* Social Proof Notification */}
      <div 
        className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
          showNotification ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#4CAF50] text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-3 max-w-[240px]">
          <div className="bg-white/20 rounded-full p-1.5 shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm leading-tight truncate">
              {currentNotification.name} comprou agora
            </span>
            <span className="text-white/80 text-[10px] uppercase tracking-wider font-bold">
              +120 Dinâmicas de Matemática
            </span>
          </div>
        </div>
      </div>

      {/* Discount Popup */}
      {discountPopupType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setDiscountPopupType(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="text-center space-y-4">
              <div className="inline-block bg-brand-red text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 animate-pulse">
                ESPERE! NÃO FECHE A PÁGINA
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Leve a Oferta Completa com Desconto Exclusivo!
              </h3>
              
              <p className="text-gray-600 text-sm">
                Ao invés de pagar R$ 97,00 pela oferta completa, leve TUDO agora por apenas:
              </p>
              
              <div className="py-4">
                <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">R$ 97,00</p>
                <p className="text-6xl font-black text-brand-green tracking-tighter">
                  {discountPopupType === "exit" ? "R$ 5,90" : "R$ 17,00"}
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-4 text-left mb-6">
                <p className="font-bold text-sm text-brand-green mb-2">Você vai levar:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> +120 Dinâmicas de Matemática</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Bônus 1: Certificados de Conclusão</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Bônus 2: Sistema de Recompensas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Bônus 3: Músicas Matemáticas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Bônus 4: Super Bingo Matemático</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Bônus 5: Desafio Uno Matemático</li>
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-[13px] sm:text-base md:text-lg h-14 sm:h-16 rounded-xl shadow-md transition-all flex items-center justify-center px-2"
              >
                <a 
                  href={discountPopupType === "exit" ? "https://pay.wiapy.com/5UYb0Ch6b" : "https://pay.wiapy.com/O-PAtPXvk"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center w-full"
                >
                  QUERO A OFERTA COMPLETA POR {discountPopupType === "exit" ? "R$ 5,90" : "R$ 17,00"}
                </a>
              </Button>
              
              <button 
                onClick={() => {
                  if (discountPopupType === "upsell") {
                    setDiscountPopupType(null);
                    window.open("https://pay.wiapy.com/iK5ZWZeMKD", "_blank");
                  } else {
                    setDiscountPopupType(null);
                  }
                }}
                className="text-gray-400 hover:text-gray-600 text-sm underline underline-offset-4 mt-4 transition-colors"
              >
                {discountPopupType === "exit" 
                  ? "Não, obrigado. Vou perder essa oportunidade única." 
                  : "Não, obrigado. Quero apenas o pacote básico por R$ 10,00."}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
