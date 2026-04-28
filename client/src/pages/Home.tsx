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
import { CountdownTimer } from "@/components/CountdownTimer";

// Import stock images
import heroBg from "@assets/stock_images/colorful_eva_foam_sh_59dfdb75.jpg";
import slide1 from "@assets/stock_images/kids_in_classroom_le_b8e756c7.jpg";
import slide2 from "@assets/stock_images/kids_in_classroom_le_23e6cce6.jpg";
import slide3 from "@assets/stock_images/kids_in_classroom_le_d60b13fe.jpg";
import learnIcon from "@assets/stock_images/happy_child_holding__5bdc9d4e.jpg";
import certificateBonusImage from "@assets/ChatGPT_Image_16_de_abr._de_2026,_21_33_37_1776386029565.png";
import rewardBonusImage from "@assets/ChatGPT_Image_16_de_abr._de_2026,_21_35_41_1776386146667.png";
import musicBonusImage from "@assets/ChatGPT_Image_16_de_abr._de_2026,_21_37_36_1776386277858.png";
import bingoBonusImage from "@assets/ChatGPT_Image_16_de_abr._de_2026,_21_39_45_1776386406532.png";
import unoBonusImage from "@assets/e6f57984-5789-43a9-a25a-1f2b4897a7e4_1776386651690.png";
import testimonialImage1 from "@assets/img_0363_1776471252445.png";
import testimonialImage2 from "@assets/img_0363_(1)_1776471252444.png";
import testimonialImage3 from "@assets/img_0363_(2)_1776471252444.png";
import testimonialImage4 from "@assets/img_0363_(3)_1776471252444.png";
import testimonialImage5 from "@assets/img_0363_(4)_1776471252445.png";
import popupImage from "@assets/Sem_título_(1)_1776387339704.png";
import dynamicsImage1 from "@assets/1_1776468902532.png";
import dynamicsImage2 from "@assets/2_1776468902532.png";
import dynamicsImage3 from "@assets/3_1776468902532.png";
import dynamicsImage4 from "@assets/4_1776468902532.png";
import dynamicsImage5 from "@assets/5_1776468902533.png";
import dynamicsImage6 from "@assets/6_1776468902533.png";
import dynamicsImage7 from "@assets/7_1776468902533.png";
import dynamicsImage8 from "@assets/8_1776468902533.png";
import dynamicsImage9 from "@assets/9_1776468902534.png";
import dynamicsImage10 from "@assets/10_1776468902534.png";
import dynamicsImage11 from "@assets/11_1776468902534.png";
import dynamicsImage12 from "@assets/12_1776468902534.png";
import dynamicsImage13 from "@assets/13_1776468902534.png";
import dynamicsImage14 from "@assets/14_1776468902534.png";
import dynamicsImage15 from "@assets/15_1776468902535.png";
import newOfferLogo from "@assets/5439FBF1-6AB6-45E4-994B-9B630889449C_1775774888310.png";
import basicOfferLogo from "@assets/Sem_título_(1)_1776385358921.png";
import apostilaImage from "@assets/download_1776385307013.png";

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
    testimonialImage4,
    testimonialImage5
  ];

  const dynamicsGallery = [
    { image: dynamicsImage1, title: "Cumprimento Divertido" },
    { image: dynamicsImage2, title: "Dia do Circo" },
    { image: dynamicsImage3, title: "Feliz Páscoa" },
    { image: dynamicsImage4, title: "Dia das Mães" },
    { image: dynamicsImage5, title: "Estação de Primavera" },
    { image: dynamicsImage6, title: "Dia do Livro" },
    { image: dynamicsImage7, title: "Dia da Água" },
    { image: dynamicsImage8, title: "Safari" },
    { image: dynamicsImage9, title: "Dia da Inclusão (Down)" },
    { image: dynamicsImage10, title: "Feliz Aniversário" },
    { image: dynamicsImage11, title: "Aniversariantes do Mês" },
    { image: dynamicsImage12, title: "Númerais" },
    { image: dynamicsImage13, title: "Painel Abelhinha" },
    { image: dynamicsImage14, title: "Dia da Inclusão (Autismo)" },
    { image: dynamicsImage15, title: "Sejam Bem-Vindos" }
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
            <span className="font-bold drop-shadow-sm text-orange-500">+150 Painéis Decorativos</span>{" "}
            Para Sala de Aula{" "}
            <span className="font-bold text-brand-green">+Bônus</span>
          </h1>
          <div className="w-full max-w-[600px] mt-4 relative z-10">
            <img 
              src={apostilaImage} 
              alt="Painéis Decorativos" 
              className="w-full h-auto object-contain shadow-none border-none drop-shadow-none bg-transparent"
            />
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-0 relative z-20 mt-6" data-testid="text-subheadline">
            Material organizado por temas, personagens, animais e datas comemorativas. É só imprimir e usar.
          </p>

          {/* Button below Image */}
          <div className="pt-10">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-black text-lg md:text-xl py-7 rounded-2xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-tight px-4 leading-tight"
            >
              <span className="shrink-0">👉</span> <span>Quero meus +150 Moldes</span>
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
              Alguns dos Painéis que Você Vai Receber
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
                name: "Cartazes de letras A até Z",
                desc: "Alfabeto completo e ilustrado para decorar a sala e auxiliar na alfabetização diária das crianças.",
                price: "R$ 37,00",
                image: certificateBonusImage // keep placeholder for now, you can replace later
              },
              {
                name: "Cartazes de Numerais",
                desc: "Números ilustrados e coloridos para facilitar o aprendizado matemático visual na educação infantil.",
                price: "R$ 27,00",
                image: rewardBonusImage
              },
              {
                name: "Sistema de Recompensas Pronto para Imprimir",
                desc: "Cartões e incentivos simples para aumentar o engajamento e participação dos alunos.",
                price: "R$ 47,00",
                image: musicBonusImage
              },
              {
                name: "Etiquetas Editáveis para Nome dos Alunos",
                desc: "Modelos fofos e práticos para identificar materiais, cadernos e armários de forma rápida e padronizada.",
                price: "R$ 19,00",
                image: bingoBonusImage
              },
              {
                name: "Chamadinha Interativa para Imprimir",
                desc: "Painel dinâmico para a rotina diária de presença, tornando o início da aula mais divertido e organizado.",
                price: "R$ 29,00",
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
        <section id="pricing-section" className="py-8 space-y-4">
          <CountdownTimer />
          
          {/* Main Offer Card - 10,00 */}
          <div className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-xl max-w-sm mx-auto relative overflow-hidden transform scale-105 z-10 mt-8">
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
                "+150 Moldes de Painéis Decorativos (Prontos para Imprimir)",
                "Bônus 1: Cartazes de letras A até Z",
                "Bônus 2: Cartazes de Numerais",
                "Bônus 3: Sistema de Recompensas",
                "Bônus 4: Etiquetas Editáveis para Nome",
                "Bônus 5: Chamadinha Interativa",
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
              <a href="https://pay.wiapy.com/h9nvMOKemW" target="_blank" rel="noopener noreferrer">
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
                  Como recebo o material após a compra?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Você recebe o acesso imediatamente no seu e-mail após a confirmação do pagamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Preciso pagar mensalidade?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Não. O pagamento é único e o acesso é vitalício.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Os painéis já vêm prontos ou preciso editar?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Os painéis já estão prontos para uso. Basta baixar, imprimir e montar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Consigo imprimir em casa?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim. Os arquivos estão preparados para impressão em impressoras comuns no formato A4.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Preciso ter experiência com edição ou design?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Não. Todo o material foi feito para ser simples e prático, sem necessidade de edição.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Posso usar no celular ou precisa de computador?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Você pode acessar pelo celular, mas recomendamos o computador para facilitar o download e a impressão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Os arquivos são organizados ou vou ter que procurar tudo?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Os arquivos são organizados por categorias para você encontrar tudo rapidamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Esse material serve para qualquer série?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim. Os painéis foram pensados para educação infantil e primeiros anos escolares.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Posso usar mais de uma vez?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim. Você pode usar quantas vezes quiser, durante todo o ano.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  E se eu não gostar do material?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Você tem 7 dias de garantia. Se não gostar, devolvemos 100% do seu dinheiro.
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
              Envie um e-mail para <span className="font-semibold text-gray-900">paineisdecorativos@gmail.com</span> e nossa equipe responderá o mais rápido possível para te ajudar com qualquer dúvida.
            </p>
          </div>

          <div className="max-w-md mx-auto px-6 space-y-3">
            <h3 className="text-lg font-bold text-gray-900" data-testid="text-about-heading">Sobre o material</h3>
            <p className="text-sm text-gray-600 leading-relaxed" data-testid="text-about-paragraph-1">
              Desenvolvemos este material para ajudar professoras a deixarem sua sala de aula mais organizada, bonita e pronta para o dia a dia sem perder tempo criando tudo do zero.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed" data-testid="text-about-paragraph-2">
              Nosso objetivo é facilitar sua rotina, oferecendo painéis prontos para imprimir que você pode usar durante todo o ano, com praticidade e rapidez.
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
              +150 Moldes de Painéis Decorativos
            </span>
          </div>
        </div>
      </div>

      {/* Discount Popup */}
      {discountPopupType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[20px] sm:rounded-3xl p-4 sm:p-5 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300 scrollbar-hide">
            <button 
              onClick={() => setDiscountPopupType(null)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 p-1.5 sm:p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </button>
            
            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 pt-1 sm:pt-2 md:pt-0">
              <div className="inline-block bg-brand-red text-white text-[9px] sm:text-[10px] md:text-xs font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider mb-0.5 sm:mb-1 animate-pulse">
                ESPERE! NÃO FECHE A PÁGINA
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-tight px-2">
                Leve o Pack Completo com Desconto Exclusivo
              </h3>
              
              <div className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] mx-auto py-0.5 sm:py-1 md:py-2">
                <img 
                  src={popupImage} 
                  alt="Oferta Especial" 
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              
              <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm px-1 sm:px-2 leading-snug">
                Ao invés de pagar R$ 47,00 pelo material completo, leve TUDO agora por apenas:
              </p>
              
              <div className="py-1 sm:py-2 md:py-4">
                <p className="text-gray-400 text-sm sm:text-base md:text-lg line-through decoration-red-500 decoration-2 mb-0.5">R$ 47,00</p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-green tracking-tighter leading-none">
                  R$ 4,90
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-2 sm:p-3 md:p-4 text-left mb-2 sm:mb-4 md:mb-6">
                <p className="font-bold text-[11px] sm:text-[13px] md:text-sm text-brand-green mb-1.5 sm:mb-2">Você vai levar:</p>
                <ul className="space-y-1 sm:space-y-2 text-[10px] sm:text-[12px] md:text-sm text-gray-700">
                  <li className="flex items-start gap-1.5 sm:gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-brand-green" /> <span className="leading-tight">+150 Moldes de Painéis Decorativos Para Sala de Aula</span></li>
                  <li className="flex items-start gap-1.5 sm:gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-brand-green" /> <span className="leading-tight">Cartazes de Letras A até Z</span></li>
                  <li className="flex items-start gap-1.5 sm:gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-brand-green" /> <span className="leading-tight">Cartazes de Numerais</span></li>
                  <li className="flex items-start gap-1.5 sm:gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-brand-green" /> <span className="leading-tight">Sistema de Recompensas Pronto para Imprimir</span></li>
                  <li className="flex items-start gap-1.5 sm:gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-brand-green" /> <span className="leading-tight">Etiquetas Editáveis para Nome dos Alunos</span></li>
                  <li className="flex items-start gap-1.5 sm:gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-brand-green" /> <span className="leading-tight">Chamadinha Interativa para Imprimir</span></li>
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-[11px] sm:text-[12px] md:text-lg h-10 sm:h-12 md:h-16 rounded-lg sm:rounded-xl shadow-md transition-all flex items-center justify-center px-1"
              >
                <a 
                  href={discountPopupType === "exit" ? "https://pay.wiapy.com/5UYb0Ch6b" : "https://pay.wiapy.com/O-PAtPXvk"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center w-full"
                >
                  QUERO ACESSO COMPLETO AGORA
                </a>
              </Button>
              
              <button 
                onClick={() => {
                  if (discountPopupType === "upsell") {
                    setDiscountPopupType(null);
                    window.open("https://pay.wiapy.com/h9nvMOKemW", "_blank");
                  } else {
                    setDiscountPopupType(null);
                  }
                }}
                className="text-gray-400 hover:text-gray-600 text-[9px] sm:text-[11px] md:text-sm underline underline-offset-4 mt-2 sm:mt-3 md:mt-4 transition-colors leading-tight block w-full"
              >
                Não, obrigado. Vou deixar essa oportunidade passar.
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
