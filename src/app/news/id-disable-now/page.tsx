'use client';
import Post from "./components/post";

export default function NewsDetail() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[url('/home-page/sky.webp')] bg-cover bg-center pt-20">
            <Post />
        </div>
    )
}