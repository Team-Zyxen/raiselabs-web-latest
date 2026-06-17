const fs = require('fs');
const path = require('path');

const output = [];
const blogDir = path.join(process.cwd(), "content", "blog");
let files = [];
if (fs.existsSync(blogDir)) {
  files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
}

for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const slugMatch = content.match(/^slug:\s*(.+)$/m);
  const titleMatch = content.match(/^title:\s*(.+)$/m);
  const excerptMatch = content.match(/^excerpt:\s*(.+)$/m);
  
  const slug = slugMatch ? slugMatch[1].trim().replace(/^['"]|['"]$/g, '') : '';
  const title = titleMatch ? titleMatch[1].trim().replace(/^['"]|['"]$/g, '') : '';
  const excerpt = excerptMatch ? excerptMatch[1].trim().replace(/^['"]|['"]$/g, '') : '';
  
  output.push({ slug, title, excerpt, source: file });
}

const blogsJsonPath = path.join(process.cwd(), "content", "blogs.json");
if (fs.existsSync(blogsJsonPath)) {
  const blogsJson = JSON.parse(fs.readFileSync(blogsJsonPath, 'utf8'));
  if (blogsJson.posts) {
    for (const post of blogsJson.posts) {
      output.push({ slug: post.slug, title: post.title, excerpt: post.excerpt, source: 'blogs.json' });
    }
  }
}

const newsJsonPath = path.join(process.cwd(), "content", "news.json");
if (fs.existsSync(newsJsonPath)) {
  const newsJson = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));
  // user asked for blog content, but let's check if news contains blog posts? Probably not.
}

// Deduplicate by slug
const seen = new Set();
const uniqueOutput = [];
for (const item of output) {
  if (!seen.has(item.slug)) {
    seen.add(item.slug);
    uniqueOutput.push(`SLUG: ${item.slug}\nTITLE: ${item.title}\nTOPIC: ${item.excerpt}`);
  }
}

console.log(uniqueOutput.join('\n\n'));
