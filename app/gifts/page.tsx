import FadeIn from '@/components/FadeIn';
import { MOCK_GIFTS, CATEGORIES } from './data';

export default function GiftsPage() {
    return (
        <div className="min-h-screen px-6 py-20 w-11/12 mx-auto">
            <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-5xl font-serif tracking-tight text-foreground">Gifts</h1>
                    <p className="text-xl text-muted leading-relaxed">
                        A database reflecting the foundation’s work to uplift communities and create opportunities.
                    </p>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-4 max-w-full md:max-w-2xl no-scrollbar">
                    {CATEGORIES.slice(0, 4).map(filter => (
                        <button
                            key={filter}
                            className="px-5 py-2 rounded-full border border-border text-sm font-medium text-muted hover:text-foreground hover:border-foreground transition-all whitespace-nowrap bg-white"
                        >
                            {filter}
                        </button>
                    ))}
                    <button className="px-5 py-2 text-sm font-medium text-muted hover:text-foreground/70 transition-colors whitespace-nowrap italic">
                        + More Filters
                    </button>
                </div>
            </FadeIn>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="border-b border-border">
                        <tr>
                            <th className="py-6 pr-6 font-serif text-2xl text-foreground font-normal w-[30%]">Organization</th>
                            <th className="py-6 pr-6 font-sans text-xs font-bold uppercase tracking-widest text-muted w-[15%]">Focus Area</th>
                            <th className="py-6 pr-6 font-sans text-xs font-bold uppercase tracking-widest text-muted w-[15%]">Geography</th>
                            <th className="py-6 font-serif text-2xl text-foreground font-normal w-[40%]">Mission</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {MOCK_GIFTS.map((gift, i) => (
                            <tr key={i} className="group hover:bg-black/[0.02] transition-colors">
                                <td className="py-8 pr-6 align-top">
                                    <span className="font-semibold text-lg text-foreground block mb-2">
                                        {gift.name}
                                    </span>
                                </td>
                                <td className="py-8 pr-6 align-top">
                                    <span className="inline-block px-3 py-1 bg-accent/5 text-accent text-xs font-bold rounded-full uppercase tracking-wide border border-accent/10">
                                        {gift.focus}
                                    </span>
                                </td>
                                <td className="py-8 pr-6 align-top text-muted font-medium text-sm">
                                    {gift.location}
                                </td>
                                <td className="py-8 align-top text-muted/90 text-lg leading-relaxed font-light">
                                    {gift.mission}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-20 flex justify-center">
                <button className="px-10 py-4 border border-border bg-white text-foreground text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 shadow-sm">
                    Load More Gifts
                </button>
            </div>
        </div>
    );
}
