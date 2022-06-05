import Head from "next/head";
import firebase from "../firebase/clientApp";
import { getFirestore, collection } from "firebase/firestore";

import { useCollection } from "react-firebase-hooks/firestore";

export default function Home() {
  const [books, booksLoading, booksError] = useCollection(
    collection(getFirestore(firebase), "books"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  console.log(books, "%%%", booksLoading);
  if (!booksLoading && books) {
    console.log(books.docs);
    books.docs.map((doc) => console.log(doc));
  }

  return <div></div>;
}
