import accountProfileSvg from './images/account-profile.svg';
import primeraDenta from './images/primera-denta.png';
import logoSvg from './images/primera-denta-logo.svg';

// ============================================
// BRANDING CONSTANTS
// ============================================
export const BRANDING = {
    logoUrl: logoSvg,
    logoAlt: 'Primera Denta Clinic Logo',
    companyName: 'PRIMERA DENTA',
    companyNameParts: {
        first: 'PRIMERA',
        second: 'DENTA',
    },
    tagline:
        'Empowering communities with world-class dental solutions and compassionate care since 2008.',
    address: '7 Himalayan Rd, Tandang Sora, Quezon City, Metro Manila',
    mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.286391483981!2d121.0425!3d14.667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7070198e3b3%3A0x6734139e80e556e8!2sTandang%20Sora%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1709212000000!5m2!1sen!2sph',
};

// ============================================
// DEFAULT PROFILE PICTURE
// ============================================
export const DEFAULT_PROFILE_PICTURE = accountProfileSvg;

// ============================================
// DEFAUL ABOUT IMAGE
// ============================================
export const DEFAULT_ABOUT_PICTURE = primeraDenta;

// ============================================
// NAVBAR CONSTANTS
// ============================================
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    // { name: 'Before & After', href: '#before-after' },
    // { name: 'Our Dentists', href: '#doctors' },
    // { name: 'Reviews', href: '#testimonials' },
];

// ============================================
// FOOTER CONSTANTS
// ============================================
export const FOOTER_QUICK_LINKS = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
];

export const FOOTER_SPECIALTIES = [
    { label: 'Advanced Orthodontics' },
    { label: 'Cosmetic Restoration' },
    { label: 'Painless Oral Surgery' },
    { label: 'Pediatric Dentistry' },
];

export const FOOTER_POLICY_LINKS = [
    { href: '#privacy', label: 'Privacy Policy' },
    { href: '#terms', label: 'Terms of Service' },
];

// ============================================
// SOCIAL MEDIA CONSTANTS
// ============================================
export const SOCIAL_MEDIA = [
    { name: 'facebook', url: '#', icon: 'facebook' },
    { name: 'instagram', url: '#', icon: 'instagram' },
    { name: 'twitter', url: '#', icon: 'twitter' },
];

// ============================================
// SERVICES CONSTANTS
// ============================================
export const SERVICES = [
    {
        title: 'General Dentistry',
        desc: 'Comprehensive checkups and cleaning for the whole family.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Cosmetic Dentistry',
        desc: 'Transform your smile with veneers, whitening, and bonding.',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Orthodontics',
        desc: 'Perfect alignment using modern braces and clear aligners.',
        image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Oral Surgery',
        desc: 'Expert surgical procedures for extractions and implants.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Prosthodontics',
        desc: 'Restoring missing teeth with bridges, crowns, and dentures.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Pediatric Dentistry',
        desc: 'Specialized, gentle dental care for our youngest patients.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Endodontics',
        desc: 'Advanced root canal therapy to save your natural teeth.',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'Periodontics',
        desc: 'Treating gum disease and maintaining healthy supporting structures.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500',
    },
    {
        title: 'TMJ Management',
        desc: 'Therapy for jaw pain and joint-related disorders.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500',
    },
];

// ============================================
// SERVICES V2 CONSTANTS (Grid + List Layout)
// ============================================
export const SERVICES_V2 = [
    {
        title: 'Complex diagnostics',
        desc: 'Advanced imaging and diagnostic procedures for precise treatment planning.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Professional hygiene',
        desc: 'Deep cleaning and preventative care to maintain long-term oral health.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Veneers',
        desc: 'Ultra-thin porcelain shells for a flawless, natural-looking smile.',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Dental implants',
        desc: 'Permanent tooth replacement solutions that feel and look like natural teeth.',
        image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'ALL-ON-X',
        desc: 'Full-arch restoration for immediate, transformative results.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Sedation and anaesthesia',
        desc: 'Comfortable treatments with advanced sedation options.',
        image: '',
    },
    {
        title: 'Therapy',
        desc: 'General restorative treatments to bring back your smile.',
        image: '',
    },
    {
        title: 'Endodontics',
        desc: 'Specialized root canal treatments to save natural teeth.',
        image: '',
    },
    {
        title: 'Surgery',
        desc: 'Expert surgical care for complex oral conditions.',
        image: '',
    },
];

// ============================================
// PORTFOLIO / SMILE GALLERY CONSTANTS
// ============================================
export const SMILE_GALLERY = [
    {
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
        tags: ['DENTAL IMPLANTS', 'VENEERS'],
        classes:
            'md:col-start-1 md:row-start-1 md:row-span-2 col-start-1 row-start-1 row-span-2 aspect-[1/2] md:aspect-auto',
    },
    {
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
        tags: ['VENEERS'],
        classes: 'md:col-start-2 md:row-start-1 col-start-2 row-start-1 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800',
        tags: ['VENEERS'],
        classes: 'md:col-start-3 md:row-start-1 col-start-2 row-start-2 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
        tags: ['ALL-ON-X'],
        classes: 'md:col-start-2 md:row-start-2 col-start-1 row-start-3 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
        tags: ['ALL-ON-X'],
        classes: 'md:col-start-3 md:row-start-2 col-start-2 row-start-3 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
        tags: ['ENDODONTICS', 'VENEERS'],
        classes: 'md:col-start-1 md:row-start-3 col-start-1 row-start-4 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
        tags: ['VENEERS'],
        classes: 'md:col-start-2 md:row-start-3 col-start-2 row-start-4 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=800',
        tags: ['ENDODONTICS', 'DENTAL IMPLANTS'],
        classes: 'md:col-start-1 md:row-start-4 col-start-1 row-start-5 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=800',
        tags: ['PROFESSIONAL WHITENING', 'VENEERS'],
        classes: 'md:col-start-2 md:row-start-4 col-start-1 row-start-6 aspect-square',
    },
    {
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
        tags: ['VENEERS', 'THERAPY'],
        classes:
            'md:col-start-3 md:row-start-3 md:row-span-2 col-start-2 row-start-5 row-span-2 aspect-[1/2] md:aspect-auto',
    },
];
