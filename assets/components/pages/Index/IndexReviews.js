/**
 *
 *  This is the Index Yelp Reviews
 *
 */

import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { YELP_LOGO, GOOGLE_REVIEWS_LOGO } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexReviews = (props) => {
  const getColumnClasses = (index, totalColumns) => {
    const isOddNumber = totalColumns % 2 !== 0;

    if (isOddNumber && index === totalColumns - 1) {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12 offset-lg-3"; // Center the last column if odd number of columns
    } else {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12"; // Your existing classes for two columns
    }
  };

  return (
    <section id="indexReviews" className={`${styles.index_reviews}`}>
      <div className={`${styles.index_reviews_inner}`}>
        <div className={`${styles.index_reviews_inner_top}`}>
          <h3
            id="indexReviews_JUMPPOINT"
            className="orientation-change-element half-second"
          >
            Reviews:
          </h3>
          <h2 className="orientation-change-element half-second">
            Reviews/Testimonials
          </h2>

          <p className="orientation-change-element half-second">
            One of our biggest goals is to always hear feedback from all of the
            clients that we work with. Below you can get a look at the different
            reviews our clients have given after working with us!
          </p>

          <ul>
            <li>
              <a
                href="https://www.yelp.com/biz/eltys-premium-painting-and-restoration-mount-airy"
                target={"_blank"}
              >
                <img
                  data-src={YELP_LOGO}
                  className="lazyload"
                  alt={`Elty's Premium Painting & Restoration: Yelp's logo.`}
                />
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/DYcb3TaadfUGiMTL8"
                target={"_blank"}
              >
                <img
                  data-src={GOOGLE_REVIEWS_LOGO}
                  className="lazyload"
                  alt={`Elty's Premium Painting & Restoration: Google Reviews logo.`}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.index_reviews_inner_reviews}`}>
          <div
            className={`${styles.index_reviews_inner_reviews_box} container-fluid`}
          >
            <div className={`${styles.index_reviews_inner_reviews_row} row`}>
              {props.reviewsData.map((review, index) => (
                <div
                  key={index}
                  className={`${styles.review} ${getColumnClasses(
                    index,
                    props.reviewsData.length
                  )}`}
                >
                  <div className={`${styles.review_inner}`}>
                    <div className={`${styles.review_inner_top}`}>
                      <div
                        className={`${styles.review_inner_top_box} container-fluid`}
                      >
                        <div className={`${styles.review_inner_top_row} row`}>
                          <div
                            className={`${styles.review_inner_top_side} ${styles.review_top_L} col-lg-3 col-md-3 col-sm-3 col-xs-12`}
                          >
                            <div
                              className={`${styles.review_inner_top_side_cnt}`}
                            >
                              {review.reviewType === "Yelp" && (
                                <img
                                  data-src={review.reviewProfilePicture}
                                  className="lazyload"
                                  alt={`Elty's Premium Painting & Restoration: ${review.reviewName}'s profile picture.`}
                                />
                              )}

                              {review.reviewType === "Google" && (
                                <img
                                  data-src={review.reviewProfilePicture}
                                  className="lazyload"
                                  alt={`Elty's Premium Painting & Restoration: ${review.reviewName}'s profile picture.`}
                                />
                              )}
                            </div>
                          </div>
                          <div
                            className={`${styles.review_inner_top_side} ${styles.review_top_R} col-lg-9 col-md-9 col-sm-9 col-xs-12`}
                          >
                            <div
                              className={`${styles.review_inner_top_side_cnt}`}
                            >
                              <div
                                className={`${styles.review_inner_top_text}`}
                              >
                                <a
                                  href={review.reviewProfile}
                                  target={"_blank"}
                                >
                                  <span
                                    className={`${styles.review_name} orientation-change-element half-second`}
                                  >
                                    {review.reviewName}
                                  </span>
                                </a>
                                {review.reviewLocation !== "?" ? (
                                  <div>
                                    <span
                                      className={`${styles.review_location} orientation-change-element half-second`}
                                    >
                                      {review.reviewLocation}
                                    </span>
                                  </div>
                                ) : (
                                  <br />
                                )}
                                <span
                                  className={`${styles.review_date} orientation-change-element half-second`}
                                >
                                  {review.reviewDate}
                                </span>
                              </div>

                              {review.reviewType === "Yelp" && (
                                <div
                                  className={`${styles.review_inner_yelp_rating}`}
                                >
                                  <ul>
                                    {Array.from(
                                      { length: review.reviewRating },
                                      (_, index) => (
                                        <li key={index}>
                                          <BsStarFill />
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {review.reviewType === "Google" && (
                                <div
                                  className={`${styles.review_inner_google_rating}`}
                                >
                                  <ul>
                                    {Array.from(
                                      { length: review.reviewRating },
                                      (_, index) => (
                                        <li key={index}>
                                          <BsStarFill />
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.review_inner_text}`}>
                      <p className="orientation-change-element half-second">
                        {review.reviewText}
                      </p>
                    </div>

                    {review.reviewType === "Yelp" && (
                      <div className={`${styles.yelp_logo_holder}`}>
                        <a
                          href="https://www.yelp.com/biz/eltys-premium-painting-and-restoration-mount-airy"
                          target={"_blank"}
                        >
                          <img
                            data-src={YELP_LOGO}
                            className="lazyload"
                            alt={`Elty's Premium Painting & Restoration: ${review.reviewType}'s logo.`}
                          />
                        </a>
                      </div>
                    )}

                    {review.reviewType === "Google" && (
                      <div className={`${styles.yelp_logo_holder}`}>
                        <a
                          href="https://maps.app.goo.gl/DYcb3TaadfUGiMTL8"
                          target={"_blank"}
                        >
                          <img
                            data-src={GOOGLE_REVIEWS_LOGO}
                            className="lazyload"
                            alt={`Elty's Premium Painting & Restoration: ${review.reviewType} Reviews logo.`}
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};