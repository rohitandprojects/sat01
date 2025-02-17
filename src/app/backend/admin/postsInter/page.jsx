import Link from "next/link";
//import PostsListView from "./components/PostsListView";
import PostsListView from "@/app/backend/admin/postsInter/components/PostsListView";
//import CategoriesListView from '@/app/backend/admin/categories/components/CategoriesListView';

export default function Page(){
    return <main className="categories-page">
         
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>International Products</h3>
            <div>
                <Link href={'/backend/admin/postsInter/form'}>
                    <button className="btn position-relative">Add New Product</button>
                </Link>
                <Link href={'/backend/admin/postsInter/form2'} className="ms-2">
                    <button className="btn position-relative">Add New Small Product</button>
                </Link>
            </div>
        </div>
        <section>
            <PostsListView></PostsListView>
        </section>
    </main>
}