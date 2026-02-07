export interface EligibilityRule {
    name: string;
    fullName: string;
    authority: string;
    ageLimit: {
        min?: number;
        max?: number;
        cutoffDate: string; // YYYY-MM-DD
    };
    qualifications: string[];
    categoryRelaxation: {
        [key: string]: {
            age?: number;
            attempts?: number;
        };
    };
    officialLink: string;
}

export const eligibilityData: { [key: string]: EligibilityRule } = {
    neet: {
        name: "NEET",
        fullName: "National Eligibility cum Entrance Test (UG)",
        authority: "National Testing Agency (NTA)",
        ageLimit: {
            min: 17,
            cutoffDate: "2026-12-31"
        },
        qualifications: ["10+2 with Physics, Chemistry, Biology/Biotech", "English as a core subject"],
        categoryRelaxation: {
            SC: { age: 5 },
            ST: { age: 5 },
            OBC: { age: 5 }
        },
        officialLink: "https://neet.nta.nic.in/"
    },
    jee_main: {
        name: "JEE Main",
        fullName: "Joint Entrance Examination (Main)",
        authority: "National Testing Agency (NTA)",
        ageLimit: {
            cutoffDate: "2026-12-31"
        },
        qualifications: ["10+2 or equivalent with Physics, Mathematics", "One of Chemistry/Biology/Biotech/Technical Vocational"],
        categoryRelaxation: {},
        officialLink: "https://jeemain.nta.nic.in/"
    },
    upsc_cse: {
        name: "UPSC CSE",
        fullName: "Civil Services Examination",
        authority: "Union Public Service Commission",
        ageLimit: {
            min: 21,
            max: 32,
            cutoffDate: "2026-08-01"
        },
        qualifications: ["Any Graduate degree from a recognized university"],
        categoryRelaxation: {
            OBC: { age: 3, attempts: 3 },
            SC: { age: 5, attempts: 99 },
            ST: { age: 5, attempts: 99 }
        },
        officialLink: "https://upsc.gov.in/"
    },
    ssc_cgl: {
        name: "SSC CGL",
        fullName: "Combined Graduate Level Examination",
        authority: "Staff Selection Commission",
        ageLimit: {
            min: 18,
            max: 30,
            cutoffDate: "2026-01-01"
        },
        qualifications: ["Bachelor's Degree from a recognized University"],
        categoryRelaxation: {
            OBC: { age: 3 },
            SC: { age: 5 },
            ST: { age: 5 }
        },
        officialLink: "https://ssc.nic.in/"
    },
    gate: {
        name: "GATE",
        fullName: "Graduate Aptitude Test in Engineering",
        authority: "IISc/IITs",
        ageLimit: {
            cutoffDate: "2026-02-01" // No age limit
        },
        qualifications: ["Bachelor's degree in Engineering/Technology/Architecture/Science/Commerce/Arts"],
        categoryRelaxation: {},
        officialLink: "https://gate.iitk.ac.in/"
    },
    cat: {
        name: "CAT",
        fullName: "Common Admission Test",
        authority: "IIMs",
        ageLimit: {
            cutoffDate: "2026-11-01" // No age limit
        },
        qualifications: ["Bachelor's Degree with at least 50% marks (45% for SC/ST/PwD)"],
        categoryRelaxation: {},
        officialLink: "https://iimcat.ac.in/"
    },
    nda: {
        name: "NDA",
        fullName: "National Defence Academy Examination",
        authority: "UPSC",
        ageLimit: {
            min: 16.5,
            max: 19.5,
            cutoffDate: "2026-01-01"
        },
        qualifications: ["12th Class pass for Army", "12th Class pass with Physics & Maths for Air Force/Navy"],
        categoryRelaxation: {}, // Usually no age relaxation for NDA
        officialLink: "https://upsc.gov.in/"
    },
    ssc_gd: {
        name: "SSC GD",
        fullName: "SSC GD Constable",
        authority: "Staff Selection Commission",
        ageLimit: {
            min: 18,
            max: 23,
            cutoffDate: "2026-01-01"
        },
        qualifications: ["10th Class pass from a recognized Board/University"],
        categoryRelaxation: {
            OBC: { age: 3 },
            SC: { age: 5 },
            ST: { age: 5 }
        },
        officialLink: "https://ssc.nic.in/"
    },
    cuet: {
        name: "CUET",
        fullName: "Common University Entrance Test",
        authority: "NTA",
        ageLimit: {
            cutoffDate: "2026-12-31" // No age limit usually
        },
        qualifications: ["12th Class pass or appearing"],
        categoryRelaxation: {},
        officialLink: "https://cuet.samarth.ac.in/"
    }
};
