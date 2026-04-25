// Script to generate placeholder preview images for all templates
const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder with text
function createPlaceholderSVG(text, color = '#7c6cf5') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="320" height="180" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="180" fill="#0c0c0f"/>
  <rect width="320" height="180" fill="${color}" fill-opacity="0.1"/>
  <text x="160" y="90" font-family="Arial, sans-serif" font-size="14" fill="${color}" text-anchor="middle" font-weight="500">
    ${text}
  </text>
</svg>`;
}

// Templates that need preview images
const templates = [
  // Root level templates
  'index-swiss-prototype',
  'index_apple', 
  'index_blueprint',
  
  // Prototype-1 templates
  'arvamused_component',
  'asukoht_component',
  'footer_component',
  'galerii_component',
  'gallery_koolitus_component',
  'hateless_emotion_wheel',
  'hateless_emotion_wheel_1',
  'hero_component',
  'hinnad_component',
  'hoiatus_taimer_component',
  'index',
  'kliendid_component',
  'koolitaja_component',
  'lean_areng_component',
  'mida_annab_component',
  'miks_valida_component',
  'paevane_arengutee_component',
  'programm_component',
  'registreeru_component',
  'teekond_component',
  'toetus_koolitaja_component',
  'tootmisjuhtimine_prototype',
  'tunnistus_component',
  
  // Prototype-2 templates
  'apple',
  'index_apple',
  
  // Prototype-3 templates
  'blueprint',
  'index_blueprint',
  
  // Prototype-4 templates
  'index',
  'index_smartfactory',
  
  // Prototype-5 templates
  'index',
  'index_swiss',
  
  // Web-templates (same as prototype-1)
  'arvamused_component',
  'asukoht_component',
  'footer_component',
  'galerii_component',
  'gallery_koolitus_component',
  'hero_component',
  'hinnad_component',
  'hoiatus_taimer_component',
  'kliendid_component',
  'koolitaja_component',
  'lean_areng_component',
  'mida_annab_component',
  'miks_valida_component',
  'paevane_arengutee_component',
  'programm_component',
  'registreeru_component',
  'teekond_component',
  'toetus_koolitaja_component',
  'tunnistus_component'
];

// Create preview directories if they don't exist
const previewDirs = ['previews', 'prototype-1/previews', 'prototype-2/previews', 'prototype-3/previews', 'prototype-4/previews', 'prototype-5/previews', 'web-templates/previews'];

previewDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('Preview images would be generated for all templates.');
console.log('Note: This is a placeholder script - actual SVG generation would require a different approach.');
