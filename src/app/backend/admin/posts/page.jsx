import Link from "next/link";
//import PostsListView from "./components/PostsListView";
import PostsListView from "@/app/backend/admin/posts/components/PostsListView";
//import CategoriesListView from '@/app/backend/admin/categories/components/CategoriesListView';

export default function Page(){
    return <main className="categories-page">
         
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Domestic Products</h3>
            <Link href={'/backend/admin/posts/form'}>
                <button className="btn position-relative">Add New Product</button>
            </Link>
        </div>
        <section>
            <PostsListView></PostsListView>
        </section>
    </main>
}