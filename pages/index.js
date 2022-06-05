import Head from "next/head";
import firebase from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";

// books
// twitterthreads
// courses
// blogs
// youtubevideos

export default function Home() {
  const db = firebase.firestore();

  const [books, booksLoading, booksError] = useCollection(
    db.collection("books"),
    {}
  );

  const [courses, coursesLoading, coursesError] = useCollection(
    db.collection("courses"),
    {}
  );

  const [blogs, blogsLoading, blogsError] = useCollection(
    db.collection("blogs"),
    {}
  );

  const [
    youtubevideos,
    youtubevideosLoading,
    youtubevideosError,
  ] = useCollection(db.collection("youtubevideos"), {});

  const [
    twitterthreads,
    twitterthreadsLoading,
    twitterthreadsError,
  ] = useCollection(db.collection("twitterthreads"), {});

  const [blogs, blogsLoading, blogsError] = useCollection(
    db.collection("blogs"),
    {}
  );

  console.log(books, "%%%", booksLoading);
  if (!booksLoading && books) {
    console.log(books.docs);
    books.docs.map((doc) => console.log(doc.data()));
  }

  return (
    <div>
      Learn Web3
      <div>
        <h1>books</h1>
        {books &&
          !booksLoading &&
          books.docs.map((doc) => (
            <div>
              <a href={`/books/${doc.data().slug}`}>{doc.data().book}</a>
            </div>
          ))}
      </div>
      <div>
        <h1>Courses</h1>
        {courses &&
          !coursesLoading &&
          courses.docs.map((doc) => (
            <div>
              <a href={`/courses/${doc.data().slug}`}>{doc.data().course}</a>
            </div>
          ))}
      </div>
      <div>
        <h1>Twitter Threads</h1>
        {twitterthreads &&
          !twitterthreadsLoading &&
          twitterthreads.docs.map((doc) => (
            <div>
              <a href={`/twitterthreads/${doc.data().slug}`}>
                {doc.data().twitterthread}
              </a>
            </div>
          ))}
      </div>
      <div>
        <h1>Blogs</h1>
        {blogs &&
          !blogsLoading &&
          blogs.docs.map((doc) => <div>{doc.data().blog}</div>)}
      </div>
      <div>
        <h1>Blogs</h1>
        {blogs &&
          !blogsLoading &&
          blogs.docs.map((doc) => <div>{doc.data().blog}</div>)}
      </div>
      <div>
        <h1>Youtube Videos</h1>
        {youtubevideos &&
          !youtubevideosLoading &&
          youtubevideos.docs.map((doc) => <div>{doc.data().youtubevideo}</div>)}
      </div>
    </div>
  );
}
