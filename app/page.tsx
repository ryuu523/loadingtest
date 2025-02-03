"use client"
import { useLoading } from "@/context/loadingContext";


export default function Home() {
  const { loadingStart } = useLoading()
  return (
    <>
      <p>Loading前のページ</p>
      <button onClick={() => loadingStart("/after")}>ページ遷移</button>
    </>
  );
}
