/**
 * Generate Content Index Script
 * This script scans the content folders and creates index files
 * that list all available blog posts and projects.
 * 
 * Usage: node scripts/generate-content-index.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');
const PROJECTS_DIR = path.join(CONTENT_DIR, 'projects');

/**
 * Get all markdown files from a directory
 */
function getMarkdownFiles(dir) {
    if (!fs.existsSync(dir)) {
        console.warn(`Directory not found: ${dir}`);
        return [];
    }

    return fs.readdirSync(dir)
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''));
}

/**
 * Parse frontmatter from markdown file
 */
function parseFrontmatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]+?)\n---/);

    if (!match) return null;

    const frontmatter = {};
    match[1].split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            value = value.replace(/^["']|["']$/g, '');

            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
            }

            frontmatter[key] = value;
        }
    });

    return frontmatter;
}

/**
 * Generate blog index
 */
function generateBlogIndex() {
    console.log('📝 Generating blog index...');

    const blogFiles = getMarkdownFiles(BLOG_DIR);
    const blogPosts = [];

    blogFiles.forEach(slug => {
        const filePath = path.join(BLOG_DIR, `${slug}.md`);
        const frontmatter = parseFrontmatter(filePath);

        if (frontmatter && frontmatter.published !== 'false') {
            blogPosts.push({
                slug,
                title: frontmatter.title || slug,
                date: frontmatter.date || new Date().toISOString(),
                excerpt: frontmatter.excerpt || '',
                tags: frontmatter.tags || [],
                author: frontmatter.author || 'Prashant Baral',
                image: frontmatter.image || ''
            });
        }
    });

    // Sort by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write index file
    const indexPath = path.join(BLOG_DIR, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(blogPosts, null, 2));

    console.log(`✅ Blog index generated: ${blogPosts.length} posts`);
    return blogPosts;
}

/**
 * Generate projects index
 */
function generateProjectsIndex() {
    console.log('🚀 Generating projects index...');

    const projectFiles = getMarkdownFiles(PROJECTS_DIR);
    const projects = [];

    projectFiles.forEach(slug => {
        const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
        const frontmatter = parseFrontmatter(filePath);

        if (frontmatter) {
            projects.push({
                slug,
                title: frontmatter.title || slug,
                description: frontmatter.description || '',
                technologies: frontmatter.technologies || [],
                image: frontmatter.image || '',
                demo_url: frontmatter.demo_url || '',
                github_url: frontmatter.github_url || '',
                featured: frontmatter.featured === 'true' || frontmatter.featured === true,
                order: parseInt(frontmatter.order) || 0
            });
        }
    });

    // Sort by order
    projects.sort((a, b) => a.order - b.order);

    // Write index file
    const indexPath = path.join(PROJECTS_DIR, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(projects, null, 2));

    console.log(`✅ Projects index generated: ${projects.length} projects`);
    return projects;
}

/**
 * Main function
 */
function main() {
    console.log('🔧 Starting content index generation...\n');

    try {
        const blogPosts = generateBlogIndex();
        const projects = generateProjectsIndex();

        console.log('\n📊 Summary:');
        console.log(`   Blog posts: ${blogPosts.length}`);
        console.log(`   Projects: ${projects.length}`);
        console.log('\n✨ Content index generation complete!');

    } catch (error) {
        console.error('❌ Error generating content index:', error);
        process.exit(1);
    }
}

// Run the script
main();