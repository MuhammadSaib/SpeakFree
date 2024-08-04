import React from "react";
import Front from "../../components/Front/front";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import ResearchPaperBox from "../../components/ResearchPaperBox/ResearchPaperBox";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import VideoGallery from "../../components/VideosGallery/VideosGallery";

const Resources = () => {
  const articles = [
    {
      title: "A Stammerer's Journal",
      text: " So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing lorem ipsum dolomet iris isk eleyer text...",
      image: "/assets/resources/1.png",
    },
    {
      title: "A Stammerer's Journal",
      text: " So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing lorem ipsum dolomet iris isk eleyer text...",
      image: "/assets/resources/2.png",
    },
    {
      title: "A Stammerer's Journal",
      text: " So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing lorem ipsum dolomet iris isk eleyer text...",
      image: "/assets/resources/4.png",
    },
    {
      title: "A Stammerer's Journal",
      text: " So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing lorem ipsum dolomet iris isk eleyer text...",
      image: "/assets/resources/4.png",
    },
    {
      title: "A Stammerer's Journal",
      text: " So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing lorem ipsum dolomet iris isk eleyer text...",
      image: "/assets/resources/5.png",
    },
    {
      title: "A Stammerer's Journal",
      text: " So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing lorem ipsum dolomet iris isk eleyer text...",
      image: "/assets/resources/6.png",
    },
  ];

  const researchPapers = [
    {
      title:
        "In Milwaukee, Restaurants and Venues Worry f Seeing Limited R.N.C Boost",
      author: "Jonathan Weasley",
      date: "Dec 3, 2024",
      image: "/assets/resources/1.png",
    },
    {
      title:
        "In Milwaukee, Restaurants and Venues Worry f Seeing Limited R.N.C Boost",
      author: "Jonathan Weasley",
      date: "Dec 3, 2024",
      image: "/assets/resources/2.png",
    },
    {
      title:
        "In Milwaukee, Restaurants and Venues Worry f Seeing Limited R.N.C Boost",
      author: "Jonathan Weasley",
      date: "Dec 3, 2024",
      image: "/assets/resources/4.png",
    },
    {
      title:
        "In Milwaukee, Restaurants and Venues Worry f Seeing Limited R.N.C Boost",
      author: "Jonathan Weasley",
      date: "Dec 3, 2024",
      image: "/assets/resources/5.png",
    },
  ];

  return (
    <div className="bg-[#EEEBD3]">
      <Front title="Resources" />
      <div class="flex flex-wrap gap-4 p-[2rem] sm:p-[3rem]">
        <button class="group border-1 border-[#242424] hover:bg-black rounded-full px-4 py-2 sm:px-6 sm:py-3">
          <a
            href="#blogs"
            className="text-[#242424] group-hover:text-white no-underline"
          >
            Blogs & Articles
          </a>
        </button>
        <button class="group border-1 border-[#242424] hover:bg-black rounded-full px-4 py-2 sm:px-6 sm:py-3">
          <a
            href="#research-papers"
            className="w-full h-full text-[#242424] group-hover:text-white no-underline"
          >
            Research Papers
          </a>
        </button>
        <button class="group border-1 border-[#242424] hover:bg-black rounded-full px-4 py-2 sm:px-6 sm:py-3">
          <a
            href="#videos"
            className="text-[#242424] group-hover:text-white no-underline"
          >
            Videos/Help Videos
          </a>
        </button>
      </div>

      <div class="p-[2rem] sm:p-[3rem] pb-0" id="blogs">
        <h2 class="text-[40px] sm:text-[64px] text-[#242424] font-medium">
          Blogs & Articles
        </h2>
        <hr class="border-t-2 border-[#000000] mt-5" />
      </div>
      <BlogSlider />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-[2rem] sm:p-[3rem]">
        {articles.map((article, index) => (
          <ArticleBox
            key={index}
            title={article.title}
            text={article.text}
            imgSrc={article.image}
          />
        ))}
      </div>

      <div class="p-[2rem] sm:p-[3rem]" id="research-papers">
        <h2 class="text-[40px] sm:text-[64px] text-[#242424] font-medium">
          Research Papers
        </h2>
        <hr class="border-t-2 border-[#000000] my-5" />
        {researchPapers.map((paper, index) => (
          <ResearchPaperBox
            key={index}
            title={paper.title}
            date={paper.date}
            author={paper.author}
            imgSrc={paper.image}
          />
        ))}
        <div class="mt-5">
          <a href="#" class="text-[#242424] font-semibold no-underline">
            View More
          </a>
        </div>
      </div>

      <div class="p-[2rem] sm:p-[3rem]" id="videos">
        <h2 class="text-[40px] sm:text-[64px] text-[#242424] font-medium">
          Videos
        </h2>
        <hr class="border-t-2 border-[#000000] my-5" />
        <VideoGallery />
        <div class="">
          <a href="#" class="text-[#242424] font-semibold no-underline">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
