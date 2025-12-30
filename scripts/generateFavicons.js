/**
 * Favicon Generator Script for Phani Manda Portfolio
 * Generates all favicon sizes from the SVG source
 * 
 * Run: node scripts/generateFavicons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const sourceSvg = path.join(publicDir, 'favicon-source.svg');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-144x144.png', size: 144 },
];

async function generateFavicons() {
  console.log('\n🎨 Generating favicons from SVG...');
  console.log('📁 Output directory:', publicDir);
  console.log('');

  // Read the SVG file
  const svgBuffer = fs.readFileSync(sourceSvg);

  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);
    
    try {
      await sharp(svgBuffer, { density: 300 })
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`❌ Failed to generate ${name}:`, error.message);
    }
  }

  // Generate favicon.ico from 32x32
  try {
    const faviconIco = path.join(publicDir, 'favicon.ico');
    
    // Generate as PNG with .ico extension (browsers accept PNG data in .ico files)
    await sharp(svgBuffer, { density: 300 })
      .resize(32, 32)
      .png()
      .toFile(faviconIco);
    
    console.log(`✅ Generated: favicon.ico (32x32)`);
  } catch (error) {
    console.error('❌ ICO generation failed:', error.message);
  }

  // Also generate og-image.png for social sharing
  try {
    const ogImagePath = path.join(publicDir, 'og-image.png');
    
    // Create a 1200x630 Open Graph image with purple gradient background
    const ogSvg = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#49108b"/>
            <stop offset="100%" style="stop-color:#7e30e1"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)"/>
        <text x="600" y="250" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="72" fill="#ffffff" font-weight="900">Phani Manda</text>
        <text x="600" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="#e26ee5">Full Stack Developer</text>
        <text x="600" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" opacity="0.8">React • Node.js • Python • MongoDB</text>
        <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#a78bfa">www.phanimanda.live</text>
      </svg>
    `;
    
    await sharp(Buffer.from(ogSvg))
      .png()
      .toFile(ogImagePath);
    
    console.log(`✅ Generated: og-image.png (1200x630) for social sharing`);
  } catch (error) {
    console.error('❌ OG image generation failed:', error.message);
  }

  console.log('\n✨ Favicon generation complete!');
  console.log('\n📝 Files generated:');
  console.log('   • favicon.ico - Browser tab icon');
  console.log('   • favicon-16x16.png - Small icon');
  console.log('   • favicon-32x32.png - Standard icon');
  console.log('   • apple-touch-icon.png - iOS home screen');
  console.log('   • android-chrome-192x192.png - Android small');
  console.log('   • android-chrome-512x512.png - Android large');
  console.log('   • mstile-144x144.png - Windows tiles');
  console.log('   • og-image.png - Social media sharing');
  console.log('\n🚀 Run: npm run build\n');
}

generateFavicons().catch(console.error);
