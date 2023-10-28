import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { format } from 'date-fns';

/**
 * Props for `BookingSection`.
 */
export type BookingSectionProps =
  SliceComponentProps<Content.BookingSectionSlice>;

/**
 * Component for "BookingSection" Slices.
 */

const BookingSection = ({ slice }: BookingSectionProps): JSX.Element => {
  const currentDate = new Date(); // Récupérez la date actuelle

  // Triez les concerts par date, en séparant les futurs des passés
  const sortedConcerts = slice.items.sort((a, b) => {
    const dateA: string = a.date as string; // Convertir date en string
    const dateB: string = b.date as string; // Convertir date en string

    const dateAObj = new Date(dateA);
    const dateBObj = new Date(dateB);

    if (dateAObj > dateBObj) return -1;
    if (dateAObj < dateBObj) return 1;
    return 0;
  });
  
  return (
    <section className="booking" id="booking" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="booking-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({ children }) => (
            <h1 className="booking-heading">{children}</h1>
          )
        }} />
        <div className="booking-grid-container">

          <div className="booking-grid-container">
          {sortedConcerts.map((concert) => {
            if (concert.date) {
              const date: string = concert.date;
              const concertDate = new Date(date);
              const isPastConcert = currentDate > concertDate;
              const formattedDate = format(concertDate, "EEE, d MMM. yyyy");

              return (
                <div className={`booking-grid-line ${isPastConcert ? "past-concert" : "upcoming-concert"}`}>
                  <div className="booking-grid-block">
                    {concert.tba ? (
                      <p className="booking-concert-date">{concert.tba}</p>
                        ) : (
                      <p className="booking-concert-date">{formattedDate}</p>
                    )}
                    <PrismicNextLink target="_blank" field={concert.artist_page} className="booking-artist-name">{concert.artist_name}</PrismicNextLink>
                    <div className="booking-grid-column">
                      <p className="booking-place-name">{concert.place_name}</p>
                      <p className="booking-city-country">{concert.city_country}</p>
                    </div>
                  </div>
                  {concert.tba ? (
                    <div className={`button-cta button-cta-white booking-grid-button-block disabled ${isPastConcert ? "past-button" : "upcoming-button"}`}>
                      {isPastConcert ? <>{slice.primary.past_event}</> : <>{slice.primary.upcoming_event}</>}
                    </div>
                  ) : (
                    <PrismicNextLink field={concert.link} className={`button-cta button-cta-white booking-grid-button-block ${isPastConcert ? "past-button" : "ticket-button"}`}>
                      {isPastConcert ? <>{slice.primary.past_event}</> : <>{slice.primary.upcoming_event}</>}
                    </PrismicNextLink>
                  )}
                </div>
              );
            }
            return null; // Gestion des dates nulles
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
