import * as prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

// IMPORT SERVICES
import { getPrismicClient } from "../../../services/prismic";

export async function getLastPosts() {
  const documents = getPrismicClient;

  const response = await documents.get({
    predicates: prismic.predicate.at("document.type", "my-post-type"),
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    pageSize: 2,
  });

  const posts = response.results.map((post) => {
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

  return posts;

}
