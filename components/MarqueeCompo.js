import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/next.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/next.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vercel.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/next.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vercel.svg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/next.svg",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={
        cn(
          "relative w-36  cursor-pointer overflow-hidden rounded-xl border p-1",
          // light styles
          "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
    >
      <div className=" flex flex-row items-center ">
        <img className="rounded w-full h-full "  alt="" src={img} />

      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex  w-[98%] flex-col items-center justify-center overflow-hidden  bg-inherit ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

    </div>
  );
}