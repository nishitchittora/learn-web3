import Head from "next/head";
import firebase from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Home() {
  const db = firebase.firestore();
  const [books, booksLoading, booksError] = useCollection(
    db.collection("books"),
    {}
  );
  console.log(books, "%%%", booksLoading);
  if (!booksLoading && books) {
    console.log(books.docs);
    books.docs.map((doc) => console.log(doc.data()));
  }

  return (
    <div>
      hello
      {books &&
        !booksLoading &&
        books.docs.map((doc) => <div>{doc.data().book}</div>)}
    </div>
  );
}
