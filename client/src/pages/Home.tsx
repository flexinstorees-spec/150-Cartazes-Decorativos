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

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

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
          <h2 className="text-3xl font-bold text-center text-gray-900 font-display">
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

        {/* Transformation Gallery */}
        <section className="py-12 text-center space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Veja como o material transforma a sala de aula <span className="text-yellow-400 text-3xl align-middle">⭐</span>
          </h2>

          <div className="relative max-w-sm mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
              <div className="flex">
                {[slide1, slide2, slide3].map((src, index) => (
                  <div className="flex-[0_0_100%] min-w-0" key={index}>
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={src} 
                        alt={`Slide ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots indicator mimicking screenshot */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>

          <Button className="w-full max-w-sm bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wide">
            QUERO ESSA ATIVIDADE
          </Button>
        </section>

        {/* Process Steps */}
        <section className="py-16 space-y-16">
          <div className="text-center space-y-4 max-w-xs mx-auto">
            <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-2xl flex items-center justify-center border-2 border-black mb-6">
              <Mail className="w-10 h-10 text-gray-900 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-brand-purple">Chega no seu email</h3>
            <p className="text-gray-600">
              Após a compra você recebe o acesso para baixar os materiais.
            </p>
          </div>

          <div className="text-center space-y-4 max-w-xs mx-auto">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center border-2 border-black mb-6">
              <Printer className="w-10 h-10 text-gray-900 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-brand-purple">Você imprime</h3>
            <p className="text-gray-600">
              Você pode imprimir quando quiser e quantas vezes desejar. É vitalício!
            </p>
          </div>

          <div className="text-center space-y-4 max-w-xs mx-auto">
             <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center border-2 border-black mb-6 relative">
              <BookOpen className="w-10 h-10 text-gray-900 stroke-[1.5]" />
              <div className="absolute inset-0 border-2 border-black rounded-2xl translate-x-1 translate-y-1 -z-10 bg-yellow-100"></div>
            </div>
            <h3 className="text-xl font-bold text-brand-purple">Realiza as atividades</h3>
            <p className="text-gray-600">
              Coloca em Prática Mãos à obra! Já pode começar a usar
            </p>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-8">
          <div className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-xl max-w-sm mx-auto relative overflow-hidden">
            {/* Logo Placeholder */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                 <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-yellow-400 font-display drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] stroke-black" style={{WebkitTextStroke: "1px black"}}>
                  PALAVRA
                  <br />
                  MÁGICA
                </h2>
                <div className="absolute -top-2 -right-4 text-yellow-400 text-xl">✦</div>
                <div className="absolute -bottom-2 -left-4 text-yellow-400 text-xl">✦</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">
              Atividade Palavra Mágica
            </h3>

            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm">De R$ 38,00 Por Apenas:</p>
              <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">R$ 38,00</p>
              <p className="text-5xl font-bold text-brand-green mt-2">R$ 10,00</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-green rounded-full p-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">PALAVRA MÁGICA</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-brand-green rounded-full p-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">ACESSO IMEDIATO</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-brand-green rounded-full p-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">PRONTO PARA IMPRESSÃO</span>
              </div>
            </div>

            <Button className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg py-6 rounded-xl shadow-md transition-all flex items-center gap-2">
              <span>👉</span> Comprar agora
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
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
               Envie um e-mail para <span className="font-semibold text-gray-900">DigitalKids@gmail.com</span> e nossa equipe responderá rapidamente para ajudá-lo com qualquer dúvida ou problema.
             </p>
           </div>

           <div className="text-xs text-gray-400 max-w-md mx-auto px-6 leading-relaxed">
             Na DigitalKids, desenvolvemos materiais educativos que incentivam o aprendizado infantil de forma lúdica e envolvente. Nosso compromisso é garantir qualidade e inovação no ensino, ajudando as crianças a aprenderem de maneira eficaz e divertida.
           </div>
        </footer>
      </div>
    </div>
  );
}
