import Posts from "./components/posts";
import Promotion from "./components/promotion";
import Tips from "./components/Tips";


export default function BusinessCustomers() {
    return (
        <div className="w-full min-h-screen text-sky-900 bg-[url('/home-page/sky.webp')] bg-cover bg-center">
            <Posts />
            <Promotion />
            <Tips />
        </div>
    )
}