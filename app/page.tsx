
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section className="w-full text-center space-y-12 py-32 px-4 bg-gradient-to-b from-background to-white">
        <FadeIn direction="up" duration={0.8}>
          <h1 className="text-6xl md:text-[7rem] leading-none font-serif tracking-tight text-foreground opacity-90">
            Boling Foundation
          </h1>
          <p className="text-xl font-light text-muted uppercase tracking-[0.2em] mt-8">Est. 2025</p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <div className="max-w-2xl mx-auto pt-12 text-balance">
            <p className="text-2xl md:text-3xl font-serif italic text-muted/80 leading-relaxed">
              "We invest in sustainable programs and collaborative partnerships that empower individuals."
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Mission & About */}
      <section className="w-full bg-white py-24 px-6 border-y border-border">
        <div className="max-w-4xl mx-auto space-y-24">

          <FadeIn className="space-y-8 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-serif leading-tight text-foreground">
              Founded in 2025, the Boling Foundation began with a shared commitment to uplift communities and create opportunities for people to thrive. Guided by our mission to advance societal wellbeing by expanding access to quality education, promoting community health, and protecting the environment, we invest in sustainable programs and collaborative partnerships that empower individuals and strengthen communities for the long term.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-8 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-lg leading-relaxed text-muted">
                The Boling Foundation is a family-led organization focused on creating meaningful opportunities for individuals and communities. Established in 2025, the foundation reflects our family’s long-standing commitment to service, philanthropy, and collective responsibility.
              </p>
              <div className="bg-accent/5 p-8 rounded-sm border border-accent/10">
                <p className="font-serif text-xl italic text-accent">
                  "Collective responsibility is at the heart of our approach to philanthropy."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
