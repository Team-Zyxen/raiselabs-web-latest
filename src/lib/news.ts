import newsData from "../../content/news.json"

export interface News {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
  featured: boolean
  published: boolean
}


// ✅ Always return newest first
export function getAllNews(): News[] {

  const filtered = newsData.posts.filter(news => news.published)

  // Netlify CMS adds new items at end → reverse makes newest first
  return [...filtered].reverse()

}


// Get single news
export function getNewsBySlug(slug: string): News | undefined {

  return newsData.posts.find(
    news => news.slug === slug && news.published
  )

}


// Featured news newest first
export function getFeaturedNews(): News[] {

  const filtered = newsData.posts.filter(
    news => news.published && news.featured
  )

  return [...filtered].reverse()

}
