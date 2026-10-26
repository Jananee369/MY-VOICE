/**
 * Voxera — MYVOICE Content and Research Data Model
 * All terminology strictly adheres to research-stage concept guidelines.
 */

export interface UserJourneyStep {
  id: number;
  title: string;
  summary: string;
  userAction: string;
  systemProcessing: string;
  researchQuestion: string;
}

export interface SoftwareFeature {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
  status: 'Proposed Requirement' | 'Under Investigation' | 'Design Target';
  feasibilityNote: string;
}

export interface EvaluationDimension {
  area: string;
  investigationScope: string;
  methodology: string;
  currentStatus: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Audio & AI' | 'Hardware & Calls' | 'Privacy & Ethics';
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  timeframe: string;
  status: 'Current Focus' | 'Proposed Next' | 'Future Objective';
  description: string;
  milestones: string[];
}

export const USER_JOURNEY_STEPS: UserJourneyStep[] = [
  {
    id: 1,
    title: 'Create an Account',
    summary: 'The user establishes a secure, private account authenticated with multi-factor biometric safeguards.',
    userAction: 'Register via the planned MYVOICE mobile application using verified identity credentials.',
    systemProcessing: 'Generates an isolated cryptographic vault for all prospective vocal assets and user profiles.',
    researchQuestion: 'How can authentication be made seamless yet resilient against unauthorized profile access?'
  },
  {
    id: 2,
    title: 'Add Recordings',
    summary: 'Upload suitable existing personal recordings, such as pre-loss audio, home videos, or authorized voice calls.',
    userAction: 'Import legacy audio files or past phone recordings that the user is authorized to use.',
    systemProcessing: 'Scans files for sample rate, signal-to-noise ratio, speaking duration, and acoustic clarity.',
    researchQuestion: 'What is the absolute minimum audio duration and quality required to extract viable timbre traits?'
  },
  {
    id: 3,
    title: 'Prepare a Voice Profile',
    summary: 'Explore recording selection, automated acoustic quality checks, and personalized voice modelling.',
    userAction: 'Review file suitability scores and select preferred reference segments for model initialization.',
    systemProcessing: 'Initiates experimental acoustic feature extraction and harmonic contour mapping.',
    researchQuestion: 'Can consistent vocal identity be preserved across differing emotional registers and pitch variations?'
  },
  {
    id: 4,
    title: 'Test the Voice',
    summary: 'Evaluate generated synthetic speech if and when a working research implementation becomes available.',
    userAction: 'Review sample sentences, assessing perceived identity, warmth, cadence, and familial familiarity.',
    systemProcessing: 'Synthesizes benchmark test sentences and computes identity alignment scores against source clips.',
    researchQuestion: 'What objective acoustic metrics correlate best with subjective family recognition of familiar voices?'
  },
  {
    id: 5,
    title: 'Communicate',
    summary: 'Input messages through typed text, categorized saved phrases, or AI-assisted composition.',
    userAction: 'Type a message, tap a quick-access phrase, or expand a keyword phrase with human review.',
    systemProcessing: 'Converts typed text into natural speech phonemes, applying timing, pause markers, and cadence.',
    researchQuestion: 'How can text-to-speech latency be kept below 300ms to preserve conversational turn-taking rhythm?'
  },
  {
    id: 6,
    title: 'Connect a Compatible Band',
    summary: 'Pair a supported wearable voice band with the user account through an appropriately secured connection.',
    userAction: 'Initiate hardware discovery and confirm encrypted one-to-one cryptographic pairing authorization.',
    systemProcessing: 'Establishes a low-latency, encrypted audio streaming channel between phone and wearable.',
    researchQuestion: 'Which wireless transmission protocols offer the optimal balance of low latency and battery efficiency?'
  },
  {
    id: 7,
    title: 'Speak Through the Band',
    summary: 'In connected mode, the intended final audible speech output is delivered directly from the band, not the phone.',
    userAction: 'Send typed or selected communication; the acoustic output emanates from the wearable band on the body.',
    systemProcessing: 'Routes audio to the wearable acoustic transducer while suppressing phone speaker output.',
    researchQuestion: 'Can compact body-worn transducers reproduce full vocal warmth without mechanical resonance distortion?'
  }
];

export const SOFTWARE_FEATURES: SoftwareFeature[] = [
  {
    id: 'voice-profile',
    number: '01',
    title: 'Personalized Voice Profile',
    summary: 'Explores learning the user’s vocal characteristics from pre-existing recordings to reconstruct their personal timbre.',
    details: [
      'Accepts audio recorded prior to voice loss, family video archives, and authorized call recordings.',
      'Includes an automated acoustic suitability scanner that analyzes background noise, clipping, and clarity.',
      'Achievable voice quality depends on recording length, frequency range, and audio fidelity.',
      'Minimum recording requirements remain an active research objective.'
    ],
    status: 'Under Investigation',
    feasibilityNote: 'Dependent on advanced acoustic modeling research and sufficient clean training data.'
  },
  {
    id: 'voice-options',
    number: '02',
    title: 'Original & Alternative Voices',
    summary: 'Provides options for recreating the user’s original voice alongside optional tailored alternatives.',
    details: [
      'Aims to recreate a recognizable version of the user’s original vocal identity.',
      'Offers alternative curated baseline voices for users who lack sufficient historical recordings.',
      'Optional male, female, or neutral tonal adjustments to match personal comfort.',
      'Saved personal voice profiles can be preserved, updated, and reused across devices.'
    ],
    status: 'Proposed Requirement',
    feasibilityNote: 'Preserving vocal identity across diverse utterances is an ongoing technical goal.'
  },
  {
    id: 'tts-engine',
    number: '03',
    title: 'Text-to-Speech Communication',
    summary: 'Translates typed text into personalized speech with attention to natural cadence and pacing.',
    details: [
      'Explores natural pronunciation, appropriate conversational pauses, and speech flow.',
      'Investigates emotional inflection modeling where technically achievable.',
      'Balancing rapid synthesis turnaround with natural-sounding acoustic output.',
      'Designed for long-term multi-language and accent adaptation.'
    ],
    status: 'Under Investigation',
    feasibilityNote: 'Speech synthesis must balance low latency with natural prosody and identity fidelity.'
  },
  {
    id: 'saved-phrases',
    number: '04',
    title: 'Saved Phrases & Emergency Access',
    summary: 'Enables quick-tap vocalization of frequently used phrases organized into intuitive everyday categories.',
    details: [
      'Preset categories: Greetings, Family & Friends, Daily Needs, Requests for Help, Medical & Hospital.',
      'Dedicated quick-access emergency phrases with high-visibility layout.',
      'Important disclaimer: MYVOICE is not an emergency response service and requires further safety evaluation.',
      'Custom user tags and sorting by situational frequency.'
    ],
    status: 'Proposed Requirement',
    feasibilityNote: 'Interface architecture defined; offline instant playback requires localized caching.'
  },
  {
    id: 'ai-composition',
    number: '05',
    title: 'AI-Assisted Message Composition',
    summary: 'Accelerates conversational text entry while keeping the human user in complete editorial control.',
    details: [
      'Turns short keywords into complete grammatical sentences (e.g., "water cold please").',
      'Suggests context-aware replies for common social interactions.',
      'Provides sentence simplification or tonal adjustments on demand.',
      'Mandatory confirmation gate: Speech is never generated until the user reviews and confirms the final text.'
    ],
    status: 'Proposed Requirement',
    feasibilityNote: 'Strict human-in-the-loop review prevents unintended or hallucinated spoken output.'
  },
  {
    id: 'accessibility',
    number: '06',
    title: 'Accessibility-First Design',
    summary: 'Built from foundational accessibility principles to accommodate varying motor and cognitive needs.',
    details: [
      'High-contrast, large-format typography compliant with WCAG AA guidelines.',
      'One-tap triggers for frequent phrases with generous touch targets (≥48px).',
      'Adjustable speech tempo, volume presets, and pitch calibration.',
      'Visual confirmation indicators before and during acoustic playback.',
      'Hands-free switch and assistive input compatibility under investigation.'
    ],
    status: 'Proposed Requirement',
    feasibilityNote: 'Accessibility requirements are specified as core constraints, pending clinical user testing.'
  },
  {
    id: 'call-routing',
    number: '07',
    title: 'Calls & Communication Research',
    summary: 'Investigating technical pathways to enable recreated speech during standard two-way phone calls.',
    details: [
      'Clear distinction: Uploading past call audio for training is distinct from live in-call synthesis.',
      'Live call speech requires routing synthetic audio into the cellular/VoIP microphone pipeline.',
      'Audio routing method, OS permission restrictions, and call latency are NOT yet resolved.',
      'Bluetooth pairing alone does not guarantee audio injection into live phone calls.'
    ],
    status: 'Under Investigation',
    feasibilityNote: 'Mobile OS sandboxing and cellular audio routing present major open engineering questions.'
  },
  {
    id: 'account-management',
    number: '08',
    title: 'Account & Voice Profile Sovereignty',
    summary: 'Secure profile portability ensuring a user never loses their voice profile if their phone is replaced.',
    details: [
      'Encrypted cloud backup allowing profile recovery on replacement phones without re-training.',
      'User-controlled export, profile updates, and permanent cryptographic deletion.',
      'Hardware authorization checks preventing unauthorized band pairing.',
      'Zero commercialization guarantee: Voice biometric data will never be sold or monetized.'
    ],
    status: 'Proposed Requirement',
    feasibilityNote: 'Requires zero-knowledge cryptographic key management and secure cloud enclave storage.'
  }
];

export const EVALUATION_DIMENSIONS: EvaluationDimension[] = [
  {
    area: 'Voice Similarity',
    investigationScope: 'Compare generated speech against authentic pre-loss reference audio across diverse phonemes.',
    methodology: 'Proposed objective acoustic distance metrics (e.g. MCD, cosine distance) paired with blinded family perceptual trials.',
    currentStatus: 'Evaluation methodology defined; awaits functional model pipeline.'
  },
  {
    area: 'Recording Quality Impact',
    investigationScope: 'Examine how source audio duration, sampling rate, background noise, and compression affect recreation.',
    methodology: 'Systematic degradation tests evaluating speech outputs generated from clean studio vs noisy cell recordings.',
    currentStatus: 'Requirements drafted; test corpus assembly planned.'
  },
  {
    area: 'Naturalness & Prosody',
    investigationScope: 'Evaluate pronunciation accuracy, sentence rhythm, conversational pauses, and natural breathing contours.',
    methodology: 'Mean Opinion Score (MOS) framework involving speech-language pathologists and assistive tech specialists.',
    currentStatus: 'Assessment protocol under review; no trials conducted.'
  },
  {
    area: 'Identity Consistency',
    investigationScope: 'Determine whether vocal timbre and acoustic identity remain stable across diverse sentences and pitches.',
    methodology: 'Longitudinal testing across varied syntax, interrogatives, exclamations, and whisper approximations.',
    currentStatus: 'Theoretical framework established.'
  },
  {
    area: 'Multilingual Support',
    investigationScope: 'Assess whether personal vocal characteristics can transfer accurately across non-native spoken languages.',
    methodology: 'Cross-lingual acoustic synthesis trials using multilingual phonetic embedding models.',
    currentStatus: 'Future research track; prioritized post English baseline.'
  },
  {
    area: 'Synthesis Latency',
    investigationScope: 'Measure total elapsed duration from text submission to first audible phoneme output on the wearable band.',
    methodology: 'Benchmarking end-to-end hardware-in-the-loop latency under varying network conditions.',
    currentStatus: 'Target threshold set to <300ms; feasibility testing needed.'
  },
  {
    area: 'Hardware Compatibility',
    investigationScope: 'Assess wearable band acoustic dispersion, acoustic clarity, feedback prevention, and call injection.',
    methodology: 'Acoustic chamber testing and digital signal processing simulation of body-worn transducer units.',
    currentStatus: 'No physical hardware built; requirements under research.'
  },
  {
    area: 'Security & Recovery',
    investigationScope: 'Validate biometric authentication, anti-spoofing controls, cross-device recovery, and pairing authorization.',
    methodology: 'Penetration testing of cryptographic key storage and spoofing attack simulations.',
    currentStatus: 'Security architectural requirements formally drafted.'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Concept Definition, Ethics & Clinical Requirements',
    timeframe: 'Current Stage (2025 – 2026)',
    status: 'Current Focus',
    description: 'Establishing foundational system requirements, privacy principles, ethical boundaries, and engaging with assistive communication literature.',
    milestones: [
      'Comprehensive product requirements specification completed.',
      'Ethical charter for vocal identity preservation drafted.',
      'User journey and interaction architecture finalized.',
      'Audio quality assessment rubric and open research questions documented.'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Algorithmic Simulation & Dataset Feasibility',
    timeframe: 'Planned Research',
    status: 'Proposed Next',
    description: 'Investigating machine learning architectures capable of acoustic feature extraction from limited, legacy audio samples.',
    milestones: [
      'Evaluation of personalized voice modeling architectures.',
      'Feasibility study on historical recording restoration and noise filtering.',
      'Definition of objective voice similarity benchmark protocol.',
      'Exploration of low-latency on-device speech synthesis models.'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Hardware Exploration & Acoustic Prototyping',
    timeframe: 'Future Objective',
    status: 'Future Objective',
    description: 'Investigating compatible wearable form factors, transducer acoustic dispersion, wireless protocol latency, and call-routing feasibility.',
    milestones: [
      'Survey of existing wearable acoustic transducers and bone-conduction bands.',
      'Acoustic resonance testing for body-worn voice emission.',
      'Investigation of mobile operating system audio-routing constraints.',
      'Hardware prototype design specifications and safety requirements.'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Controlled User Studies & Clinical Collaboration',
    timeframe: 'Future Objective',
    status: 'Future Objective',
    description: 'Conducting ethical, supervised perceptual studies with speech-language pathologists, individuals anticipating voice loss, and family members.',
    milestones: [
      'IRB-approved qualitative feedback sessions on voice preservation.',
      'Perceptual family recognition testing of recreated voice profiles.',
      'Accessibility validation for alternative motor and switch inputs.',
      'Publication of open research findings on assistive vocal identity.'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'General',
    question: 'Is MYVOICE currently available as a functional product or mobile app?',
    answer: 'No. MYVOICE is in the concept development and research definition phase. There is currently no functional mobile app, software prototype, or physical wearable band available for testing or purchase. This portfolio website presents the conceptual architecture, proposed system requirements, and research direction.'
  },
  {
    category: 'Audio & AI',
    question: 'What is the 95% voice similarity target mentioned in the project vision?',
    answer: 'The 95% similarity target is an aspirational long-term research goal, not a measured outcome, achieved benchmark, or guarantee. Recreating an authentic vocal identity from variable historical recordings involves complex acoustic challenges that have not yet been resolved. Research is needed to determine achievable similarity and reliable measurement metrics.'
  },
  {
    category: 'Audio & AI',
    question: 'How much audio recording would be needed to build a personal voice profile?',
    answer: 'The minimum recording duration and audio quality thresholds have not yet been established. One of the core research objectives is to explore how much speech is needed to capture personal timbre, and whether brief legacy recordings (such as family videos or voicemails) can yield a recognizable voice model.'
  },
  {
    category: 'General',
    question: 'Can someone who has already lost their voice use MYVOICE?',
    answer: 'Yes, if suitable pre-loss recordings exist (such as old voice messages, videos, or phone calls they are authorized to use). For individuals without historical audio, MYVOICE proposes providing carefully designed alternative or customizable voice options so they can still communicate with a chosen vocal presence rather than generic text-to-speech.'
  },
  {
    category: 'Hardware & Calls',
    question: 'How does the proposed band differ from a traditional electrolarynx?',
    answer: 'Traditional electrolarynx devices rely on mechanical neck vibrations that produce an artificial, buzz-like monotone sound. The proposed MYVOICE band is envisioned as an acoustic speaker band that audibly plays back natural-sounding synthetic speech generated from the user’s personal voice profile, aiming for a far more natural, expressive, and dignified experience.'
  },
  {
    category: 'Hardware & Calls',
    question: 'Can the proposed band be used to speak during ordinary phone calls?',
    answer: 'Transmitting synthetic speech into the microphone path of an ordinary cellular phone call is an open technical challenge and has NOT been solved or validated. Standard mobile operating systems restrict third-party apps from injecting synthetic audio into active phone calls due to platform security rules. This remains a major research inquiry.'
  },
  {
    category: 'Hardware & Calls',
    question: 'What happens if the band disconnects unexpectedly during a conversation?',
    answer: 'Under the proposed safety protocol, the phone application must NOT silently switch to its external speaker without warning. Disconnection could cause unexpected public broadcasting of private thoughts. The system proposes an immediate visual alert and requires explicit user consent before activating any secondary audio output.'
  },
  {
    category: 'Privacy & Ethics',
    question: 'Who owns the generated voice profile, and how is misuse prevented?',
    answer: 'The user maintains strict, exclusive ownership of their personal voice profile. Voice biometric data is private by default and will never be monetized, shared, or used for advertising. The proposed architecture includes cryptographic pairing, secure account isolation, and unconditional permanent deletion capabilities to protect against unauthorized cloning or spoofing.'
  }
];
