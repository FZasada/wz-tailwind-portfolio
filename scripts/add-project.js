#!/usr/bin/env node

/**
 * Quick Project Addition Script
 * Interactive script to add new projects to the portfolio
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: globalThis.process.stdin,
  output: globalThis.process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function addProject() {
  console.log('🎨 Adding a new project to your portfolio...\n');

  // Get project details
  const title = await question('Project title: ');
  const subtitle = await question('Subtitle: ');
  const shortDescription = await question('Short description: ');
  const tags = (await question('Tags (comma-separated): ')).split(',').map(tag => tag.trim());
  const color = await question('Background color (hex): ');
  const client = await question('Client name: ');
  const date = await question('Project date/year: ');
  const featured = (await question('Featured project? (y/n): ')).toLowerCase() === 'y';

  const slug = generateSlug(title);

  // Load existing projects
  const projectsPath = path.join(__dirname, '../src/data/projects.json');
  const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

  // Get next ID
  const nextId = Math.max(...projects.map(p => p.id)) + 1;

  // Create new project
  const newProject = {
    id: nextId,
    slug,
    title,
    subtitle,
    shortDescription,
    tags,
    color,
    images: {
      logo: `${slug}/${slug}.png`,
      banner: `${slug}/banner.png`,
      banner2: `${slug}/banner2.png`
    },
    webUrl: `/project/${slug}`,
    featured,
    date,
    client,
    content: {
      introduction: "Add your project introduction here...",
      problemOverview: "Describe the problem this project solved...",
      designProcess: "Explain your design process...",
      result: "Describe the final result and impact..."
    }
  };

  // Add to projects array
  projects.push(newProject);

  // Save back to file
  fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));

  // Create project assets directory
  const projectAssetsDir = path.join(__dirname, '../src/assets/projects', slug);
  if (!fs.existsSync(projectAssetsDir)) {
    fs.mkdirSync(projectAssetsDir, { recursive: true });
    console.log(`📁 Created project assets directory: ${projectAssetsDir}`);
  }

  console.log('\n✅ Project added successfully!');
  console.log(`📝 Don't forget to:`);
  console.log(`   • Add images to: src/assets/projects/${slug}/`);
  console.log(`   • Update project content in: src/data/projects.json`);
  console.log(`   • Required images: ${slug}.png, banner.png, banner2.png`);

  rl.close();
}

addProject().catch(console.error);