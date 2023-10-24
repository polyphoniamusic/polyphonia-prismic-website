import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { format } from 'date-fns';

/**
 * Props for `BlogSection`.
 */
export type BlogSectionProps = SliceComponentProps<Content.BlogSectionSlice>;

/**
 * Component for "BlogSection" Slices.
 */
const BlogSection = ({ slice }: BlogSectionProps): JSX.Element => {

  const currentDate = new Date(); // Récupérez la date actuelle

  // Triez les articles par date, en séparant les futurs des passés
  const sortedArticles = slice.items.sort((a, b) => {
    const dateA: string = a.date as string; // Convertir date en string
    const dateB: string = b.date as string; // Convertir date en string

    const dateAObj = new Date(dateA);
    const dateBObj = new Date(dateB);

    if (dateAObj > dateBObj) return -1;
    if (dateAObj < dateBObj) return 1;
    return 0;
  });

  return (
    <section className="blog" id="blog" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="blog-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({ children }) => (
            <h1 className="blog-heading">{children}</h1>
          )
        }} />
        <div className="blog-grid-container">
          {sortedArticles.map((article) => {
            if (article.date) {
              const date: string = article.date;
              const articleDate = new Date(date);
              const isPastArticle = currentDate > articleDate;
              const formattedDate = format(articleDate, "EEE, d MMM. yyyy");

              return (
                <>
                  <PrismicNextLink className={`blog-grid-block ${isPastArticle ? "past-article" : "upcoming-article"}`} field={article.link}>
                    <div className="blog-grid-block-column">
                      <div>
                        <p className="blog-title">{article.title}</p>
                        <p className="blog-date">{formattedDate}</p>
                      </div>
                      <p className="blog-button"><span>Read More</span><img className="blog-button-arrow" src="/assets/images/icons/arrow-icon-white.svg"/></p>
                    </div>
                    <PrismicNextImage className="blog-image" field={article.image}/>
                  </PrismicNextLink>
                </>
              );
            }
            return null; // Gestion des dates nulles
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
