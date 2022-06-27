import { useState, useMemo, useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CalendarBlank } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { RichText } from "prismic-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORT API
import { api } from "../../services/api";

// IMPORT LIBS
import { getPosts } from "../api/_lib/getPosts";
import { getAuthor } from '../api/_lib/getAuthor';

// IMPORT COMPONENTS
import {
  Author,
  SearchBar,
  Loading,
  InfinityScroll,
  ShimmerPosts,
  ShimmerAuthor,
} from "../../components";

// IMPORT UTILS
import { variants } from '../../utils/motion';

// IMPORT IMAGES
import emoji from '../../assets/svg/emoji.svg'

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  timeAt: string;
};

type Author = {
  image: string;
  alt: string;
  instagram: string;
  linkedin: string;
  name: string;
  content: string;
};

type PostsPaginationProps = {
  next_page: string;
  results: Post[];
};

interface PostsProps {
  posts: PostsPaginationProps;
  author: Author;
}

const expireTime = 60 * 60 * 24; // 24 horas

export default function Posts({ posts, author }: PostsProps) {
  const { next_page, results } = posts

  const [busca, setBusca] = useState<string>('')
  const [nextPage, setNextPage] = useState<string>(next_page)
  const [listPosts, setListPosts] = useState(results)
  const [isLoadingAuthor, setIsLoadingAuthor] = useState(false)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  const [isLoadingMorePosts, setIsLoadingMorePosts] = useState(false)

  const filtered = useMemo(() => {
    const lowerCase = busca.toLowerCase()
    return listPosts.filter((post) =>
      post.title.toLowerCase().includes(lowerCase) ||
      post.excerpt.toLowerCase().includes(lowerCase) ||
      post.updatedAt.toLowerCase().includes(lowerCase)
    )
  }, [busca, listPosts])

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

  async function fetchPosts() {
    setIsLoadingPosts(true);
    // setTimeout(async () => {}, 5000)
    try {
      await getPosts()

      setIsLoadingPosts(false)
    } catch (err) {
      setIsLoadingPosts(false);
      toast("Erro ao carregar o posts 😮‍💨 !!!");
    }
  }

  async function fetchMorePosts() {
    setIsLoadingMorePosts(true);
    // setTimeout(async () => {}, 2000)
    if (nextPage) {
      try {
        const response = await api.get(nextPage);
        const { next_page, results } = response.data

        const newPosts = await results.map((post) => {
          return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find((content) => content.type === "paragraph")?.text ?? "",
            updatedAt: new Date(post.first_publication_date).toLocaleDateString("pt-BR",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            )
          };
        });

        setNextPage(next_page);
        setListPosts([...listPosts, ...newPosts]);
        setIsLoadingMorePosts(false)

      } catch (err) {
        setIsLoadingMorePosts(false);
        toast("Erro ao carregar o posts 😮‍💨 !!!");
      }
    }
  }

  useEffect(() => {
    fetchPosts()
    fetchAuthor()
  }, [])

  return (
    <>
      <Head>
        <title>Posts | O₃.news</title>
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
        <SearchBar
          value={busca}
          onChange={(searchTerm: string) =>
            setBusca(searchTerm)
          }
        />
        <div id="posts" className="max-w-2/3 my-20 mx-auto mb-auto px-8">
          {isLoadingPosts
            ?
            filtered.map((post, index) => (
              <ShimmerPosts key={index} />
            ))
            :
            filtered.length > 0
              ?
              filtered.map((post) => (
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
                        <time className="flex flex-row items-center text-graycustom-300">
                          <CalendarBlank color="#04D361" className="mr-2.5" />
                          {post.updatedAt}
                        </time>
                        <strong className="block text-2xl mt-4 leading-8 transition-all duration-150 ease-linear">
                          {post.title}
                        </strong>
                        <p className="text-graycustom-300 mt-2 leading-6/7">
                          {post.excerpt}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </a>
                </Link>
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
                  <div className="flex flex-col items-center justify-center py-8 px-3 gap-4">
                    <Image src={emoji} />
                    <span className="text-graycustom-100 font-medium text-2xl text-center">Nada encontrado.</span>
                  </div>
                </motion.div>
              </AnimatePresence>
          }
        </div>
        {nextPage ? (
          isLoadingMorePosts ? (
            <div className="flex flex-col items-center justify-center py-8 px-3 mt-6">
              <Loading />
            </div>
          ) : (
            <div className="w-full max-w-5/6 flex items-center justify-center mx-auto py-2 px-3 mt-14">
              <InfinityScroll fetchMore={() => fetchMorePosts()} />
              {/* <FetchMore onClick={() => fetchMorePosts()} /> */}
            </div>
          )
        ) : null
        }
      </main>
    </>
  );
}

// STATIC SITE GENERATION
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  const author = await getAuthor()

  return {
    props: {
      posts,
      author,
    },
    revalidate: expireTime,
  };
};

