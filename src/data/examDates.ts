export const examData = {
    neet: {
        id: 'neet',
        name: 'NEET (UG)',
        fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
        authority: 'National Testing Agency (NTA)',
        dates: {
            applicationStart: '2026-02-01',
            applicationEnd: '2026-03-15',
            examDate: '2026-05-05',
            resultDate: '2026-06-15',
            counselingStart: '2026-07-01'
        },
        importantLinks: {
            official: 'https://neet.nta.nic.in',
            application: 'https://neet.nta.nic.in/registration',
            syllabus: 'https://neet.nta.nic.in/syllabus',
            admitCard: 'https://neet.nta.nic.in/admission-card'
        }
    },
    jee: {
        id: 'jee',
        name: 'JEE Main',
        fullName: 'Joint Entrance Examination Main',
        authority: 'National Testing Agency (NTA)',
        dates: {
            applicationStart: '2026-01-15',
            applicationEnd: '2026-02-28',
            examDate: '2026-04-10',
            resultDate: '2026-05-05',
            counselingStart: '2026-06-15'
        },
        importantLinks: {
            official: 'https://jeemain.nta.nic.in',
            application: 'https://jeemain.nta.nic.in/registration',
            syllabus: 'https://jeemain.nta.nic.in/syllabus',
            admitCard: 'https://jeemain.nta.nic.in/admission-card'
        }
    },
    upsc: {
        id: 'upsc',
        name: 'UPSC CSE',
        fullName: 'Civil Services Examination',
        authority: 'Union Public Service Commission',
        dates: {
            applicationStart: '2026-02-01',
            applicationEnd: '2026-03-01',
            prelimsDate: '2026-05-26',
            mainsDate: '2026-09-15',
            resultDate: '2026-04-15',
            interviewStart: '2027-01-15'
        },
        importantLinks: {
            official: 'https://upsc.gov.in',
            application: 'https://upsconline.nic.in',
            syllabus: 'https://upsc.gov.in/syllabus',
            results: 'https://upsc.gov.in/results'
        }
    },
    ssc: {
        id: 'ssc',
        name: 'SSC CGL',
        fullName: 'Staff Selection Commission - Combined Graduate Level',
        authority: 'Staff Selection Commission',
        dates: {
            applicationStart: '2026-03-01',
            applicationEnd: '2026-04-15',
            tier1Date: '2026-06-15',
            tier2Date: '2026-09-01',
            resultDate: '2026-11-01'
        },
        importantLinks: {
            official: 'https://ssc.nic.in',
            application: 'https://ssc.nic.in/portal/login',
            syllabus: 'https://ssc.nic.in/syllabus',
            results: 'https://ssc.nic.in/results'
        }
    },
    gate: {
        id: 'gate',
        name: 'GATE',
        fullName: 'Graduate Aptitude Test in Engineering',
        authority: 'IIT (Varies by year)',
        dates: {
            applicationStart: '2025-08-25',
            applicationEnd: '2025-09-30',
            examDate: '2026-02-01',
            resultDate: '2026-03-15'
        },
        importantLinks: {
            official: 'https://gate.iitkgp.ac.in',
            application: 'https://gate.iitkgp.ac.in/registration',
            syllabus: 'https://gate.iitkgp.ac.in/syllabus',
            results: 'https://gate.iitkgp.ac.in/results'
        }
    },
    cat: {
        id: 'cat',
        name: 'CAT',
        fullName: 'Common Admission Test',
        authority: 'IIM (Varies by year)',
        dates: {
            applicationStart: '2025-08-01',
            applicationEnd: '2025-09-15',
            examDate: '2025-11-24',
            resultDate: '2026-01-05'
        },
        importantLinks: {
            official: 'https://iimcat.ac.in',
            application: 'https://iimcat.ac.in/registration',
            syllabus: 'https://iimcat.ac.in/syllabus',
            results: 'https://iimcat.ac.in/results'
        }
    }
};

export type ExamId = keyof typeof examData;
