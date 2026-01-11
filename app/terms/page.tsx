
export default function TermsPage() {
    return (
        <div className="w-full bg-background min-h-screen py-20 px-6">
            <div className="max-w-3xl mx-auto bg-white p-12 border border-border shadow-sm">
                <h1 className="text-4xl font-serif text-foreground mb-2">Terms & Conditions</h1>
                <p className="text-sm text-muted uppercase tracking-widest mb-12">Last Updated: January 2026</p>

                <div className="space-y-8 text-muted leading-relaxed">
                    <p className="font-medium text-foreground">
                        By contacting the Boling Foundation, submitting materials, or using this website, you agree to the following:
                    </p>

                    <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground">Accuracy of Information</h3>
                        <p>You confirm that all information you submit is accurate and complete to the best of your knowledge. The Foundation is not responsible for errors or omissions in supplied materials.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground">Review & Use of Submitted Information</h3>
                        <p>Information and documents sent to the Foundation may be reviewed by staff, board members, or approved advisors solely for the purposes of evaluation, communication, or due diligence. While we handle submissions responsibly, confidentiality cannot be guaranteed.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground">No Guarantee of Funding</h3>
                        <p>Submission of a proposal, inquiry, or document does not guarantee funding or partnership. All grant decisions are made at the sole discretion of the Foundation’s board and are final.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground">Intellectual Property</h3>
                        <p>Materials submitted for grant consideration remain the property of the applicant; however, the Foundation may internally reference them for evaluation, reporting, or archival purposes.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground">Appropriate Use of Contact Channels</h3>
                        <p>Foundation contact channels may not be used for unrelated solicitation, spam, or improper communication. Misuse may result in restricted contact.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground">Website Use</h3>
                        <p>Use of this site and submission of information through any contact form or email indicates agreement to these Terms & Conditions and compliance with applicable laws and policies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
