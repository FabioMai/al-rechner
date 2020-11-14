import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";

export default function Massnahme({ postData, allPostsData }) {
  return (
    <Layout allPostsData={allPostsData}>
      <header id="header" class="header">
        <div class="header-content details"></div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <br />
            <p>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              <img src="/images/al5-details.png"></img>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
