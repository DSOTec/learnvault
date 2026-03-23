#74 Build admin panel for course management and validator committee Repo Avatar
bakeronchain/learnvault Overview Founding team members and validator committee
members need an admin interface to manage courses and review milestone
submissions.

Route /admin (protected — admin JWT required)

Sections Courses — create/edit/publish/unpublish courses and lessons Milestone
Queue — list of pending scholar milestone reports (from #60) Users — lookup any
wallet address, see their LRN balance and enrollment Treasury — one-click USDC
balance check, emergency pause button Contracts — deployed contract addresses,
last upgrade dates Acceptance Criteria Route protected — redirects to home if
not admin JWT Course CRUD form (rich text editor for lesson content) Milestone
approval/rejection with mandatory reason for rejection Pagination on all lists
Audit log: all admin actions logged with timestamp + admin address Not publicly
linked — accessible at known URL only

#50 Build Treasury Dashboard — total funds, donations, and outflows Repo Avatar
bakeronchain/learnvault Overview A public, transparent view of the community
treasury is central to LearnVault's trust model.

Route /treasury (publicly accessible, no wallet required)

Sections Summary stats — Total in treasury (USDC), Total disbursed all-time,
Number of scholars funded, Number of donors Recent donations — Live feed of
donor contributions with timestamps and amounts Active disbursements — Scholars
currently receiving milestone payments Completed scholarships — Scholars who
finished funded programs Treasury health — Chart showing inflows vs outflows
over time Acceptance Criteria All data sourced directly from on-chain reads of
ScholarshipTreasury contract Auto-refreshes every 30 seconds or on new Soroban
events Charts using a lightweight library (e.g. Recharts or Chart.js) "Donate to
Treasury" CTA button for donors Shareable — great for social proof and donor
acquisition

#32 Build ScholarNFT credential viewer and social share card Repo Avatar
bakeronchain/learnvault Overview A ScholarNFT is a major achievement. Give
scholars a beautiful way to view and share their credential.

Route /credentials/:nftId

Acceptance Criteria Full-page credential viewer showing: NFT artwork / badge
image Scholar name/address Program completed Completion date LearnVault branding
"Share to Twitter/X" button with pre-filled tweet: "I just earned my ScholarNFT
on @LearnVaultDAO! 🎓 Proof of my work lives on-chain. [link]" "Copy shareable
link" button Open Graph meta tags so link previews render correctly on social
media On-chain verification link (Stellar Expert) Gallery view on learner
profile shows all owned ScholarNFTs

#26 Build Quiz/Assessment engine component Repo Avatar bakeronchain/learnvault
Overview Quizzes are the primary verification mechanism for lesson milestones.
Build a reusable quiz component that can be embedded at the end of any lesson.

Acceptance Criteria Supports multiple-choice questions (single and multi-select)
Displays one question at a time with progress indicator Shows correct/incorrect
feedback after each answer Final score screen: pass (≥ 80%) triggers
complete_milestone contract call Fail state shows which answers were wrong and a
"Retry" button Quiz data loaded from JSON/API (question, options, correct answer
index) Countdown timer per question (optional, configurable) Accessible:
keyboard navigable, proper ARIA labels Component Interface <QuizEngine
questions={QuizQuestion[]} passingScore={80} onPass={() =>
submitMilestone(milestoneId)} onFail={() => setShowRetry(true)} />
