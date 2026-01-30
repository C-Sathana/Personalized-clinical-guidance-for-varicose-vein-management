// src/services/apiService.js
import axios from 'axios';
import { config } from '../config/config';
import { varicoseStages } from '../data/stagesData';

// --- Mock data (you included these; keep/edit as needed) ---
const mockSpecialists = [
  { name: 'Dr. Rajesh Kumar', specialty: 'Vascular Surgeon', rating: 4.8, distance: '2.5 km', address: 'Apollo Hospitals, Madurai Main Road, Virudhunagar, Tamil Nadu 626001', phone: '+91 98765 43210', availability: 'Accepting new patients' },
  { name: 'Dr. Priya Sharma', specialty: 'Phlebologist', rating: 4.9, distance: '3.2 km', address: 'Meenakshi Mission Hospital, Lake View Road, Madurai, Tamil Nadu 625001', phone: '+91 87654 32109', availability: 'Next available: Tomorrow' },
  { name: 'Dr. Arjun Patel', specialty: 'Varicose Vein Specialist', rating: 4.7, distance: '4.8 km', address: 'Sri Ramakrishna Hospital, Sathamangalam, Madurai, Tamil Nadu 625020', phone: '+91 76543 21098', availability: 'Walk-ins welcome' },
  { name: 'Dr. Meera Iyer', specialty: 'Vascular Surgeon', rating: 5.0, distance: '5.5 km', address: 'Vadamalayan Hospital, Madurai Road, Virudhunagar, Tamil Nadu 626001', phone: '+91 65432 10987', availability: 'Open now' },
  { name: 'Dr. Suresh Nair', specialty: 'Phlebologist', rating: 4.6, distance: '6.1 km', address: 'Kovai Medical Center, Anna Nagar, Madurai, Tamil Nadu 625020', phone: '+91 54321 09876', availability: 'Opens at 10 AM' },
  { name: 'Dr. Kavita Singh', specialty: 'Varicose Vein Specialist', rating: 4.8, distance: '7.3 km', address: 'Gandhi Memorial Hospital, Ellis Nagar, Madurai, Tamil Nadu 625010', phone: '+91 43210 98765', availability: 'Call for appointment' }
];

// Map CEAP stage -> recommended specialties (used for mock filtering)
const stageToSpecialties = {
  C0: ['General Physician', 'Dermatologist'],
  C1: ['General Physician', 'Dermatologist'],
  C2: ['Phlebologist', 'Vascular Surgeon'],
  C3: ['Phlebologist', 'Vascular Surgeon'],
  C4: ['Vascular Surgeon', 'Dermatologist'],
  C5: ['Vascular Surgeon', 'Dermatologist'],
  C6: ['Vascular Surgeon', 'Dermatologist', 'Wound Care']
};

// Helper: classify stage from filename (case-insensitive)
const classifyByFilename = (imageUri) => {
  const uriLower = (imageUri || '').toLowerCase();
  if (uriLower.includes('c0')) return 'C0';
  if (uriLower.includes('c1')) return 'C1';
  if (uriLower.includes('c2')) return 'C2';
  if (uriLower.includes('c3')) return 'C3';
  if (uriLower.includes('c4')) return 'C4';
  if (uriLower.includes('c5')) return 'C5';
  if (uriLower.includes('c6')) return 'C6';
  return 'C2'; // conservative default
};

// Fisher-Yates shuffle
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const analyzeImage = async (imageUri) => {
  // If using mock, return staged response based on filename
  if (config.USE_MOCK) {
    const stage = classifyByFilename(imageUri);
    const stageInfo = varicoseStages[stage] || varicoseStages.C2;

    // Build response object
    const response = {
      stage,
      stage_label: stageInfo.label || 'Varicose',
      confidence: +(0.8 + Math.random() * 0.18).toFixed(2), // 0.80 - 0.98
      severity: stageInfo.severity || 'Moderate',
      remedies: stageInfo.remedies || stageInfo.simple ? [stageInfo.simple] : [],
      next_steps: stage === 'C0' ? ['Maintain healthy habits', 'Monitor for changes'] : ['Book appointment with vascular specialist', 'Follow remedies recommended'],
      specialist: stageInfo.specialist || 'Phlebologist or Vascular Surgeon'
    };

    // We return after a short delay to simulate network
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, data: response }), 900 + Math.floor(Math.random() * 1200));
    });
  }

  // Real backend flow (multipart/form-data upload)
  try {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      name: imageUri.split('/').pop() || 'photo.jpg',
      type: 'image/jpeg',
    });

    const urlBase = config.BACKEND_URL ? config.BACKEND_URL.replace(/\/$/, '') : null;
    const predictPath = (config.apiEndpoints && config.apiEndpoints.predict) ? config.apiEndpoints.predict : '/predict';
    if (!urlBase) return { success: false, error: 'BACKEND_URL not configured' };

    const resp = await axios.post(`${urlBase}${predictPath}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 60000,
    });

    return { success: true, data: resp.data };
  } catch (err) {
    console.warn('analyzeImage error', err?.message || err, err?.response?.data || '');
    return { success: false, error: err?.response?.data || err?.message || 'Network error' };
  }
};

/**
 * findNearbySpecialists(latitude, longitude, specialty)
 * If USE_MOCK true => filter mockSpecialists by stage mapping (or by specialty string) and return random slice
 */
export const findNearbySpecialists = async (latitude, longitude, specialty = 'phlebologist') => {
  // Mock mode: filter by specialty keywords and randomly return up to 6
  if (config.USE_MOCK) {
    // Accept 'phlebologist' or 'vascular surgeon' or comma-separated list
    const wanted = ('' + (specialty || '')).toLowerCase().split(',').map(s => s.trim());
    // if no wanted keywords, return all shuffled
    let candidates = mockSpecialists.slice();

    // Filter if any keyword matches specialty text
    if (wanted.length > 0 && wanted[0] !== '') {
      candidates = candidates.filter(s => {
        const spec = (s.specialty || '').toLowerCase();
        return wanted.some(w => spec.includes(w) || s.name.toLowerCase().includes(w));
      });
      // if filter returns nothing, fallback to all
      if (candidates.length === 0) candidates = mockSpecialists.slice();
    }

    const shuffled = shuffle(candidates);
    const slice = shuffled.slice(0, Math.min(6, shuffled.length));
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, data: slice }), 650 + Math.floor(Math.random() * 600));
    });
  }

  // Real backend call
  try {
    const urlBase = config.BACKEND_URL ? config.BACKEND_URL.replace(/\/$/, '') : null;
    const specialistsPath = (config.apiEndpoints && config.apiEndpoints.specialists) ? config.apiEndpoints.specialists : '/specialists';
    if (!urlBase) return { success: false, error: 'BACKEND_URL not configured' };

    const resp = await axios.get(`${urlBase}${specialistsPath}`, {
      params: { latitude, longitude, radius: 5000, q: specialty },
      timeout: 20000,
    });

    // Normalize resp
    const list = (resp.data && resp.data.specialists) ? resp.data.specialists : (Array.isArray(resp.data) ? resp.data : []);
    return { success: true, data: list };
  } catch (err) {
    console.warn('findNearbySpecialists error:', err?.message || err, err?.response?.data || '');
    return { success: false, error: err?.response?.data || err?.message || 'Network error' };
  }
};
