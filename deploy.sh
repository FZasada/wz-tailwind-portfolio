#!/bin/bash

# Portfolio Deployment Script
# Automates the entire deployment process

set -e  # Exit on any error

echo "🚀 Starting Portfolio Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${YELLOW}⚠️  You have uncommitted changes:${NC}"
    git status --short
    echo ""
    read -p "Do you want to commit these changes? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}📝 Committing changes...${NC}"
        git add .
        
        # Get commit message
        echo "Enter commit message (or press Enter for auto-generated): "
        read commit_message
        
        if [[ -z "$commit_message" ]]; then
            commit_message="Portfolio update - $(date '+%Y-%m-%d %H:%M')"
        fi
        
        git commit -m "$commit_message"
        echo -e "${GREEN}✅ Changes committed${NC}"
    else
        echo -e "${YELLOW}⚠️  Continuing without committing changes${NC}"
    fi
fi

# Push changes to GitHub
echo -e "${BLUE}📤 Pushing changes to GitHub...${NC}"
git push origin master

# Install dependencies if node_modules doesn't exist or package.json was modified
if [[ ! -d "node_modules" ]] || [[ package.json -nt node_modules ]]; then
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    npm install
fi

# Run linting
echo -e "${BLUE}🔍 Running linting...${NC}"
npm run lint

# Build the project
echo -e "${BLUE}🔨 Building project...${NC}"
npm run build

# Deploy to GitHub Pages
echo -e "${BLUE}🌐 Deploying to GitHub Pages...${NC}"
npm run deploy

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}🌍 Your site will be available at: https://wiktoriazemla.com${NC}"

# Optional: Open the site in browser
read -p "Open the site in browser? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v open > /dev/null; then
        open "https://wiktoriazemla.com"
    elif command -v xdg-open > /dev/null; then
        xdg-open "https://wiktoriazemla.com"
    else
        echo "Please open https://wiktoriazemla.com manually"
    fi
fi