/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Check,
  X,
  Calendar,
  ShieldCheck,
  Clock,
  MapPin,
  Dumbbell,
  Flame,
  Layers,
  Sparkles,
  Radio,
  Download,
  Info,
  Sliders,
  UserCheck,
  Activity,
  Award,
  Zap,
  Lock,
  ChevronRight,
  Star,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CoachProfile {
  id: string;
  name: string;
  title: string;
  image: string;
  experience: string;
  qualifications: string[];
  specialty: string;
}

export const COACH_ROSTER: CoachProfile[] = [
  {
    id: 'marcus',
    name: 'Marcus Vance',
    title: 'Head of Strength & Biomechanics',
    image: '/assets/images/coach_marcus_strength_1793828046057.jpg',
    experience: '11 Years Floor Coaching',
    qualifications: [
      'CSCS (Certified Strength & Conditioning Specialist)',
      'FMS-2 (Functional Movement Screen)',
      'Ex-NCAA Division 1 Director of S&C',
      'Dual Force-Plate Velocity Specialist',
    ],
    specialty: 'Compound Barbell Overload & Squat/Bench/Deadlift Biomechanics',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    title: 'Director of Olympic Weightlifting',
    image: '/assets/images/coach_elena_olympic_1793828062457.jpg',
    experience: '8 Years Competitive Platform',
    qualifications: [
      'USAW National Coach (Level 2)',
      'IWF Weightlifting Federation Certified',
      'Former National Platform Competitor',
      'High-Speed Bar-Path Kinematics',
    ],
    specialty: 'Explosive Triple Extension, Snatch Turnover & Split Jerk Mechanics',
  },
  {
    id: 'damon',
    name: 'Damon Cruz',
    title: 'Head of Durability & Conditioning',
    image: '/assets/images/coach_damon_conditioning_1793828077013.jpg',
    experience: '9 Years Pro Athlete Conditioning',
    qualifications: [
      'M.S. Exercise Physiology & Kinesiology',
      'CSCS Certified Strength Specialist',
      'EXOS Performance Performance Coach',
      'Lactate Clearance & Heart Rate Zones',
    ],
    specialty: 'Metabolic Durability, Erg Threshold Capacity & Post-Rehab Loading',
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  discipline: 'powerlifting' | 'weightlifting' | 'conditioning' | 'rehab';
  disciplineLabel: string;
  avatarText: string;
  metricBadge: string;
  quote: string;
  authorTitle: string;
  coach: string;
  tenure: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Alexei Miller',
    discipline: 'powerlifting',
    disciplineLabel: 'Competitive Powerlifting · 83kg Class',
    avatarText: 'AM',
    metricBadge: '+42.5kg Total in 16 Weeks',
    quote:
      'Before NOVA, I was stuck at commercial gyms waiting 25 minutes for a rack with bent barbells. At NOVA, the Eleiko combo racks and Marcus Vance’s force-plate velocity audits broke my 2-year squat plateau in under a month.',
    authorTitle: 'USAPL Regional Qualifier · 730kg Total',
    coach: 'Coached by Marcus Vance',
    tenure: '14 Months at NOVA',
    rating: 5,
  },
  {
    id: '2',
    name: 'Chloe Zhang',
    discipline: 'weightlifting',
    disciplineLabel: 'Olympic Weightlifting · 59kg Senior',
    avatarText: 'CZ',
    metricBadge: '78kg Snatch · 97kg Clean & Jerk',
    quote:
      'Elena completely rebuilt my split jerk footwork. The acoustic oak lifting platforms and calibrated discs mean I can drop max attempts without getting warned or rushed. The coaching standard here is genuinely Olympic caliber.',
    authorTitle: 'State Championship Gold Medalist',
    coach: 'Coached by Elena Rostova',
    tenure: '11 Months at NOVA',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jordan Kincaid',
    discipline: 'conditioning',
    disciplineLabel: 'Hybrid Conditioning & Decathlon',
    avatarText: 'JK',
    metricBadge: 'Sub-6:00 2k Row + 220kg Deadlift',
    quote:
      'Damon Cruz’s conditioning protocols and lactate clearance tracking restored my engine after collegiate ankle surgery. The 40-meter turf and contrast cold plunge suite keep my recovery faster than when I was 20.',
    authorTitle: 'Ex-Collegiate Athlete & Hyrox Competitor',
    coach: 'Coached by Damon Cruz',
    tenure: '18 Months at NOVA',
    rating: 5,
  },
  {
    id: '4',
    name: 'Maya Lindqvist',
    discipline: 'rehab',
    disciplineLabel: 'Masters Strength & Spine Longevity',
    avatarText: 'ML',
    metricBadge: 'Eliminated 6-Yr Chronic Lumbar Pain',
    quote:
      'I walked in terrified of heavy lifting due to years of lower back stiffness from desk work. Marcus diagnosed my hip mobility deficits on day 1. Today I pull double bodyweight without a twinge. It changed my life outside the gym.',
    authorTitle: 'Healthcare Executive & Lifter',
    coach: 'Coached by Marcus Vance',
    tenure: '8 Months at NOVA',
    rating: 5,
  },
  {
    id: '5',
    name: 'Tariq Al-Mansoor',
    discipline: 'weightlifting',
    disciplineLabel: 'Masters Olympic Weightlifting · 89kg',
    avatarText: 'TA',
    metricBadge: 'National Masters Qualifying Total',
    quote:
      'The culture is relentless focus with zero ego. Nobody is filming TikToks on the platforms; everybody is loading iron and respecting the bar. Elena’s eye for bar path kinematics is sharper than any coach I’ve had in 15 years.',
    authorTitle: 'Masters Weightlifting Competitor',
    coach: 'Coached by Elena Rostova',
    tenure: '2 Years at NOVA',
    rating: 5,
  },
  {
    id: '6',
    name: 'Sophia Patel',
    discipline: 'conditioning',
    disciplineLabel: 'Triathlon to Strength Conversion',
    avatarText: 'SP',
    metricBadge: '+18% Peak Power · 2.1x Bodyweight Pull',
    quote:
      'I feared lifting heavy would ruin my endurance times. Damon proved the exact opposite. My running cadence improved, hip fatigue vanished, and having 24/7 keycard access with strictly capped memberships is priceless.',
    authorTitle: '70.3 Ironman Finisher',
    coach: 'Coached by Damon Cruz',
    tenure: '9 Months at NOVA',
    rating: 5,
  },
];

export interface MembershipTierItem {
  id: 'trial' | 'open' | 'performance';
  name: string;
  price: string;
  badge: string;
  period: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export const MEMBERSHIP_TIERS: MembershipTierItem[] = [
  {
    id: 'trial',
    name: '7-Day All-Access Guest Pass',
    price: '$0',
    badge: 'RISK-FREE TRIAL',
    period: '7 Full Days Access',
    tagline: 'Experience every square foot of NOVA with no payment required today.',
    popular: false,
    features: [
      'Unrestricted 05:00–23:00 access to all strength floors & turf',
      'Included 45-Min CSCS Baseline Movement & Force-Plate Audit',
      '2 Coach-Led Athletic Conditioning small-group sessions',
      'Full access to Cold Plunge & Cedar Finnish Sauna recovery suite',
      'Digital barcode pass generated instantly for immediate check-in',
    ],
    ctaText: 'Claim 7-Day Free Pass',
  },
  {
    id: 'open',
    name: 'NOVA Open Floor Membership',
    price: '$165',
    badge: 'MOST POPULAR',
    period: 'Per Month · Month-to-Month',
    tagline: 'Unrestricted daily floor access for lifters who execute their own programming.',
    popular: true,
    features: [
      'Unrestricted 05:00–23:00 access 365 days a year',
      '42 Eleiko competition combo racks & calibrated Olympic discs',
      'Contrast Hydrotherapy: Dual 3°C cold plunges & cedar sauna',
      '40-Meter indoor prowler turf track & specialty barbell arsenal',
      '2 Complimentary guest passes per month',
      'Zero contract lock-in. Cancel or freeze anytime with 1 click',
    ],
    ctaText: 'Select Open Floor',
  },
  {
    id: 'performance',
    name: 'NOVA All-Inclusive Performance',
    price: '$240',
    badge: 'FULL PROTOCOL',
    period: 'Per Month · Month-to-Month',
    tagline: 'Complete integration of individualized coaching, diagnostics, and recovery.',
    popular: false,
    features: [
      'All Open Floor privileges & priority rack reservations',
      'Unlimited Small-Group Olympic Lifting & Conditioning classes',
      'Quarterly DEXA Scan body composition & force asymmetry audits',
      'Custom 12-week programming written and audited in the NOVA app',
      'Dedicated permanent locker & complimentary private towel service',
      'Direct WhatsApp communication channel with your assigned coach',
    ],
    ctaText: 'Select All-Inclusive',
  },
];

interface EquipmentSpecItem {
  id: 'dumbbells' | 'plates' | 'racks';
  title: string;
  category: string;
  image: string;
  badge: string;
  overview: string;
  specs: { label: string; value: string }[];
  maintenance: string;
}

const EQUIPMENT_SPECS: Record<'dumbbells' | 'plates' | 'racks', EquipmentSpecItem> = {
  dumbbells: {
    id: 'dumbbells',
    title: 'Custom Milled Hex Dumbbells',
    category: '01 · FREE WEIGHTS',
    image: '/assets/images/equipment_dumbbells_rack_1793823407924.jpg',
    badge: '2KG – 70KG IN MATCHED PAIRS',
    overview: 'Solid CNC-milled steel heads permanently welded to 34mm hardened chrome shafts with aggressive medium-depth volcano knurling.',
    specs: [
      { label: 'Weight Range', value: '2kg to 70kg (2kg increments)' },
      { label: 'Shaft Diameter', value: '34mm Ergonomic Chrome' },
      { label: 'Tolerance', value: '±0.5% CNC Weight Calibration' },
      { label: 'Rack System', value: 'Dual-Tier Rubber-Cushioned Saddles' },
      { label: 'Coating', value: 'High-Impact Polyurethane Encased' },
    ],
    maintenance: 'Inspected weekly for zero sleeve rotation or weld play.',
  },
  plates: {
    id: 'plates',
    title: 'Calibrated Olympic Discs & Chrome Bars',
    category: '02 · BARBELL ARSENAL',
    image: '/assets/images/equipment_barbell_plates_1793823425559.jpg',
    badge: '±0.1% CERTIFIED TOLERANCE',
    overview: 'Thin-profile cast steel discs calibrated to within 10 grams of declared weight, accompanied by competition powerlifting and Olympic weightlifting barbells.',
    specs: [
      { label: 'Discs Tolerance', value: '±10g Precision Certified' },
      { label: 'Barbell Spec', value: '29mm Power Bar / 28mm Oly Bar' },
      { label: 'Tensile Strength', value: '215,000 PSI Swedish Steel' },
      { label: 'Knurl Pattern', value: '1.5mm Aggressive Center Knurl' },
      { label: 'Max Sleeve Load', value: 'Up to 500kg Competition Loading' },
    ],
    maintenance: 'Sleeve needle bearings calibrated for minimal friction spin.',
  },
  racks: {
    id: 'racks',
    title: 'Integrated Competition Power Combo Racks',
    category: '03 · LIFTING STATIONS',
    image: '/assets/images/gym_workout_equipment_1793822667785.jpg',
    badge: '42 CALIBRATED PLATFORMS',
    overview: 'Full 3x3-inch heavy-gauge steel uprights mounted to shock-dampening acoustic deadlift platforms with solid white-oak centers.',
    specs: [
      { label: 'Platform Size', value: '8ft x 8ft Acoustic Multi-Layer' },
      { label: 'Steel Gauge', value: '11-Gauge Structural 3x3"' },
      { label: 'Safety System', value: 'Reinforced 50mm Ballistic Webbing' },
      { label: 'Hole Spacing', value: 'Westside 1-inch Bench Zone Spacing' },
      { label: 'Attachments', value: 'Band Pegs, Dip Bars, Monolift Hooks' },
    ],
    maintenance: 'Acoustic subfloor reduces shock transmission by 85%.',
  },
};

export default function App() {
  const [videoError, setVideoError] = useState<boolean>(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [selectedEquipment, setSelectedEquipment] = useState<'dumbbells' | 'plates' | 'racks' | null>(null);
  const [selectedTier, setSelectedTier] = useState<'trial' | 'open' | 'performance'>('trial');

  // Typewriter motion for headline (clean, no pipe cursor)
  const LINE_1 = 'Built Through Iron.';
  const LINE_2 = 'Defined By Discipline.';
  const [charCount, setCharCount] = useState<number>(0);

  useEffect(() => {
    const totalChars = LINE_1.length + LINE_2.length;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCharCount(current);
      if (current >= totalChars) {
        clearInterval(interval);
      }
    }, 38);

    return () => clearInterval(interval);
  }, []);

  const line1Typed = LINE_1.slice(0, Math.min(charCount, LINE_1.length));
  const line2Typed = charCount > LINE_1.length ? LINE_2.slice(0, charCount - LINE_1.length) : '';

  // Hero Athlete Motion: High-Performance Canvas Frame Sequence for Desktop & Tablet
  // Native continuous loop video for Mobile (zero stutter, immediate 60fps frame response)
  const TOTAL_ATHLETE_FRAMES = 188;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameImagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const prevXRef = useRef<number | null>(null);

  // Helper: Draw image to canvas using aspect-ratio 'cover' mode anchored toward the athlete
  const drawAthleteFrame = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    if (cWidth === 0 || cHeight === 0) return;

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const cRatio = cWidth / cHeight;

    let dWidth: number;
    let dHeight: number;
    let dx: number;
    let dy: number;

    if (cRatio > imgRatio) {
      dWidth = cWidth;
      dHeight = cWidth / imgRatio;
      dx = 0;
      dy = (cHeight - dHeight) * 0.5;
    } else {
      dHeight = cHeight;
      dWidth = cHeight * imgRatio;
      // Anchor slightly to the right (76%) to frame the athlete perfectly
      dx = (cWidth - dWidth) * 0.76;
      dy = 0;
    }

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.drawImage(img, dx, dy, dWidth, dHeight);
  };

  // 1. Preload 188 discrete WebP frames for instantaneous, stutter-free playback
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let isMounted = true;

    for (let i = 1; i <= TOTAL_ATHLETE_FRAMES; i++) {
      const img = new Image();
      img.src = `/assets/athlete_frames/frame_${String(i).padStart(3, '0')}.webp`;
      if (i === 1) {
        img.onload = () => {
          if (!isMounted) return;
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) drawAthleteFrame(ctx, canvas, img);
          }
        };
      }
      images.push(img);
    }
    frameImagesRef.current = images;

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Synchronize Canvas dimensions to display bounding box with crisp DPR
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        const images = frameImagesRef.current;
        const idx = Math.max(0, Math.min(TOTAL_ATHLETE_FRAMES - 1, Math.round(currentFrameRef.current)));
        if (images[idx]) {
          const ctx = canvas.getContext('2d');
          if (ctx) drawAthleteFrame(ctx, canvas, images[idx]);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // 3. 60fps RequestAnimationFrame Loop: Ultra-smooth interpolation with zero hand stutter
  useEffect(() => {
    let rafId: number;
    const tick = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (!isMobile) {
        const diff = targetFrameRef.current - currentFrameRef.current;
        if (Math.abs(diff) > 0.05) {
          currentFrameRef.current += diff * 0.26;
          const displayIdx = Math.max(0, Math.min(TOTAL_ATHLETE_FRAMES - 1, Math.round(currentFrameRef.current)));
          if (displayIdx !== lastDrawnFrameRef.current) {
            const canvas = canvasRef.current;
            if (canvas) {
              const ctx = canvas.getContext('2d');
              const img = frameImagesRef.current[displayIdx];
              if (ctx && img && img.complete) {
                drawAthleteFrame(ctx, canvas, img);
                lastDrawnFrameRef.current = displayIdx;
              }
            }
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // 4. Scroll-Driven motion for Hero Athlete on Desktop and Tablet (ScrollTrigger)
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const heroEl = document.getElementById('top');
    if (!heroEl || isMobile) return;

    const st = ScrollTrigger.create({
      trigger: heroEl,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.35,
      onUpdate: (self) => {
        targetFrameRef.current = self.progress * (TOTAL_ATHLETE_FRAMES - 1);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // 5. Interactive Mouse-move Scrubbing for Hero Athlete on Desktop
  useEffect(() => {
    const SENSITIVITY = 0.38;

    const handleMouseMove = (e: MouseEvent) => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (isMobile) return;

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      if (Math.abs(delta) < 0.3) return;

      const frameOffset = (delta / window.innerWidth) * SENSITIVITY * (TOTAL_ATHLETE_FRAMES - 1);
      targetFrameRef.current = Math.max(0, Math.min(TOTAL_ATHLETE_FRAMES - 1, targetFrameRef.current + frameOffset));
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Mobile Video autoplay fallback
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Free Trial Form State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [trainingGoal, setTrainingGoal] = useState<string>('Strength & Hypertrophy');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (05:00 – 11:00)');
  const [formError, setFormError] = useState<string>('');
  const [submittedPassCode, setSubmittedPassCode] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTrialModal = (tier?: 'trial' | 'open' | 'performance' | React.MouseEvent) => {
    if (typeof tier === 'string') {
      setSelectedTier(tier);
    } else {
      setSelectedTier('trial');
    }
    setFormError('');
    setIsTrialModalOpen(true);
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 2) {
      setFormError('Please enter your full name to register your membership pass.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address for your digital pass.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setFormError('Please enter a valid phone number for check-in confirmation.');
      return;
    }

    setFormError('');
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const prefix = selectedTier === 'trial' ? 'NOVA-7D' : selectedTier === 'open' ? 'NOVA-OPEN' : 'NOVA-VIP';
    setSubmittedPassCode(`${prefix}-${randomDigits}`);
  };

  const resetTrialForm = () => {
    setSubmittedPassCode(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setIsTrialModalOpen(false);
  };

  // Section 2 Refs: GSAP ScrollTrigger Pinned Elements
  const pinnedSectionRef = useRef<HTMLElement>(null);
  const stageBgRef = useRef<HTMLDivElement>(null);
  const glowLayerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const mouseIconRef = useRef<HTMLDivElement>(null);

  const [archScrollProgress, setArchScrollProgress] = useState<number>(0);

  // Section 2 GSAP ScrollTrigger: Reduced pin time, Black BG + Orange Words -> White BG + Black Words
  useEffect(() => {
    const section = pinnedSectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fast, responsive pin distance: +=110% on desktop, +=75% on mobile
    const isMobile = window.innerWidth < 768;
    const pinEndDistance = isMobile ? '+=75%' : '+=110%';

    if (prefersReducedMotion) {
      if (stageBgRef.current) stageBgRef.current.style.backgroundColor = '#ffffff';
      if (glowLayerRef.current) glowLayerRef.current.style.opacity = '0';
      if (headlineRef.current) {
        headlineRef.current.style.color = '#0a0a0a';
        headlineRef.current.style.textShadow = 'none';
      }
      if (subTextRef.current) subTextRef.current.style.color = '#334155';
      if (badgeRef.current) {
        badgeRef.current.style.color = '#0f172a';
        badgeRef.current.style.borderColor = 'rgba(0,0,0,0.12)';
        badgeRef.current.style.backgroundColor = 'rgba(0,0,0,0.03)';
      }
      if (trackRef.current) trackRef.current.style.backgroundColor = '#e2e8f0';
      if (progressBarRef.current) {
        progressBarRef.current.style.width = '100%';
        progressBarRef.current.style.backgroundColor = '#0a0a0a';
      }
      if (labelRef.current) {
        labelRef.current.textContent = 'ZERO COMPROMISES · READY FOR THE FLOOR';
        labelRef.current.style.color = '#475569';
      }
      if (mouseIconRef.current) mouseIconRef.current.style.opacity = '0';
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: pinEndDistance,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress;
            setArchScrollProgress(p);

            // Contextual domain label text update
            if (labelRef.current) {
              if (p <= 0.001) {
                labelRef.current.textContent = 'CALIBRATED IRON · ACOUSTIC ISOLATION · PURE FOCUS';
              } else if (p >= 0.999) {
                labelRef.current.textContent = 'ZERO COMPROMISES · READY FOR THE FLOOR';
              } else {
                labelRef.current.textContent = `THE NOVA STANDARD · ${Math.round(p * 100)}% CALIBRATED`;
              }
            }

            // Scroll-mouse icon fades out as progress passes 0.9
            if (mouseIconRef.current) {
              if (p >= 0.9) {
                const fade = Math.max(0, 1 - (p - 0.9) / 0.1);
                mouseIconRef.current.style.opacity = String(fade);
              } else {
                mouseIconRef.current.style.opacity = '1';
              }
            }
          },
        },
      });

      // 1. Background color: #0a0a0a (black) -> #ffffff (white)
      if (stageBgRef.current) {
        tl.to(
          stageBgRef.current,
          {
            backgroundColor: '#ffffff',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 2. Glow layer: fades out as background turns bright white
      if (glowLayerRef.current) {
        tl.to(
          glowLayerRef.current,
          {
            opacity: 0,
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 3. Headline words: ALL words transition from vibrant orange #ff5a1f to solid jet black #0a0a0a!
      if (headlineRef.current) {
        tl.to(
          headlineRef.current,
          {
            color: '#0a0a0a',
            textShadow: 'none',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 4. Subtitle manifesto text: #cbd5e1 (light slate) -> #334155 (dark slate charcoal)
      if (subTextRef.current) {
        tl.to(
          subTextRef.current,
          {
            color: '#334155',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 5. Overline badge: orange/white border -> charcoal border and text
      if (badgeRef.current) {
        tl.to(
          badgeRef.current,
          {
            color: '#0f172a',
            borderColor: 'rgba(0,0,0,0.15)',
            backgroundColor: 'rgba(0,0,0,0.04)',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 6. Progress bar track: #222222 -> #e2e8f0 (light grey)
      if (trackRef.current) {
        tl.to(
          trackRef.current,
          {
            backgroundColor: '#e2e8f0',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 7. Progress bar fill: orange #ff5a1f -> jet black #0a0a0a, fills 0% to 100%
      if (progressBarRef.current) {
        tl.to(
          progressBarRef.current,
          {
            width: '100%',
            backgroundColor: '#0a0a0a',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 8. Label text: slate/orange -> dark slate #475569
      if (labelRef.current) {
        tl.to(
          labelRef.current,
          {
            color: '#475569',
            ease: 'none',
            duration: 1,
          },
          0
        );
      }
    }, section);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  // Section 3 (Facility), Section 4 (Coaches), and Section 5 (Testimonials) Refs
  const equipSectionRef = useRef<HTMLElement>(null);
  const equipTrackRef = useRef<HTMLDivElement>(null);
  const equipStatusRef = useRef<HTMLSpanElement>(null);
  const coachesSectionRef = useRef<HTMLElement>(null);
  const testimonialsSectionRef = useRef<HTMLElement>(null);
  const lastPagesWrapperRef = useRef<HTMLDivElement>(null);
  const cursorBloomRef = useRef<HTMLDivElement>(null);

  const [activeMobileCoach, setActiveMobileCoach] = useState<string>('marcus');
  const [activeModalReview, setActiveModalReview] = useState<TestimonialItem | null>(null);
  const [expandedReviewId, setExpandedReviewId] = useState<string | null>(null);

  const [isHeaderLight, setIsHeaderLight] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  // Smooth Cursor Blurry Bloom Effect for the Last Two Pages (Page 5 Reviews & Page 6 Membership)
  useEffect(() => {
    let targetX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    let targetY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    let currentX = targetX;
    let currentY = targetY;
    let isInside = false;
    let rafId: number;

    const checkIfCursorInLastPages = (clientX: number, clientY: number) => {
      const wrapper = lastPagesWrapperRef.current;
      if (!wrapper) return false;
      const rect = wrapper.getBoundingClientRect();
      return (
        clientY >= rect.top &&
        clientY <= rect.bottom &&
        clientX >= rect.left &&
        clientX <= rect.right
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isInside = checkIfCursorInLastPages(e.clientX, e.clientY);
      if (cursorBloomRef.current) {
        cursorBloomRef.current.style.opacity = isInside ? '1' : '0';
      }
    };

    const handleScroll = () => {
      isInside = checkIfCursorInLastPages(targetX, targetY);
      if (cursorBloomRef.current) {
        cursorBloomRef.current.style.opacity = isInside ? '1' : '0';
      }
    };

    const handleMouseLeave = () => {
      isInside = false;
      if (cursorBloomRef.current) {
        cursorBloomRef.current.style.opacity = '0';
      }
    };

    const animateBloom = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      if (cursorBloomRef.current) {
        cursorBloomRef.current.style.transform = `translate3d(${currentX - 260}px, ${currentY - 260}px, 0)`;
      }
      rafId = requestAnimationFrame(animateBloom);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(animateBloom);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // GSAP ScrollTrigger for Section 3 (Equipment Showcase):
  // PINNED until horizontal scroll-driven motion from right to left is complete!
  // Height strictly 100vh with overflow: hidden, zero elongated blank space below!
  useEffect(() => {
    const section = equipSectionRef.current;
    if (!section) return;

    const isMobile = window.innerWidth < 768;
    const pinEndDistance = isMobile ? '+=110%' : '+=150%';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: pinEndDistance,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (equipStatusRef.current) {
              if (p >= 0.88) {
                equipStatusRef.current.textContent = 'ALL STATIONS CALIBRATED';
              } else {
                equipStatusRef.current.textContent = `${Math.round(p * 100)}% FLOOR INVENTORY`;
              }
            }
          },
        },
      });

      // Smooth horizontal translate: from hiding on the right (650px) to full view (-560px)
      if (equipTrackRef.current) {
        tl.fromTo(
          equipTrackRef.current,
          { x: isMobile ? 420 : 680 },
          { x: isMobile ? -380 : -580, ease: 'none', duration: 1 }
        );
      }
    }, section);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  // Header Theme & Visibility Calculation:
  // - Hero: Dark, Visible
  // - Page 2: Turns light once progress > 0.45, Visible
  // - Page 3: Light, Visible
  // - AFTER PAGE 3: Header stops / hides completely so it doesn't obstruct Page 4 or travel afterwards!
  useEffect(() => {
    const handleScroll = () => {
      let lightMode = false;
      let visible = true;
      const archEl = pinnedSectionRef.current;
      const equipEl = equipSectionRef.current;
      const coachesEl = coachesSectionRef.current;

      if (archEl) {
        const archRect = archEl.getBoundingClientRect();
        if (archRect.top <= 64 && archRect.bottom > 64 && archScrollProgress > 0.45) {
          lightMode = true;
        }
      }
      if (equipEl) {
        const equipRect = equipEl.getBoundingClientRect();
        if (equipRect.top <= 64 && equipRect.bottom > 64) {
          lightMode = true;
        }
        // Remove fixed header after Page 3 (stops cleanly at Page 3)
        if (equipRect.bottom <= 80) {
          visible = false;
        }
      }
      if (coachesEl) {
        const coachesRect = coachesEl.getBoundingClientRect();
        // Once coaches section or anything beyond is reached, header stops and is strictly hidden
        if (coachesRect.top <= 80) {
          visible = false;
        }
      }
      if (testimonialsSectionRef.current) {
        const testRect = testimonialsSectionRef.current.getBoundingClientRect();
        if (testRect.top <= 80) {
          visible = false;
        }
      }

      setIsHeaderLight(lightMode);
      setIsHeaderVisible(visible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [archScrollProgress]);

  return (
    <div className="min-h-screen bg-[#05070A] text-[#F8FAFC] flex flex-col relative overflow-x-hidden selection:bg-[#FF5500] selection:text-white">
      {/* Fixed 50% Opacity Header Bar: active through Page 3, stops and hides after Page 3 */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isHeaderVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          isHeaderLight
            ? 'bg-white/50 border-b border-black/10 shadow-xs'
            : 'bg-black/50 border-b border-white/10'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
          {/* Left: NOVA Brand Lockup with Styled Font & Emblem */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white shrink-0"
          >
            {/* Geometric Ember Emblem */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5500] via-[#FF6E20] to-[#FFA873] flex items-center justify-center shadow-[0_0_18px_rgba(255,85,0,0.5)] transition-transform duration-200 group-hover:scale-105">
              <div className="w-3.5 h-3.5 bg-black rotate-45 transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#FF5500] rounded-full" />
              </div>
            </div>
            <span
              className={`font-brand font-bold text-lg sm:text-xl tracking-[0.26em] transition-colors ${
                isHeaderLight ? 'text-neutral-950' : 'text-white'
              }`}
            >
              NOVA
            </span>
          </a>

          {/* Center: Floating Island Pill Navigation Bar - Scrolls directly to on-page sections */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden md:flex items-center gap-1 sm:gap-1.5 px-3.5 py-1.5 rounded-full border shadow-md backdrop-blur-md transition-colors ${
              isHeaderLight
                ? 'bg-neutral-900/10 border-black/10 text-neutral-800'
                : 'bg-[#11171E]/85 border-white/10 text-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => scrollToSection('facility-section')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                isHeaderLight
                  ? 'hover:text-black hover:bg-black/10'
                  : 'hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              Facility
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('coaches-section')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                isHeaderLight
                  ? 'hover:text-black hover:bg-black/10'
                  : 'hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              Coaches
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('membership-section')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                isHeaderLight
                  ? 'hover:text-black hover:bg-black/10'
                  : 'hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              Membership
            </button>
          </nav>

          {/* Right: Log in link + High-Visibility Pill CTA */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('signup-section')}
              className={`text-xs sm:text-sm font-medium transition-colors cursor-pointer hidden sm:block ${
                isHeaderLight ? 'text-neutral-700 hover:text-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedTier('trial');
                scrollToSection('signup-section');
              }}
              className="px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full transition-all duration-150 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_20px_rgba(255,85,0,0.35)]"
            >
              Claim Free Trial
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION (LADY COMPLETELY UNBOUND FROM ANY FRAME - MERGED DIRECTLY INTO PAGE) */}
      <section id="top" className="min-h-screen flex flex-col justify-between pt-24 pb-12 relative overflow-hidden select-none bg-[#05070A]">
        {/* Dark Atmosphere Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#05070A] via-[#0B0F15] via-50% to-[#05070A] z-0"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-[20%] w-[650px] h-[650px] bg-[#FF5500]/[0.05] rounded-full blur-[150px] pointer-events-none z-0"
        />

        {/* UNBOUND ATHLETE: Canvas frame-sequence on Desktop & Tablet (stutter-free 60fps scroll motion); Native video on Mobile */}
        <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[62%] h-full z-10 pointer-events-none overflow-hidden flex items-end justify-end">
          {!videoError ? (
            <div
              className="w-full h-full relative"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse at 70% 52%, rgba(0,0,0,1) 32%, rgba(0,0,0,0.85) 52%, rgba(0,0,0,0) 76%)',
                maskImage:
                  'radial-gradient(ellipse at 70% 52%, rgba(0,0,0,1) 32%, rgba(0,0,0,0.85) 52%, rgba(0,0,0,0) 76%)',
              }}
            >
              {/* Desktop & Tablet: Hardware-accelerated Canvas Frame Sequence (Zero stutter, zero dropped frames, immediate response) */}
              <div className="hidden md:block w-full h-full">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full select-none pointer-events-none block"
                />
              </div>

              {/* Mobile: Native Hardware-accelerated continuous ambient video (smooth 60fps playback) */}
              <div className="md:hidden w-full h-full">
                <video
                  ref={videoRef}
                  src="/assets/aistudio/Athlete_breathing_in_gym_44e27fe0_1080p_13e9496e.mp4"
                  poster="/assets/aistudio/upscaled-1793818572172_804c307a.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover object-[78%_center] select-none pointer-events-none"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#05070A] via-[#05070A]/70 to-transparent pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070A] via-[#05070A]/70 to-transparent pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#05070A] via-[#05070A]/60 to-transparent pointer-events-none"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-transparent" />
          )}
        </div>

        {/* Hero Left Content: Floating seamlessly in front */}
        <main className="relative z-20 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center my-auto">
          <div className="w-full lg:w-[54%] xl:w-[50%] py-8 lg:py-12 flex flex-col justify-center">
            {/* Primary Hero Headline with Typewriter Motion (Clean, no cursor pipe) */}
            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.04] mb-5 sm:mb-6 min-h-[96px] sm:min-h-[120px] lg:min-h-[148px]"
              style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 4.5rem)',
                textWrap: 'balance',
              }}
            >
              <span className="block">{line1Typed}</span>
              <span className="block text-slate-100">{line2Typed}</span>
            </h1>

            {/* Supporting Headline Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-[52ch] mb-8 font-normal">
              Calibrated free-weight floors, competition-spec racks, and biometric performance coaching designed for athletes who train with intent.
            </p>

            {/* High-Visibility Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7">
              {/* Primary Orange Pill CTA */}
              <button
                type="button"
                onClick={() => {
                  setSelectedTier('trial');
                  scrollToSection('signup-section');
                }}
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_28px_rgba(255,85,0,0.38)] hover:shadow-[0_0_38px_rgba(255,85,0,0.5)]"
              >
                <span>Start Your 7–Day Free Trial</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </button>

              {/* Secondary Dark-Glass Pill CTA with Orange Hover Accent */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('architecture-of-strength');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm lg:text-base font-medium text-slate-200 hover:text-white border border-white/15 hover:border-[#FF5500]/50 bg-[#121820]/60 hover:bg-[#1A222C]/80 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer backdrop-blur-xs"
              >
                Explore Training Floor
              </button>
            </div>

            {/* Unboxed Metadata Note (Clean, zero meta-instructions) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
              <span>7 Full Days Unrestricted Access</span>
              <span aria-hidden="true">·</span>
              <span>Includes 1–on–1 Baseline Assessment</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#FF7A29] font-medium">Zero Commitment Required</span>
            </div>
          </div>
        </main>
      </section>

      {/* 2. PAGE 2: THE ARCHITECTURE OF STRENGTH (PINNED STAGE: BLACK BG + ORANGE WORDS -> WHITE BG + BLACK WORDS) */}
      <section
        id="architecture-of-strength"
        ref={pinnedSectionRef}
        className="w-full relative select-none"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        {/* Stage background: animates from #0a0a0a (black) to #ffffff (white) */}
        <div
          ref={stageBgRef}
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: '#0a0a0a' }}
        />

        {/* Ambient radial glow layer that softens as stage turns pure white */}
        <div
          ref={glowLayerRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 90, 31, 0.25) 0%, rgba(255, 90, 31, 0.08) 45%, transparent 70%)',
          }}
        />

        {/* Pinned Stage Content: Centered using flex positioning */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 text-center">
          {/* Overline Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 mb-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#ff5a1f] font-semibold transition-colors"
          >
            <Flame className="w-3.5 h-3.5 text-[#ff5a1f]" />
            <span>02 · The Architecture of Strength</span>
          </div>

          {/* Headline "Experience the World of NOVA":
              STARTS in vibrant Electric Orange (#ff5a1f) on Black BG
              TRANSITIONS into solid Jet Black (#0a0a0a) on White BG */}
          <h2
            ref={headlineRef}
            className="font-display font-extrabold tracking-tight leading-[1.06] mb-6 transition-colors"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5.6rem)',
              color: '#ff5a1f',
              textWrap: 'balance',
              textShadow: '0 0 24px rgba(255, 90, 31, 0.45)',
            }}
          >
            Experience the World of NOVA
          </h2>

          {/* Supporting Manifesto: #cbd5e1 -> #334155 */}
          <p
            ref={subTextRef}
            className="text-base sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal transition-colors"
            style={{ color: '#cbd5e1' }}
          >
            Where competition-spec iron, acoustic isolation, and continuous progressive overload converge. No compromises. Zero distractions.
          </p>

          {/* Progress Bar & Contextual Domain Label */}
          <div className="flex flex-col items-center gap-3">
            {/* Track: starts #222222 with subtle border, transitions to #e2e8f0 (light grey) */}
            <div
              ref={trackRef}
              className="w-64 sm:w-80 h-1.5 rounded-full overflow-hidden bg-[#222222] border border-white/10 transition-colors"
            >
              {/* Fill: starts #ff5a1f, fills from 0% to 100% and transitions to #0a0a0a */}
              <div
                ref={progressBarRef}
                className="h-full bg-[#ff5a1f]"
                style={{ width: '0%' }}
              />
            </div>

            {/* Contextual Domain Label */}
            <span
              ref={labelRef}
              className="text-[11px] sm:text-xs font-mono tracking-widest text-[#ff7a29] uppercase transition-colors font-medium"
            >
              CALIBRATED IRON · ACOUSTIC ISOLATION · PURE FOCUS
            </span>
          </div>
        </div>

        {/* Small scroll-mouse icon at the bottom, orange outline, fades out as progress passes 0.9 */}
        <div
          ref={mouseIconRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none transition-opacity duration-150"
          style={{ opacity: 1 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#ff5a1f] flex items-start justify-center p-1.5 mx-auto">
            <div className="w-1.5 h-2 rounded-full bg-[#ff5a1f] animate-bounce" />
          </div>
        </div>
      </section>

      {/* 3. PAGE 3: THE FACILITY & CALIBRATED INVENTORY (PINNED WITH GSAP SCROLLTRIGGER UNTIL HORIZONTAL GLIDE COMPLETES) */}
      <section
        id="facility-section"
        ref={equipSectionRef}
        className="w-full relative select-none bg-[#FFFFFF] text-neutral-900 border-t border-slate-200"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <div id="equipment-showcase" className="sr-only" />
        <div className="w-full h-full flex items-center px-4 sm:px-8 lg:px-16 py-2 sm:py-6">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center">
            {/* Left Side: Fixed Concise Wordings */}
            <div className="lg:col-span-4 flex flex-col justify-center z-20 bg-white/95 lg:bg-transparent py-1 sm:py-3 rounded-2xl">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 text-[#FF5500] text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-1.5 sm:mb-3 w-fit">
                <Dumbbell className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span>03 · The Facility &amp; Inventory</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.08] mb-1.5 sm:mb-3">
                Precision Iron. <br className="hidden sm:inline" />
                <span className="text-[#FF5500]">Zero Wait.</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5 sm:mb-5 font-normal line-clamp-2 sm:line-clamp-none">
                18,500 square feet engineered exclusively for serious lifters. 42 Eleiko competition combo racks, tiered solid-steel dumbbells up to 70kg, and calibrated Olympic discs with 0.1% tolerance.
              </p>

              {/* Specification Checklist: Hidden on small mobile to ensure cards fit comfortably in 100vh */}
              <div className="hidden sm:block space-y-2 mb-6">
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-[#FF5500] text-white flex items-center justify-center shrink-0 text-[9px] font-bold">
                    ✓
                  </div>
                  <span>42 Competition Platforms &amp; Combo Racks</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-[#FF5500] text-white flex items-center justify-center shrink-0 text-[9px] font-bold">
                    ✓
                  </div>
                  <span>Milled Hex Dumbbells from 2kg to 70kg in pairs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-[#FF5500] text-white flex items-center justify-center shrink-0 text-[9px] font-bold">
                    ✓
                  </div>
                  <span>Acoustic subfloor isolation for deadlifts &amp; drops</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedTier('trial');
                  scrollToSection('signup-section');
                }}
                className="w-fit px-5 sm:px-7 py-2 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full transition-all duration-150 active:scale-[0.98] cursor-pointer shadow-[0_4px_20px_rgba(255,85,0,0.3)] flex items-center gap-2"
              >
                <span>Claim 7–Day Free Pass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Side: Equipments coming FROM RIGHT TO LEFT driven by GSAP ScrollTrigger timeline */}
            <div className="lg:col-span-8 relative overflow-hidden py-1 sm:py-3">
              <div
                ref={equipTrackRef}
                className="flex items-center gap-4 sm:gap-6 lg:gap-8 will-change-transform"
              >
                {/* Equipment Card 1: Dumbbells */}
                <div
                  onClick={() => setSelectedEquipment('dumbbells')}
                  className="shrink-0 w-[235px] sm:w-[300px] lg:w-[350px] rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-slate-200 group cursor-pointer hover:border-[#FF5500] transition-colors"
                >
                  <div className="relative h-[145px] sm:h-[200px] lg:h-[240px] overflow-hidden">
                    <img
                      src="/assets/images/equipment_dumbbells_rack_1793823407924.jpg"
                      alt="NOVA custom tiered hex dumbbells rack"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-black/85 backdrop-blur-xs text-[10px] sm:text-[11px] font-mono text-[#FF7A29] font-bold">
                      2KG – 70KG HEAVY PAIRS
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/95 text-neutral-900 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <Info className="w-3 h-3 text-[#FF5500]" />
                      <span>Technical Audit</span>
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 lg:p-5 bg-white border-t border-slate-100">
                    <span className="block text-[10px] sm:text-xs font-mono text-[#FF5500] font-semibold mb-0.5">
                      01 · TIERED DUMBBELLS
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900">
                      Solid Milled Steel Heads
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      Precision knurled urethane handles with zero wobble across dual-tier ergonomic heavy-duty saddle racks.
                    </p>
                  </div>
                </div>

                {/* Equipment Card 2: Calibrated Barbell Plates */}
                <div
                  onClick={() => setSelectedEquipment('plates')}
                  className="shrink-0 w-[235px] sm:w-[300px] lg:w-[350px] rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-slate-200 group cursor-pointer hover:border-[#FF5500] transition-colors"
                >
                  <div className="relative h-[145px] sm:h-[200px] lg:h-[240px] overflow-hidden">
                    <img
                      src="/assets/images/equipment_barbell_plates_1793823425559.jpg"
                      alt="Calibrated steel Olympic weight plates and barbell"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-black/85 backdrop-blur-xs text-[10px] sm:text-[11px] font-mono text-[#FF7A29] font-bold">
                      ±0.1% CERTIFIED TOLERANCE
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/95 text-neutral-900 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <Info className="w-3 h-3 text-[#FF5500]" />
                      <span>Technical Audit</span>
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 lg:p-5 bg-white border-t border-slate-100">
                    <span className="block text-[10px] sm:text-xs font-mono text-[#FF5500] font-semibold mb-0.5">
                      02 · STEEL DISCS &amp; BARS
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900">
                      Competition Spec Discs
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      Slim-profile cast steel plates fitting up to 500kg on Olympic competition sleeves with aggressive knurl.
                    </p>
                  </div>
                </div>

                {/* Equipment Card 3: Competition Floor & Power Racks */}
                <div
                  onClick={() => setSelectedEquipment('racks')}
                  className="shrink-0 w-[235px] sm:w-[300px] lg:w-[350px] rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-slate-200 group cursor-pointer hover:border-[#FF5500] transition-colors"
                >
                  <div className="relative h-[145px] sm:h-[200px] lg:h-[240px] overflow-hidden">
                    <img
                      src="/assets/images/gym_workout_equipment_1793822667785.jpg"
                      alt="NOVA power rack floor and lifting platforms"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-black/85 backdrop-blur-xs text-[10px] sm:text-[11px] font-mono text-[#FF7A29] font-bold">
                      42 ELEIKO PLATFORMS
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/95 text-neutral-900 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <Info className="w-3 h-3 text-[#FF5500]" />
                      <span>Technical Audit</span>
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 lg:p-5 bg-white border-t border-slate-100">
                    <span className="block text-[10px] sm:text-xs font-mono text-[#FF5500] font-semibold mb-0.5">
                      03 · LIFTING STATIONS
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900">
                      Integrated Power Combo Racks
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      Oak lifting inserts, laser-cut hole numbering, magnetic band pegs, and zero-rebound safety straps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Specification Footer Bar */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 px-1 text-[10px] sm:text-[11px] font-mono text-slate-500 border-t border-slate-200 mt-3 sm:mt-4">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#FF5500] font-bold">ELEIKO COMPETITION FLOOR</span>
                  <span className="hidden sm:inline">· CERTIFIED HARDWARE SPECIFICATIONS</span>
                </span>
                <span ref={equipStatusRef} className="font-bold text-neutral-900">
                  0% FLOOR INVENTORY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PAGE 4: PERFORMANCE COACHES ALONE (CLEAN WHITE BACKGROUND, PICTURES & QUALIFICATIONS, COMPACT VIEWPORT FIT) */}
      <section
        id="coaches-section"
        ref={coachesSectionRef}
        className="w-full relative select-none bg-[#FFFFFF] text-neutral-900 py-8 sm:py-10 lg:py-8 min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t border-slate-200"
      >
        <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center">
          {/* Section 4 Header: Clean, minimal, compact */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-4 sm:mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 text-[#FF5500] text-[11px] font-mono font-bold tracking-wider uppercase mb-1.5">
                <Award className="w-3 h-3" />
                <span>04 · Performance Coaching</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                The Coaches.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-md sm:text-right leading-relaxed">
              CSCS and national weightlifting credentialed coaches dedicated to 1-on-1 floor guidance and biomechanical force development.
            </p>
          </div>

          {/* Mobile Fast-Locate Coach Switcher Tabs (Low Latency, Instant Tab Navigation) */}
          <div className="flex md:hidden items-center justify-center gap-1 p-1 bg-slate-100 rounded-full mb-3.5 w-full max-w-xs mx-auto">
            {COACH_ROSTER.map((coach) => (
              <button
                key={coach.id}
                type="button"
                onClick={() => setActiveMobileCoach(coach.id)}
                className={`flex-1 py-1.5 px-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer text-center ${
                  activeMobileCoach === coach.id
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-slate-600 hover:text-neutral-900'
                }`}
              >
                {coach.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Mobile Single-Card View (Optimized for Small Screen, No Long Scrolling) */}
          <div className="md:hidden">
            {COACH_ROSTER.filter((c) => c.id === activeMobileCoach).map((coach) => (
              <div
                key={coach.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col max-w-sm mx-auto"
              >
                <div className="relative h-[180px] overflow-hidden bg-slate-900">
                  <img
                    src={coach.image}
                    alt={`NOVA Performance Coach ${coach.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
                  />
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] font-mono text-[#FF7A29] font-bold tracking-wider uppercase block leading-tight">
                      {coach.experience}
                    </span>
                    <h4 className="font-display text-lg font-bold tracking-tight text-white leading-tight">
                      {coach.name}
                    </h4>
                    <p className="text-[11px] text-slate-200 font-medium leading-tight">
                      {coach.title}
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between bg-white gap-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block mb-1.5">
                      Qualifications &amp; Credentials
                    </span>
                    <ul className="space-y-1 mb-2">
                      {coach.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{q}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5 font-semibold">
                        Primary Discipline
                      </span>
                      <p className="text-xs text-slate-800 font-medium leading-snug line-clamp-2">
                        {coach.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTier('trial');
                        scrollToSection('signup-section');
                      }}
                      className="relative overflow-hidden group/btn w-full py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wide cursor-pointer shadow-xs border border-transparent"
                    >
                      {/* Left to right gradual fill */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#FF5500] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out origin-left pointer-events-none"
                      />
                      <span className="relative z-10 flex items-center justify-center gap-1.5 pointer-events-none">
                        <span>Book Assessment with {coach.name.split(' ')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet & Desktop 3-Card Grid (Side-by-side, compact single-viewport) */}
          <div className="hidden md:grid md:grid-cols-3 gap-3.5 lg:gap-5">
            {COACH_ROSTER.map((coach) => (
              <div
                key={coach.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
              >
                {/* Coach Picture */}
                <div className="relative h-[165px] lg:h-[200px] overflow-hidden bg-slate-900">
                  <img
                    src={coach.image}
                    alt={`NOVA Performance Coach ${coach.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-102 transition-transform duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
                  />
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] font-mono text-[#FF7A29] font-bold tracking-wider uppercase block leading-tight">
                      {coach.experience}
                    </span>
                    <h4 className="font-display text-base lg:text-xl font-bold tracking-tight text-white leading-tight">
                      {coach.name}
                    </h4>
                    <p className="text-[11px] text-slate-200 font-medium leading-tight">
                      {coach.title}
                    </p>
                  </div>
                </div>

                {/* Qualifications & Specialties Under Pic */}
                <div className="p-3.5 lg:p-4 flex-1 flex flex-col justify-between bg-white gap-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block mb-1.5 lg:mb-2">
                      Qualifications &amp; Credentials
                    </span>
                    <ul className="space-y-1 lg:space-y-1.5 mb-2.5">
                      {coach.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-1.5 text-[11px] lg:text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{q}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5 font-semibold">
                        Primary Discipline
                      </span>
                      <p className="text-[11px] lg:text-xs text-slate-800 font-medium leading-snug line-clamp-2">
                        {coach.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTier('trial');
                        scrollToSection('signup-section');
                      }}
                      className="relative overflow-hidden group/btn w-full py-2 lg:py-2.5 rounded-full bg-neutral-950 text-white text-[11px] lg:text-xs font-semibold tracking-wide cursor-pointer shadow-xs border border-transparent"
                    >
                      {/* Gradual color fill from left to right */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#FF5500] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out origin-left pointer-events-none"
                      />
                      <span className="relative z-10 flex items-center justify-center gap-1.5 pointer-events-none">
                        <span>Book Assessment with {coach.name.split(' ')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRAPPER FOR LAST TWO PAGES: Enables Interactive Light Blurry Cursor Bloom */}
      <div ref={lastPagesWrapperRef} className="relative">
        {/* Interactive Cursor Blurry Gloom / Bloom Overlay (Desktop & Tablet Hover) */}
        <div
          ref={cursorBloomRef}
          aria-hidden="true"
          style={{
            opacity: 0,
            background:
              'radial-gradient(circle, rgba(255, 95, 25, 0.24) 0%, rgba(255, 150, 90, 0.11) 35%, rgba(255, 255, 255, 0.04) 60%, transparent 76%)',
            filter: 'blur(42px)',
          }}
          className="hidden md:block fixed top-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none z-30 transition-opacity duration-500 will-change-transform mix-blend-screen"
        />

      {/* 5. PAGE 5: APPLE-STYLE GLASSMORPHIC ATHLETE REVIEWS & PLATFORM PRs */}
      <section
        id="testimonials-section"
        ref={testimonialsSectionRef}
        className="w-full relative select-none bg-[#06090F] text-white py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 border-t border-white/[0.08] overflow-hidden"
      >
        {/* Multi-layered Luminous Ambient Orbs behind Frosted Glass Tabs (Apple Spatial Aesthetic) */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[320px] bg-[#FF5500]/[0.12] rounded-full blur-[130px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 w-[420px] h-[300px] bg-sky-500/[0.07] rounded-full blur-[130px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.04] rounded-full blur-[110px] pointer-events-none"
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Section 5 Header: Refined Apple-style typography, zero instructional prompts */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-white/90 text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
                <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>05 · Verified Athlete Outcomes</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.06]">
                Raw Numbers. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FF9E66]">Real PRs.</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-normal max-w-md sm:text-right leading-relaxed">
              Documented force-plate diagnostics, national platform totals, and long-term athletic durability across our active roster.
            </p>
          </div>

          {/* Continuous Moving Track: Apple Frosted Glassmorphic Tabs */}
          <div className="relative overflow-hidden py-6 -mx-4 sm:-mx-8 lg:-mx-16">
            {/* Subtle edge fade masks */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#06090F] to-transparent z-10 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#06090F] to-transparent z-10 pointer-events-none"
            />

            {/* Marquee Track: Duplicated list for seamless infinite loop */}
            <div className="animate-marquee-glide flex items-stretch gap-4 sm:gap-6 px-4">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => {
                    setActiveModalReview(item);
                    setExpandedReviewId(expandedReviewId === `${item.id}-${idx}` ? null : `${item.id}-${idx}`);
                  }}
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.22), 0 20px 40px -15px rgba(0,0,0,0.65)',
                  }}
                  className="group/card w-[285px] sm:w-[345px] lg:w-[380px] shrink-0 backdrop-blur-2xl border border-white/[0.14] rounded-[26px] p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.025] hover:border-white/[0.32] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.38),0_28px_55px_-12px_rgba(0,0,0,0.75)] relative overflow-hidden"
                >
                  {/* Subtle Top Specular Sheen */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                  />

                  <div>
                    {/* Top Glass Pill Bar: Metric Badge & Rating */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.09] backdrop-blur-md text-white border border-white/[0.15] text-[10px] sm:text-[11px] font-mono font-semibold tracking-tight shadow-2xs">
                        <Zap className="w-3 h-3 text-[#FF5500]" />
                        <span>{item.metricBadge}</span>
                      </span>
                      <div className="flex items-center gap-0.5 text-[#FF7A29]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FF7A29]" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Body: Crisp Apple-style editorial text */}
                    <p
                      className={`text-xs sm:text-[13.5px] text-white/90 leading-[1.6] font-normal mb-5 tracking-[-0.01em] ${
                        expandedReviewId === `${item.id}-${idx}` ? 'line-clamp-none' : 'line-clamp-3'
                      }`}
                    >
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Frosted Author Footer */}
                  <div className="pt-3.5 border-t border-white/[0.10] flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-white/[0.12] border border-white/[0.22] backdrop-blur-md flex items-center justify-center text-white text-xs font-semibold shrink-0 shadow-inner">
                        {item.avatarText}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-xs sm:text-sm text-white leading-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-white/55 font-normal leading-tight truncate mt-0.5">
                          {item.authorTitle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono text-white/85 font-medium block">
                        {item.coach}
                      </span>
                      <span className="text-[10px] text-white/45 block">
                        {item.tenure}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apple-Style Frosted Glass Membership Cap Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.18)',
            }}
            className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-[22px] backdrop-blur-2xl border border-white/[0.14] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.18] flex items-center justify-center text-[#FF5500] shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  280+ Active Performance Members
                </p>
                <p className="text-[11px] text-white/60">
                  Strictly capped club enrollment · Zero platform waiting during peak hours
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedTier('trial');
                scrollToSection('signup-section');
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-neutral-950 hover:bg-white/90 text-xs font-semibold tracking-wide transition-all shadow-sm shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Claim 7-Day Guest Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Apple-Style Frosted Glass Modal: Shows full review when card is touched/clicked */}
        {activeModalReview && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
            onClick={() => setActiveModalReview(null)}
          >
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(30,36,48,0.82) 0%, rgba(15,19,28,0.88) 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.28), 0 32px 80px rgba(0,0,0,0.75)',
              }}
              className="backdrop-blur-3xl border border-white/[0.22] rounded-[28px] p-6 sm:p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.15] text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.1] text-white border border-white/[0.18] text-xs font-mono font-semibold">
                  <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>{activeModalReview.metricBadge}</span>
                </span>
                <div className="flex items-center gap-0.5 text-[#FF7A29]">
                  {[...Array(activeModalReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A29]" />
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal mb-6 tracking-[-0.01em]">
                "{activeModalReview.quote}"
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/[0.14] flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/[0.14] border border-white/[0.22] flex items-center justify-center text-white font-semibold text-sm">
                    {activeModalReview.avatarText}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">
                      {activeModalReview.name}
                    </h4>
                    <p className="text-xs text-white/60">
                      {activeModalReview.authorTitle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white/90 font-medium block">
                    {activeModalReview.coach}
                  </span>
                  <span className="text-[11px] text-white/50 block">
                    {activeModalReview.tenure}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveModalReview(null);
                  setSelectedTier('trial');
                  scrollToSection('signup-section');
                }}
                className="w-full py-3 rounded-full bg-white text-neutral-950 hover:bg-white/90 text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <span>Claim 7-Day Guest Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 6. PAGE 6: MEMBERSHIP TIERS & DIRECT SIGNUP (HOVER POP, REDUCED MOBILE CONTENT) */}
      <section
        id="membership-section"
        className="w-full relative select-none bg-[#070B11] text-white py-12 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 border-t border-white/10"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Section 6 Header */}
          <div className="max-w-3xl text-center mx-auto mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-xs font-mono font-bold tracking-widest uppercase mb-3 sm:mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>06 · Transparent Access</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-4 leading-[1.08]">
              Capped Club Enrollment. <br />
              <span className="text-[#FF5500]">Zero Waiting for Racks.</span>
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto line-clamp-2 sm:line-clamp-none">
              Transparent, contract-free memberships. We cap total membership numbers strictly so you never compete for platforms during peak training hours.
            </p>
          </div>

          {/* Membership Tier Cards: Popping on Hover, Compact on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {MEMBERSHIP_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => {
                    setSelectedTier(tier.id);
                    scrollToSection('signup-section');
                  }}
                  className={`group p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border flex flex-col justify-between cursor-pointer relative transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,85,0,0.25)] hover:border-[#FF5500] ${
                    tier.popular
                      ? 'bg-gradient-to-b from-[#141E2B] to-[#0A1017] border-[#FF5500] shadow-[0_0_35px_rgba(255,85,0,0.2)]'
                      : 'bg-[#0A1017] border-white/15'
                  } ${isSelected ? 'ring-2 ring-[#FF5500]' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#FF5500] text-white text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-baseline justify-between mb-1 sm:mb-2">
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                        {!tier.popular && tier.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#FF7A29] transition-colors">
                      {tier.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mb-3 sm:mb-6 leading-relaxed line-clamp-1 sm:line-clamp-none">
                      {tier.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 mb-3 sm:mb-6 pb-3 sm:pb-6 border-b border-white/10">
                      <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                        {tier.price}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                        {tier.period}
                      </span>
                    </div>

                    {/* Features List: Compact top-3 on mobile to avoid spilling out, full on tablet/desktop */}
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                      {tier.features.map((feature, idx) => (
                        <li
                          key={feature}
                          className={`items-start gap-2 sm:gap-2.5 text-xs text-slate-300 ${
                            idx >= 3 ? 'hidden sm:flex' : 'flex'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTier(tier.id);
                      scrollToSection('signup-section');
                    }}
                    className={`w-full py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-[#FF5500] group-hover:bg-[#FF6A1A] text-white shadow-[0_0_20px_rgba(255,85,0,0.35)]'
                        : 'bg-white/10 group-hover:bg-[#FF5500] text-white border border-white/10'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Direct Signup & Instant Pass Generator Form Section */}
          <div
            id="signup-section"
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0F1620] to-[#080D14] border border-white/15 p-5 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Ember Glow */}
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 w-80 h-80 bg-[#FF5500]/15 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 sm:mb-8 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#FF7A29] font-bold tracking-widest uppercase block mb-1">
                    {submittedPassCode ? 'Official Member Onboarding Complete' : 'Direct Membership Activation'}
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {submittedPassCode ? 'Welcome to the NOVA Community' : 'Issue Your Digital Access Pass'}
                  </h4>
                </div>

                {/* Tier Switcher Pills */}
                {!submittedPassCode && (
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 w-fit">
                    {(['trial', 'open', 'performance'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTier(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase font-semibold transition-colors cursor-pointer ${
                          selectedTier === t
                            ? 'bg-[#FF5500] text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {t === 'trial' ? '7-Day Pass' : t === 'open' ? 'Open Floor' : 'All-Inclusive'}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* SUCCESS VIEW: Official NOVA Digital Membership Card with "Welcome to the NOVA Community" */}
              {submittedPassCode ? (
                <div className="space-y-6 animate-fadeIn">
                  {/* Celebratory Welcome Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FF5500]/20 via-[#FF5500]/10 to-transparent border border-[#FF5500]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF5500] text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,85,0,0.5)]">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-display text-base sm:text-lg font-bold text-white">
                          Welcome to the NOVA Community, {fullName}!
                        </h5>
                        <p className="text-xs text-slate-300">
                          Your digital access pass is active and ready for immediate floor entry.
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold w-fit">
                      VERIFIED MEMBER PASS
                    </span>
                  </div>

                  <div className="p-5 sm:p-8 rounded-2xl bg-[#05070A] border border-white/15 shadow-[0_0_40px_rgba(255,85,0,0.15)] relative overflow-hidden">
                    {/* Metallic Accent Lines */}
                    <div className="flex items-center justify-between pb-5 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5500] to-[#FFA873] flex items-center justify-center font-bold text-black text-xs">
                          NOVA
                        </div>
                        <div>
                          <span className="font-brand font-bold tracking-[0.2em] text-white text-sm sm:text-base block">
                            NOVA CLUB PASS
                          </span>
                          <span className="text-[11px] font-mono text-[#FF7A29]">
                            {selectedTier === 'trial'
                              ? '7-DAY ALL-ACCESS GUEST PASS'
                              : selectedTier === 'open'
                              ? 'MONTH-TO-MONTH OPEN FLOOR'
                              : 'ALL-INCLUSIVE PERFORMANCE'}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-500 block uppercase">Pass Status</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          ACTIVE &amp; VERIFIED
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-b border-white/10 text-xs">
                      <div>
                        <span className="text-slate-500 font-mono uppercase block mb-1">Athlete Name</span>
                        <span className="font-semibold text-white text-sm">{fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono uppercase block mb-1">Pass ID</span>
                        <span className="font-mono font-bold text-[#FF5500] text-sm">{submittedPassCode}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono uppercase block mb-1">Valid Period</span>
                        <span className="text-slate-300">
                          {new Date().toLocaleDateString()} – {new Date(Date.now() + 7 * 86400000).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {/* High-Tech Barcode Display */}
                    <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                          Turnstile Scanner Code
                        </span>
                        <div className="flex items-center gap-1 font-mono tracking-widest text-[#FF7A29] text-xs font-bold">
                          ||||| |||| |||||| ||| ||||||| |||| |||||
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          Scan barcode directly at Turnstile 1 or Concierge
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Print Pass</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetTrialForm}
                          className="px-4 py-2 rounded-lg bg-[#FF5500] hover:bg-[#FF6A1A] text-white text-xs font-semibold cursor-pointer"
                        >
                          Issue Another Pass
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-400 flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Welcome packet and turnstile barcode sent to <strong>{email}</strong>. See you on the platform!
                    </span>
                  </div>
                </div>
              ) : (
                /* REGISTRATION FORM VIEW */
                <form onSubmit={handleTrialSubmit} className="space-y-5 sm:space-y-6">
                  {formError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@performance.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                        Primary Training Focus
                      </label>
                      <select
                        value={trainingGoal}
                        onChange={(e) => setTrainingGoal(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D141F] border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
                      >
                        <option value="Strength & Hypertrophy">Strength &amp; Hypertrophy</option>
                        <option value="Athletic Engine & Conditioning">Athletic Engine &amp; Conditioning</option>
                        <option value="Olympic Weightlifting">Olympic Weightlifting</option>
                        <option value="Powerlifting Competition">Powerlifting Competition</option>
                        <option value="Contrast Recovery & Longevity">Contrast Recovery &amp; Longevity</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                        Preferred Training Window
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D141F] border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
                      >
                        <option value="Morning (05:00 – 11:00)">Morning (05:00 – 11:00)</option>
                        <option value="Midday (11:00 – 16:00)">Midday (11:00 – 16:00)</option>
                        <option value="Evening (16:00 – 23:00)">Evening (16:00 – 23:00)</option>
                        <option value="Weekends (All Hours)">Weekends (All Hours)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Zero lock-in contract · No credit card required for 7-Day trial</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5500] hover:bg-[#FF6A1A] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_0_24px_rgba(255,85,0,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>
                        {selectedTier === 'trial' ? 'Activate 7-Day Free Pass' : 'Complete Registration'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PAGE (BOLD, ATMOSPHERIC DARK CANVAS) */}
      <footer
        id="footer-page"
        className="w-full bg-[#05070A] text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-white/10 relative z-20"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-white/10">
            {/* Column 1: Brand & Manifesto */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FF5500] via-[#FF6E20] to-[#FFA873] flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.5)]">
                    <div className="w-4 h-4 bg-black rotate-45 transform flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#FF5500] rounded-full" />
                    </div>
                  </div>
                  <span className="font-brand font-bold text-2xl tracking-[0.26em] text-white">
                    NOVA
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-sm mb-6">
                  The private-grade strength and athletic performance club engineered for athletes who train with intent. Built through iron. Defined by discipline.
                </p>
              </div>

              {/* Hours & Facility Pill */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5 max-w-sm">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Open 05:00 – 23:00 Daily · 365 Days</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>742 Ironworks Blvd · Performance District</span>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2">
              <span className="block text-xs font-mono text-[#FF7A29] uppercase tracking-widest font-semibold mb-4">
                Explore
              </span>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('facility-section')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  >
                    18,500 Sq Ft Floor &amp; Inventory
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('coaches-section')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  >
                    Senior Performance Coaches
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('membership-section')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  >
                    Membership Tiers
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('signup-section')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  >
                    Direct Onboarding &amp; Pass
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Standards & Protocols */}
            <div className="lg:col-span-2">
              <span className="block text-xs font-mono text-[#FF7A29] uppercase tracking-widest font-semibold mb-4">
                Standards
              </span>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Eleiko Calibrated Spec</li>
                <li>Force-Plate Diagnostics</li>
                <li>Acoustic Subfloor</li>
                <li>Contrast Cold Plunge</li>
                <li>Cap Enrollment Limit</li>
              </ul>
            </div>

            {/* Column 4: Final Call to Action */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <span className="block text-xs font-mono text-[#FF7A29] uppercase tracking-widest font-semibold mb-4">
                  Experience NOVA
                </span>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Begin your 7-day unrestricted guest trial with an included 45-minute baseline movement and force audit.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedTier('trial');
                  scrollToSection('signup-section');
                }}
                className="w-full py-4 px-6 text-sm font-semibold text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.4)]"
              >
                <span>Claim 7-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Accreditation */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <span>© {new Date().getFullYear()} NOVA Performance Club Inc.</span>
              <span>·</span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Terms of Floor Access</span>
              <span>Athlete Privacy</span>
              <span className="text-[#FF7A29]">Calibrated for Performance</span>
            </div>
          </div>
        </div>
      </footer>
      </div>

      {/* Technical Equipment Audit Modal — Compact, 100% Viewable Within Single Screen Across PC, Tablet, and Mobile */}
      {selectedEquipment && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xl"
          onClick={() => setSelectedEquipment(null)}
        >
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(22,28,38,0.96) 0%, rgba(11,15,22,0.98) 100%)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 28px 70px rgba(0,0,0,0.85)',
            }}
            className="relative w-full max-w-lg md:max-w-2xl max-h-[88vh] overflow-y-auto border border-white/20 rounded-[24px] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Compact Header Banner with Image */}
            <div className="relative h-[130px] sm:h-[160px] shrink-0 overflow-hidden">
              <img
                src={EQUIPMENT_SPECS[selectedEquipment].image}
                alt={EQUIPMENT_SPECS[selectedEquipment].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0D1219] via-[#0D1219]/50 to-black/30 pointer-events-none"
              />
              <button
                type="button"
                onClick={() => setSelectedEquipment(null)}
                aria-label="Close specification"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 sm:left-6 right-4">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#FF7A29] font-bold tracking-widest uppercase block mb-0.5">
                  {EQUIPMENT_SPECS[selectedEquipment].category}
                </span>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-tight">
                  {EQUIPMENT_SPECS[selectedEquipment].title}
                </h3>
              </div>
            </div>

            {/* Compact Body Content: Fits cleanly without vertical overflow */}
            <div className="p-4 sm:p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {EQUIPMENT_SPECS[selectedEquipment].overview}
              </p>

              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                  Calibrated Hardware Audit
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {EQUIPMENT_SPECS[selectedEquipment].specs.map((item) => (
                    <div
                      key={item.label}
                      className="px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-between gap-2 text-xs"
                    >
                      <span className="text-slate-400 text-[11px]">{item.label}</span>
                      <span className="font-mono font-semibold text-white text-[11px] text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-3.5 py-2.5 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/25 text-[11px] sm:text-xs flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span className="text-slate-200 leading-snug">
                  {EQUIPMENT_SPECS[selectedEquipment].maintenance}
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedEquipment(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEquipment(null);
                    setSelectedTier('trial');
                    scrollToSection('signup-section');
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full cursor-pointer shadow-md flex items-center gap-1.5"
                >
                  <span>Test on 7-Day Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive 7-Day Free Trial Pass Modal with Digital Wallet Pass */}
      {isTrialModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="trial-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setIsTrialModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0C1117] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <p className="text-xs font-mono text-[#FF7A29] mb-1 tracking-wider uppercase">
                  {submittedPassCode ? 'OFFICIAL MEMBER ONBOARDING' : 'NOVA PERFORMANCE CLUB · GUEST ACCESS'}
                </p>
                <h2
                  id="trial-modal-title"
                  className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  {submittedPassCode ? 'Welcome to the NOVA Community' : 'Claim Your 7-Day Free Trial'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsTrialModalOpen(false)}
                aria-label="Close modal"
                className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedPassCode ? (
              <div className="pt-5 space-y-5">
                {/* Welcome Community Banner */}
                <div className="p-3.5 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/35 flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#FF5500] shrink-0" />
                  <p className="text-xs text-white font-medium leading-snug">
                    Welcome to the NOVA Community, <strong>{fullName}</strong>! Present this pass at reception or Turnstile 1.
                  </p>
                </div>

                {/* Authentic Digital Membership Pass */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[#151D28] via-[#0E1520] to-[#0A0E15] border border-white/15 p-5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#FF5500] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-black rotate-45 transform" />
                      </div>
                      <span className="font-brand font-bold text-sm tracking-[0.22em] text-white">NOVA PASS</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[11px] font-mono font-bold text-[#FF5500]">
                      7-DAY ALL ACCESS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 text-xs">
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 mb-0.5">ATHLETE</span>
                      <span className="font-semibold text-white text-sm">{fullName}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 mb-0.5">STATUS</span>
                      <span className="font-semibold text-emerald-400 text-sm">ACTIVE · $0.00 DUE</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 mb-0.5">CHECK-IN WINDOW</span>
                      <span className="font-medium text-slate-200">{preferredTime}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 mb-0.5">FOCUS MODULE</span>
                      <span className="font-medium text-slate-200">{trainingGoal}</span>
                    </div>
                  </div>

                  {/* Visual Barcode Lockup */}
                  <div className="pt-3.5 border-t border-white/10 flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center gap-[3px] py-2 px-4 bg-white rounded-lg w-full max-w-xs">
                      <div className="w-1 h-7 bg-black" />
                      <div className="w-0.5 h-7 bg-black" />
                      <div className="w-1.5 h-7 bg-black" />
                      <div className="w-0.5 h-7 bg-black" />
                      <div className="w-2 h-7 bg-black" />
                      <div className="w-0.5 h-7 bg-black" />
                      <div className="w-1.5 h-7 bg-black" />
                      <div className="w-1 h-7 bg-black" />
                      <div className="w-2.5 h-7 bg-black" />
                      <div className="w-0.5 h-7 bg-black" />
                      <div className="w-1.5 h-7 bg-black" />
                      <div className="w-2 h-7 bg-black" />
                      <div className="w-1 h-7 bg-black" />
                      <div className="w-0.5 h-7 bg-black" />
                      <div className="w-2 h-7 bg-black" />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-[#FF5500] font-bold">
                      {submittedPassCode}
                    </span>
                  </div>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={resetTrialForm}
                    className="w-full sm:w-1/2 py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full transition-all cursor-pointer shadow-[0_0_20px_rgba(255,85,0,0.3)] text-center"
                  >
                    Done &amp; Return to Club
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="w-full sm:w-1/2 py-3 px-6 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print / Save Pass</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="pt-5 space-y-4" noValidate>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Reserve seven days of unrestricted strength floor, conditioning class, and recovery suite access. No credit card required at check-in.
                </p>

                {formError && (
                  <div
                    role="alert"
                    className="p-3 text-xs font-medium text-red-200 bg-red-950/60 border border-red-500/40 rounded-lg"
                  >
                    {formError}
                  </div>
                )}

                <div className="space-y-3.5">
                  <div>
                    <label htmlFor="athlete-name" className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name
                    </label>
                    <input
                      id="athlete-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Elena Vance"
                      className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06090D] border border-white/15 focus:border-[#FF5500] focus:outline-none rounded-lg placeholder:text-slate-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="athlete-email" className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        id="athlete-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@domain.com"
                        className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06090D] border border-white/15 focus:border-[#FF5500] focus:outline-none rounded-lg placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="athlete-phone" className="block text-xs font-medium text-slate-300 mb-1">
                        Mobile Number
                      </label>
                      <input
                        id="athlete-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 234-5678"
                        className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06090D] border border-white/15 focus:border-[#FF5500] focus:outline-none rounded-lg placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="training-goal" className="block text-xs font-medium text-slate-300 mb-1">
                        Primary Training Focus
                      </label>
                      <select
                        id="training-goal"
                        value={trainingGoal}
                        onChange={(e) => setTrainingGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06090D] border border-white/15 focus:border-[#FF5500] focus:outline-none rounded-lg"
                      >
                        <option value="Strength & Hypertrophy">Strength &amp; Hypertrophy</option>
                        <option value="Athletic Conditioning">Athletic Conditioning</option>
                        <option value="Olympic Weightlifting">Olympic Weightlifting</option>
                        <option value="1-on-1 Performance Coaching">1-on-1 Performance Coaching</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferred-time" className="block text-xs font-medium text-slate-300 mb-1">
                        Preferred Training Window
                      </label>
                      <select
                        id="preferred-time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06090D] border border-white/15 focus:border-[#FF5500] focus:outline-none rounded-lg"
                      >
                        <option value="Morning (05:00 – 11:00)">Morning (05:00 – 11:00)</option>
                        <option value="Midday (11:00 – 16:00)">Midday (11:00 – 16:00)</option>
                        <option value="Evening (16:00 – 23:00)">Evening (16:00 – 23:00)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#FF7A29] shrink-0" />
                    <span>Instant digital pass · $0 due today</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#FF5500] hover:bg-[#FF6A1A] rounded-full transition-all duration-150 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,85,0,0.35)]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Generate 7-Day Free Pass</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
