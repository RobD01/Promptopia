"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {};

  const PromptCardList = ({ posts, handleTagClick }) => {
    return (
      <div className="mt-6 prompt_layout">
        {posts.map((post) => {
          <>
            <h1>TEST</h1>
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          </>;
        })}
      </div>
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList posts={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
