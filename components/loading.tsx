"use client";

import { useLoading } from "@/context/loadingContext";
import { useEffect } from "react";
import "../styles/loading.css"

type Props = {
    direction: string,
    nextPage: () => void,
    endAnimation: () => void,
};

export default function Loading({ direction, nextPage, endAnimation }: Props) {
    const { setIsLoading } = useLoading()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            if (direction === "out") {
                nextPage()
            }
            if (direction === "in") {
                endAnimation()
            }
        }, 2000)
    }, [])

    return (
        <>
            <h1 className="loading">{direction}  Loading中</h1>
        </>
    );
}