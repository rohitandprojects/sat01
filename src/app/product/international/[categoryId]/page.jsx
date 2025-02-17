//import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
'use client';
import { PostCardInter } from "@/app/components/PostListViewInter";
import { getAllPostsWithCategory } from "@/app/lib/firebase/postInter/read_server";
import { hyphenToSpace } from "@/utils/transformName";
//import { useRouter } from 'next/navigation';
import Link from "next/link";
import Script from 'next/script';

export default async function generateStaticParams({ params }) {
  const { categoryId } = params;
  //console.log(params.name);
  //alert('click on link: ');
  //const { categoryName } = params.name;
  const posts = await getAllPostsWithCategory(categoryId);
  //console.log(categoryId + '  hi')
   //const spaceToHyphen = (str) => str.replace(/\s+/g, '-');
  return <section className="section margin-top120">
      <div className="container">         
          <div className="row">
              <div className="col-12 page-title">
                <h1 className="text-center" data-text={categoryId}>     
                {/* {categoryName}            */}
                  {hyphenToSpace(categoryId)}
                  {/* {spaceToHyphen(categoryId)} */}
                </h1>
              </div>
          </div>
          <div className="row">
              <div className="col-12 product-section">
                <div className="row">
                    {posts?.map((post, key) => {
                      return <PostCardInter post={post} key={key} />
                    })} 
                </div>
            </div>
          </div>  
      </div>
    </section>
    
}

{/* return(
  <section className="section margin-top120">
      <div className="container">         
          <div className="row">
              <div className="col-12 page-title">
              <h1 className="text-center">{}Ground Spices</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-12 product-section">
              <div className="row">{posts?.map((post, key) => {
                    return <PostCard post={post} key={key} />
                  })} 
              </div>
          </div>
      </div>
  </section>
  
) */}