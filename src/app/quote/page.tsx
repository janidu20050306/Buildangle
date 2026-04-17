import QuoteFormMultiStep from '@/components/forms/QuoteFormMultiStep';
import Container from '@/components/common/Container';

export default function QuotePage() {
  return (
    <div className="bg-navy min-h-screen pt-24 text-cream">
      <Container className="mb-20">
        <div className="text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
            Personalised Consultation
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-8 leading-tight tracking-[0.05em] uppercase">
            Let's <span className="italic italic-gold italic-emerald transition-all duration-1000">Build Your Legacy.</span>
          </h1>
          <p className="text-cream/40 max-w-2xl mx-auto font-light text-lg leading-relaxed italic tracking-widest">
            "Your vision is our blueprint. Fill out the details below to receive a bespoke quote for your extraordinary project."
          </p>
        </div>
      </Container>
      <QuoteFormMultiStep />
    </div>
  );
}
