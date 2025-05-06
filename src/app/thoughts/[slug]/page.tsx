import path from 'path'
import { promises as fs } from 'fs'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/thoughts/posts')
  const files = await fs.readdir(postsDirectory)
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace('.mdx', '')
    }))
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`../posts/${slug}.mdx`)

  return (
    <div className="container">
      <main className="thoughts">
        <Post />
      </main>
    </div>
  )
}

export const dynamicParams = false;