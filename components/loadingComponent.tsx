"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { useLoading } from "@/context/loadingContext";


export default function LoadingComponent() {
    const { setIsAnimation, oldPathname, setOldPathname, isLoading, setIsLoading, direction, nextUrl, setDirection } = useLoading();
    const pathname = usePathname()
    const router = useRouter()
    const [isPageMove, setIsPageMove] = useState<boolean>(false)

    useEffect(() => {

        if (!isPageMove) return
        if (direction == "in") return

        setDirection("in")
        setOldPathname(pathname)
        router.push(nextUrl)

    }, [isPageMove, nextUrl, pathname])

    useEffect(() => {

        if (pathname === "/" && oldPathname === "/") return
        if (isLoading) return

        setIsPageMove(false)
        setIsLoading(true)

    }, [pathname, oldPathname])
    return (<>
        {!isLoading && isPageMove && <div className="bg-black w-dvw h-dvh absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>}
        {isLoading && <Loading direction={direction} nextPage={() => setIsPageMove(true)} endAnimation={() => setIsAnimation(false)} />}
    </>);

}