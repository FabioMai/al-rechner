import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'

export default function Massnahme({ postData, allPostsData }) {
  return (
    <Layout allPostsData={allPostsData}>
        <header id="header" class="header">
        <div class="header-content">
        <div class="container"><div class="row"><div class="col-lg-12">
        <h2>{postData.title}</h2>
        </div></div>
        </div></div>
        </header>
        <div class="container"><div class="row"><div class="col-lg-12">
        <br />
        <p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </p>
        </div>
        </div></div>
    </Layout>
  )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const allPostsData = getSortedPostsData();
    return {
      props: {
        postData,
        allPostsData
      }
    }
  }
  