const fs = require('fs');

let content = fs.readFileSync('app/services/page.tsx', 'utf-8');

// Remove docs array from objects
content = content.replace(/docs:\s*\[[\s\S]*?\],?\n/g, '');

// Remove the docs UI from the card
const cardUIRegex = /\s*<p className="text-gray-500 mb-5 flex items-center gap-1\.5 text-sm">[\s\S]*?{service\.docs\.length} कागदपत्रे आवश्यक[\s\S]*?<\/p>/g;
content = content.replace(cardUIRegex, '');

// Remove the docs UI from the modal
const modalUIRegex = /\s*<div className="border-t border-b border-gray-100 py-6 my-4">[\s\S]*?<FileCheck size={20} className="mr-2" \/> आवश्यक कागदपत्रे:[\s\S]*?<\/ul>\s*<\/div>/g;
content = content.replace(modalUIRegex, '');

fs.writeFileSync('app/services/page.tsx', content);
console.log('Done!');
