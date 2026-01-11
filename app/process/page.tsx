import FadeIn from "@/components/FadeIn";

export default function ProcessPage() {
    return (
        <div className="w-full bg-background min-h-screen">

            {/* Header */}
            <section className="py-24 px-6 text-center bg-white border-b border-border">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Our Process</h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        How we identify, evaluate, and partner with organizations driving change.
                    </p>
                </FadeIn>
            </section>

            <div className="w-11/12 max-w-5xl mx-auto py-20 space-y-32">

                {/* Internal Process */}
                <FadeIn className="grid md:grid-cols-[1fr_2fr] gap-12 items-start" delay={0.1}>
                    <div className="sticky top-24">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">01 — Internal</span>
                        <h2 className="text-3xl font-serif text-foreground">Review & Selection</h2>
                    </div>
                    <div className="space-y-6 text-lg text-muted leading-relaxed">
                        <p>
                            Members of the foundation regularly assess community needs and identify organizations whose work aligns with our mission and focus areas, including education, healthcare, environment, community development, and more.
                        </p>
                        <p>
                            Through ongoing research, site visits, and dialogue with local partners, our team evaluates potential opportunities based on:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground font-medium">
                            <li>Demonstrated community need</li>
                            <li>Organizational capacity</li>
                            <li>Expected impact and sustainability</li>
                            <li>Alignment with our mission and values</li>
                            <li>Long-term benefit to the target population</li>
                        </ul>
                        <p>
                            Organizations identified through this internal process may be invited to submit additional information or proposals to support funding consideration.
                        </p>
                    </div>
                </FadeIn>

                {/* Application Process */}
                <FadeIn className="grid md:grid-cols-[1fr_2fr] gap-12 items-start relative" delay={0.2}>
                    <div className="sticky top-24">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">02 — External</span>
                        <h2 className="text-3xl font-serif text-foreground">Open Application</h2>
                    </div>
                    <div className="bg-white p-10 border border-border rounded-sm shadow-sm space-y-8">
                        <div>
                            <p className="text-lg text-muted mb-6">
                                The Boling Foundation also welcomes direct applications from eligible organizations seeking support. Nonprofits, schools, community groups, and other mission-aligned entities may apply for grants of up to <span className="text-foreground font-bold">$50,000</span>.
                            </p>
                            <h3 className="font-serif text-xl border-b border-border pb-4 mb-4">Applicants will be asked to provide:</h3>
                            <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium text-foreground">
                                <li className="flex items-center gap-2"><span>•</span> Organizational overview & mission</li>
                                <li className="flex items-center gap-2"><span>•</span> Detailed project description</li>
                                <li className="flex items-center gap-2"><span>•</span> Funding request & budget</li>
                                <li className="flex items-center gap-2"><span>•</span> Expected outcomes & metrics</li>
                                <li className="flex items-center gap-2"><span>•</span> Community served & need</li>
                                <li className="flex items-center gap-2"><span>•</span> Evidence of capacity</li>
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-border">
                            <p className="text-sm text-muted mb-6 italic">
                                All submitted applications undergo a structured review by the Foundation’s grant committee. Proposals are evaluated for clarity, feasibility, alignment with focus areas, and potential for meaningful impact.
                            </p>
                            <a href="mailto:grants@bolingfoundation.org?subject=Grant%20Application%20Request" className="inline-block w-full text-center px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors">
                                Apply Now
                            </a>
                        </div>
                    </div>
                </FadeIn>

                {/* Decision Making */}
                <FadeIn className="grid md:grid-cols-[1fr_2fr] gap-12 items-start" delay={0.3}>
                    <div className="sticky top-24">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">03 — Conclusion</span>
                        <h2 className="text-3xl font-serif text-foreground">Decisions</h2>
                    </div>
                    <div className="space-y-6 text-lg text-muted leading-relaxed">
                        <p>
                            Grant decisions are made collaboratively by the Foundation’s board and family members. Approved organizations will receive written notification, funding timelines, and reporting requirements.
                        </p>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
}
