
export type FaqItem = {
    question: string;
    answer: string;
};

export type FaqCategory = {
    title: string;
    questions: FaqItem[];
};

export const homepageFaqs: Record<string, FaqCategory> = {
    "cyber-crime": {
        title: "Cyber Crime",
        questions: [
            {
                question: "What constitutes cyber crime in India?",
                answer: "Cyber crimes include hacking, identity theft, online fraud, cyber bullying, data theft, phishing, ransomware attacks, and online harassment under the Information Technology Act, 2000."
            },
            {
                question: "How to report online financial fraud in Jaipur?",
                answer: "File a complaint at the nearest cyber police station with transaction details, screenshots, and bank statements. We assist in preparing the FIR and following up with authorities."
            },
            {
                question: "What is the punishment for online defamation?",
                answer: "Online defamation can lead to imprisonment up to 2 years and/or fine under Section 499 IPC and Section 66A of IT Act (though 66A is struck down, other provisions apply)."
            },
            {
                question: "Can social media posts lead to legal cases?",
                answer: "Yes, offensive posts can lead to cases under IPC for defamation, outraging modesty, or promoting enmity, and under IT Act for publishing obscene material."
            },
            {
                question: "How to handle online harassment cases?",
                answer: "Preserve evidence, block the harasser, file police complaint under Section 354D IPC and IT Act. We help obtain protection orders and pursue legal action."
            },
            {
                question: "What is the procedure for cyber crime investigation?",
                answer: "Investigation involves FIR registration, evidence collection from devices, forensic analysis, witness statements, and charge sheet filing within 60-90 days typically."
            },
            {
                question: "Can hacked social media accounts be recovered legally?",
                answer: "Yes, through police complaints and legal notices to platform providers. We assist in account recovery and pursuing action against hackers."
            },
            {
                question: "What are the laws against online job fraud?",
                answer: "Online job fraud falls under cheating (Section 420 IPC) and cyber fraud under IT Act. Victims can seek compensation and criminal action against fraudsters."
            },
            {
                question: "How to protect against data theft?",
                answer: "Use strong passwords, enable 2FA, avoid suspicious links, regularly update software, and seek legal remedies under Section 43 of IT Act if data is stolen."
            },
            {
                question: "What is the time limit for filing cyber crime complaints?",
                answer: "Generally 3 years from the date of offense, but for continuing offenses, time runs from when the offense stopped. Immediate reporting is recommended for evidence preservation."
            }
        ]
    },
    "criminal": {
        title: "Criminal",
        questions: [
            {
                question: "What is the procedure for bail in criminal cases?",
                answer: "Bail application filed in appropriate court, hearing scheduled, arguments presented, and court decides based on nature of offense, evidence, and accused's background."
            },
            {
                question: "How long does a criminal trial typically take?",
                answer: "Session trials take 2-3 years, warrant cases 1-2 years, summons cases 6 months to 1 year depending on complexity and court workload in Jaipur."
            },
            {
                question: "What are the rights of an arrested person?",
                answer: "Right to know arrest grounds, right to bail, right to lawyer, right to medical examination, and protection from torture under Article 22 of Constitution."
            },
            {
                question: "Can FIR be quashed before trial?",
                answer: "Yes, through Section 482 CrPC before High Court if FIR discloses no offense, is frivolous, or parties have settled compoundable offenses."
            },
            {
                question: "What is the difference between cognizable and non-cognizable offenses?",
                answer: "Police can arrest without warrant in cognizable offenses (serious crimes), while court warrant needed for non-cognizable offenses (less serious)."
            },
            {
                question: "How to file a private complaint in criminal case?",
                answer: "File written complaint before Magistrate with supporting documents and witness list. Magistrate may order police investigation or directly take cognizance."
            },
            {
                question: "What is anticipatory bail?",
                answer: "Pre-arrest bail under Section 438 CrPC granted when apprehension of arrest exists. Protects from arrest for specified period during investigation."
            },
            {
                question: "Can criminal cases be settled out of court?",
                answer: "Only compoundable offenses can be settled. Non-compoundable offenses like murder, rape cannot be settled out of court."
            },
            {
                question: "What is the punishment for assault cases?",
                answer: "Simple assault: up to 3 months imprisonment. Grievous hurt: up to 7 years. Armed assault: more severe punishment depending on weapon and injury."
            },
            {
                question: "How to get police protection from threats?",
                answer: "File written application to local police station or approach Magistrate court for protection orders under Section 144 CrPC or through security petitions."
            }
        ]
    },
    "ndps": {
        title: "NDPS",
        questions: [
            {
                question: "What is the NDPS Act?",
                answer: "Narcotic Drugs and Psychotropic Substances Act, 1985 prohibits production, manufacture, possession, sale, purchase, transport of narcotic drugs and psychotropic substances."
            },
            {
                question: "What is the punishment for drug possession?",
                answer: "Small quantity: up to 1 year imprisonment. Commercial quantity: 10-20 years imprisonment. Quantity in between: up to 10 years, with fines applicable."
            },
            {
                question: "Can bail be granted in NDPS cases?",
                answer: "Bail is difficult in commercial quantity cases under Section 37. For small quantity, bail possible if reasonable grounds exist that accused is not guilty."
            },
            {
                question: "What are the legal defenses in NDPS cases?",
                answer: "Illegal search, non-compliance with Section 50, planted evidence, medical prescription, lack of conscious possession, and procedural violations."
            },
            {
                question: "How is quantity determined in NDPS cases?",
                answer: "Quantity determined through forensic lab testing. Different drugs have different thresholds for small and commercial quantities as per NDPS Act."
            },
            {
                question: "What is Section 50 of NDPS Act?",
                answer: "Right to be searched before a Magistrate or Gazetted Officer. Non-compliance makes recovery illegal and can lead to acquittal."
            },
            {
                question: "Can first-time offenders get leniency?",
                answer: "For small quantities, courts may consider rehabilitation instead of imprisonment. For commercial quantities, minimum mandatory punishment applies."
            },
            {
                question: "What is the role of forensic lab in NDPS cases?",
                answer: "Forensic labs analyze seized substances, determine drug type, purity, and quantity. Their report is crucial evidence in NDPS trials."
            },
            {
                question: "How long do NDPS trials typically take?",
                answer: "NDPS trials can take 2-5 years depending on complexity, evidence, and court schedule. Speedy trial provisions may apply in some cases."
            },
            {
                question: "Can medical marijuana be legally possessed?",
                answer: "Only with valid medical prescription and license. Unauthorized possession of cannabis remains illegal under NDPS Act regardless of medical need."
            }
        ]
    },
    "court-marriage": {
        title: "Court Marriage",
        questions: [
            {
                question: "What is the procedure for court marriage in Jaipur?",
                answer: "File notice of intended marriage, wait 30 days for objections, appear before Marriage Registrar with 3 witnesses, and receive marriage certificate."
            },
            {
                question: "What documents needed for court marriage?",
                answer: "Age proof, address proof, photos, birth certificates, divorce decree/death certificate if previously married, and affidavit of marital status."
            },
            {
                question: "Can inter-religion couples marry in court?",
                answer: "Yes, under Special Marriage Act, 1954, inter-religion and inter-caste marriages are legally recognized without religious conversion."
            },
            {
                question: "What is the minimum age for court marriage?",
                answer: "21 years for bridegroom and 18 years for bride as per Prohibition of Child Marriage Act and Special Marriage Act."
            },
            {
                question: "How long does court marriage process take?",
                answer: "Typically 30-60 days including 30-day notice period. Can be expedited in special circumstances with court permission."
            },
            {
                question: "Can NRIs register marriage in Jaipur court?",
                answer: "Yes, if one partner is Indian resident in Jaipur jurisdiction. Both need to be physically present during registration."
            },
            {
                question: "What if parents object to court marriage?",
                answer: "Parents cannot legally stop court marriage of consenting adults. Police protection can be sought if threats or harassment occur."
            },
            {
                question: "Is court marriage certificate valid worldwide?",
                answer: "Yes, when properly apostilled. Court marriage certificate is legally recognized internationally for visa and immigration purposes."
            },
            {
                question: "What are the grounds for rejecting court marriage?",
                answer: "Existing marriage, prohibited relationship, mental incapacity, underage parties, or valid objections during notice period."
            },
            {
                question: "Can court marriage be converted to religious marriage?",
                answer: "Court marriage remains valid. Couples can additionally perform religious ceremonies, but court certificate remains the legal proof of marriage."
            }
        ]
    },
    "divorce": {
        title: "Divorce",
        questions: [
            {
                question: "What are the grounds for divorce in India?",
                answer: "Adultery, cruelty, desertion, conversion, mental disorder, venereal disease, renunciation, presumption of death, and mutual consent."
            },
            {
                question: "How long does mutual consent divorce take?",
                answer: "6-18 months typically. First motion filed, 6 months cooling period, then second motion for final decree in Jaipur family courts."
            },
            {
                question: "What is the procedure for contested divorce?",
                answer: "File petition, serve notice, respondent files reply, evidence recording, arguments, and final judgment. Can take 2-5 years."
            },
            {
                question: "How is alimony calculated?",
                answer: "Based on husband's income, wife's needs, lifestyle, duration of marriage, age and health of parties, and their respective assets."
            },
            {
                question: "What are wife's rights in divorce?",
                answer: "Right to maintenance, residence, child custody, stridhan recovery, and share in marital property depending on circumstances."
            },
            {
                question: "Can divorce be filed within 1 year of marriage?",
                answer: "Generally no, except in cases of exceptional hardship or exceptional depravity as per Section 14 of Hindu Marriage Act."
            },
            {
                question: "What is the difference between judicial separation and divorce?",
                answer: "Judicial separation doesn't dissolve marriage but relieves cohabitation duty. Divorce ends marriage completely allowing remarriage."
            },
            {
                question: "How is child custody decided in divorce?",
                answer: "Based on child's welfare, parental capability, child's preference (if mature), and arrangements for education and healthcare."
            },
            {
                question: "Can divorce be obtained if spouse is missing?",
                answer: "Yes, after 7 years of continuous absence, divorce can be sought on grounds of presumption of death under Section 13(1)(vii)."
            },
            {
                question: "What is irretrievable breakdown of marriage?",
                answer: "When marriage cannot be saved despite efforts. Supreme Court can grant divorce under Article 142, though not specifically in statute."
            }
        ]
    },
    "civil": {
        title: "Civil",
        questions: [
            {
                question: "What is the limitation period for civil cases?",
                answer: "Generally 3 years from cause of action. Contract cases: 3 years, recovery suits: 3 years, suits for possession: 12 years for immovable property."
            },
            {
                question: "How to file a civil suit in Jaipur court?",
                answer: "Draft plaint with facts, relief sought, pay court fees, file in appropriate court based on jurisdiction and suit value, then serve summons to defendant."
            },
            {
                question: "What is the difference between civil and criminal cases?",
                answer: "Civil cases involve private rights and compensation, criminal cases involve public wrongs and punishment. Burden of proof differs significantly."
            },
            {
                question: "How long do civil cases typically take?",
                answer: "3-10 years depending on complexity, evidence, appeals. Commercial suits under Commercial Courts Act faster: 1-2 years typically."
            },
            {
                question: "What is specific performance of contract?",
                answer: "Court order compelling party to perform contractual obligations as agreed, rather than paying damages. Governed by Specific Relief Act."
            },
            {
                question: "How to execute civil court decrees?",
                answer: "Through execution applications for attachment, sale, arrest, appointment of receiver, or other methods under Order XXI of CPC."
            },
            {
                question: "What is injunction in civil cases?",
                answer: "Court order restraining or compelling certain actions. Temporary injunction during case, permanent injunction in final judgment."
            },
            {
                question: "Can civil cases be settled through mediation?",
                answer: "Yes, court-referred mediation or private settlement. Settlement agreements are legally binding and enforceable as court decrees."
            },
            {
                question: "What are the court fees for civil suits?",
                answer: "Based on suit value as per Rajasthan Court Fees Act. Typically 1-10% of claim amount depending on nature of suit and relief sought."
            },
            {
                question: "What is the appeal process in civil cases?",
                answer: "First appeal to District Court (from Junior Division), then to High Court, finally to Supreme Court. Time limit: 30-90 days from judgment."
            }
        ]
    },
    "popular-acts": {
        title: "Popular Acts",
        questions: [
            {
                question: "What is Section 376 IPC (Rape)?",
                answer: "Section 376 IPC deals with the offence of rape. It provides punishment of imprisonment of not less than 10 years, which may extend to life imprisonment, depending on the gravity of the act and circumstances."
            },
            {
                question: "What is Section 420 IPC (Cheating and dishonestly inducing delivery of property)?",
                answer: "Section 420 covers cheating and dishonestly inducing someone to deliver property or money. It is a cognizable and non-bailable offence punishable with imprisonment up to 7 years and fine."
            },
            {
                question: "What is Section 138 of the Negotiable Instruments Act?",
                answer: "Section 138 NI Act deals with cheque bounce cases. It makes dishonour of cheque for insufficiency of funds a criminal offence with punishment up to 2 years imprisonment or fine up to double the cheque amount."
            },
            {
                question: "What is Section 498A IPC (Cruelty by Husband or Relatives)?",
                answer: "Section 498A protects married women from cruelty by husband or in-laws. It includes mental or physical harassment related to dowry or unlawful demands. It is a cognizable and non-bailable offence."
            },
            {
                question: "What is Section 307 IPC (Attempt to Murder)?",
                answer: "Section 307 IPC punishes attempt to murder with imprisonment up to 10 years or life imprisonment if hurt is caused. It requires intention or knowledge to cause death."
            },
            {
                question: "What is Section 304B IPC (Dowry Death)?",
                answer: "Section 304B applies when a woman dies within 7 years of marriage under unnatural circumstances due to dowry-related harassment. Punishment is imprisonment of not less than 7 years up to life imprisonment."
            },
            {
                question: "What is Section 406 IPC (Criminal Breach of Trust)?",
                answer: "Section 406 deals with breach of trust, when someone dishonestly misuses property entrusted to them. Punishable with up to 3 years imprisonment and/or fine."
            },
            {
                question: "What is Section 302 IPC (Murder)?",
                answer: "Section 302 provides punishment for murder — death penalty or life imprisonment and fine. It applies when death is caused with intention or knowledge."
            },
            {
                question: "What is Section 354 IPC (Outraging Modesty of a Woman)?",
                answer: "Section 354 punishes assault or criminal force used on a woman with intent to outrage her modesty. Punishable with imprisonment of 1 to 5 years and fine."
            },
            {
                question: "What is Section 506 IPC (Criminal Intimidation)?",
                answer: "Section 506 deals with criminal intimidation — threatening a person to cause alarm, injury, or compel action. Punishable with imprisonment up to 2 years, or 7 years if threat involves death or grievous hurt."
            }
        ]
    }
};
