import { ReviewsItem } from './ReviewsList.styled';

export default function ReviewsList({ movieReviews }) {
  const results = movieReviews.map(({ id, author, content }) => {
    return (
      <ReviewsItem key={id}>
        <h4>author: {author ? author : '...'}</h4>
        <p>{content ? content : '...'}</p>
      </ReviewsItem>
    );
  });

  return <ul>{results}</ul>;
}