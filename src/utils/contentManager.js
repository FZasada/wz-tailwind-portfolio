import contentData from '../data/content.json';
import projectsData from '../data/projects.json';
import timelineData from '../data/timeline.json';
import assetsConfig from '../data/assets.json';

/**
 * Content Management Utility
 * Centralized access to all content data
 */
class ContentManager {
  constructor() {
    this.content = contentData;
    this.projects = projectsData;
    this.timeline = timelineData;
    this.assets = assetsConfig;
  }

  // Site Information
  getSiteInfo() {
    return this.content.siteInfo;
  }

  getEmail() {
    return this.content.siteInfo.email;
  }

  getCvPassword() {
    return this.content.siteInfo.cvPassword;
  }

  // Hero Section
  getHeroContent() {
    return this.content.hero;
  }

  // About Section  
  getAboutContent() {
    return this.content.about;
  }

  getLanguages() {
    return this.content.about.languages;
  }

  // What I Do Section
  getWhatIDoContent() {
    return this.content.whatIDo;
  }

  getServices() {
    return this.content.whatIDo.services;
  }

  // Tools
  getTools() {
    return this.content.tools;
  }

  // Projects
  getAllProjects() {
    return this.projects;
  }

  getFeaturedProjects() {
    return this.projects.filter(project => project.featured);
  }

  getProjectBySlug(slug) {
    return this.projects.find(project => project.slug === slug);
  }

  getProjectById(id) {
    return this.projects.find(project => project.id === parseInt(id));
  }

  // Timeline
  getWorkExperience() {
    return this.timeline.filter(item => item.type === 'work');
  }

  getEducation() {
    return this.timeline.filter(item => item.type === 'education');
  }

  getAllTimeline() {
    return this.timeline;
  }

  // Asset Helpers
  getAssetPath(assetKey) {
    const keys = assetKey.split('.');
    let path = this.assets;
    
    for (const key of keys) {
      path = path[key];
      if (!path) return null;
    }
    
    return path;
  }

  getImagePath(imageName) {
    return `${this.assets.basePaths.images}/${imageName}`;
  }

  getProjectImagePath(projectSlug, imageType = 'logo') {
    const project = this.getProjectBySlug(projectSlug);
    if (!project || !project.images[imageType]) return null;
    
    return `${this.assets.basePaths.projects}/${project.images[imageType]}`;
  }

  // Dynamic import helpers for Vite
  async getImageImport(imagePath) {
    try {
      const modules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,gif}', { eager: true });
      const fullPath = `/src/assets/${imagePath}`;
      return modules[fullPath]?.default || null;
    } catch (error) {
      console.warn(`Image not found: ${imagePath}`);
      return null;
    }
  }

  // Bulk image loading for projects
  async loadProjectImages(project) {
    const imagePromises = {};
    
    for (const [key, imagePath] of Object.entries(project.images)) {
      imagePromises[key] = this.getImageImport(`projects/${imagePath}`);
    }
    
    const resolvedImages = {};
    for (const [key, promise] of Object.entries(imagePromises)) {
      resolvedImages[key] = await promise;
    }
    
    return {
      ...project,
      images: resolvedImages
    };
  }
}

// Create singleton instance
const contentManager = new ContentManager();

export default contentManager;

// Named exports for convenience
export const {
  getSiteInfo,
  getEmail,
  getCvPassword,
  getHeroContent,
  getAboutContent,
  getLanguages,
  getWhatIDoContent,
  getServices,
  getTools,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectById,
  getWorkExperience,
  getEducation,
  getAllTimeline,
  getAssetPath,
  getImagePath,
  getProjectImagePath,
  getImageImport,
  loadProjectImages
} = contentManager;