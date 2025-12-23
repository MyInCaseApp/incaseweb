import teens from "../assets/teens.jpg";
import homeowner from "../assets/homeowner.jpg";
import professionals from "../assets/professionals.jpg";
import carowner from "../assets/carowner.jpg";
import organization from "../assets/organization.jpg";
import family from "../assets/family.jpg";

export const whyChooseUs = [
  {
    img: teens,
    name: "For Students and Graduates",
    text: "Protect your educational journey. Your WAEC certificate represents years of hard work. Your university degree opens professional doors. Keep them safe, organized, and ready when opportunity knocks.",
  },
  {
    img: homeowner,
    name: "For Home and Property Owners",
    text: "Your house documents represent your biggest investment. Your C of O secures your family’s future. Don’t risk damage, loss, or unauthorized access to these critical papers.",
  },
  {
    img: professionals,
    name: "For Professionals",
    text: "Keep your certificates, licenses, contracts, and essential work documents organized and secure. Whether you're applying for opportunities or handling client records, InCase ensures everything you need is always within reach — no searching, no stress.",
  },
  {
    img: carowner,
    name: "For Car Owners",
    text: "Your car papers are essential for daily life—from police checks to buyer verification. Keep them accessible yet secure, avoiding fines and legal complications.",
  },
  {
    img: family,
    name: "For Families",
    text: "Your Will protects your legacy. Birth and marriage certificates verify your family’s identity. Medical records could save lives in emergencies. Keep them safe for generations",
  },
  {
    img: organization,
    name: "For Organizations",
    text: "Your house documents represent your biggest investment. Your C of O secures your family’s future. Don’t risk damage, loss, or unauthorized access to these critical papers.",
  },
];

export const FaqsBank = {
  getStarted: [
    {
      id: 0,
      questions: "What is InCase?",
      answers:
        "Incase is a secure digital vault that lets you store, organize, and legally notarize your important documents using your smartphone. Think of it as a bank vault for your digital documents.",
      list: [],
    },
    {
      id: 1,
      questions: "Is Incase really free to start?",
      answers:
        "Yes! Our Basic Plan is completely free with 1GB storage and capacity for 5 documents. No credit card required to start.",
      list: [],
    },
    {
      id: 2,
      questions: "What types of documents can I store?",
      answers: "You can store:",
      list: [
        "Educational certificates: WAEC certificates, university degrees, transcripts",
        "Property documents: C of O, survey plans, deed documents",
        "Personal documents: Birth certificates, marriage certificates, wills",
        "Vehicle documents: Car papers, insurance documents",
        "Business documents: Contracts, agreements, registration papers",
        "Media files: Videos, audio recordings, photos",
      ],
    },
    {
      id: 3,
      questions: "How do I get started?",
      answers: "The entire setup process takes less than 5 minutes.",
      list: [
        "Download the Incase app from App Store or Google Play",
        "Create your free account",
        "Start uploading your important documents",
        "Get documents notarized if needed",
      ],
    },
  ],

  security: [
    {
      id: 0,
      questions: "How secure are my documents?",
      answers: " We use bank-level security including:",
      list: [
        "End-to-end encryption (your documents are encrypted before they leave your device)",
        "Secure data centers with 24/7 monitoring",
        "Regular security audits and updates",
        "Multi-layered access controls",
      ],
    },
    {
      id: 1,
      questions: "Can Incase staff see my documents?",
      answers:
        "No. We built Incase with a zero-knowledge architecture, meaning even our engineers cannot access your documents. Only you hold the keys to your data.",
      list: [],
    },
    {
      id: 2,
      questions: "What happens if I lose my phone?",
      answers:
        "Your documents remain completely safe. Simply log in from another device using your credentials. We recommend enabling two-factor authentication for extra security.",
      list: [],
    },
    {
      id: 3,
      questions: "Is my data backed up?",
      answers:
        "Yes, we maintain multiple encrypted backups across secure data centers to ensure your documents are always available and protected against data loss.",
      list: [],
    },
    {
      id: 4,
      questions: "Are you compliant with Nigerian data laws?",
      answers:
        "Yes, we're fully compliant with the Nigeria Data Protection Regulation (NDPR) and all applicable Nigerian laws.",
      list: [],
    },
  ],

  notarization: [
    {
      id: 0,
      questions: "What is digital notarization?",
      answers:
        "Digital notarization is the process of having a verified Nigerian lawyer legally certify your document electronically. It provides the same legal validity as traditional paper notarization but is faster, more secure, and more convenient.",
      list: [],
    },
    {
      id: 1,
      questions: "Is digital notarization legally valid in Nigeria?",
      answers:
        "Yes! Our notarization process is fully compliant with Nigerian Notaries Act requirements and is accepted by banks, government agencies, and courts nationwide.",
      list: [],
    },
    {
      id: 2,
      questions: "What are the benefits of digital notarization?",
      answers: "",
      list: [
        "No travel required: Get documents notarized without visiting courthouses",
        "Time saving: Avoid long queues and waiting times",
        "Cost effective: Save on transportation and time off work",
        "Secure process: Digital trail is more secure than paper",
        "Quick turnaround: Much faster than traditional methods",
      ],
    },
    {
      id: 3,
      questions: "How long does notarization take?",
      answers: "",
      list: [
        "Basic Plan: 48 hours",
        "Pro Plan: 24 hours",
        "Business Plan: 12 hours",
      ],
    },
    {
      id: 4,
      questions: "How much does notarization cost?",
      answers:
        "Please contact us for current notarization pricing as rates may vary based on document type and complexity.",
      list: [],
    },
    {
      id: 5,
      questions: "What documents can be notarized?",
      answers:
        "We cannot notarize wills, land documents requiring physical presence, or international documents needing apostille. Most documents can be notarized including:",
      list: [
        "Affidavits and statutory declarations",
        "Contracts and agreements",
        "Certifications and verifications",
        "Business documents",
      ],
    },
    {
      id: 6,
      questions: "How do you verify your lawyers?",
      answers:
        "Every lawyer on our platform undergoes rigorous verification including:",
      list: [
        "Practicing license verification",
        "Background checks",
        "Ongoing performance monitoring",
        "Compliance with professional standards",
      ],
    },
  ],

  technical: [
    {
      id: 0,
      questions: "What file types are supported?",
      answers: "We support a wide range of file formats:",
      list: [
        "Documents: PDF, DOC, DOCX, TXT, RTF",
        "Spreadsheets: XLS, XLSX, CSV, ODS",
        "Presentations: PPT, PPTX, ODP",
        "Images: JPG, JPEG, PNG, TIFF, BMP",
        "Videos: MP4, MOV, AVI, WMV, MKV",
        "Audio: MP3, WAV, M4A, AAC, FLAC",
        "Others: ZIP, RAR, 7Z, and many more",
      ],
    },
    {
      id: 1,
      questions: "Is there a file size limit?",
      answers: "Yes, to ensure optimal performance:",
      list: [
        "Documents: 50MB per file",
        "Videos: 500MB per file",
        "Other files: 100MB per file",
      ],
    },
    {
      id: 2,
      questions: "Can I access my documents offline?",
      answers:
        "Yes! You can view important documents marked for offline access without internet connection. Changes will sync when you're back online.",
      list: [],
    },
    {
      id: 3,
      questions: "Do you have a web version?",
      answers:
        "Currently, Incase is available only as a mobile app for iOS and Android devices. We are focused on providing the best mobile experience.",
      list: [],
    },
    {
      id: 4,
      questions: "How often do you update the app?",
      answers: "We release updates regularly with:",
      list: [
        "New features and improvements",
        "Security enhancements",
        "Bug fixes and performance optimizations",
        "User-requested features",
      ],
    },
  ],

  account: [
    {
      id: 0,
      questions: "What plans do you offer?",
      answers: "",
      list: [
        "Basic Plan: Free forever (1GB storage, 5 documents)",
        "Pro Plan: ₦2,500/month or ₦25,000/year (20GB storage)",
        "Business Plan: ₦10,000/month or ₦100,000/year (Advanced features)",
      ],
    },
    {
      id: 1,
      questions: "How do I cancel my subscription?",
      answers: "You can cancel anytime:",
      list: [
        "Go to Settings in the app",
        "Select 'Subscription'",
        "Choose 'Cancel Subscription'",
        "Follow the prompts",
        "Note: You'll keep access until the end of your billing period",
      ],
    },
    {
      id: 2,
      questions: "Can I get a refund?",
      answers:
        "We do not offer refunds for subscription payments. Please try our free Basic Plan to ensure Incase meets your needs before upgrading.",
      list: [],
    },
    {
      id: 3,
      questions: "What payment methods do you accept?",
      answers: "We accept:",
      list: [
        "Paystack",
        "Credit and debit cards",
        "Note: All payments are processed securely with encryption",
      ],
    },
    {
      id: 4,
      questions: "Can I share documents with others?",
      answers:
        "Currently, document sharing with other users is not available. Incase is designed for personal document storage and management.",
      list: [],
    },
    {
      id: 5,
      questions: "What happens to my data if I cancel?",
      answers:
        "You can download all your documents before canceling. We'll keep your data for 30 days after cancellation in case you change your mind, then it will be permanently deleted.",
      list: [],
    },
    {
      id: 6,
      questions: "Can I upgrade or downgrade my plan?",
      answers:
        "Plan changes are not currently available. Please choose your plan carefully as you'll need to cancel and resubscribe to change plans.",
      list: [],
    },
  ],

  business: [
    {
      id: 0,
      questions: "Do you offer team accounts?",
      answers:
        "Team functionality is not currently available. Incase is focused on individual users at this time.",
      list: [],
    },
    {
      id: 1,
      questions: "Can we get a custom plan for our organization?",
      answers:
        "Currently, we only offer our standard Basic, Pro, and Business plans. Contact us if you have specific organizational needs.",
      list: [],
    },
    {
      id: 2,
      questions: "Do you offer training for teams?",
      answers:
        "As we currently serve individual users, formal training programs are not available. Our app is designed to be intuitive and easy to use.",
      list: [],
    },
    {
      id: 3,
      questions: "Is there an API available?",
      answers:
        "API access is not currently available. We are focused on providing the best user experience through our mobile applications.",
      list: [],
    },
  ],

  troubleshooting: [
    {
      id: 0,
      questions: "I forgot my password",
      answers: `No problem! Click "Forgot Password" on the login screen and follow the instructions to reset your password via email.`,
      list: [],
    },
    {
      id: 1,
      questions: "My document upload failed",
      answers: `Check these common issues:`,
      list: [
        "File size within limits (50MB for documents)",
        "Stable internet connection",
        "Supported file format",
        "Available storage space",
        "Note: If issues persist, contact support.",
      ],
    },
    {
      id: 2,
      questions: "I'm not receiving verification emails",
      answers: "",
      list: [
        "Check your spam or junk folder",
        "Ensure you entered the correct email address",
        "Try resending the verification email",
        "Contact support if the issue continues",
      ],
    },
    {
      id: 3,
      questions: "The app is running slow",
      answers: "",
      list: [
        "Check your internet connection",
        "Close and restart the app",
        "Ensure you have the latest app version",
        "Clear app cache (in device settings)",
      ],
    },
  ],

  legal: [
    {
      id: 0,
      questions: "How long do you keep notarization records?",
      answers:
        "We maintain notarization records for 10 years as required by Nigerian law to ensure ongoing legal validity.",
      list: [],
    },
    {
      id: 1,
      questions: "What's your data retention policy?",
      answers:
        "We retain data while your account is active and for legal requirements. You can request deletion of your data at any time, subject to legal retention periods.",
      list: [],
    },
    {
      id: 2,
      questions: "Do you comply with international standards?",
      answers:
        "Yes, we follow international security best practices and are committed to maintaining the highest standards of data protection.",
      list: [],
    },
    {
      id: 3,
      questions: "Still Have Questions?",
      answers: "Contact Our Support Team",
      list: ["Email: support@incase.ng"],
    },
    {
      id: 4,
      questions: "Response Times",
      answers: "",
      list: [
        "Basic Plan: 24 hours",
        "Pro Plan: 4 hours",
        "Business Plan: 1 hour",
      ],
    },
  ],
};

export const dataRetentionLinks = [
  {
    name: "Our Commitment",
    id: "commitment",
  },
  {
    name: "How Long We Keep Your Data",
    id: "data",
  },
  {
    name: "Data Deletion",
    id: "deletion",
  },
  {
    name: "Legal Requirements",
    id: "legal",
  },
  {
    name: "Technical Safeguards",
    id: "technical",
  },
  {
    name: "Your Rights",
    id: "rights",
  },
  {
    name: "Changes to This Policy",
    id: "policy",
  },
  {
    name: "Contact Us",
    id: "contact",
  },
  {
    name: "Additional Information",
    id: "info",
  },
];

export const dataRetentionData = [
  {
    name: "1. Our Commitment",
    id: "commitment",
    description:
      "At InCase, we believe in transparent data practices. This Data Retention Policy explains how long we keep your information and why. We only retain data for as long as necessary to provide our services and comply with legal obligations.",
    sub: [],
  },

  {
    name: "2. How Long We Keep Your Data",
    id: "data",
    description: "",
    sub: [
      {
        name: "Account Information",
        sub: "",
        list: [
          "Active Accounts: Retained while your account is active",
          "Inactive Accounts: Deleted after 24 months of inactivity",
          "Account Deletion: Completed within 30 days of your request",
        ],
      },
      {
        name: "Your Documents",
        sub: "",
        list: [
          "Stored Documents: Available while your account is active",
          "Deleted Documents: Permanently removed within 30 days",
          "Shared Documents: Access revoked when you delete them",
        ],
      },
      {
        name: "Notarization Records",
        sub: "",
        list: [
          "Notarization records are kept as required by law",
          "Notarization Certificates: Stored with your documents",
          "Verification Records: Maintained for legal compliance",
        ],
      },
      {
        name: "Payment Information",
        sub: "",
        list: [
          "Transaction Records: 3 years for accounting and tax purposes",
          "Billing History: Available in your account while active",
          "Payment Methods: Securely stored only while active",
        ],
      },
    ],
  },

  {
    name: "3. Data Deletion",
    id: "deletion",
    description: "",
    sub: [
      {
        sub: "Your Control",
        name: "You can:",
        list: [
          "Download your documents anytime",
          "Delete individual documents immediately",
          "Request full account deletion",
          "Export your data before closing account",
        ],
      },
      {
        sub: "Our Process",
        name: "When you delete data:",
        list: [
          "Progressive removal from backup systems",
          "Immediate removal from active systems",
          "Secure erasure from all storage locations",
          "Confirmation when process is complete",
        ],
      },
    ],
  },

  {
    name: "4. Legal Requirements",
    id: "legal",
    description: "",
    sub: [
      {
        sub: "Required Retention",
        name: "We retain certain data to:",
        list: [
          "Comply with Nigerian data protection laws",
          "Meet notarization legal requirements",
          "Fulfill tax and accounting obligations",
          "Support legal proceedings if required",
        ],
      },
      {
        sub: "Legal Holds",
        name: "If required by law, we may preserve data for:",
        list: [
          "Ongoing legal proceedings",
          "Government investigations",
          "Regulatory requirements",
          "Law enforcement requests",
        ],
      },
    ],
  },

  {
    name: "5. Technical Safeguards",
    id: "technical",
    description: "",
    sub: [
      {
        sub: "",
        name: "Secure Storage",
        list: [
          "Encryption of all stored data",
          "Regular security assessments",
          "Access controls and monitoring",
          "Secure data center facilities",
        ],
      },
      {
        sub: "",
        name: "Secure Deletion",
        list: [
          "Cryptographic erasure methods",
          "Multiple storage location cleanup",
          "Verification of deletion completion",
          "Documentation of disposal processes",
        ],
      },
    ],
  },

  {
    name: "6. Your Rights",
    id: "rights",
    description: "",
    sub: [
      {
        sub: "Access and Control",
        name: "You have the right to:",
        list: [
          "Know what data we have about you",
          "Access your personal information",
          "Correct inaccurate data",
          "Delete your data (with some legal exceptions)",
          "Receive your data in portable format",
        ],
      },
      {
        sub: "How to Exercise Your Rights",
        name: "Contact our Data Protection Officer:",
        list: [
          "Email: dpo@InCase.ng",
          "Response Time: Within 15 days",
          "Cost: No charge for standard requests",
        ],
      },
    ],
  },

  {
    name: "7. Changes to This Policy",
    id: "policy",
    description: "",
    sub: [
      {
        sub: "",
        name: "We may update this policy to reflect:",
        list: [
          "Changes in our services",
          "Legal and regulatory requirements",
          "Technology improvements",
          "User feedback",
        ],
      },
      {
        sub: "",
        name: "We will notify you of significant changes through:",
        list: [
          "In-app notifications",
          "Email communication",
          "Policy date updates",
        ],
      },
    ],
  },

  {
    name: "8. Contact Us",
    id: "contact",
    description: "",
    sub: [
      {
        sub: "",
        name: "For questions about data retention:",
        list: [
          "Data Protection Officer: dpo@InCase.ng",
          "General Support: support@InCase.ng",
        ],
      },
    ],
  },

  {
    name: "9. Additional Information",
    id: "info",
    description: "",
    sub: [
      {
        sub: "Backup Systems",
        name: "",
        list: [
          "Data backups retained for 90 days",
          "Progressive deletion from all backups",
          "Encrypted and secure backup storage",
        ],
      },
      {
        sub: "System Logs",
        name: "",
        list: [
          "Access and security logs: 12 months",
          "Performance data: 6 months",
          "Analytics data: 25 months",
        ],
      },
    ],
  },
];

export const policyLinks = [
  {
    name: "Introduction",
    id: "intro",
  },
  {
    name: "Information we collect",
    id: "info",
  },
  {
    name: "How we use your information",
    id: "how",
  },
  {
    name: "Data sharing and disclosure",
    id: "data",
  },
  {
    name: "Data securely",
    id: "secure",
  },
  {
    name: "User rights and choices",
    id: "user",
  },
  {
    name: "International data transfers",
    id: "international",
  },
  {
    name: "Children’s privacy",
    id: "children",
  },
  {
    name: "Third party services",
    id: "third",
  },
  {
    name: "Cookies and tracking",
    id: "cookies",
  },
  {
    name: "Policy updates",
    id: "policy",
  },
  {
    name: "Contact information",
    id: "contact",
  },
  {
    name: "Jurisdiction and law",
    id: "jurisdiction",
  },
  {
    name: "Additional provisions",
    id: "additional",
  },
  {
    name: "Consent",
    id: "consent",
  },
];

export const policyData = [
  {
    name: "1. Introduction",
    id: "intro",
    description: `Welcome to InCase ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.`,
    sub: [],
  },

  {
    name: "2. Information We Collect",
    id: "info",
    description: "",
    sub: [
      {
        name: "",
        sub: "Personal Information",
        list: [
          "Full name and contact details",
          "Email address and phone number",
          "Date of birth and gender",
          "Government-issued identification for verification",
          "Profile information and preferences",
        ],
      },
      {
        name: "",
        sub: "Document Information",
        list: [
          "Documents, files, and media you upload",
          "Document metadata (file type, size, creation date)",
          "Notarization records and timestamps",
          "Access logs and sharing history",
        ],
      },
      {
        name: "",
        sub: "Financial Information",
        list: [
          "Payment card details (processed securely by payment partners)",
          "Billing address and transaction history",
          "Subscription status and renewal dates",
        ],
      },
      {
        name: "",
        sub: "Technical Information",
        list: [
          "Device type and operating system",
          "IP address and mobile network information",
          "App usage statistics and crash reports",
          "Cookies and similar tracking technologies",
        ],
      },
    ],
  },

  {
    name: "3. How We Use Your Information",
    id: "how",
    description: "",
    sub: [
      {
        name: "",
        sub: "Service Delivery",
        list: [
          "Provide document storage and management",
          "Facilitate document notarization services",
          "Process payments and manage subscriptions",
          "Enable document sharing and collaboration",
        ],
      },
      {
        name: "Security & Authentication",
        sub: "",
        list: [
          "Verify user identity and prevent fraud",
          "Secure account access and prevent unauthorized use",
          "Monitor for suspicious activities",
          "Comply with legal obligations",
        ],
      },
      {
        name: "",
        sub: "Service Improvement",
        list: [
          "Enhance app functionality and user experience",
          "Develop new features and services",
          "Provide customer support and troubleshooting",
          "Conduct research and analysis",
        ],
      },
      {
        name: "",
        sub: "Communication",
        list: [
          "Send service-related notifications",
          "Provide customer support",
          "Send promotional communications (with consent)",
          "Deliver important updates and security alerts",
        ],
      },
    ],
  },

  {
    name: "4. Data Sharing and Disclosure",
    id: "data",
    description: "",
    sub: [
      {
        name: "",
        sub: "Service Providers",
        description:
          "We share information with trusted third-party providers for:",
        list: [
          "Payment processing (Paystack, Stripe)",
          "Cloud storage and infrastructure",
          "SMS and email delivery services",
          "Analytics and crash reporting",
          "Customer support platforms",
        ],
      },
      {
        name: "",
        sub: "Legal Requirements",
        description: "We may disclose information when required by:",
        list: [
          "Court orders or legal processes",
          "Government authorities and law enforcement",
          "Regulatory compliance requirements",
          "Protection of our rights and users' safety",
        ],
      },
      {
        name: "",
        sub: "Business Transfers",
        description: "In case of merger, acquisition, or asset sale:",
        list: [
          "User information may be transferred",
          "Notice will be provided of any ownership change",
          "Privacy protections will be maintained",
        ],
      },
    ],
  },

  {
    name: "5. Data Security",
    id: "secure",
    description: "",
    sub: [
      {
        name: "",
        sub: "Security Measures",
        description: "",
        list: [
          "End-to-end encryption for stored documents",
          "Secure socket layer (SSL) technology for data transmission",
          "Regular security assessments and penetration testing",
          "Access controls and authentication protocols",
          "Secure data center facilities with 24/7 monitoring",
        ],
      },
    ],
  },

  {
    name: "6. User Rights and Choices",
    id: "user",
    description: "",
    sub: [
      {
        name: "",
        sub: "Access and Control",
        description: "",
        list: [
          "Access and download your personal data",
          "Correct inaccurate or incomplete information",
          "Delete your account and associated data",
          "Export your documents and information",
        ],
      },
      {
        name: "",
        sub: "Communication Preferences",
        description: "",
        list: [
          "Opt-out of marketing communications",
          "Adjust notification settings",
          "Control email frequency and content",
        ],
      },
      {
        name: "",
        sub: "Device Permissions",
        description:
          "You can manage app permissions through your device settings for:",
        list: [
          "Camera and photo library access",
          "Location services",
          "Push notifications",
          "Background data usage",
        ],
      },
    ],
  },

  {
    name: "7. International Data Transfers",
    id: "international",
    description: "",
    sub: [
      {
        name: "",
        sub: "Data Location",
        list: [
          "Primary data storage in [Country/Region]",
          "Possible transfer to other jurisdictions",
          "Adequate protection measures implemented",
          "Compliance with applicable data protection laws",
        ],
      },
    ],
  },

  {
    name: "8. Children's Privacy",
    id: "children",
    description: "",
    sub: [
      {
        name: "",
        sub: "Age Restrictions",
        list: [
          "Service not intended for users under 12 years",
          "No intentional collection of children's data",
          "Parental consent required for minor users",
          "Procedures for handling inadvertent collection",
          "App does not support interaction between users",
        ],
      },
    ],
  },

  {
    name: "9. Third Party Services",
    id: "third",
    description: "",
    sub: [
      {
        name: "",
        sub: "External Links",
        list: [
          "This policy doesn't cover external sites",
          "Review privacy policies of linked services",
          "We're not responsible for external practices",
        ],
      },
      {
        name: "",
        sub: "Integrated Services",
        list: [
          "Social media integrations (if applicable)",
          "Payment processor integrations",
          "Analytics and marketing tools",
          "Cloud service providers",
        ],
      },
    ],
  },

  {
    name: "10. Cookies and Tracking",
    id: "cookies",
    description: "",
    sub: [
      {
        name: "",
        sub: "Technologies Used",
        list: [
          "Cookies and local storage",
          "Pixel tags and web beacons",
          "Analytics tools (Google Analytics, etc.)",
          "Advertising identifiers (if applicable)",
        ],
      },
      {
        name: "",
        sub: "User Control",
        list: [
          "Browser settings to manage cookies",
          "Opt-out mechanisms for analytics",
          "Advertising preference managers",
          "Do-not-track signals",
        ],
      },
    ],
  },

  {
    name: "11. Policy Updates",
    id: "policy",
    description: "",
    sub: [
      {
        name: "",
        sub: "Modification Procedure",
        list: [
          "Notice of material changes provided",
          "Continued use constitutes acceptance",
          "Review policy periodically for updates",
          "Archive of previous versions available",
        ],
      },
    ],
  },

  {
    name: "12. Contact Information",
    id: "contact",
    description: "",
    sub: [
      {
        name: "",
        sub: "Privacy Inquiries",
        list: [
          "Email: privacy@InCase.ng",
          "Phone number: +234 911 222 2411",
          "Data Protection Officer: dpo@InCase.ng",
          "Response time: Within 48 hours",
        ],
      },
      {
        name: "",
        sub: "Complaints",
        list: [
          "Right to lodge complaints with authorities",
          "Internal dispute resolution process",
          "Every dispute shall first be subject to mediation",
          "Contact information for regulatory bodies",
        ],
      },
    ],
  },

  {
    name: "13. Jurisdiction and Law",
    id: "jurisdiction",
    description: "",
    sub: [
      {
        name: "",
        sub: "Governing Law",
        list: [
          "Primary jurisdiction: Nigeria",
          "Compliance with local data protection laws",
          "Cross-border data transfer protocols",
          "International privacy standards adherence",
        ],
      },
    ],
  },

  {
    name: "14. Additional Provisions",
    id: "additional",
    description: "",
    sub: [
      {
        name: "",
        sub: "California Privacy Rights (if applicable)",
        list: [
          "CCPA compliance measures",
          "Right to know and deletion",
          "Opt-out of data sales",
          "Non-discrimination guarantees",
        ],
      },
      {
        name: "",
        sub: "GDPR Compliance (if applicable)",
        list: [
          "Lawful basis for processing",
          "Data subject rights",
          "Data protection impact assessments",
          "International transfer safeguards",
        ],
      },
    ],
  },

  {
    name: "15. Consent",
    id: "consent",
    description: "",
    sub: [
      {
        sub: "User Agreement",
        name: "By using the InCase mobile application, you consent to:",
        description: "By using the InCase mobile application, you consent to:",
        list: [
          "The collection and use of your information",
          "The terms outlined in this Privacy Policy",
          "Receiving communications from us",
          "Data processing as described herein",
        ],
      },
    ],
  },
];

export const termsLinks = [
  {
    name: "Acceptance of Terms",
    id: "acceptance",
  },
  {
    name: "Changes to Terms",
    id: "changes",
  },
  {
    name: "Eligibility",
    id: "eligibility",
  },
  {
    name: "Account Registration",
    id: "registration",
  },
  {
    name: "Services Description",
    id: "services-desc",
  },
  {
    name: "User Responsibilities",
    id: "responsibilities",
  },
  {
    name: "Notarization Services",
    id: "notarization",
  },
  {
    name: "Payment Terms",
    id: "payment",
  },
  {
    name: "Intellectual Property",
    id: "intellectual-property",
  },
  {
    name: "Privacy",
    id: "privacy-terms",
  },
  {
    name: "Service Limitations",
    id: "limitations",
  },
  {
    name: "Termination",
    id: "termination",
  },
  {
    name: "Disclaimers",
    id: "disclaimers",
  },
  {
    name: "Limitation of Liability",
    id: "liability",
  },
  {
    name: "Indemnification",
    id: "indemnification",
  },
  {
    name: "Governing Law",
    id: "governing-law",
  },
  {
    name: "Dispute Resolution",
    id: "dispute-resolution",
  },
  {
    name: "Third Party Services",
    id: "third-party-services",
  },
  {
    name: "Notices",
    id: "notices",
  },
  {
    name: "General Provisions",
    id: "general-provisions",
  },
  {
    name: "Contact Information",
    id: "contact-info",
  },
  {
    name: "Document Specific Terms",
    id: "document-terms",
  },
];

export const termsData = [
  {
    name: "1. Acceptance of Terms",
    id: "acceptance",
    description: `Welcome to InCase. By downloading, accessing, or using the InCase mobile application ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our App`,
    sub: [],
  },
  {
    name: "2. Changes to Terms",
    id: "changes",
    description: `We reserve the right to modify these Terms at any time. We will notify users of material changes through the App or via email. Continued use of the App after changes constitutes acceptance of the new Terms.`,
    sub: [],
  },

  {
    name: "3. Eligibility",
    id: "eligibility",
    description: "",
    sub: [
      {
        name: "",
        sub: "You must be:",
        list: [
          "At least 12 years old",
          "Legally capable of entering into binding contracts",
          "Using the App in compliance with applicable laws",
          "Not prohibited from receiving our services under applicable laws",
        ],
      },
    ],
  },

  {
    name: "4. Account Registration",
    id: "registration",
    description: "",
    sub: [
      {
        name: "",
        sub: "Account Creation",
        list: [
          "You must provide accurate and complete information",
          "You are responsible for maintaining account confidentiality",
          "You must notify us immediately of any unauthorized use",
        ],
      },
      {
        name: "",
        sub: "Account Security",
        list: [
          "You are responsible for all activities under your account",
          "We are not liable for losses resulting from unauthorized access",
          "We may suspend accounts suspected of compromise",
        ],
      },
    ],
  },

  {
    name: "5. Services Description",
    id: "services-desc",
    description: "",
    sub: [
      {
        name: "",
        sub: "InCase provides:",
        list: [
          "Secure digital document storage",
          "Document organization and management",
          "Digital/Electronic notarization services by commissioned Notaries",
          "Document sharing capabilities",
          "Cross-platform access to stored documents",
        ],
      },
    ],
  },

  {
    name: "6. User Responsibilities",
    id: "responsibilities",
    description: "",
    sub: [
      {
        name: "You agree not to:",
        sub: "Acceptable Use",
        description: "You agree not to:",
        list: [
          "Upload illegal, harmful, or malicious content",
          "Violate intellectual property rights",
          "Attempt to circumvent security measures",
          "Use the App for fraudulent activities",
          "Interfere with other users' enjoyment of the App",
        ],
      },
      {
        name: "",
        sub: "Document Uploads",
        list: [
          "You retain ownership of uploaded documents",
          "You warrant you have rights to upload all documents",
          "You are responsible for document content accuracy",
          "Prohibited documents include illegal content, malware, or harmful files",
        ],
      },
    ],
  },

  {
    name: "7. Notarization Services",
    id: "notarization",
    description: "",
    sub: [
      {
        name: "",
        sub: "Service Description",
        list: [
          "Notarization provided by commissioned Notaries",
          "Digital/Electronic notarization complies with the Notary Act (2024)",
          "Notarization timing depends on service tier",
          "We facilitate but do not provide legal advice",
        ],
      },
      {
        name: "",
        sub: "User Acknowledgments",
        list: [
          "To comply with verification process for notarisation",
          "To provide accurate information for notarisation",
          "To understand digital notarisation limitations",
          "Notarisation fees are non-refundable once service begins",
          "You are responsible for notarised document use",
        ],
      },
    ],
  },

  {
    name: "8. Payment Terms",
    id: "payment",
    description: "",
    sub: [
      {
        name: "",
        sub: "Subscription Plans",
        list: [
          "Basic Plan: ₦1,500",
          "Pro Plan: ₦3,500/month or ₦35,000/year",
          "Business Plan: ₦10,000/month or ₦100,000/year",
          "Prices subject to change with notice",
        ],
      },
      {
        name: "",
        sub: "Billing and Renewal",
        list: [
          "Automatic renewal for paid plans",
          "Cancel anytime through App settings",
          "No refunds for partial subscription periods",
          "Failed payments may result in service suspension",
        ],
      },
      {
        name: "",
        sub: "Notarization Fees",
        list: [
          "Separate from subscription fees",
          "Paid per document/service",
          "Non-refundable once notarization process begins",
        ],
      },
    ],
  },

  {
    name: "9. Intellectual Property",
    id: "intellectual-property",
    description: "",
    sub: [
      {
        name: "",
        sub: "Our Rights",
        list: [
          "We own all App software, design, and branding",
          "You grant us license to store and process your documents",
          "We may use anonymized data for service improvement",
        ],
      },
      {
        name: "",
        sub: "Your Rights",
        list: [
          "You retain ownership of uploaded documents",
          "You grant us limited license to provide services",
          "You may download your documents anytime",
        ],
      },
    ],
  },

  {
    name: "10. Privacy",
    id: "privacy-terms",
    description:
      "Your privacy is important. Our Privacy Policy explains how we collect, use, and protect your information. By using the App, you consent to our privacy practices.",
    sub: [],
  },

  {
    name: "11. Service Limitations",
    id: "limitations",
    description: "",
    sub: [
      {
        name: "",
        sub: "Availability",
        list: [
          "We strive for 24/7 availability but don't guarantee uninterrupted service",
          "We may perform maintenance that temporarily disrupts service",
          "Service may be unavailable due to circumstances beyond our control",
        ],
      },
      {
        name: "",
        sub: "Storage Limits",
        list: [
          "Basic Plan: 1GB storage (Documents only)",
          "Pro Plan: 20GB storage (Document + Video + Note)",
          "Business Plan: 100GB storage (Access to full package)",
          "File size limits apply per document type",
        ],
      },
    ],
  },

  {
    name: "12. Termination",
    id: "termination",
    description: "",
    sub: [
      {
        name: "",
        sub: "By User",
        list: [
          "You may delete your account anytime",
          "Deleting your account removes all your information from our database",
          "We retain certain information as required by law",
        ],
      },
      {
        name: "We may suspend or terminate your account if:",
        sub: "By Us",
        list: [
          "You violate these Terms",
          "Required by law",
          "You engage in fraudulent activities",
          "For prolonged inactivity",
        ],
      },
    ],
  },

  {
    name: "13. Disclaimers",
    id: "disclaimers",
    description: "",
    sub: [
      {
        name: `The App is provided "as is" without warranties of any kind. We don't guarantee:`,
        sub: 'Service "As Is"',
        list: [
          "Continuous error-free operation",
          "Accuracy of notarization for your specific needs",
          "Third-party service reliability",
        ],
      },
      {
        name: "",
        sub: "Legal Disclaimer",
        list: [
          "We do not give legal advice. Notarization services are offered by commissioned notaries",
        ],
      },
    ],
  },

  {
    name: "14. Limitation of Liability",
    id: "liability",
    description: "",
    sub: [
      {
        name: "",
        sub: "To the extent permitted by law, InCase shall not be liable for:",
        list: [
          "Indirect, incidental, or consequential damages",
          "Data loss or corruption",
          "Unauthorized access to your account",
          "Actions of third-party",
          "Damages exceeding the amount you paid in the past 6 months",
        ],
      },
    ],
  },

  {
    name: "15. Indemnification",
    id: "indemnification",
    description: "",
    sub: [
      {
        name: "",
        sub: "You agree to indemnify and hold harmless InCase from any claims, damages, or expenses arising from:",
        list: [
          "Your use of the App",
          "Your violation of these Terms",
          "Your uploaded document, videos, notes or other information",
          "Your use of notarization services",
        ],
      },
    ],
  },

  {
    name: "16. Governing Law",
    id: "governing-law",
    description:
      "These Terms are governed by the extant laws of the Federal Republic of Nigeria.",
    sub: [],
  },

  {
    name: "17. Dispute Resolution",
    id: "dispute-resolution",
    description: "",
    sub: [
      {
        name: "",
        sub: "Informal Resolution",
        list: [
          "We prefer to resolve disputes informally. Contact us at legal@InCase.ng before pursuing formal proceedings",
        ],
      },
      {
        name: "",
        sub: "Unresolved Disputes",
        list: [
          "Any unresolved disputes shall be settled through mediation to be held in Lagos, Port-harcourt or Abuja and the Institute of Chartered Mediators and Conciliators shall appoint a Mediator.",
        ],
      },
    ],
  },

  {
    name: "18. Third Party Services",
    id: "third-party-services",
    description: "",
    sub: [
      {
        name: "",
        sub: "External Integration",
        list: [
          "The App may integrate with or link to third-party services",
          "We are not responsible for third-party service content or practices",
          "Your use of third-party services is subject to their own terms",
        ],
      },
    ],
  },

  {
    name: "19. Notices",
    id: "notices",
    description: "",
    sub: [
      {
        name: "",
        sub: "We may provide notices:",
        list: [
          "Through the App",
          "Via email to your registered address",
          "By posting on our website",
        ],
      },
    ],
  },

  {
    name: "20. General Provisions",
    id: "general-provisions",
    description: "",
    sub: [
      {
        name: "",
        sub: "Entire Agreement",
        list: [
          "These Terms constitute the entire agreement between you and InCase regarding the App.",
        ],
      },
      {
        name: "",
        sub: "Severability",
        list: [
          "If any provision is found unenforceable, the remaining provisions remain in effect.",
        ],
      },
      {
        name: "",
        sub: "No Waiver",
        list: [
          "Our failure to enforce any right doesn't constitute a waiver of that right.",
        ],
      },
      {
        name: "",
        sub: "Assignment",
        list: [
          "We may transfer our rights under these Terms to any affiliate or successor",
        ],
      },
    ],
  },

  {
    name: "21. Contact Information",
    id: "contact-info",
    description: "",
    sub: [
      {
        name: "",
        sub: "For questions about these Terms:",
        list: [
          "Email: legal@InCase.ng",
          "Response Time: Within 5 business days",
        ],
      },
    ],
  },

  {
    name: "22. Document Specific Terms",
    id: "document-terms",
    description: "",
    sub: [
      {
        name: "",
        sub: "Document Retention",
        list: [
          "We store documents while your account is active",
          "You may download documents anytime",
          "Deleted documents may not be recovered",
          "We maintain notarization records as required by law",
        ],
      },
      {
        name: "",
        sub: "Document Sharing",
        list: [
          "You control document sharing permissions",
          "Shared documents are accessible to recipients you specify",
          "You are responsible for shared document content",
          "We are not liable for shared document misuse",
        ],
      },
    ],
  },
];

export const cookieLinks = [
  {
    name: "Introduction",
    id: "introduction",
  },
  {
    name: "What Are Cookies?",
    id: "what-are-cookies",
  },
  {
    name: "Types of Cookies We Use",
    id: "types-of-cookies",
  },
  {
    name: "Specific Cookies We Use",
    id: "specific-cookies",
  },
  {
    name: "Mobile Specific Technologies",
    id: "mobile-technologies",
  },
  {
    name: "Third Party Cookies",
    id: "third-party-cookies",
  },
  {
    name: "Purpose of Cookie Usage",
    id: "cookie-purpose",
  },
  {
    name: "Your Cookie Choices",
    id: "cookie-choices",
  },
  {
    name: "Data Collection and Privacy",
    id: "collection-privacy",
  },
  {
    name: "Data Sharing",
    id: "data-sharing",
  },
  {
    name: "Data Retention",
    id: "data-retention",
  },
  {
    name: "International Data Transfers",
    id: "international-transfers",
  },
  {
    name: "Children's Privacy",
    id: "children-privacy",
  },
  {
    name: "Policy Updates",
    id: "policy-updates",
  },
  {
    name: "Your Rights",
    id: "your-rights",
  },
  {
    name: "Contact Information",
    id: "contact-info",
  },
  {
    name: "Additional Resources",
    id: "additional-resources",
  },
];

export const cookieData = [
  {
    name: "1. Introduction",
    id: "introduction",
    description:
      'This Cookie Policy explains how InCase ("we," "our," or "us") uses cookies and similar tracking technologies when you use our mobile application and related services. This policy should be read alongside our Privacy Policy and Terms of Service.',
    sub: [],
  },
  {
    name: "2. What Are Cookies?",
    id: "what-are-cookies",
    description:
      "Cookies are small text files that are stored on your device when you use our App. They help us recognize your device and remember your preferences and actions over time.",
    sub: [],
  },
  {
    name: "3. Types of Cookies We Use",
    id: "types-of-cookies",
    description: "",
    sub: [
      {
        name: "Purpose: These are necessary for the App to function properly.",
        sub: "Essential Cookies",
        list: [
          "Session management and user authentication",
          "Security and fraud prevention",
          "Load balancing and performance",
          "Duration: Session-based or up to 24 hours",
        ],
      },
      {
        name: "Purpose: Enhance your experience by remembering your preferences.",
        sub: "Functionality Cookies",
        list: [
          "Language and region settings",
          "Display preferences and themes",
          "Document view preferences",
          "Duration: Up to 1 year",
        ],
      },
      {
        name: "Purpose: Help us understand how users interact with our App.",
        sub: "Performance Cookies",

        list: [
          "App usage statistics",
          "Feature popularity and engagement",
          "Error and crash reporting",
          "Duration: Up to 2 years",
        ],
      },
      {
        name: "Purpose: Collect information about how you use our App.",
        sub: "Analytics Cookies",
        list: [
          "Pages and features visited",
          "Time spent on different sections",
          "User journey and navigation paths",
          "Duration: Up to 2 years",
        ],
      },
    ],
  },
  {
    name: "4. Specific Cookies We Use",
    id: "specific-cookies",
    description:
      "Cookies are small text files that are stored on your device when you use our App. They help us recognize your device and remember your preferences and actions over time.",
    sub: [],
  },

  {
    name: "5. Mobile Specific Technologies",
    id: "mobile-technologies",
    description: "",
    sub: [
      {
        name: "We use device-specific identifiers for:",
        sub: "Device Identifiers",
        list: [
          "Push notification management",
          "App performance optimization",
          "Security and fraud prevention",
          "User preference synchronization",
        ],
      },
      {
        name: "We use local storage on your device for:",
        sub: "Local Storage",
        list: [
          "Offline document access",
          "Cached document previews",
          "Temporary upload queues",
          "App performance optimization",
        ],
      },
    ],
  },

  {
    name: "6. Third Party Cookies",
    id: "third-party-cookies",
    description: "",
    sub: [
      {
        name: "We work with analytics providers to understand App usage:",
        sub: "Analytics Partners",
        list: ["Purpose: Service improvement and feature development"],
      },
      {
        name: "Payment providers may set cookies during transaction processing:",
        sub: "Payment Processors",
        list: [
          "Paystack: Payment security and fraud prevention",
          "Stripe: Transaction processing and security",
        ],
      },
      {
        name: "Other essential service providers:",
        sub: "Service Providers",
        list: [
          "Cloud storage partners: Document delivery optimization",
          "SMS providers: Verification code delivery",
        ],
      },
    ],
  },

  {
    name: "7. Purpose of Cookie Usage",
    id: "cookie-purpose",
    description: "",
    sub: [
      {
        name: "",
        sub: "Essential Operations",
        list: [
          "User authentication and session management",
          "Document upload and download functionality",
          "Payment processing security",
          "App security and fraud prevention",
        ],
      },
      {
        name: "",
        sub: "User Experience",
        list: [
          "Remembering user preferences and settings",
          "Personalized document organization",
          "Quick access to frequently used features",
          "Offline functionality",
        ],
      },
      {
        name: "",
        sub: "Service Improvement",
        list: [
          "Understanding feature usage patterns",
          "Identifying and fixing technical issues",
          "Optimizing App performance",
          "Developing new features based on user needs",
        ],
      },
    ],
  },

  {
    name: "8. Your Cookie Choices",
    id: "cookie-choices",
    description: "",
    sub: [
      {
        name: "You can manage cookies through:",
        sub: "Cookie Controls",
        list: [
          "App Settings: Adjust privacy and data collection preferences",
          "Device Settings: Manage app permissions and data collection",
          "Browser Settings: For web-based components of our service",
        ],
      },
      {
        name: "Analytics Opt-Out:",
        sub: "Opt-Out Options",
        list: [
          "Adjust settings in App preferences",
          "Use device-level advertising controls",
          "Contact support for additional options",
        ],
      },
      {
        name: "",
        sub: "Push Notifications",
        list: [
          "Manage through device settings",
          "Adjust in App notification preferences",
        ],
      },
      {
        name: "",
        sub: "Essential Cookies",
        list: [
          "Note that essential cookies cannot be disabled as they are required for the App to function properly.",
          "Disabling them may prevent you from using core features.",
        ],
      },
    ],
  },

  {
    name: "9. Data Collection and Privacy",
    id: "collection-privacy",
    description: "",
    sub: [
      {
        name: "Cookies may collect:",
        sub: "Information Collected",
        list: [
          "Device type and operating system",
          "App usage patterns and feature interaction",
          "Performance and error data",
          "User preferences and settings",
        ],
      },
      {
        name: "We use cookie data to:",
        sub: "Data Usage",
        list: [
          "Provide and improve our services",
          "Ensure App security and reliability",
          "Personalize your experience",
          "Comply with legal obligations",
        ],
      },
    ],
  },

  {
    name: "10. Data Sharing",
    id: "data-sharing",
    description: "",
    sub: [
      {
        name: "We may share cookie data with:",
        sub: "Third-Party Sharing",
        list: [
          "Service providers essential for App operation",
          "Analytics partners for service improvement",
          "Legal authorities when required by law",
        ],
      },
      {
        name: "We may use anonymized, aggregated cookie data for:",
        sub: "Anonymized Data",
        list: [
          "Business analytics and reporting",
          "Service optimization",
          "Marketing and partnership discussions",
        ],
      },
    ],
  },

  {
    name: "11. Data Retention",
    id: "data-retention",
    description: "",
    sub: [
      {
        name: "",
        sub: "Cookie Duration",
        list: [
          "Session cookies: Deleted when you close the App",
          "Persistent cookies: Automatically expire based on duration set",
          "Local storage: Remains until manually cleared or App uninstallation",
        ],
      },
      {
        name: "You can clear stored data by:",
        sub: "User-Controlled Deletion",
        list: [
          'Using App\'s "Clear Data" feature',
          "Uninstalling and reinstalling the App",
          "Using device-level storage management tools",
        ],
      },
    ],
  },

  {
    name: "12. International Data Transfers",
    id: "international-transfers",
    description:
      "Cookie data may be processed in various locations, including Nigeria and other countries where our service providers operate. We ensure adequate data protection through contractual measures.",
    sub: [],
  },

  {
    name: "13. Children's Privacy",
    id: "children-privacy",
    description:
      "This App is not intended for children under 12. We do not intentionally collect personal information or other data from children through cookies or other tracking technologies.",
    sub: [],
  },

  {
    name: "14. Policy Updates",
    id: "policy-updates",
    description: "",
    sub: [
      {
        name: "We may update this Cookie Policy to reflect:",
        sub: "Changes to Policy",
        list: [
          "Changes in cookie technologies",
          "New service features requiring different cookies",
          "Legal or regulatory requirements",
          "User feedback and industry practices",
        ],
      },
      {
        name: "We will notify you of material changes through:",
        sub: "Notification of Changes",
        list: [
          "In-App notifications",
          "Email communications (if provided)",
          "Updated policy date on this page",
        ],
      },
    ],
  },

  {
    name: "15. Your Rights",
    id: "your-rights",
    description: "",
    sub: [
      {
        name: "You have the right to:",
        sub: "Access and Control",
        list: [
          "Know what cookies we use and why",
          "Control non-essential cookie settings",
          "Access information collected through cookies",
          "Request deletion of collected data",
        ],
      },
      {
        name: "Contact us to exercise your cookie-related rights:",
        sub: "Exercise Your Rights",
        list: ["Email: privacy@InCase.ng", "Response Time: Within 30 days"],
      },
    ],
  },

  {
    name: "16. Contact Information",
    id: "contact-info",
    description: "",
    sub: [
      {
        name: "",
        sub: "For questions about this Cookie Policy:",
        list: [
          "Email: privacy@InCase.ng",
          "Address: [Your Company Address]",
          "Attention: Privacy Team",
        ],
      },
    ],
  },

  {
    name: "17. Additional Resources",
    id: "additional-resources",
    description: "",
    sub: [
      {
        name: "iOS Devices:",
        sub: "Device-Specific Controls",
        list: [
          "Settings > Privacy & Security > Tracking",
          "Settings > [App Name] > Allow Tracking",
        ],
      },
      {
        name: "",
        sub: "Android Devices:",
        list: [
          "Settings > Google > Ads > Opt out of Ads Personalization",
          "Settings > Apps > [App Name] > Permissions",
        ],
      },
      {
        name: "",
        sub: "Industry Opt-Outs",
        list: [
          "Network Advertising Initiative: http://optout.networkadvertising.org/",
          "Digital Advertising Alliance: http://optout.aboutads.info/",
        ],
      },
    ],
  },
];

export const cookies = [
  {
    name: "InCase session",
    purpose: "User authentication",
    type: "Essential",
    duration: "Session",
  },
  {
    name: "InCase preferences",
    purpose: "User settings",
    type: "Functional",
    duration: "1 Year",
  },
  {
    name: "InCase analytics",
    purpose: "Usage statistics",
    type: "Analytics",
    duration: "2 Years",
  },
  {
    name: "InCase security",
    purpose: "Security features",
    type: "Essential",
    duration: "24 Hours",
  },
];
