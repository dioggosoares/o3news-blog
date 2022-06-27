import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Article } from 'phosphor-react'

// IMPORT UTILS
import { variants } from '../utils/motion'
import { shortenString } from '../utils/shortenString'

// IMPORT LIBS
import { getLastPosts } from './api/_lib/getLastPosts'

// IMPORT COMPONENTS
import { ShimmerLastPosts } from '../components'

// IMPORT IMAGES
import emoji from '../assets/svg/emoji.svg'

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  timeAt: string;
};

interface PostsProps {
  posts: Post[];
}

const expireTime = 60 * 60 * 24; // 24 horas

export default function Home({ posts }: PostsProps) {
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  async function getPostsOnLoad() {
    setIsLoadingPosts(true)
    // setTimeout(async () => {}, 2000)
    try {
      await getLastPosts()

      setIsLoadingPosts(false)
    } catch (err) {
      setIsLoadingPosts(false)
    }
  }

  useEffect(() => {
    getPostsOnLoad()
  }, [])

  return (
    <>
      <Head>
        <title>Home | O₃.news</title>
      </Head>

      <main className="flex flex-col w-full min-h-[calc(100vh-5rem)] my-0 mx-auto">
        <section className="flex w-full h-full items-center justify-center mx-auto pt-20 bg-graycustom-900">
          <div className="flex w-full pb-16 mt-16 bg-gradient-to-r from-cyanis-500/50 to-graycustom-700/80 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div className="mx-auto max-w-5/6 -mt-8 md:mt-0 px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        A Enfermagem é uma arte; e para realizá-la como arte, requer uma devoção tão exclusiva, um preparo tão rigoroso, quanto a obra de qualquer pintor ou escultor; pois o que é tratar da tela morta ou do frio mármore comparado ao tratar do corpo vivo, o templo do espírito de Deus? É uma das artes; poder-se-ia dizer, a mais bela das artes!
                      </p>
                      <span className="text-sm font-normal text-gold-500"> - Florence Nightingale</span>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">Janara Natacha</p>
                      <p className="text-base font-medium text-cyan-100">Enfermeira Estética @naturebenesserebsb</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full h-full items-center justify-center mx-auto my-20 md:my-28 px-8">
          <div className="w-full max-w-5/6 grid grid-cols-1 md:flex md:flex-row mx-8">
            <div id="posts" className="flex flex-col max-w-2/3 w-[25rem] mb-10 md:mb-auto px-2">
              <p className="text-lg font-medium text-cyanis-500 mb-2">Últimos Artigos</p>
              {isLoadingPosts
                ?
                posts.map((post, index) => (
                  <ShimmerLastPosts key={index} />
                ))
                :
                posts.length > 0
                  ?
                  posts.map((post) => (
                    <div key={post.slug} className="flex flex-row items-start gap-4 py-4">
                      <div className="bg-graycustom-700/50 px-6 py-6 w-max h-max rounded-lg">
                        <Article size={56} color="#61dcfb" />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <Link key={post.slug} href={`/posts/${post.slug}`}>
                          <a href={`/posts/${post.slug}`} className="block">
                            <AnimatePresence>
                              <motion.div
                                variants={variants}
                                initial={"overlayFieldHidden"}
                                animate={"overlayFieldShow"}
                                transition={{ delay: 0.2 }}
                                exit={"overlayCardHidden"}
                              >
                                <strong className="block text-2xl leading-8 transition-all duration-150 ease-linear">
                                  {shortenString(post.title, 44)}
                                </strong>
                                <time className="flex flex-row items-center mt-4 text-graycustom-300">
                                  {post.updatedAt}
                                </time>
                              </motion.div>
                            </AnimatePresence>
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))
                  :
                  <AnimatePresence>
                    <motion.div
                      variants={variants}
                      initial={"overlayFieldHidden"}
                      animate={"overlayFieldShow"}
                      transition={{ delay: 0.2 }}
                      exit={"overlayCardHidden"}
                    >
                      <div className="flex flex-col items-start gap-2">
                        <Image src={emoji} width={20} height={20}/>
                        <span className="text-graycustom-100 font-medium text-xl text-left">Nenhum artigo publicado.</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
              }
            </div>

            <div className="max-w-2/3 px-2 md:px-16 mb-10">
              <div className="mb-28">
                <h1 className="text-3xl font-bold mb-10">Tudo o que voce precisa saber sobre Ozonioterapia</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh. Mattis enim ut tellus elementum sagittis. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Vitae semper quis lectus nulla at volutpat diam ut. Turpis egestas maecenas pharetra convallis posuere morbi. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nisl suscipit adipiscing bibendum est. In hac habitasse platea dictumst quisque. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Cras sed felis eget velit aliquet sagittis. Lobortis elementum nibh tellus molestie nunc non. Vitae et leo duis ut diam. Sed id semper risus in hendrerit gravida rutrum quisque. Vel facilisis volutpat est velit egestas. Pulvinar neque laoreet suspendisse interdum consectetur libero id.

                  Id diam vel quam elementum pulvinar etiam non quam lacus. Dui id ornare arcu odio ut sem nulla. Sit amet porttitor eget dolor morbi non arcu. Eu augue ut lectus arcu. At quis risus sed vulputate. Erat nam at lectus urna duis. Purus in massa tempor nec feugiat nisl. Id ornare arcu odio ut sem nulla pharetra diam. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sed viverra tellus in hac habitasse platea. Vitae semper quis lectus nulla. Consequat interdum varius sit amet. Faucibus a pellentesque sit amet porttitor. Ante metus dictum at tempor commodo. Dolor morbi non arcu risus quis varius quam quisque id. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
              </div>

              <div className="">
                <h1 className="text-3xl font-bold mb-10">Saúde Integrativa e Saúde Estética</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh. Mattis enim ut tellus elementum sagittis. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Vitae semper quis lectus nulla at volutpat diam ut. Turpis egestas maecenas pharetra convallis posuere morbi. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nisl suscipit adipiscing bibendum est. In hac habitasse platea dictumst quisque. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Cras sed felis eget velit aliquet sagittis. Lobortis elementum nibh tellus molestie nunc non. Vitae et leo duis ut diam. Sed id semper risus in hendrerit gravida rutrum quisque. Vel facilisis volutpat est velit egestas. Pulvinar neque laoreet suspendisse interdum consectetur libero id.

                  Id diam vel quam elementum pulvinar etiam non quam lacus. Dui id ornare arcu odio ut sem nulla. Sit amet porttitor eget dolor morbi non arcu. Eu augue ut lectus arcu. At quis risus sed vulputate. Erat nam at lectus urna duis. Purus in massa tempor nec feugiat nisl. Id ornare arcu odio ut sem nulla pharetra diam. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sed viverra tellus in hac habitasse platea. Vitae semper quis lectus nulla. Consequat interdum varius sit amet. Faucibus a pellentesque sit amet porttitor. Ante metus dictum at tempor commodo. Dolor morbi non arcu risus quis varius quam quisque id. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

// STATIC SITE GENERATION
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLastPosts()

  return {
    props: {
      posts,
    },
    revalidate: expireTime,
  };
}
