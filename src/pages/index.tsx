import CategoryCards from "@/components/categoryCards";
import Layout from "@/components/layout";
import List from "@/components/list";
import emojisData from "@/data/emojis";
import { useState } from "react";

export default function Home() {
  const [filteredEmojis, setFilteredEmojis] = useState(emojisData);
  const [currentSearch, setCurrentSearch] = useState("");

  function handleFilterBySearch(search: string) {
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData);
    }
  }

  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }
  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide">
        Welcome to Infoji
      </h1>
      <div>
        <input
          className="w-full text-black max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500"
          id="name"
          type="text"
          placeholder="Search for an emoji"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      {currentSearch.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="😀"
            group={"Smileys & Emotion"}
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="👨🏻"
            group={"People & Body"}
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="🐶"
            group={"Animals & Nature"}
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="🍔"
            group={"Food & Drink"}
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="⚽️"
            group="Activities"
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="🏨"
            group={"Travel & Places"}
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="💡"
            group="Objects"
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="⚛️"
            group="Symbols"
          />
          <CategoryCards
            handleFilter={handleFilterByCategory}
            emoji="🚩"
            group="Flags"
          />
        </div>
      )}
      {!filteredEmojis.length && (
        <p className="text-center text-xl text-gray-500">{`Sorry, we could'n find an emoji with: "${currentSearch}"`}</p>
      )}
      <List emojis={filteredEmojis} />
    </Layout>
  );
}
