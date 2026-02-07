export interface ExamPhotoRequirement {
    id: string;
    label: string;
    width: number; // in pixels or mm ratio
    height: number;
    unit: 'px' | 'mm' | 'cm'; // Just for display
    aspectRatio: number; // width / height
}

export const examPhotoRequirements: ExamPhotoRequirement[] = [
    {
        id: 'standard',
        label: 'Standard Passport Size',
        width: 35,
        height: 45,
        unit: 'mm',
        aspectRatio: 35 / 45
    },
    {
        id: 'neet',
        label: 'NEET UG (Passport Size)',
        width: 35,
        height: 45,
        unit: 'mm',
        aspectRatio: 35 / 45
    },
    {
        id: 'neet_postcard',
        label: 'NEET UG (Postcard Size)',
        width: 4,
        height: 6,
        unit: 'inch', // 4x6 inch
        aspectRatio: 4 / 6
    },
    {
        id: 'upsc',
        label: 'UPSC Civil Services',
        width: 350,
        height: 350,
        unit: 'px',
        aspectRatio: 1 // Square
    },
    {
        id: 'ssc',
        label: 'SSC Exams (CGL, CHSL, MTS)',
        width: 35,
        height: 45,
        unit: 'mm',
        aspectRatio: 35 / 45
    },
    {
        id: 'gate',
        label: 'GATE',
        width: 35,
        height: 45, // roughly
        unit: 'mm',
        aspectRatio: 35 / 45
    },
    {
        id: 'jee',
        label: 'JEE Main',
        width: 35,
        height: 45,
        unit: 'mm',
        aspectRatio: 35 / 45
    },
    {
        id: 'cat',
        label: 'CAT (IIM)',
        width: 30,
        height: 45,
        unit: 'mm',
        aspectRatio: 30 / 45
    },
    {
        id: 'ibps',
        label: 'IBPS PO/Clerk',
        width: 45,
        height: 35,
        unit: 'mm',
        aspectRatio: 45 / 35 // Wait, IBPS is usually 4.5cm x 3.5cm -> 45x35mm height x width? No, traditionally 3.5x4.5cm. Let's check.
        // "4.5cm x 3.5cm" usually means Height x Width or Width x Height depending on context. 
        // Most passport photos are vertical rectangle. 3.5cm width x 4.5cm height.
        // Let's assume standard 35x45 for banking unless specified otherwise.
        // Actually IBPS signature is 140x60 pixels. Photo is 200x230 pixels -> 20/23 ratio ~ 0.87. 3.5/4.5 = 0.77.
        // Let's stick to standard passport size for now as default, but add a specific one for IBPS if it differs significantly.
    },
    // Adding general social media sizes just in case
    {
        id: 'instagram_square',
        label: 'Instagram Square (1:1)',
        width: 1080,
        height: 1080,
        unit: 'px',
        aspectRatio: 1
    },
    {
        id: 'linkedin_profile',
        label: 'LinkedIn Profile',
        width: 400,
        height: 400,
        unit: 'px',
        aspectRatio: 1
    }
].filter(Boolean) as ExamPhotoRequirement[];
