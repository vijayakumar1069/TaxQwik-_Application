// console.log('import.meta.env.VITE_DOMAIN', import.meta.env.VITE_DOMAIN)
export const OUR_BRAND = {
    name: 'TaxQwik',
    url: 'http://localhost:5173/',
    slogan: 'Rapid Tax Service',
    subSlogan: 'Get Your Taxes Filed With Speed & Ease',
}
export const CORE_BRAND_BEHIND = {
    name: 'Fareed Sheik LLP',
    url: 'https://fareedsheikllp.com',
    slogan: 'Chartered Professional Accountants',
    subSlogan: 'Audit | Tax | Accounting',
}
export const TECH_BRAND_BEHIND = {
    name: 'Gliggo Inc.',
    url: 'https://gliggo.com',
    slogan: 'Software Development & Consulting',//TODO change slogans
    subSlogan: 'Web | Mobile | Cloud',
}
export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' }
]
export const FOOTER_LINKS = [...NAV_LINKS]

export const SOCIAL_LINKS = [//TODO: Add social media links
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61554560499726' },
    { name: 'Twitter', href: 'https://twitter.com/FareedSheikLLP' },
    { name: 'Instagram', href: 'https://www.instagram.com/fareedsheikllp_/' }
]

export const INSTRUCTIONS = [
    {
        instructionStep: 1,
        instructionTitle: "Determine Number of Returns",
        imgPath: "blah.svg",
    },
    {
        instructionStep: 2,
        instructionTitle: "Select Forms & Review",
        imgPath: "blah.svg",
    },
    {
        instructionStep: 3,
        instructionTitle: "Submit Request",
        imgPath: "blah.svg",
    },//TODO: Add more instructions as we modify the process
]
export const COPYRIGHT = `© ${new Date().getFullYear()} ${OUR_BRAND.name}. All rights reserved.`