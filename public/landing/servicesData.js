const servicesData = {
  therapies: [
    {
      name: "Foot Reflexology",
      description: "A calming leg massage that releases built-up tension, promotes circulation, and envelops your legs in soothing relaxation from thigh to toe.",
      image: "../services/Foot Reflexology.webp",
      variants: [{ duration: "30", price: 1000 }]
    },
    {
      name: "Head, Neck & Shoulder",
      description: "Drift into bliss as each precise movement rejuvenates muscles, calms the mind, and restores balance.",
      image: "../services/Head, Neck & Shoulder.webp",
      variants: [{ duration: "30", price: 1200 }]
    },
    {
      name: "Back Revival Therapy",
      description: "Expert techniques paired with aromatic oils release knots and stiffness, leaving you refreshed and renewed.",
      image: "../services/Back Revival Therapy.webp",
      variants: [{ duration: "30", price: 1700 }]
    },
    {
      name: "Swedish Therapy",
      description: "Our Swedish Therapy is a timeless European technique that moves like a slow, soothing current across the body.",
      image: "../services/Swedish Therapy.webp",
      variants: [
        { duration: "60", price: 2800 },
        { duration: "90", price: 3800 },
        { duration: "120", price: 4500 }
      ]
    },
    {
      name: "Aromatic Therapy",
      description: "A sensory journey combining expert massage techniques with pure essential oils.",
      image: "../services/Aromatic Therapy.webp",
      variants: [
        { duration: "60", price: 3000 },
        { duration: "90", price: 4300 },
        { duration: "120", price: 5300 }
      ]
    },
    {
      name: "Deep Tissue Therapy",
      description: "Targets deep layers of muscle and connective tissue restoring flexibility and comfort.",
      image: "../services/Deep Tissue Therapy.webp",
      variants: [
        { duration: "60", price: 3600 },
        { duration: "90", price: 4800 },
        { duration: "120", price: 5800 }
      ]
    },
    {
      name: "Balinese Therapy",
      description: "Traditional Indonesian healing therapy combining acupressure and stretches.",
      image: "../services/Balinese Therapy.webp",
      variants: [
        { duration: "60", price: 3600 },
        { duration: "90", price: 4800 },
        { duration: "120", price: 5800 }
      ]
    },
    {
      name: "Dry Thai Therapy",
      description: "Ancient therapy using pressure points and assisted stretches without oils.",
      image: "../services/Dry Thai Therapy.webp",
      variants: [
        { duration: "60", price: 3600 },
        { duration: "90", price: 3900 },
        { duration: "120", price: 4800 }
      ]
    },
    {
      name: "Herbal Potli Therapy",
      description: "Warm herbal poultices infused with medicinal herbs melt tension and uplift the senses.",
      image: "../services/Herbal Potli Therapy.webp",
      variants: [
        { duration: "60", price: 4100 },
        { duration: "90", price: 5300 }
      ]
    },
    {
      name: "Hot Stone Therapy",
      description: "Smooth heated stones release deep stress and tension.",
      image: "../services/Hot Stone Therapy.webp",
      variants: [
        { duration: "60", price: 4100 },
        { duration: "90", price: 5300 }
      ]
    },
    {
      name: "Signature Therapy",
      description: "Ultimate indulgence combining traditional and contemporary techniques.",
      image: "../services/Signature Therapy.webp",
      variants: [
        { duration: "90", price: 5300 },
        { duration: "120", price: 6000 }
      ]
    },
    {
      name: "Tandem Four Hands Therapy",
      description: "Two therapists working in synchrony for unparalleled relaxation.",
      image: "../services/Tandem (Four Hands) Therapy.webp",
      variants: [
        { duration: "60", price: 5300 },
        { duration: "90", price: 6000 }
      ]
    }
  ],

  facials: [
    {
      name: "Hydra Boost",
      description: "Deep hydration and radiant glow restoration.",
      image: "../services/Facials – Hydra Dew.webp",
      variants: [{ duration: "60", price: 1800 }]
    },
    {
      name: "Pollution Guard",
      description: "Activated charcoal facial for deep cleansing.",
      image: "../services/Facials – Clean ups2.webp",
      variants: [{ duration: "60", price: 1800 }]
    },
    {
      name: "Korean Glass",
      description: "Premium glass skin facial inspired by Korean skincare.",
      image: "../services/Facials – Herbal Pearl.webp",
      variants: [{ duration: "60", price: 1800 }]
    },
    {
      name: "D-Tan Skin Reset",
      description: "Removes tan and restores natural glow.",
      image: "../services/Facials – Rejuvenating2.jpg",
      variants: [{ duration: "60", price: 2800 }]
    },
    {
      name: "Gold Radiance Facial",
      description: "Boosts collagen and elasticity while brightening skin.",
      image: "../services/Facials – Herbal Gold.webp",
      variants: [{ duration: "60", price: 3300 }]
    },
    {
      name: "Diamond Glow Signature Facial",
      description: "Transforms dull skin into radiant glowing skin.",
      image: "../services/Facials – Deep Pore Cleansing.webp",
      variants: [{ duration: "60", price: 3300 }]
    },
    {
      name: "Wedding Ready Facial",
      description: "Picture-perfect bridal glow treatment.",
      image: "../services/Facials – Whitening.webp",
      variants: [{ duration: "60", price: 3500 }]
    }
  ],

  polishing: [
    {
      name: "Scrub (With Shower)",
      description: "Luxurious exfoliation revealing soft radiant skin.",
      image: "../services/Polishing – Scrub.webp",
      variants: [{ duration: "60", price: 2800 }]
    },
    {
      name: "Ubtan",
      description: "Traditional ubtan treatment for glowing skin.",
      image: "../services/Polishing – Black Current.webp",
      variants: [{ duration: "60", price: 4500 }]
    },
    {
      name: "Chocolate",
      description: "Cocoa treatment delivering hydration and glow.",
      image: "../services/Polishing – Chocolate.webp",
      variants: [{ duration: "60", price: 4500 }]
    },
    {
      name: "Orange",
      description: "Vitamin C treatment for de-tan and brightness.",
      image: "../services/Polishing – Orange.webp",
      variants: [{ duration: "60", price: 4500 }]
    }
  ],

  pedicure: [
    {
      name: "Classic Pedicure",
      description: "Fruit essence pedicure restoring softness and vitality.",
      image: "../services/Pedicure – Classic.webp",
      variants: [{ duration: "60", price: 1700 }]
    },
    {
      name: "Happy Feet Pedicure",
      description: "Herbal oils refresh and revitalize tired feet.",
      image: "../services/Pedicure – Happy Feet.jpeg",
      variants: [{ duration: "60", price: 1700 }]
    },
    {
      name: "Anti-Oxidant Pedicure",
      description: "Detoxifying foot treatment restoring energy.",
      image: "../services/Pedicure – Anti-Oxidant.webp",
      variants: [{ duration: "60", price: 1700 }]
    },
    {
      name: "Moisturising Exotic Pedicure",
      description: "Strawberry and kiwi extracts rejuvenate feet.",
      image: "../services/Pedicure – Moisturising Exotic.webp",
      variants: [{ duration: "60", price: 1700 }]
    },
    {
      name: "Brightening De-Tan Pedicure",
      description: "Brightens and detoxifies dull tired feet.",
      image: "../services/Pedicure – Brightening De-Tan.webp",
      variants: [{ duration: "60", price: 1700 }]
    },
    {
      name: "De-Stress Refreshment",
      description: "Cooling cucumber and peppermint relaxation ritual.",
      image: "../services/Pedicure – De-Stress Refreshment.webp",
      variants: [{ duration: "60", price: 1700 }]
    }
  ]
};

window.servicesData = servicesData;