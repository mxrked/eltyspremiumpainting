/**
 *
 *  This is the Index Generated Reviews
 *
 */

import { BsStarFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGeneratedReviews = (props) => {
  const getColumnClasses = (index, totalColumns) => {
    const isOddNumber = totalColumns % 2 !== 0;

    if (isOddNumber && index === totalColumns - 1) {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12 offset-lg-3"; // Center the last column if odd number of columns
    } else {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12"; // Your existing classes for two columns
    }
  };

  return (
    <section
      id="indexGeneratedReviews"
      className={`${styles.index_generated_reviews}`}
    >
      <div className={`${styles.index_generated_reviews_inner}`}>
        <div className={`${styles.index_generated_reviews_inner_reviews}`}>
          <div
            className={`${styles.index_generated_reviews_inner_reviews_top}`}
          >
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
              One of our biggest goals is to always hear feedback from all of
              the clients that we work with. Below you can get a look at the
              different reviews our clients have given after working with us!
            </p>
          </div>

          <div className={`${styles.reviews_box} container-fluid`}>
            <div className={`${styles.reviews_row} row`}>
              {props.reviews.map((review, index) => (
                <div
                  className={`${styles.review} ${getColumnClasses(
                    index,
                    props.reviews.length
                  )}`}
                >
                  <div className={`${styles.review_inner}`}>
                    <div className={`${styles.review_inner_top}`}>
                      <div
                        className={`${styles.review_inner_top_box} container-fluid`}
                      >
                        <div className={`${styles.review_inner_top_row} row`}>
                          <div
                            className={`${styles.review_inner_top_side} ${styles.review_inner_top_L} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                          >
                            <div
                              className={`${styles.review_inner_top_side_cnt}`}
                            >
                              <LazyLoadImage
                                src={review.img}
                                alt={`Elty's Premium Painting: Profile Picture Image.`}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles.review_inner_top_side} ${styles.review_inner_top_R} col-lg-8 col-md-8 col-sm-12 col-xs-12`}
                          >
                            <div
                              className={`${styles.review_inner_top_side_cnt}`}
                            >
                              <span
                                className={`${styles.review_name} orientation-change-element half-second`}
                              >
                                {review.name}
                              </span>

                              <span
                                className={`${styles.review_location} orientation-change-element half-second`}
                              >
                                {review.location}, NC
                              </span>

                              <span
                                className={`${styles.review_date} orientation-change-element half-second`}
                              >
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.review_inner_bottom}`}>
                      <p>{review.review}</p>

                      <ul>
                        {Array.from({ length: review.rating }, (_, index) => (
                          <li key={index}>
                            <BsStarFill />
                          </li>
                        ))}
                      </ul>
                    </div>
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
