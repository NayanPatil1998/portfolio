import React, { useEffect, useState } from "react";
import AOS from "aos"
interface blogsProps {}

const Blogs: React.FC<blogsProps> = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const fetchPosts = async () => {
      const response = await fetch(
        "https://dev.to/api/articles?username=nayanpatil1998"
      ).then((res) => res.json());
      setPosts(response);
      console.log(response);
    };
    fetchPosts();
  }, []);

  return (
    <div id="blogs" className="flex flex-col text-textcolor min-h-screen justify-center space-y-5 items-center py-10 ">
      <h1 className="text-center  text-5xl md:text-left font-bold mt-10">
        Blogs
      </h1>

      <div className="flex flex-col lg:flex-row">
        {Posts.length === 0 ? (
          <div className="w-10 h-10 animate-spin"></div>
        ) : (
          Posts.map((post: any) => {
            return (
              <a
              target="_blank" href={post.url} rel="noopener noreferrer" 
                key={post.id}
                className="max-w-sm rounded overflow-hidden shadow-lg m-5"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos="fade-up"
              >
                <img className="" src={post.social_image} alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {post.tag_list.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })
        )}
      </div>

     
    </div>
  );
};

export default Blogs;
