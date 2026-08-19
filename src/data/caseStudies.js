import loginHero from '../assets/projects/login-onboarding/hero.jpg';
import loginBefore from '../assets/projects/login-onboarding/before.jpg';
import loginSolution from '../assets/projects/login-onboarding/login-solution.jpg';
import onboardingSolution from '../assets/projects/login-onboarding/onboarding-solution.jpg';
import breakHero from '../assets/projects/break/hero.jpg';
import breakBefore from '../assets/projects/break/before.jpg';
import breakAfter from '../assets/projects/break/after.jpg';
import breakIteration from '../assets/projects/break/iteration.jpg';
import breakFinal from '../assets/projects/break/final.jpg';
import toneHero from '../assets/projects/tone-voice/hero.jpg';
import tonePersonalityMap from '../assets/projects/tone-voice/personality-map.jpg';
import toneHelpful from '../assets/projects/tone-voice/helpful.jpg';
import toneQuirky from '../assets/projects/tone-voice/quirky.jpg';
import toneMoneySmart from '../assets/projects/tone-voice/money-smart.jpg';
import cashHero from '../assets/projects/uni-cash/hero.jpg';
import cashIntroduction from '../assets/projects/uni-cash/introduction.jpg';
import cashLimits from '../assets/projects/uni-cash/limits.jpg';
import cashIteration from '../assets/projects/uni-cash/iteration.jpg';
import p2pHero from '../assets/projects/p2p-lending/hero.jpg';
import p2pIntroduction from '../assets/projects/p2p-lending/introduction.jpg';
import p2pKyc from '../assets/projects/p2p-lending/kyc.jpg';
import p2pHome from '../assets/projects/p2p-lending/home.jpg';
import simHero from '../assets/projects/sim-binding/hero.jpg';
import simUpdate from '../assets/projects/sim-binding/update.jpg';
import simAndroid from '../assets/projects/sim-binding/android.jpg';
import simErrors from '../assets/projects/sim-binding/errors.jpg';
import guidelinesHero from '../assets/projects/writing-guidelines/hero.jpg';
import carnivalHero from '../assets/projects/grand-uni-carnival/hero.jpg';
import carnivalLaunch from '../assets/projects/grand-uni-carnival/launch.jpg';
import carnivalFlow from '../assets/projects/grand-uni-carnival/flow.jpg';
import carnivalWeekend from '../assets/projects/grand-uni-carnival/weekend.jpg';
import carnivalExperiment from '../assets/projects/grand-uni-carnival/experiment.jpg';

const allenMeta = (scope) => [
    { label: 'Product', value: 'ALLEN Digital' },
    { label: 'Role', value: 'Content Designer' },
    { label: 'Disciplines', value: 'UX Writing · Product Thinking · Content Design' },
    { label: 'Scope', value: scope },
];

const uniMeta = (scope) => [
    { label: 'Product', value: 'Uni Cards' },
    { label: 'Role', value: 'UX Writer / Content Designer' },
    { label: 'Disciplines', value: 'UX Writing · Product Strategy · Content Design' },
    { label: 'Scope', value: scope },
];

export const caseStudies = {
    'login-onboarding': {
        title: 'Login & onboarding',
        lead: 'Auditing two high-friction entry journeys and making the next step clearer for students.',
        meta: allenMeta('Login and onboarding flows'),
        hero: {
            src: loginHero,
            alt: 'The revised ALLEN Digital onboarding screens, ending with the free trial step.',
            caption: 'The revised onboarding story: shorter screens that set expectations before login.',
        },
        sections: [
            {
                eyebrow: 'Context',
                title: 'Finding the reasons behind early drop-offs',
                blocks: [
                    { type: 'paragraph', text: 'When I started working at ALLEN Digital, one of the first things I did was audit the app, beginning with the login and onboarding flows. I wanted to understand why so many students were dropping off.' },
                    { type: 'paragraph', text: 'ALLEN Digital is a JEE and NEET coaching app. For students, these entry journeys set expectations for both access and the learning experience that follows.' },
                ],
            },
            {
                eyebrow: 'My findings',
                title: 'Two moments were creating uncertainty',
                blocks: [
                    {
                        type: 'steps',
                        items: [
                            { number: '1', title: 'Unclear login choices', copy: 'Students saw “Let’s get started” and “Login with Username”, but most did not know their username or understand that “get started” meant login with OTP.' },
                            { number: '2', title: 'Fear of an immediate payment', copy: 'Students assumed the next step would ask for payment and did not realise that they could take a trial class first.' },
                        ],
                    },
                    { type: 'image', src: loginBefore, alt: 'The original ALLEN Digital login screens with the two problem areas highlighted.', caption: 'The original screens made the two paths look unrelated and hid essential username help.' },
                ],
            },
            {
                eyebrow: 'Issue 1',
                title: '“Let’s get started” or “Login with Username”',
                blocks: [
                    { type: 'paragraph', text: 'When two options are presented for one step, they need a common differentiator. Here, the options looked like completely different actions: either get started or log in with a username.' },
                    {
                        type: 'list',
                        items: [
                            'Both options ultimately helped the student get started; only the login method was different.',
                            'Nothing set the expectation that “Let’s get started” meant logging in with an OTP.',
                            'There was no clear explanation of what a username was or how a student could find it.',
                            'If a username is important and students may not know it, that help should not be hidden in a tooltip.',
                        ],
                    },
                    { type: 'quote', lines: ['Keep essential explanations upfront, exactly where students need them.'] },
                    { type: 'image', src: loginSolution, alt: 'Revised login screens that clearly distinguish OTP and password login methods.', caption: 'The revision made the difference between OTP and password login explicit.' },
                ],
            },
            {
                eyebrow: 'Issue 2',
                title: 'Set expectations before asking students to continue',
                blocks: [
                    {
                        type: 'list',
                        items: [
                            'Students could understand the value propositions but still did not know whether payment would come next.',
                            'Because this was a subscription-based coaching app, students expected a payment request.',
                            'The most important proposition at this moment was that they could try the experience for free.',
                            '“Start for free” could not be used too early because a few questions were still needed to personalise the experience.',
                        ],
                    },
                    { type: 'image', src: onboardingSolution, alt: 'Revised onboarding story screens that introduce the free trial before the next step.', caption: 'The story ends by introducing the free trial and reducing anxiety about what comes next.' },
                ],
            },
            {
                eyebrow: 'Changes & results',
                title: 'Shorter stories, clearer expectations',
                blocks: [
                    {
                        type: 'list',
                        items: [
                            'Made the onboarding story sentences shorter and more compact.',
                            'Ended the story with the idea of a free trial in the next step.',
                            'Set a clear expectation so students would feel less anxious throughout the rest of the journey.',
                        ],
                    },
                    {
                        type: 'stats',
                        items: [
                            { value: '12%', label: 'more logins after the changes' },
                            { value: 'Fewer', label: 'support tickets requesting a free trial class' },
                        ],
                    },
                ],
            },
        ],
    },
    break: {
        title: 'Break',
        lead: 'A feature designed to support students’ mental well-being during an intense preparation phase.',
        meta: allenMeta('0–1 student well-being feature'),
        hero: {
            src: breakHero,
            alt: 'Illustrated Break story screens inviting students to pause, dream, and rest.',
            caption: 'A lighter, approachable space within a high-pressure learning journey.',
        },
        sections: [
            {
                eyebrow: 'Overview',
                title: 'The preparation journey behind JEE and NEET',
                blocks: [
                    { type: 'paragraph', text: 'JEE is an engineering entrance examination for admission to colleges including the IITs. NEET is a medical entrance examination for medical and dental colleges across India.' },
                    { type: 'paragraph', text: 'Students are typically 16–19 years old and prepare during grades 11 and 12, often after a foundation phase in grades 9 and 10.' },
                    {
                        type: 'steps',
                        items: [
                            { number: '1', title: 'Foundation', copy: 'Build basic science and mathematics concepts in grades 9 and 10.' },
                            { number: '2', title: 'Preparation', copy: 'Balance intense coaching, school, revision, mock tests, and regular assessments.' },
                            { number: '3', title: 'Exam', copy: 'Sit JEE Main, JEE Advanced, or NEET.' },
                            { number: '4', title: 'Results & counselling', copy: 'Wait for rankings and participate in college-admission counselling.' },
                        ],
                    },
                ],
            },
            {
                eyebrow: 'Problem statement',
                title: 'Design support without making students feel judged',
                blocks: [
                    { type: 'paragraph', text: 'The preparation journey brings high stress and anxiety, intense competition, and a strong need for encouragement from family and teachers.' },
                    {
                        type: 'list',
                        items: [
                            'Connect students with a mental-health counsellor.',
                            'Connect them with life coaches who can reinforce that there is life beyond JEE and NEET.',
                            'Regularly reassure students that they are special.',
                            'Share stories of well-known people to show what is possible.',
                            'Connect students with teachers for time management and revision strategies.',
                            'Create a place where students can express themselves, rant, and let their hearts out.',
                            'Find a name students would relate to and willingly return to.',
                        ],
                    },
                ],
            },
            {
                eyebrow: 'Empathise',
                title: 'Understand what students carry with them',
                blocks: [
                    {
                        type: 'stats',
                        items: [
                            { value: '50%', label: 'fear of failure and disappointing parents among cited suicide reasons' },
                            { value: '25%', label: 'relationship issues' },
                            { value: '25%', label: 'family problems' },
                            { value: '~7%', label: 'Indian adolescents experiencing severe mental stress' },
                            { value: '30–50%', label: 'experiencing mild to moderate mental stress' },
                        ],
                    },
                    { type: 'paragraph', text: 'Stress could come from social issues, lifestyle changes, performance anxiety, physical health, family problems, or other external events.' },
                ],
            },
            {
                eyebrow: 'Define',
                title: 'Name the space before designing its voice',
                blocks: [
                    { type: 'paragraph', text: 'Because this was a new feature, the name needed to feel intuitive, relaxing, light, and distinctive. Naming would set the tone for the entire content design.' },
                    {
                        type: 'list',
                        items: [
                            'Students might not feel comfortable with the term “mental health”.',
                            'They might already dislike the preparation phase, so conflicting language could create resistance.',
                            'Pressure to perform can make admitting a challenge feel like weakness.',
                            'The experience had to communicate support without overwhelming or judging students.',
                        ],
                    },
                ],
            },
            {
                eyebrow: 'Ideate',
                title: 'Why “Care” did not work—and “Break” did',
                blocks: [
                    { type: 'paragraph', text: '“Care” initially came up, but it sounded like customer support, felt too personal and serious, and limited the ability to use a light tone. We explored Break, Calm, FIT, Peace, Zen, Quiet, My Zone, Cool, and Unwind.' },
                    {
                        type: 'list',
                        items: [
                            'Break is a simple word with broad branding potential.',
                            'It creates an instantly positive feeling and is relatable across age groups.',
                            'It sounds relaxing while clearly suggesting a pause from studying.',
                            'The feature was broader than mental health: it could motivate, listen, entertain, and support.',
                            'Unlike Calm, Care, or Peace, Break could also make students smile, laugh, and chat.',
                            'The theme left room for future features and playful communication.',
                        ],
                    },
                    { type: 'gallery', items: [
                        { src: breakBefore, alt: 'The app navigation bar before Break, showing Home, Library, Doubts, and Profile.', caption: 'Before Break' },
                        { src: breakAfter, alt: 'The app navigation bar after Break was added as a dedicated tab.', caption: 'After introducing Break' },
                    ] },
                ],
            },
            {
                eyebrow: 'Iteration',
                title: 'Finding a story that felt motivating, fun, and light',
                blocks: [
                    { type: 'paragraph', text: 'The feature included podcasts, counselling, stories of people who achieved great things, and a connection to daily meditation. It needed an introduction that would inspire younger students.' },
                    {
                        type: 'steps',
                        items: [
                            { number: '1', title: 'A disconnected first draft', copy: '“Take a break” appeared repeatedly without a single story connecting the experience.' },
                            { number: '2', title: 'Famous break stories', copy: 'Stories about famous people achieving greatness during breaks were not relatable enough.' },
                            { number: '3', title: 'Simple but negative', copy: 'A simple story risked overwhelming students with too many difficult feelings.' },
                            { number: '4', title: 'Motivating but philosophical', copy: 'The copy had motivation, but felt more like a life lesson than a light student experience.' },
                            { number: '5', title: 'The final direction', copy: 'A fun, motivating story that stayed light while still explaining the feature.' },
                        ],
                    },
                    { type: 'gallery', items: [
                        { src: breakIteration, alt: 'An intermediate onboarding-story iteration for the Break feature.', caption: 'One of the story iterations' },
                        { src: breakFinal, alt: 'The final onboarding story for the Break feature.', caption: 'The final story was motivating, fun, and functional.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Results',
                title: 'Students stayed with the story and used the space',
                blocks: [
                    {
                        type: 'stats',
                        items: [
                            { value: '50%+', label: 'of students who tapped Break read every story' },
                            { value: '10–15 min', label: 'average daily use despite packed schedules' },
                        ],
                    },
                    { type: 'quote', lines: ['In usability testing, students felt more positive about reaching out for help and knowing they were not alone.'] },
                ],
            },
        ],
    },
    'tone-voice-framework': {
        title: 'Tone & voice framework',
        lead: 'Mapping a flexible product personality to the emotions and decisions behind Uni’s communication.',
        meta: uniMeta('Product personality and tone framework'),
        hero: {
            src: toneHero,
            alt: 'The eight tones of the Uni product personality shown as a set of labels.',
            caption: 'Different tones and compassion come from defining a personality that can be applied consistently.',
        },
        sections: [
            {
                eyebrow: 'The framework',
                title: 'One personality, different tones',
                blocks: [
                    { type: 'paragraph', text: 'Personality cannot be expressed in exactly the same way everywhere. Bills and statements need a different mood from a celebratory campaign. The framework mapped eight tones to the situations where each could help.' },
                    { type: 'image', src: tonePersonalityMap, alt: 'A personality map connecting eight tones, each with notes on when and how to use it.', caption: 'The personality map that connected each tone to the moments it supports.' },
                    { type: 'cards', items: [
                        { title: 'Straightforward', copy: 'Use for notifications, phone numbers, OTPs, late fees, statements, and bills—places where clarity must come first.' },
                        { title: 'Polite', copy: 'Avoid sounding commanding or blunt without becoming overly polite. Rejection reasons were a key opportunity.' },
                        { title: 'Helpful', copy: 'Make copy navigational. Even in a blocked state, never leave the user without a direction or next step.' },
                        { title: 'Quirky', copy: 'Keep the mood light and engaging in suitable moments such as loading or connectivity states, without hiding the real message.' },
                        { title: 'Thoughtful', copy: 'Avoid judgement and show understanding, particularly in fee applications and sensitive moments.' },
                        { title: 'Money-smart', copy: 'Sound like a trusted expert who knows the right financial hacks. Use for Pay in Full and reward nudges.' },
                        { title: 'Inclusive', copy: 'Use simple language for every cohort and consider barriers including language, gender, disability, and credit knowledge.' },
                        { title: 'Aspirational', copy: 'Make larger product ideas feel revolutionary and visionary without forcing aspiration into small functional moments.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Application',
                title: 'Match the tone to the user’s situation',
                blocks: [
                    { type: 'paragraph', text: 'Helpful copy should guide the user through generic errors and connection failures. Quirky copy can make a low-risk interruption feel lighter. Money-smart copy should build trust around financial decisions.' },
                    { type: 'gallery', items: [
                        { src: toneHelpful, alt: 'Examples of helpful product copy in the Uni app.', caption: 'Helpful' },
                        { src: toneQuirky, alt: 'Examples of quirky product copy in the Uni app.', caption: 'Quirky' },
                        { src: toneMoneySmart, alt: 'Examples of money-smart and inclusive product copy.', caption: 'Money-smart and inclusive' },
                    ] },
                ],
            },
            {
                eyebrow: 'Principles',
                title: 'Human, relatable, and appropriate to the moment',
                blocks: [
                    { type: 'list', items: [
                        'Do not sound judgemental or give opinions such as “poor score”.',
                        'Avoid orthodox or exclusionary terminology.',
                        'Use a happy, passionate voice when celebrating card approval.',
                        'Be compassionate and straightforward when explaining rejection.',
                        'Use quirk for carnival-style experiences that should feel light and engaging.',
                        'Stay straightforward in statements and transaction history.',
                    ] },
                    { type: 'quote', lines: ['A consistent personality does not mean using the same mood everywhere.'] },
                ],
            },
        ],
    },
    'uni-cash': {
        title: 'Uni Cash',
        lead: 'Making credit transferable to a bank account while explaining limits, fees, and conditions clearly.',
        meta: uniMeta('End-to-end feature content'),
        hero: {
            src: cashHero,
            alt: 'Uni Cash screens showing the available limit, transfer amount, and bank transfer.',
            caption: 'Uni Cash became the company’s highest revenue-generating project.',
        },
        sections: [
            {
                eyebrow: 'Overview',
                title: 'A new way to use a credit limit',
                blocks: [
                    { type: 'paragraph', text: 'Uni Cash lets users transfer their credit limit to a bank account. The initial idea was to support QR payments, and the feature was marketed that way during the first few months. Financial guidelines later restricted it to bank-account transfers.' },
                    { type: 'paragraph', text: 'Users who needed to pay someone by bank transfer otherwise had to use another credit card or payment solution. The long-term idea was to make credit accessible and make the Uni app a one-stop shop for payment needs.' },
                ],
            },
            {
                eyebrow: 'Challenges',
                title: 'Explain a separate limit without overshadowing the card',
                blocks: [
                    { type: 'list', items: [
                        'Introduce a new limit and decide the associated Uni Cash fee.',
                        'Explain a separate limit without overshadowing the hero product.',
                        'Teach a new use case that could carry a fee depending on the user group.',
                        'Clarify what reward system, if any, applied to these transactions.',
                        'Explain how the feature differed from the card—not necessarily why it was better.',
                        'Account for fraud prevention and several limit scenarios.',
                    ] },
                ],
            },
            {
                eyebrow: 'Writing process',
                title: 'From context to iteration',
                blocks: [
                    { type: 'steps', items: [
                        { number: '1', title: 'Gather context', copy: 'Review documents, research, data, and stakeholder inputs.' },
                        { number: '2', title: 'Question & research', copy: 'Ask detailed questions, run one-to-ones, study competitors, and review voice-of-customer research.' },
                        { number: '3', title: 'Frame the flow', copy: 'Create a rough screen-by-screen story with the designer before drafting.' },
                        { number: '4', title: 'Draft & align', copy: 'Work in design, gather internal and stakeholder feedback, and implement it.' },
                        { number: '5', title: 'Ship & learn', copy: 'Collaborate with engineers during QA, track metrics, and iterate.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Research',
                title: 'Users were already asking for this feature',
                blocks: [
                    { type: 'paragraph', text: 'Early marketing had created interest, and customers repeatedly asked for more control over where they could use credit. Voice-of-customer sessions identified three leading use cases.' },
                    { type: 'cards', items: [
                        { title: 'Paying rent', copy: 'A recurring high-value transfer not supported by the card.' },
                        { title: 'Paying fees', copy: 'Including school fees and other bank-transfer payments.' },
                        { title: 'Sending money', copy: 'Transfers to friends or family members.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Content architecture',
                title: 'Three limit cases, one understandable story',
                blocks: [
                    { type: 'paragraph', text: 'The core journey was Home feed → Education → See the limit and how it works. The content had to support three different user cases.' },
                    { type: 'steps', items: [
                        { number: '1', title: 'No free limit', copy: 'A convenience fee applies when the user pays with Uni Cash.' },
                        { number: '2', title: 'Free limit equals available limit', copy: 'The full available Uni Cash amount can be used without a fee.' },
                        { number: '3', title: 'Free limit below available limit', copy: 'A set amount is free each cycle; a convenience fee applies beyond it.' },
                    ] },
                    { type: 'gallery', items: [
                        { src: cashIntroduction, alt: 'Uni Cash introduction stories explaining bank transfers, free limits, and transaction conditions.', caption: 'The educational story' },
                        { src: cashLimits, alt: 'Uni Cash home screens showing the available and free-limit cases.', caption: 'Limit states on the home screen' },
                    ] },
                ],
            },
            {
                eyebrow: 'Success metrics',
                title: 'A high-impact feature with a costly misunderstanding',
                blocks: [
                    { type: 'stats', items: [
                        { value: '15%', label: 'increase in total revenue' },
                        { value: '8%', label: 'additional contribution to total spends' },
                        { value: '55%', label: 'of users opened the educational stories' },
                        { value: '90%', label: 'of story viewers completed the full story' },
                    ] },
                ],
            },
            {
                eyebrow: 'Iteration & learning',
                title: '“Free limit” sounded like the total limit',
                blocks: [
                    { type: 'paragraph', text: 'Most users had a free limit lower than their available Uni Cash limit. The initial content emphasised how much was free, but voice-of-customer research showed that users interpreted this as the maximum they could spend.' },
                    { type: 'paragraph', text: 'The content changed to foreground the available limit, while the stories explained how the free portion and convenience fee worked.' },
                    { type: 'image', src: cashIteration, alt: 'Before-and-after Uni Cash screens showing how the available and free limits were clarified.', caption: 'The revised hierarchy made the full available limit visible.' },
                    { type: 'stats', items: [
                        { value: '80%', label: 'average growth across transaction-value bands after the change' },
                    ] },
                ],
            },
        ],
    },
    'p2p-investing': {
        title: 'P2P investing',
        lead: 'Introducing a non-traditional investment product through a clear, confidence-building onboarding journey.',
        meta: uniMeta('Investment onboarding and KYC flow'),
        hero: {
            src: p2pHero,
            alt: 'P2P investing screens for selecting a plan, entering an amount, and confirming it.',
            caption: 'A new product direction after Uni’s original credit product was paused.',
        },
        sections: [
            {
                eyebrow: 'The product',
                title: 'What is P2P investing?',
                blocks: [
                    { type: 'paragraph', text: 'Peer-to-peer investing diversifies an investment amount and lends it to multiple borrowers. It can offer high returns and is less volatile than the stock market.' },
                    { type: 'paragraph', text: 'Uni had been focused on making credit accessible in India. After a non-negotiable guideline in June 2022 paused the “Pay 1/3rd” card, investment became the next problem to solve and a way to continue strengthening the Uni brand.' },
                ],
            },
            {
                eyebrow: 'My goal',
                title: 'Build understanding and trust from the first screen',
                blocks: [
                    { type: 'list', items: [
                        'Explain a new and non-traditional form of investing.',
                        'Build trust with users who originally signed up for a credit product.',
                        'Explain every step related to investing clearly.',
                        'Verify that the full UX flow was simple and easy to follow.',
                    ] },
                ],
            },
            {
                eyebrow: 'The journey',
                title: 'Five steps to the first investment',
                blocks: [
                    { type: 'steps', items: [
                        { number: '1', title: 'Introduction', copy: 'Explain the new product and build motivation through onboarding stories.' },
                        { number: '2', title: 'PAN verification', copy: 'Set expectations and collect the information needed to verify PAN.' },
                        { number: '3', title: 'Aadhaar KYC', copy: 'Explain requirements such as having a mobile number linked to Aadhaar.' },
                        { number: '4', title: 'Plan selection', copy: 'Help users choose an amount, duration, return, and maturity preference.' },
                        { number: '5', title: 'Payment', copy: 'Communicate pending, successful, and failed payment states.' },
                    ] },
                    { type: 'image', src: p2pIntroduction, alt: 'The five-step P2P investing flow from introduction through KYC, plan selection, and payment.', caption: 'The five steps that had to feel simple and easy to follow.' },
                ],
            },
            {
                eyebrow: 'KYC content',
                title: 'Keep motivation high while explaining a regulated process',
                blocks: [
                    { type: 'paragraph', text: 'During PAN and Aadhaar KYC, users were motivated and willing to learn, but needed a clear sense of progress and what would happen next.' },
                    { type: 'list', items: [
                        'Explain the steps clearly.',
                        'Keep the excitement of making the first investment alive.',
                        'Show progress through PAN verification, KYC, and investment.',
                        'Provide a route forward when a mobile number is not linked to Aadhaar.',
                        'Write specific failure states, including a document already submitted by another verified user.',
                    ] },
                    { type: 'image', src: p2pKyc, alt: 'PAN verification and KYC screens for the P2P investing journey.', caption: 'Progress-oriented KYC content connected every task to the first investment.' },
                ],
            },
            {
                eyebrow: 'The product experience',
                title: 'Carry clarity from onboarding into the home page',
                blocks: [
                    { type: 'paragraph', text: 'After onboarding, the home page brought together investment value, maturity value, annual interest, transaction history, bank accounts, FAQs, help, and available products such as PowerUp and Flexi.' },
                    { type: 'image', src: p2pHome, alt: 'The P2P investing home page with portfolio values, plans, history, FAQs, and help.', caption: 'The home page kept investment performance and support within reach.' },
                ],
            },
        ],
    },
    'sim-binding': {
        title: 'SIM binding',
        lead: 'Explaining an unfamiliar security process without disrupting critical financial journeys.',
        meta: uniMeta('Security flow across Android and iOS'),
        hero: {
            src: simHero,
            alt: 'A SIM card behind a security shield, representing SIM binding.',
            caption: 'A matchmaking analogy made the technical idea easier to understand.',
        },
        sections: [
            {
                eyebrow: 'The concept',
                title: 'What is SIM binding?',
                blocks: [
                    { type: 'paragraph', text: 'SIM binding is like a matchmaking process between a phone and SIM card. It makes the SIM work only in that specific phone, adding a digital lock against unauthorised access and misuse in another device.' },
                    { type: 'quote', lines: ['A way for the phone and SIM to stay loyal to each other, keeping the connection secure and personal.'] },
                ],
            },
            {
                eyebrow: 'Why it was needed',
                title: 'Prevent fraudulent Uni Cash access',
                blocks: [
                    { type: 'paragraph', text: 'Fraudsters could obtain an OTP from a legitimate user and log in because the app did not verify whether that SIM was physically present in the phone. SIM binding added the missing layer of security and reduced the risk of financial loss.' },
                    { type: 'image', src: simUpdate, alt: 'An app-update prompt explaining that the update safeguards the account.', caption: 'The update prompt led with the action and the security benefit.' },
                ],
            },
            {
                eyebrow: 'Journey & emotion',
                title: 'A sudden security task in an otherwise familiar flow',
                blocks: [
                    { type: 'paragraph', text: 'SIM binding could appear after login or while a user was trying to access credit and complete a transaction.' },
                    { type: 'list', items: [
                        'Users were in a neutral flow and were suddenly asked to take an extra action.',
                        'They had just verified an OTP and could be confused by another verification.',
                        'Shopping and food apps did not use this pattern, so many users were unfamiliar with it.',
                        'The content had to explain both what to do and how the action protected the account.',
                    ] },
                ],
            },
            {
                eyebrow: 'Android',
                title: 'Adapt the choice to the level of risk',
                blocks: [
                    { type: 'paragraph', text: 'After login, users could choose “Do it later” because no transaction was at risk. During a credit transaction, the secondary action changed to “Cancel” because an unbound SIM was a deal-breaker for continuing safely.' },
                    { type: 'paragraph', text: 'The prompt explained that four SMS messages would be sent for verification and reminded the user to keep the SIM in the device.' },
                    { type: 'image', src: simAndroid, alt: 'Android SIM-binding prompts shown after login and during a credit transaction.', caption: 'The same verification task used different secondary actions depending on risk.' },
                ],
            },
            {
                eyebrow: 'iOS & errors',
                title: 'Account for platform-specific behaviour',
                blocks: [
                    { type: 'paragraph', text: 'On iOS, users needed to take a different SMS action. The content clearly stated what to do and repeated the phone number to prevent confusion for people with dual SIMs.' },
                    { type: 'list', items: [
                        'Network error: the verification SMS could not be sent.',
                        'Wrong number: the SMS was not sent from the expected mobile number.',
                        'iOS timeout: the user did not tap “Send SMS” or took too long.',
                    ] },
                    { type: 'image', src: simErrors, alt: 'Android SIM-binding verification failure screens for network and mobile-number errors.', caption: 'Error messages connected the reason for failure to a next step.' },
                ],
            },
        ],
    },
    'writing-style-guidelines': {
        title: 'Uni writing style guidelines',
        lead: 'A practical language system for making app and off-app communication clear and consistent.',
        meta: uniMeta('Style guide version 1.0'),
        hero: {
            src: guidelinesHero,
            alt: 'Style guide examples contrasting active and passive voice, with formatting rules.',
            caption: 'The guide was designed for Uni employees writing across product and communication channels.',
        },
        sections: [
            {
                eyebrow: 'Purpose',
                title: 'Consistency is part of the user experience',
                blocks: [
                    { type: 'paragraph', text: 'The guide defines Uni’s voice and standardises terms, text, and formats across app and off-app communication. Without one standard, even a date could appear as DD/MM/YY and MM/DD/YY in the same experience.' },
                    { type: 'paragraph', text: 'The guide is iterative: if another format or voice works better for users, it should evolve. Uni uses British English.' },
                    { type: 'quote', lines: ['Change is the only constant.'] },
                ],
            },
            {
                eyebrow: 'Foundations',
                title: 'Terms, capitalisation, formats, and symbols',
                blocks: [
                    { type: 'cards', items: [
                        { title: 'Standard glossary', copy: 'Maintain one agreed form for business-critical terms.' },
                        { title: 'Capitalisation', copy: 'Capitalise proper nouns and sentence starts. Use lowercase for email addresses. Button and header conventions should stay consistent.' },
                        { title: 'Dates & time', copy: 'Use a consistent date style such as 10th Jun and a 12-hour time format such as 8:35 pm.' },
                        { title: 'Contact details', copy: 'Format phone numbers with country code; keep email addresses, URLs, and file extensions lowercase.' },
                        { title: 'Currency', copy: 'Use ₹ for rupees, “Rs” only where the symbol is unavailable, and the correct symbol for other currencies.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Voice & access',
                title: 'Write clearly for everyone',
                blocks: [
                    { type: 'cards', items: [
                        { title: 'Active voice', copy: 'Prefer “You paid ₹400 to Swiggy” over “₹400 paid by you to Swiggy” for faster readability.' },
                        { title: 'Text colour', copy: 'Do not rely on colour alone. Also underline or bold important text for people with colour-vision differences.' },
                        { title: 'Inclusive language', copy: 'Write for people across the country. Avoid exclusion based on gender or religion and use they/them when gender is unknown.' },
                        { title: 'Navigational copy', copy: 'Embed the action or link where the need appears instead of sending users through a series of menus.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Language rules',
                title: 'Make financial content easy to scan',
                blocks: [
                    { type: 'cards', items: [
                        { title: 'Acronyms', copy: 'Use established forms such as PAN, KYC, and SMS. Avoid feature acronyms; define unfamiliar ones every time.' },
                        { title: 'Articles', copy: 'Use a, an, and the in sentences, but avoid unnecessary articles in titles, UI text, and buttons.' },
                        { title: 'Numbers', copy: 'Use up to two decimal places, % for percentages, numeral fractions such as 1/3rd, and numerals for scannability.' },
                        { title: 'Dates as positions', copy: 'Use st, nd, rd, and th where a number denotes a date or position.' },
                        { title: 'Jargon', copy: 'Product writing is for everyone; replace specialist language with terms people understand.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Punctuation & links',
                title: 'Use punctuation with intent',
                blocks: [
                    { type: 'list', items: [
                        'Avoid full stops in UI titles, button text, bullet points, and headers.',
                        'Use commas for pauses, but avoid them in short UI titles and buttons.',
                        'Use hyphens for ranges such as July 24 – Aug 24.',
                        'Use ellipses for processing or loading states, not titles.',
                        'Do not repeat question marks or overuse exclamation marks.',
                        'Use “and” instead of an ampersand when space allows.',
                        'Place links within the relevant words: “To know about your Credit Limit, go here.”',
                    ] },
                ],
            },
            {
                eyebrow: 'Tone & mechanics',
                title: 'Positive, direct, and human',
                blocks: [
                    { type: 'cards', items: [
                        { title: 'Emojis', copy: 'Avoid emojis in UX and product emails; they may be used in brand and marketing content.' },
                        { title: 'Positive tone', copy: 'Minimise can’t, don’t, and won’t. Explain what the user can do next.' },
                        { title: 'Spacing', copy: 'Use one standard space between words.' },
                        { title: 'Person', copy: 'Refer to the user as you/your and Uni as we/us.' },
                        { title: 'Contractions', copy: 'Use contractions such as “we’re” because they are easier to scan and feel more natural.' },
                        { title: 'Response text', copy: 'Use a consistent pattern: reason, error, or result + next step or solution.' },
                    ] },
                    { type: 'quote', lines: ['Incorrect password. Please try again in 15 minutes.'] },
                ],
            },
            {
                eyebrow: 'Personality',
                title: 'Enhance the experience without forcing one mood',
                blocks: [
                    { type: 'paragraph', text: 'A defined personality helps the app sound human and relatable, but the tone must change with context. Statements should be straightforward; carnival experiences can be delighted and quirky.' },
                    { type: 'list', items: [
                        'Celebrate card approval with a happy, passionate tone.',
                        'Be compassionate and clear when explaining rejection.',
                        'Avoid judgemental labels and orthodox terminology.',
                        'Use a playful tone only where the experience supports it.',
                    ] },
                    { type: 'quote', lines: ['This is version 1.0. We’ll keep iterating and making it better.'] },
                ],
            },
        ],
    },
    'grand-uni-carnival': {
        title: 'Grand Uni Carnival',
        lead: 'A gamified growth campaign that turned everyday payments into a nostalgic, rewarding product journey.',
        meta: uniMeta('Engagement and retention campaign'),
        hero: {
            src: carnivalHero,
            alt: 'The Grand Uni Carnival poster artwork with a fairground tent and ferris wheel.',
            caption: 'The campaign launched eight months after the Uni app became available to all users.',
        },
        sections: [
            {
                eyebrow: 'Overview',
                title: 'Turn more customers into super users',
                blocks: [
                    { type: 'paragraph', text: 'Grand Uni Carnival was a growth-driven project designed to increase engagement, retention, and spend. Users completed targets and challenges to collect tickets, cashback, and other rewards.' },
                    { type: 'paragraph', text: 'As a relatively new product, Uni had low awareness and adoption. Customers were not yet in the habit of using the card across payment types or aware of its cashback benefits.' },
                    { type: 'quote', lines: ['The goal was to increase overall spend by 50% while making product discovery rewarding and fun.'] },
                ],
            },
            {
                eyebrow: 'Constraints',
                title: 'Stand out without relying on a large reward budget',
                blocks: [
                    { type: 'list', items: [
                        'Compete with established cards that had much larger funds.',
                        'Create a fun, rewarding experience within budget constraints.',
                        'Avoid a lottery model that some state governments could interpret as gambling.',
                        'Design and launch within limited time.',
                    ] },
                ],
            },
            {
                eyebrow: 'Theme',
                title: 'Why Carnival won over Quest',
                blocks: [
                    { type: 'paragraph', text: 'After a marketing brainstorm, the two candidate themes were Quest and Carnival. Quest sounded highly gamified and serious, and its language was less familiar to a mainly 22–40-year-old working audience.' },
                    { type: 'paragraph', text: 'Carnival connected quickly to something fun and familiar. It also opened strong visual opportunities. We explored a rainbow carnival based on collecting VIBGYOR colours and a nostalgic carnival based on fairground rides and tickets.' },
                    { type: 'quote', lines: ['The nostalgic carnival gave every task a familiar name and made the interaction story easier to extend.'] },
                ],
            },
            {
                eyebrow: 'Story system',
                title: 'Targets, challenges, tickets, and weekend moments',
                blocks: [
                    { type: 'paragraph', text: 'Each user received a personalised spend target and a shared set of challenges. Completing targets and challenges unlocked tickets. Weekend challenges offered more tickets and created fresh reasons to return.' },
                    { type: 'paragraph', text: 'Challenge names drew from nostalgic fairground language: Cotton Candy, Break Dance, Bowling, Bumper Cars, Rocket Ride, Rain Dance, Photobooth, The Twister, and Merry Go Round.' },
                    { type: 'image', src: carnivalLaunch, alt: 'Grand Uni Carnival pre-launch and launch cards inviting users to win cashback and hampers.', caption: 'The first interaction led with guaranteed cashback and Uni Select hampers.' },
                ],
            },
            {
                eyebrow: 'Explain the game',
                title: 'Make two reward systems feel simple',
                blocks: [
                    { type: 'paragraph', text: 'The experience had to explain cashback and hampers, personalised targets, challenges, tickets, and weekend events without making the campaign feel like work.' },
                    { type: 'paragraph', text: 'The final story focused on guaranteed cashback up to ₹10,000 and 2,500 Uni Select hampers, then showed users how spending and ticket collection moved them forward.' },
                    { type: 'image', src: carnivalFlow, alt: 'The Grand Uni Carnival journey from the launch card into target and ticket progress.', caption: 'The ideal flow connected the reward promise to the next achievable action.' },
                ],
            },
            {
                eyebrow: 'Nudges',
                title: 'Use carnival language to keep momentum high',
                blocks: [
                    { type: 'paragraph', text: 'On-app cards and push notifications nudged users to collect earned tickets. Weekend messages used “rush”, “raining”, “twist”, and “roller coaster” to communicate more tickets for less effort.' },
                    { type: 'image', src: carnivalWeekend, alt: 'Weekend challenge cards using darts, roller coaster, rain, and twister language.', caption: 'Weekend challenges used familiar carnival metaphors and higher ticket counts.' },
                ],
            },
            {
                eyebrow: 'Experimentation',
                title: 'Put the action before the celebration',
                blocks: [
                    { type: 'paragraph', text: 'In more than half of relevant cases, users completed challenges but did not collect their tickets. Early notifications opened with playful lines such as “Da-da-da break dance!” before asking users to collect.' },
                    { type: 'paragraph', text: 'The revised version led with the outcome—“Congrats! You won X ticket(s)”—and followed with the value of collecting them. Making the action the title increased click-through rate.' },
                    { type: 'image', src: carnivalExperiment, alt: 'Before-and-after Grand Uni Carnival notifications showing action-led ticket collection copy.', caption: 'The experiment kept the carnival voice but made the required action immediately clear.' },
                    { type: 'stats', items: [
                        { value: '28–30%', label: 'increase in notification click-through rate' },
                    ] },
                ],
            },
            {
                eyebrow: 'Closing the story',
                title: 'A positive ending for every participant',
                blocks: [
                    { type: 'paragraph', text: 'The period between contest close and result declaration used playful participation statistics to keep people engaged.' },
                    { type: 'cards', items: [
                        { title: 'Participated & won', copy: 'Build anticipation for rewards and invite users to prepare their winning speech.' },
                        { title: 'Participated & lost', copy: 'Thank users for making the carnival grand and frame the campaign as a fun memory.' },
                        { title: 'Did not participate', copy: 'Show what happened and leave the door open without using a negative tone.' },
                    ] },
                ],
            },
            {
                eyebrow: 'Results',
                title: 'The strongest conversion came from new users',
                blocks: [
                    { type: 'stats', items: [
                        { value: '28%', label: 'increase in average spend per user during the campaign' },
                        { value: '11%', label: 'decrease in average spend after the campaign ended' },
                        { value: '78%+', label: 'of increased spend came from newly onboarded or one-month-old users' },
                    ] },
                    { type: 'paragraph', text: 'The campaign worked best for users who had joined within 30 days. That insight led to “onboarding challenges”: a smaller version of the same story with fewer tasks and cashback, designed to teach new users how the Uni app worked.' },
                    { type: 'quote', lines: ['The next theme was magic—because it all starts with magic.'] },
                ],
            },
        ],
    },
};
