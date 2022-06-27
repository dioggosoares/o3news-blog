import * as prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

// IMPORT SERVICES
import { getPrismicClient } from "../../../services/prismic";

export async function getAuthor() {
  const documents = getPrismicClient;

  const response = await documents.getSingle("author")
  
  const { image, instagram, linkedin , name, content } = response.data;

  const author = {
    image: image.url,
    alt: image.alt,
    instagram: instagram.url,
    linkedin: linkedin.url,
    name: RichText.asText(name),
    content: content[0].text
  }
  
  return author;

}
