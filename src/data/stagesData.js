export const varicoseStages = {
  C0: {
    stage: 'C0',
    label: 'No Visible Veins',
    severity: 'None',
    professional: 'No visible or palpable signs of venous disease',
    simple: 'Your legs look healthy with no visible vein problems',
    symptoms: ['No symptoms', 'Legs appear normal'],
    remedies: [
      'Maintain healthy weight',
      'Regular exercise',
      'Avoid prolonged standing',
      'Elevate legs when resting'
    ],
    specialist: 'General Physician',
    color: '#10B981'
  },
  C1: {
    stage: 'C1',
    label: 'Spider Veins',
    severity: 'Mild',
    professional: 'Telangiectasies or reticular veins (spider veins)',
    simple: 'Small, thin veins visible under the skin',
    symptoms: ['Tiny visible veins', 'Usually cosmetic concern', 'Mild discomfort'],
    remedies: [
      'Compression stockings (15-20 mmHg)',
      'Regular walking and exercise',
      'Avoid crossing legs',
      'Leg elevation during rest',
      'Maintain healthy weight'
    ],
    specialist: 'Dermatologist or Vascular Specialist',
    color: '#06B6D4'
  },
  C2: {
    stage: 'C2',
    label: 'Varicose Veins',
    severity: 'Moderate',
    professional: 'Varicose veins - dilated veins > 3mm diameter',
    simple: 'Swollen, twisted veins visible on the skin surface',
    symptoms: ['Bulging veins', 'Leg heaviness', 'Aching pain', 'Mild swelling'],
    remedies: [
      'Compression stockings (20-30 mmHg)',
      'Daily leg exercises',
      'Avoid prolonged sitting or standing',
      'Elevate legs 3-4 times daily',
      'Sclerotherapy or laser treatment (consult specialist)',
      'Weight management'
    ],
    specialist: 'Phlebologist or Vascular Surgeon',
    color: '#F59E0B'
  },
  C3: {
    stage: 'C3',
    label: 'Edema (Swelling)',
    severity: 'Moderate to Severe',
    professional: 'Edema without skin changes',
    simple: 'Noticeable swelling in your legs and ankles',
    symptoms: ['Leg swelling', 'Ankle swelling', 'Heaviness', 'Aching', 'Fatigue'],
    remedies: [
      'Medical-grade compression stockings (30-40 mmHg)',
      'Leg elevation above heart level',
      'Reduce salt intake',
      'Consult vascular specialist for treatment options',
      'Consider endovenous procedures',
      'Regular monitoring'
    ],
    specialist: 'Vascular Surgeon or Phlebologist',
    color: '#F59E0B'
  },
  C4: {
    stage: 'C4',
    label: 'Skin Changes',
    severity: 'Severe',
    professional: 'Skin changes - pigmentation, eczema, lipodermatosclerosis',
    simple: 'Skin color changes, rashes, or hardening around veins',
    symptoms: ['Skin discoloration', 'Itching', 'Eczema', 'Hardened skin', 'Brown patches'],
    remedies: [
      'Immediate medical consultation required',
      'Prescription compression therapy',
      'Topical medications for skin care',
      'Surgical or minimally invasive treatment needed',
      'Regular wound care',
      'Strict leg elevation regimen'
    ],
    specialist: 'Vascular Surgeon (Urgent)',
    color: '#EF4444'
  },
  C5: {
    stage: 'C5',
    label: 'Healed Ulcer',
    severity: 'Severe',
    professional: 'Healed venous ulcer',
    simple: 'Previous wound on leg that has healed, but vein problem remains',
    symptoms: ['Healed wound scar', 'Skin changes', 'High risk of recurrence'],
    remedies: [
      'Lifelong compression therapy',
      'Regular vascular surgeon monitoring',
      'Surgical intervention recommended',
      'Strict skin care protocol',
      'Immediate treatment of any new wounds',
      'Lifestyle modifications'
    ],
    specialist: 'Vascular Surgeon (Immediate)',
    color: '#DC2626'
  },
  C6: {
    stage: 'C6',
    label: 'Active Ulcer',
    severity: 'Critical',
    professional: 'Active venous ulcer',
    simple: 'Open wound on leg requiring immediate medical attention',
    symptoms: ['Open sore', 'Pain', 'Drainage', 'Infection risk', 'Severe discomfort'],
    remedies: [
      'SEEK IMMEDIATE MEDICAL ATTENTION',
      'Advanced wound care',
      'Surgical treatment required',
      'Compression therapy under supervision',
      'Possible hospitalization',
      'Antibiotics if infected'
    ],
    specialist: 'Vascular Surgeon (Emergency)',
    color: '#991B1B'
  }
};

export const causes = [
  'Age - vein walls weaken over time',
  'Pregnancy - increased blood volume and hormones',
  'Prolonged standing or sitting',
  'Obesity - extra pressure on veins',
  'Family history - genetic factors',
  'Female gender - hormonal factors'
];

export const preventionTips = [
  'Exercise regularly, especially walking',
  'Maintain a healthy weight',
  'Elevate your legs when resting',
  'Avoid prolonged standing or sitting',
  'Wear compression stockings if recommended',
  'Stay hydrated and eat fiber-rich foods'
];
