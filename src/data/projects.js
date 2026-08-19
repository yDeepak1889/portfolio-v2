import sapNotificationsThumb from '../assets/sap/sap-notifications-thumb.jpg';
import loginOnboardingThumb from '../assets/projects/login-onboarding/thumb.jpg';
import breakThumb from '../assets/projects/break/thumb.jpg';
import toneVoiceThumb from '../assets/projects/tone-voice/thumb.jpg';
import uniCashThumb from '../assets/projects/uni-cash/thumb.jpg';
import p2pThumb from '../assets/projects/p2p-lending/thumb.jpg';
import simBindingThumb from '../assets/projects/sim-binding/thumb.jpg';
import writingGuidelinesThumb from '../assets/projects/writing-guidelines/thumb.jpg';
import carnivalThumb from '../assets/projects/grand-uni-carnival/thumb.jpg';

export const projects = [
    {
        name: 'Notification Guidance',
        category: 'Design system',
        context: 'SAP Fiori Design System',
        featured: true,
        challenge: 'The notification guidance had the information designers needed, but it was difficult to scan and apply.',
        approach: 'Restructured the guidance around the decisions designers make, rewrote it as actionable recommendations, and standardized the language across the notification experience.',
        contribution: 'Content strategy · Information architecture · UX writing',
        caseStudyLink: '/projects/sap-fiori-notifications',
        thumbnail: sapNotificationsThumb,
        thumbnailAlt: 'The published SAP Fiori Notifications guidance page with its blue header and on-this-page navigation.'
    },
    {
        name: 'Login & Onboarding',
        category: 'User flow',
        context: 'ALLEN Digital',
        featured: true,
        challenge: 'Students were dropping off before completing login and onboarding.',
        approach: 'Audited the journey, identified content friction, and revised the flow to make each step easier to understand.',
        contribution: 'UX audit · Journey design · Interface content',
        caseStudyLink: '/projects/login-onboarding',
        thumbnail: loginOnboardingThumb,
        thumbnailAlt: 'Revised ALLEN Digital onboarding screens leading into the free trial.'
    },
    {
        name: 'Break',
        category: '0–1 feature',
        context: 'ALLEN Digital',
        featured: true,
        challenge: 'Students preparing for JEE and NEET needed support for their mental well-being during a high-pressure journey.',
        approach: 'Framed and designed a product feature that could introduce moments of support within the learning experience.',
        contribution: 'Product framing · Feature design · End-to-end content',
        caseStudyLink: '/projects/break',
        thumbnail: breakThumb,
        thumbnailAlt: 'Illustrated Break story screens encouraging students to pause and reset.'
    },
    {
        name: 'Tone & Voice Framework',
        category: 'Design system',
        context: 'Uni Cards',
        featured: true,
        challenge: 'Teams needed a shared way to decide when communication should be empathetic, apologetic, helpful, or direct.',
        approach: 'Created a framework that maps tone decisions to user emotion, needs, and product context.',
        contribution: 'Systems thinking · Content standards · Team enablement',
        caseStudyLink: '/projects/tone-voice-framework',
        thumbnail: toneVoiceThumb,
        thumbnailAlt: 'The eight tones of the Uni product personality shown as a set of labels.'
    },
    {
        name: 'Uni Cash',
        category: 'Product feature',
        context: 'Uni Cards',
        challenge: 'Explain how customers could transfer credit to a bank account within a risk-based limit.',
        approach: 'Structured the feature content around the user task while making limits and financial conditions easier to understand.',
        contribution: 'Feature content · Financial UX · Information hierarchy',
        caseStudyLink: '/projects/uni-cash',
        thumbnail: uniCashThumb,
        thumbnailAlt: 'Uni Cash screens showing the limit, transfer amount, and bank transfer flow.'
    },
    {
        name: 'P2P Lending',
        category: 'Financial product',
        context: 'Uni Cards',
        challenge: 'Introduce peer-to-peer lending as an unfamiliar financial product without adding cognitive load.',
        approach: 'Used familiar comparisons and direct language to help users understand the product proposition.',
        contribution: 'Product narrative · Simplification · UX writing',
        caseStudyLink: '/projects/p2p-investing',
        thumbnail: p2pThumb,
        thumbnailAlt: 'P2P investing screens for choosing a plan, entering an amount, and confirming.'
    },
    {
        name: 'SIM Binding',
        category: 'Security flow',
        context: 'Uni Cards',
        challenge: 'Make a technical security process understandable to everyday users.',
        approach: 'Translated SIM binding into a familiar matchmaking analogy and clarified the steps around it.',
        contribution: 'Complexity reduction · Security content · Interaction flow',
        caseStudyLink: '/projects/sim-binding',
        thumbnail: simBindingThumb,
        thumbnailAlt: 'A SIM card behind a security shield, representing SIM binding.'
    },
    {
        name: 'Writing Style Guidelines',
        category: 'Documentation',
        context: 'Uni Cards',
        challenge: 'A growing content design practice needed consistency without a heavyweight rulebook.',
        approach: 'Synthesized established industry guidance into a simpler framework tailored to a small team.',
        contribution: 'Content system · Governance · Team enablement',
        caseStudyLink: '/projects/writing-style-guidelines',
        thumbnail: writingGuidelinesThumb,
        thumbnailAlt: 'Style guide examples contrasting active and passive voice, with formatting rules.'
    },
    {
        name: 'Grand Uni Carnival',
        category: 'Adoption campaign',
        context: 'Uni Cards',
        challenge: 'Encourage adoption of a newly launched app and help users discover more of the product.',
        approach: 'Developed an engagement feature that connected transaction activity with product discovery.',
        contribution: 'Campaign experience · Product adoption · Interface content',
        caseStudyLink: '/projects/grand-uni-carnival',
        thumbnail: carnivalThumb,
        thumbnailAlt: 'The Grand Uni Carnival poster artwork with a fairground tent and ferris wheel.'
    }
];
