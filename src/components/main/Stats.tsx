"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

interface Stats {
  num: number;
  text: string;
}

const staticStats: Stats[] = [
  {
    num: 3,
    text: "Months of Experience",
  },
  {
    num: 6,
    text: "Projects Completed",
  },
  {
    num: 9,
    text: "Technologies Mastered",
  },
];

const Stats = () => {
  const [commitCount, setCommitCount] = useState(159);

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const response = await fetch("/api/github-commits", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();

        if (typeof data.commits === "number") {
          setCommitCount(data.commits);
        }
      } catch (error) {
        console.error("Failed to fetch commit count:", error);
      }
    };

    fetchCommitCount();

    // Check for new commits every 60 seconds
    const interval = setInterval(fetchCommitCount, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const stats: Stats[] = [
    ...staticStats,
    {
      num: commitCount,
      text: "Code Commits",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="mx-auto mt-8 flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              className="flex flex-1 items-center justify-center gap-6 xl:justify-start"
              key={index}
            >
              <CountUp
                end={stat.num}
                duration={2}
                className="text-4xl font-bold text-orange-400 xl:text-6xl"
              />

              <p
                className={`${
                  stat.text.length < 10
                    ? "max-w-[60px]"
                    : "max-w-[100px] font-bold text-xl"
                }`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;