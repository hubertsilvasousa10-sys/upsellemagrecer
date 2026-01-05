
import React, { useEffect, useCallback } from 'react';
import { 
  CheckCircle, 
  ChevronRight, 
  Calendar, 
  FileText, 
  ClipboardCheck, 
  ShieldCheck, 
  Zap, 
  AlertCircle,
  TrendingUp,
  Target,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const executeRefusal = useCallback(() => {
    alert("Você será redirecionado para a área de membros do seu guia inicial.");
  }, []);

  const executePurchase = useCallback(() => {
    window.location.href = "https://www.ggcheckout.com/checkout/v2/ZYW4vPNTEv6bI6yEPUgR";
  }, []);

  const handleRefusal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    executeRefusal();
  };

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    executePurchase();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white">
      {/* Top Banner */}
      <div className="bg-emerald-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>SUA COMPRA FOI PROCESSADA COM SUCESSO!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-6 pb-12 md:pt-10 md:pb-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
            Apenas para novos clientes
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
            Excelente decisão! Agora, vamos garantir que você tenha um <span className="text-emerald-600 underline decoration-2 underline-offset-4">caminho claro</span> pelos próximos 30 dias?
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Você já deu o primeiro passo. Mas cuidado: o conhecimento sem um plano de execução é o maior motivo de desistência.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 animate-bounce">
            <ChevronRight className="w-5 h-5 text-emerald-500 rotate-90" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-10 md:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center leading-snug">
              O "Buraco" que impede 90% das pessoas de emagrecer em casa
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Ter um guia é excelente, mas o maior erro é começar com empolgação e parar na primeira semana por não saber <span className="font-semibold text-gray-900">exatamente</span> o que fazer hoje.
                </p>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">Falta de Direção Clara</h3>
                    <p className="text-xs md:text-sm text-gray-500">Dúvidas sobre o que treinar e quando descansar sabotam sua mente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">A Armadilha da Constância</h3>
                    <p className="text-xs md:text-sm text-gray-500">Sem um método visual, você perde o rastro do seu progresso.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video relative hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" 
                  alt="Fitness Structure" 
                  className="object-cover w-full h-full opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-12 md:py-20 px-4 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 px-2">
              Apresentamos o Método Emagrecimento em Casa – 30 Dias
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">Tudo o que você precisa para os próximos 30 dias com clareza total.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-200">
                <FileText className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Método Estruturado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Guia completo com a ciência da queima de gordura e progressão estratégica.
              </p>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
                <Calendar className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Planner de 30 Dias</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Calendário diário para marcar treinos e medir sua evolução semanal.
              </p>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-amber-200">
                <ClipboardCheck className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Checklists Semanais</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                O prazer visual de marcar cada etapa concluída manterá você no trilho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 px-4 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Por que o método é o diferencial?</h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Treino Inteligente</h4>
                <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed">Estimule os músculos certos na ordem certa para acelerar o metabolismo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Resultados Visíveis</h4>
                <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed">Um plano estratégico gera resultados mais rápidos que treinos aleatórios.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Elimine a Procrastinação</h4>
                <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed">Com o checklist em mãos, sua única tarefa é executar e marcar o check.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Foco na Constância</h4>
                <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed">As ferramentas práticas foram feitas para você não desistir na 1ª semana.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-10 md:py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-2xl relative overflow-hidden border border-emerald-100">
            <div className="relative z-10">
              <span className="text-emerald-600 font-bold text-[10px] md:text-sm tracking-widest uppercase mb-3 block">Oferta Exclusiva de Upgrade</span>
              <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
                Tenha o plano completo agora.
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                Adicione o Método 30 Dias completo com Planner e Checklists ao seu pedido por um valor único de boas-vindas.
              </p>

              <div className="flex flex-col items-center mb-8 md:mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg md:text-xl italic">R$ 147,00</span>
                  <span className="bg-amber-100 text-amber-700 text-[10px] md:text-xs font-bold px-2 py-1 rounded">65% OFF</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-900 text-xl md:text-2xl font-bold">R$</span>
                  <span className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">49,99</span>
                </div>
                <p className="text-gray-500 mt-2 text-xs italic">*Acesso vitalício. Sem mensalidades.</p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <button 
                  onClick={handlePurchase}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-xl font-bold py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-xl shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  SIM! ADICIONAR AO MEU PEDIDO
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                
                <button 
                  onClick={handleRefusal}
                  className="w-full text-gray-400 hover:text-gray-600 text-[11px] md:text-sm font-medium py-3 transition-colors underline decoration-gray-200"
                >
                  Não, obrigado. Prefiro tentar organizar meus treinos por conta própria.
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed">
            &copy; {new Date().getFullYear()} Método Emagrecimento em Casa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
