import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
// import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
// import { getQuestions, getRecommendedQuestions } from "@/lib/actions/question.action";
import { SearchParamsProps } from "@/types";
import Link from "next/link";

import type { Metadata } from "next";
// import { auth } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
};
interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };

  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}
export default async function Home({ searchParams }: SearchParamsProps) {
  // const { userId } = auth();

  const result = {
    questions: [
      {
        _id: "q1",
        title: "How does React handle state updates?",
        tags: [
          { _id: "t1", name: "React" },
          { _id: "t2", name: "JavaScript" },
        ],
        author: {
          _id: "a1",
          name: "John Doe",
          picture:
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybk9nM0ZWWU1iUFA4RTJ5ZXJyTVc5bDczWkoifQ?width=80",
        },
        upvotes: 15,
        views: 120,
        answers: [{ answerId: "ans1" }, { answerId: "ans2" }],
        createdAt: new Date("2024-10-01T10:20:30Z"),
      },
      {
        _id: "q2",
        title: "What is the difference between let and var in JavaScript?",
        tags: [
          { _id: "t3", name: "JavaScript" },
          { _id: "t4", name: "ES6" },
        ],
        author: {
          _id: "a2",
          name: "Jane Smith",
          picture:
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybk9nM0ZWWU1iUFA4RTJ5ZXJyTVc5bDczWkoifQ?width=80",
        },
        upvotes: 22,
        views: 340,
        answers: [{ answerId: "ans3" }],
        createdAt: new Date("2024-10-05T14:15:45Z"),
      },
      {
        _id: "q3",
        title: "How to optimize MongoDB queries for better performance?",
        tags: [
          { _id: "t5", name: "MongoDB" },
          { _id: "t6", name: "Database" },
        ],
        author: {
          _id: "a3",
          name: "Alice Johnson",
          picture:
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybk9nM0ZWWU1iUFA4RTJ5ZXJyTVc5bDczWkoifQ?width=80",
        },
        upvotes: 30,
        views: 450,
        answers: [
          { answerId: "ans4" },
          { answerId: "ans5" },
          { answerId: "ans6" },
        ],
        createdAt: new Date("2024-10-10T09:30:00Z"),
      },
    ] as QuestionProps[],
    isNext: true,
  };

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">
        {/* <Pagination 
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
}
