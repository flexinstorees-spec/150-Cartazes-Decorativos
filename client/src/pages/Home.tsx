import React, { useState } from "react";
import { 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Mail, 
  Printer, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown,
  Star
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

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const testimonials = [
    "https://imgur.com/xEwLgHB.png",
    "https://imgur.com/oCZzH1K.png",
    "https://imgur.com/ICT11ze.png",
    "https://imgur.com/6ZW38qv.png"
  ];

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Urgency Banner */}
      <div className="bg-brand-red text-white py-2 px-4 text-center text-sm font-medium">
        ⚡ Desconto só <span className="text-brand-yellow font-bold">HOJE</span> nessa página 19/1/2026
      </div>

      <div className="max-w-md mx-auto px-4 sm:max-w-lg md:max-w-2xl">
        {/* Hero Section */}
        <header className="py-8 text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            5.000 Moldes de EVA para Aulas, Decoração e Lembrancinhas
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tudo organizado para apoiar quem trabalha com EVA, seja em sala de aula ou no artesanato.
          </p>

          {/* Video Placeholder */}
          <div className="relative mt-8 rounded-xl overflow-hidden shadow-xl aspect-[9/16] bg-black group cursor-pointer">
             <img 
               src={slide1} 
               alt="Video Thumbnail" 
               className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                 <Play className="w-8 h-8 text-white fill-white ml-1" />
               </div>
             </div>
             <div className="absolute top-1/2 left-0 right-0 text-center text-white/50 text-xs transform -translate-y-8">
               Top Speed | 196 MPH
             </div>
          </div>
        </header>

        {/* What You Will Receive Section */}
        <section className="py-12 space-y-8">
          <h2 className="text-3xl font-black text-center text-gray-900 font-display">
            O Que Você Vai Receber
          </h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-brand-purple shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Moldes Prontos em PDF</h3>
                  <p className="text-gray-600 text-sm">Mais de 2000 moldes de alta qualidade (animais, heróis, flores, natal, páscoa e mais).</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-brand-yellow shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Printer className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Pronto para Imprimir (A4)</h3>
                  <p className="text-gray-600 text-sm">Arquivos formatados no tamanho exato para folha A4. É só imprimir, recortar e usar no EVA.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-brand-green shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Acesso Vitalício</h3>
                  <p className="text-gray-600 text-sm">Compre uma única vez e tenha acesso para sempre, com downloads ilimitados de todos os arquivos.</p>
                </div>
              </div>
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
                name: "Certificado de Conclusão",
                desc: "Certificado digital para valorizar seu aprendizado e comprovar a conclusão do material.",
                img: "https://imgur.com/4fdkVdn.png",
                price: "R$ 47,00"
              },
              {
                name: "+2.500 Moldes de Feltro",
                desc: "Uma coleção extra de moldes prontos para criar peças em feltro com mais variedade e criatividade.",
                img: "https://imgur.com/x0PYYoQ.png",
                price: "R$ 67,00"
              },
              {
                name: "Lista de Fornecedores Baratos",
                desc: "Indicações de fornecedores com bom custo-benefício para comprar materiais e economizar no dia a dia.",
                img: "https://imgur.com/Vz1hwB6.png",
                price: "R$ 27,00"
              },
              {
                name: "Painéis Educativos para Sala de Aula",
                desc: "Ideias prontas de painéis educativos para decorar e apoiar o aprendizado em sala.",
                img: "https://imgur.com/1JgtLqr.png",
                price: "R$ 37,00"
              },
              {
                name: "+100 Livros de Colorir",
                desc: "+100 livros de colorir para crianças, ideais para atividades educativas e coordenação motora.",
                img: "https://imgur.com/ZKnnRYo.png",
                price: "R$ 19,00"
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group text-center">
                <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 animate-pulse">
                  Grátis
                </div>
                <div className="space-y-6">
                  <div className="w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                    <img src={bonus.img} alt={bonus.name} className="w-full h-auto object-contain group-hover:scale-105 transition-transform" />
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
            ))}
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-8">
          <div className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-xl max-w-sm mx-auto relative overflow-hidden">
            {/* Logo Placeholder */}
            <div className="text-center mb-6">
              <img 
                src="https://imgur.com/4maud8T.png" 
                alt="Logo Palavra Mágica" 
                className="mx-auto w-full max-w-[240px] h-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-center mb-4 uppercase">
              5.000 Moldes de EVA
            </h3>

            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm">De R$ 57,00 Por Apenas:</p>
              <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">R$ 57,00</p>
              <p className="text-6xl font-black text-brand-green mt-2 tracking-tighter">R$ 10,00</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "5.000 Moldes de EVA",
                "Certificado de Conclusão",
                "+2.500 Moldes de Feltro",
                "Lista de Fornecedores Baratos",
                "Painéis Educativos para Sala de Aula",
                "+100 Livros de Colorir",
                "Suporte 24/7",
                "Garantia de 7 Dias",
                "Acesso Imediato"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-green rounded-full p-1.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-base text-left uppercase tracking-tight text-gray-900 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg py-6 rounded-xl shadow-md transition-all flex items-center gap-2">
              <span>👉</span> Comprar agora
            </Button>
          </div>

          {/* Email Delivery Banner */}
          <div className="mt-6 bg-white rounded-2xl border-2 border-brand-green p-4 flex items-center gap-4 shadow-sm max-w-sm mx-auto">
            <div className="bg-brand-green rounded-full p-2 shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-900 font-bold text-sm leading-snug">
              Após a compra, você recebe acesso ao Material em PDF diretamente no seu E-mail
            </p>
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

        {/* FAQ */}
        <section className="py-12">
          <h2 className="text-2xl font-black text-center mb-8">Perguntas Frequentes</h2>
          <div className="bg-gray-50 rounded-3xl p-6 shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Como vou receber o material?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O acesso é enviado para o seu e-mail cadastrado logo após a confirmação do pagamento.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Preciso de impressora?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Não é obrigatório ter impressora em casa. Você pode imprimir em uma papelaria ou lan house, pois os arquivos estão em PDF prontos para impressão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  São quantos moldes?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O kit contém mais de 5.000 moldes variados para diversas ocasiões e atividades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Quais formas de pagamento são aceitas?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Aceitamos PIX e cartão de crédito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Tem garantia?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim, oferecemos garantia de satisfação de 7 dias. Se não gostar, devolvemos seu dinheiro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-16 text-center space-y-8 bg-white">
           <div className="space-y-4">
             <div className="flex items-center justify-center gap-2 text-lg font-bold">
               <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-red-500">
                 <Mail className="w-4 h-4" />
               </div>
               Precisa de Ajuda?
             </div>
             <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed px-4">
               Envie um e-mail para <span className="font-semibold text-gray-900">moldeseva.suporte@gmail.com</span> e nossa equipe responderá rapidamente para ajudá-lo com qualquer dúvida ou problema.
             </p>
           </div>

           <div className="text-xs text-gray-400 max-w-md mx-auto px-6 leading-relaxed">
             Na nossa plataforma, desenvolvemos moldes de EVA que incentivam o artesanato e a decoração de forma lúdica e envolvente. Nosso compromisso é garantir qualidade e inovação, ajudando artesãos e professores a criarem de maneira eficaz e divertida.
           </div>
        </footer>
      </div>
    </div>
  );
}
