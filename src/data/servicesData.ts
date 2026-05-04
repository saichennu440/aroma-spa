// src/data/servicesData.ts
// Full typed services data (all items converted to `variants` per service).
// This file was generated from the data you provided — every service entry from your last paste is included.

export type Variant = {
  duration: string; // minutes as string, e.g. "60"
  price: string;    // price string including currency symbol, e.g. "₹2,800"
};

export type ServiceItem = {
  name: string;
  description?: string;
  features?: string[];
  image?: string;
  variants?: Variant[]; // one or more duration/price options
};

export interface ServicesData {
  therapies: {
    'classic-therapies': ServiceItem[];
    'signature-therapies': ServiceItem[];
    'targeted-therapies': ServiceItem[];
  };
  facials: {
    'classic-facials': ServiceItem[];
    'premium-facials': ServiceItem[];
  };
  'full-body-polishing': {
    'full-body-polishing': ServiceItem[];
  };
  'foot-pedicure': {
    'foot-pedicure': ServiceItem[];
  };
}

const servicesData: ServicesData = {

  therapies: {
        'classic-therapies': [
      {
        name: 'Swedish Therapy',
        description:
          'Our Swedish Therapy is a timeless European technique that moves like a slow, soothing current across the body - long gliding strokes to melt tension, stimulate lymphatic flow, and refresh the senses.',
        image: '/services/Swedish Therapy.webp',
        variants: [
          { duration: '60', price: '₹2800' },
          { duration: '90', price: '₹3800' },
          { duration: '120', price: '₹4500' }
        ]
      },
      {
        name: 'Aromatic Therapy',
        description: 'A sensory journey that combines expert massage techniques with pure essential oils. This indulgent experience calms the mind, nurtures the body, and restores emotional balance. Breathe deep while our therapists deliver sumptuous strokes that relax body and mind.',
        image: '/services/Aromatic Therapy.webp',
        variants: [
          { duration: '60', price: '₹3000' },
          { duration: '90', price: '₹4300' },
          { duration: '120', price: '₹5300' }
        ]
      },
      {
        name: 'Deep Tissue Therapy',
        description: 'A therapeutic massage that targets deep layers of muscle and connective tissue. This therapy renews your body from within, restoring flexibility, improving posture, and delivering unmatched comfort long after the session ends.',
        image: '/services/Deep Tissue Therapy.webp',
        variants: [
          { duration: '60', price: '₹3600' },
          { duration: '90', price: '₹4800' },
          { duration: '120', price: '₹5800' }
        ]
      },
      {
        name: 'Balinese Therapy',
        description: 'Experience the time-honoured secrets of Balinese therapy, a traditional Indonesian healing with exotic fusion of acupressure, gentle stretches, and rhythmic movements that bring balance and serenity to both body and soul - straight from the healing traditions of Bali.',
        image: '/services/Balinese Therapy.webp',
        variants: [
          { duration: '60', price: '₹3600' },
          { duration: '90', price: '₹4800' },
          { duration: '120', price: '₹5800' }
        ]
      },
      {
        name: 'Dry Thai Therapy',
        description: 'This ancient therapy uses a fusion of deep pressure points and assisted stretches. Our expert therapists guide your body to improve circulation, relieve stiffness, and recharge your vital energy—without the use of oils.',
        image: '/services/Dry Thai Therapy.webp',
        variants: [
          { duration: '60', price: '₹3600' },
          { duration: '90', price: '₹3900' },
          { duration: '120', price: '₹4800' }
        ]
      }
    ],

    'signature-therapies': [
      {
        name: 'Signature Therapy',
        description: 'Our Signature Therapy is the ultimate indulgence, a harmonious fusion of traditional and contemporary techniques designed for complete relaxation and renewal. Every detail, from the choice of oils to the rhythm of touch, is designed for a journey of exquisite relaxation.',
        image: '/services/Signature Therapy.webp',
        variants: [
          { duration: '90', price: '₹5300' },
          { duration: '120', price: '₹6000' }
        ]
      },
      {
        name: 'Tandem Four Hands Therapy',
        description: 'Indulge in the pinnacle of relaxation as two expert therapists move in perfect synchrony, melting tension, enhancing circulation, and delivering an unparalleled sense of serenity. Every stroke is harmonized to soothe both body and mind, where time seems to pause, and every sense is delighted.',
        image: '/services/Tandem (Four Hands) Therapy.webp',
        variants: [
          { duration: '60', price: '₹5300' },
          { duration: '90', price: '₹6000' }
        ]
      },
      {
        name: 'Herbal Potli Therapy',
        description: 'A warm, soothing therapy using herbal poultices infused with medicinal herbs glide over your body, melting tension, uplifting the senses, and infusing your skin with nature’s restorative essence',
        image: '/services/Herbal Potli Therapy.webp',
        variants: [
          { duration: '60', price: '₹4100' },
          { duration: '90', price: '₹5300' }
        ]
      },
      {
        name: 'Hot Stone Therapy',
        description: 'Smooth, heated stones meet skilled hands to glide over your body, penetrating deep into tired muscles. This therapy warms your muscles from within, releasing deep-seated stress and and tension while restoring deep inner harmony.',
        image: '/services/Hot Stone Therapy.webp',
        variants: [
          { duration: '60', price: '₹4100' },
          { duration: '90', price: '₹5300' }
        ]
      }
    ],



    'targeted-therapies': [
      {
        name: 'Foot Reflexology',
        description: 'A calming leg massage that releases built-up tension, promotes circulation, and envelops your legs in soothing relaxation from thigh to toe. ',
        image: '/services/Foot Reflexology.webp',
        variants: [{ duration: '30', price: '₹1000' }]
      },
      {
        name: 'Back Revival Therapy',
        description: 'Expert techniques paired with aromatic oils release knots and stiffness, leaving you refreshed and renewed. ',
        image: '/services/Back Revival Therapy.webp',
        variants: [{ duration: '30', price: '₹1700' }]
      },
      {
        name: 'Head, Neck & Shoulder',
        description: 'RDrift into bliss as each precise movement rejuvenates muscles, calms the mind, and restores balance ',
        image: '/services/Head, Neck & Shoulder.webp',
        variants: [{ duration: '30', price: '₹1200' }]
      }
    ]
  },

 facials: {
    'classic-facials': [
      {
        name: 'Hydra Boost (Dry & Dehydrated)',
        description: 'Immerseyour delicate skin deeply hydrates, smoothens skin, and restores a radiant glow. Its advanced formula replenishes moisture and enhances brightness for visibly refreshed, plump skin from the very first use.',
        image: '/services/Facials – Hydra Dew.webp',
        variants: [{ duration: '60', price: '₹1800' }]
      },
        {
        name: 'Pollution Guard (All Skin Types)',
        description: 'Specially formulated with activated charcoal and lemon extracts, deeply cleanses, controls excess oil, and unclogs pores which helps the skin balanced and moisturized for all skin types.',
        image: '/services/Facials – Clean ups2.webp',
        variants: [{ duration: '60', price: '₹1800' }]
      },
      // {
      //   name: 'Rejuvenating\n (All skin types)',
      //   description: 'Reveal your skin’s natural radiance through meticulous care that enhances texture, tone, and vitality.',
      //   image: '/services/Facials – Rejuvenating2.jpg',
      //   variants: [{ duration: '60', price: '₹1700' }]
      // },
      {
        name: 'Korean Glass',
        description: 'A premium skincare solution that deeply hydrates and visibly brightens, refining skin texture and improving overall tone. Delivers a radiant, dewy glow with a flawless, translucent “glass skin” finish inspired by Korean skincare.',
        image: '/services/Facials – Herbal Pearl.webp',
        variants: [{ duration: '60', price: '₹1800' }]
      }
    ],

    'premium-facials': [
         {
         name: 'D-Tan Skin Reset Facial (All Skin Types)',
         description: 'Removes stubborn tan, brightens skin, and restores a natural glow in just one use. It targets pigmentation, dullness, and clogged pores while nourishing the skin for a fresh, even-toned look.',
         image: '/services/Facials – Rejuvenating2.jpg',
         variants: [{ duration: '60', price: '₹2800' }]
       },
       {
        name: 'Gold Radiance Facial (Dull & Uneven Skin Tone)',
        description: 'Deeply nourishes the skin to boost radiance, collagen, and elasticity. It helps reduce fine lines, dullness, and pigmentation while leaving skin firm, smooth, and visibly glowing.',
        image: '/services/Facials – Herbal Gold.webp',
        variants: [{ duration: '60', price: '₹3300' }]
      },
      {
        name: 'Diamond Glow Signature Facial',
        description: 'Transforms dull, tired skin into a crystal-clear, diamond-radiant glow. Deeply polishes, removes impurities, and boosts cell renewal for a fresh, youthful complexion.',
        image: '/services/Facials – Deep Pore Cleansing.webp',
        variants: [{ duration: '60', price: '₹3300' }]
      },
      {
        name: 'Wedding Ready Facial ',
        description: 'Purifies, nourishes, and hydrates for a flawless, picture-perfect glow. Enriched with Cherry Extract and Apricot Oil, it boosts collagen, reduces pigmentation, and enhances natural radiance.',
        image: '/services/Facials – Whitening.webp',
        variants: [{ duration: '60', price: '₹3500' }]
      },
    ]
  },

  'full-body-polishing': {
    'full-body-polishing': [
      {
        name: 'Scrub (With Shower)',
        description: 'Experience an invigorating exfoliation that gently buffs away dullness and impurities, revealing skin that feels luxuriously smooth, soft, and renewed. This revitalizing treatment enhances circulation, awakens the senses, and leaves your body glowing with irresistible radiance. ',
        image: '/services/Polishing – Scrub.webp',
        variants: [{ duration: '60', price: '₹2800' }]
      },
      {
        name: 'Ubtan (All Skin Types)',
        description: 'A skincare ritual enriched with ubtan, saffron, and natural oils to cleanse, exfoliate, nourish your skin. This helps remove tan, reduce blemishes, and restore a naturally glowing skin.',
        image: '/services/Polishing – Black Current.webp',
        variants: [{ duration: '60', price: '₹4500' }]
      },
      {
        name: 'Chocolate (Brightening & Nourishing)',
        description: 'Delight in the rich essence of cocoa as this treatment detoxifies, smoothens, and brightens your skin. Packed with antioxidants and essential minerals, it delivers deep hydration and a silky-soft finish for a radiant, healthy glow.',
        image: '/services/Polishing – Chocolate.webp',
        variants: [{ duration: '60', price: '₹4500' }]
      },
      {
        name: 'Orange (De-Tan)',
        description: 'Energize your skin with the power of Vitamin C. This vibrant polish works to lighten sun damage, boost collagen, and enhance natural luminosity—perfect for reviving dull or tanned skin into a bright, youthful glow. ',
        image: '/services/Polishing – Orange.webp',
        variants: [{ duration: '60', price: '₹4500' }]
      }
    ]
  },

  'foot-pedicure': {
    'foot-pedicure': [
      {
        name: 'Classic Pedicure (Watermelon & Litchi)',
        description: 'Delight in the sumptuous blend of fruit essences and revitalizing moisture. Each touch restores suppleness, rejuvenates your skin, and leaves behind an aura of natural vitality and freshness',
        image: '/services/Pedicure – Classic.webp',
        variants: [{ duration: '60', price: '₹1700' }]
      },
      {
        name: 'Happy Feet Pedicure (Rosemary & Lavender)',
        description: 'Refreshes and revitalizes tired feet with natural herbs and essential oils. Enriched with essential oils, it cleanses, exfoliates, and nourishes for soft, smooth skin. ',
        image: '/services/Pedicure – Happy Feet.jpeg',
        variants: [{ duration: '60', price: '₹1700' }]
      },
      {
        name: 'Anti-Oxidant Pedicure (Orange & Chocolate)',
        description: 'An indulgent foot treatment crafted to detoxify and invigorate, relieving heaviness and swelling while restoring energy and comfort to fatigued feet',
        image: '/services/Pedicure – Anti-Oxidant.webp',
        variants: [{ duration: '60', price: '₹1700' }]
      },
      {
        name: 'Moisturising Exotic Pedicure (Kiwi & Strawberry)',
        description: 'Immerse your feet in a lavish blend of strawberry and kiwi extracts. This exquisite pedicure hydrates, softens, and rejuvenates, leaving your feet velvety smooth and radiant.',
        image: '/services/Pedicure – Moisturising Exotic.webp',
        variants: [{ duration: '60', price: '₹1700' }]
      },
      {
        name: 'Brightening De-Tan Pedicure',
        description: 'This pampering ritual, enriched with vibrant fruit extracts, gently exfoliates and detoxifies, transforming dull, tired feet into a brighter, softer, and more radiant version of themselves',
        image: '/services/Pedicure – Brightening De-Tan.webp',
        variants: [{ duration: '60', price: '₹1700' }]
      },
      {
        name: 'De-Stress Refreshment (Cucumber & Peppermint)',
        description: 'Escape into a cooling haven as peppermint awakens and cucumber soothes. This detoxifying ritual releases stress, restores balance, and infuses your feet with a crisp, invigorating freshness.',
        image: '/services/Pedicure – De-Stress Refreshment.webp',
        variants: [{ duration: '60', price: '₹1700' }]
      }
    ]//28
  }
} as ServicesData;

export default servicesData;
