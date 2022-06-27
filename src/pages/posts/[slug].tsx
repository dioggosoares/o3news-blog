import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { signIn, getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { CalendarBlank } from 'phosphor-react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORT SERVICES
import { getPrismicClient } from '../../services/prismic'

// IMPORT COMPONENTS
import { Author, DeepLinksBar, ShimmerAuthor } from '../../components'

// IMPORT LIBS
import { getAuthor } from '../api/_lib/getAuthor';

interface PostProps {
  post: {
    slug: string;
    category: string;
    subject: string;
    title: string;
    content: any;
    updatedAt: string;
  }
  author: {
    image: string;
    alt: string;
    instagram: string;
    linkedin: string;
    name: string;
    content: string;
  }
}

export default function Post({ post, author }: PostProps) {
  const { data } = useSession()
  const [isLoadingAuthor, setIsLoadingAuthor] = useState(false)

  async function fetchAuthor() {
    setIsLoadingAuthor(true);
    // setTimeout(async () => {}, 5000)
    try {
      await getAuthor()

      setIsLoadingAuthor(false)
    } catch (err) {
      setIsLoadingAuthor(false);
      toast("Erro ao carregar as informações da autora 😮‍💨 !!!");
    }
  }

  useEffect(() => {
    fetchAuthor()
  }, [])

  return (
    <>
      <Head>
        <title>{post.title} | O₃.news</title>
      </Head>

      <main className="w-full min-h-[calc(100vh-5rem)] my-0 mx-auto py-20">
      {isLoadingAuthor
          ?
          <ShimmerAuthor />
          :
          <Author
            name={author?.name}
            image={author?.image}
            alt={author?.alt}
            content={author?.content}
            instagram={author?.instagram}
            linkedin={author?.linkedin}
          />
        }
        <DeepLinksBar category={post.category} subject={post.subject} />
        <article id="post" className="max-w-2/3 my-5 mx-auto mt-10 px-8">
          <h1 className="text-5/6 font-black">{post.title}</h1>
          <time className="flex flex-row items-center text-graycustom-300 mt-6">
            <CalendarBlank color="#04D361" className="mr-2.5" />
            {post.updatedAt}
          </time>
          {data
            ?
            <div
              id="postContent"
              className="mt-8 leading-8 text-lg text-graycustom-100"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            :
            <>
              <div
                id="postContent"
                className="mt-8 leading-8 text-lg text-graycustom-100 previewContent"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="text-center bg-graycustom-850 h-20 rounded-6xl border-0 text-lg md:text-xl leading-4 font-bold px-4 py-6 mt-10 mx-auto mb-8">
                Entre com sua conta Google para continuar.
                <button onClick={() => signIn('google')} className="ml-2 mt-2 md:mt-0 text-gold-500 bg-transparent border-0 hover:underline underline-offset-4 transition-all duration-150 ease-linear">
                  Clique aqui 🤗
                </button>
              </div>
            </>
          }
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const { slug } = params

  const author = await getAuthor()

  const prismic = getPrismicClient

  const response = await prismic.getByUID('my-post-type', String(slug), {})

  const post = {
    slug,
    category: response.data.category,
    subject: RichText.asText(response.data.subject),
    title: RichText.asText(response.data.title),
    content: session ? RichText.asHtml(response.data.content) : RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.first_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }

  return {
    props: {
      post,
      author,
    }
  }
}
