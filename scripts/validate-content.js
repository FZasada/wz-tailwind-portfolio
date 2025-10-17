#!/usr/bin/env node

/**
 * Content Validation Script
 * Validates all JSON content files for structure and required fields
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../src/data');

// Validation schemas
const schemas = {
  content: {
    required: ['siteInfo', 'hero', 'about', 'whatIDo', 'tools'],
    siteInfo: ['name', 'title', 'email', 'cvPassword'],
    hero: ['greeting', 'name', 'tagline', 'image'],
    about: ['languages', 'mainText', 'freeTimeText'],
    whatIDo: ['title', 'description', 'services']
  },
  projects: {
    required: ['id', 'slug', 'title', 'subtitle', 'shortDescription', 'tags', 'images'],
    images: ['logo', 'banner']
  },
  timeline: {
    required: ['type', 'date', 'title', 'company']
  }
};

function validateObject(obj, schema, path = '') {
  const errors = [];

  if (schema.required) {
    for (const field of schema.required) {
      if (!(field in obj)) {
        errors.push(`Missing required field: ${path}${field}`);
      } else if (schema[field]) {
        // Nested validation
        const nestedErrors = validateObject(obj[field], { required: schema[field] }, `${path}${field}.`);
        errors.push(...nestedErrors);
      }
    }
  }

  return errors;
}

function validateFile(filename, schema) {
  const filePath = path.join(dataDir, filename);
  
  if (!fs.existsSync(filePath)) {
    return [`File not found: ${filename}`];
  }

  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (Array.isArray(content)) {
      const errors = [];
      content.forEach((item, index) => {
        const itemErrors = validateObject(item, schema, `[${index}].`);
        errors.push(...itemErrors);
      });
      return errors;
    } else {
      return validateObject(content, schema);
    }
  } catch (error) {
    return [`Invalid JSON in ${filename}: ${error.message}`];
  }
}

function validateAssets() {
  const errors = [];
  const assetsPath = path.join(__dirname, '../src/assets');
  
  // Check if required asset directories exist
  const requiredDirs = ['icons', 'projects', 'about_me'];
  
  for (const dir of requiredDirs) {
    const dirPath = path.join(assetsPath, dir);
    if (!fs.existsSync(dirPath)) {
      errors.push(`Missing asset directory: ${dir}`);
    }
  }

  // Validate project images
  try {
    const projects = JSON.parse(fs.readFileSync(path.join(dataDir, 'projects.json'), 'utf8'));
    
    for (const project of projects) {
      for (const [imageType, imagePath] of Object.entries(project.images)) {
        const fullPath = path.join(assetsPath, 'projects', imagePath);
        if (!fs.existsSync(fullPath)) {
          errors.push(`Missing project image: ${project.slug}/${imageType} (${imagePath})`);
        }
      }
    }
  } catch (error) {
    errors.push(`Error validating project assets: ${error.message}`);
  }

  return errors;
}

// Run validation
console.log('🔍 Validating content files...\n');

const allErrors = [];

// Validate content files
const contentErrors = validateFile('content.json', schemas.content);
allErrors.push(...contentErrors.map(err => `content.json: ${err}`));

const projectErrors = validateFile('projects.json', schemas.projects);
allErrors.push(...projectErrors.map(err => `projects.json: ${err}`));

const timelineErrors = validateFile('timeline.json', schemas.timeline);
allErrors.push(...timelineErrors.map(err => `timeline.json: ${err}`));

// Validate assets
const assetErrors = validateAssets();
allErrors.push(...assetErrors.map(err => `assets: ${err}`));

// Report results
if (allErrors.length === 0) {
  console.log('✅ All content files are valid!');
  process.exit(0);
} else {
  console.log('❌ Validation errors found:\n');
  allErrors.forEach(error => console.log(`  • ${error}`));
  console.log(`\n${allErrors.length} errors found.`);
  process.exit(1);
}