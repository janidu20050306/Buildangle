import { getPost, getPostMetadata, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const metadata = getPostMetadata(slug);
  return metadata || {};
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="bg-cream min-h-screen pt-24 text-navy">
      <Container className="mb-16">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-bold text-navy/40 hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft size={14} className="mr-3" /> Back to Journal
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-6 mb-8">
            <span className="bg-gold text-navy text-[10px] uppercase font-black px-4 py-1.5 rounded-full tracking-widest">
              {post.category}
            </span>
            <span className="text-[10px] uppercase font-bold text-navy/40 tracking-widest flex items-center">
              <Calendar size={12} className="mr-2" /> {post.date}
            </span>
            <span className="text-[10px] uppercase font-bold text-navy/40 tracking-widest flex items-center">
              <Clock size={12} className="mr-2" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight tracking-tight uppercase">
            {post.title}
          </h1>

          <p className="text-xl text-navy/60 font-light leading-relaxed italic mb-12">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between py-8 border-y border-navy/10">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-serif text-navy">{post.author}</p>
                <p className="text-[10px] uppercase font-bold text-navy/40 tracking-widest">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="p-3 border border-navy/10 hover:border-gold hover:text-gold transition-colors rounded-full">
                <Share2 size={18} />
              </button>
              <button className="p-3 border border-navy/10 hover:border-gold hover:text-gold transition-colors rounded-full">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative aspect-[21/9] w-full mb-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/20" />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto">
          <article 
            className="prose prose-lg prose-headings:font-serif prose-headings:uppercase prose-headings:tracking-tight prose-p:font-light prose-p:leading-relaxed prose-a:text-gold hover:prose-a:text-gold/80 prose-img:rounded-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-12 border-t border-navy/10">
            <div className="flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-6 py-2 border border-navy/10 text-xs uppercase tracking-widest font-bold text-navy/60 hover:border-gold hover:text-gold transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <section className="section-padding bg-navy/5 mt-20 border-t border-navy/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-[10px] uppercase font-bold text-gold tracking-[0.4em] mb-12 text-center">Continue Reading</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="group">
                  <span className="text-[10px] uppercase font-bold text-navy/40 tracking-widest flex items-center mb-4">
                    <ArrowLeft size={12} className="mr-2" /> Previous Article
                  </span>
                  <h4 className="text-xl font-serif text-navy group-hover:text-gold transition-colors uppercase tracking-tight">
                    {prevPost.title}
                  </h4>
                </Link>
              )}
              
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group md:text-right md:ml-auto">
                  <span className="text-[10px] uppercase font-bold text-navy/40 tracking-widest flex items-center md:justify-end mb-4">
                    Next Article <ArrowRight size={12} className="ml-2" />
                  </span>
                  <h4 className="text-xl font-serif text-navy group-hover:text-gold transition-colors uppercase tracking-tight">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}