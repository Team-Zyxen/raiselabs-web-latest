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


// Convert any date safely
function parseDate(dateString: string): number {

  if (!dateString) return 0

  // Handle ISO format safely
  const cleanDate = dateString.split("T")[0]

  const parts = cleanDate.split("-")

  if (parts.length !== 3) return 0

  const year = Number(parts[0])
  const month = Number(parts[1]) - 1
  const day = Number(parts[2])

  return new Date(year, month, day).getTime()
}


// ✅ Newest FIRST guaranteed
export function getAllNews(): News[] {

  return [...newsData.posts]
    .filter(news => news.published)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))

}


// Get single news
export function getNewsBySlug(slug: string): News | undefined {

  return newsData.posts.find(
    news => news.slug === slug && news.published
  )

}


// Featured news newest first
export function getFeaturedNews(): News[] {

  return [...newsData.posts]
    .filter(news => news.published && news.featured)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))

}
