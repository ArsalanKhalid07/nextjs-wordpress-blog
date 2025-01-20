
import React from 'react'
import { getAllPosts } from '../api/lib/posts';
import Link from 'next/link';


// export const getStaticProps = async () => {
//   const getPosts = await getAllPosts();  

//   return {
//     props: {
//       getPosts: getPosts
//     }
//   }
// }
 const page = async () => {

  
  const getPosts = await getAllPosts();  
    console.log("here   ",getPosts)

  return (
    <div>
        {getPosts.nodes.map((post) => (
          <div className='post'>
                <h2>{post.title}</h2>
                <img width={"400"} height={"400"} src={`http://localhost/wordpress/wordpress/wp-content/uploads/${post?.featuredImage?.node.mediaDetails.file}`} />
                <p dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                <Link href={`blog/${post?.slug}`} >Read more</Link>
          </div>
        ))}
    </div>
  )
}

export default page;


