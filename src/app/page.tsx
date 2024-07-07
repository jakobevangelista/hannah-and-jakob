import Link from "next/link";

export default function Home() {
  // const test = { greeting: "Hello world (from server)" };
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center text-center font-mono text-2xl">
        <div className="max-w-[800px]">
          Hello Hannah, I just saw you today that&apos;s what&apos;s keeping me
          going for a bit.
          <div>Here&apos;s the list of videos I&apos;m making for you!</div>
          <div>Click the number to go to the video</div>
        </div>
        <ol>
          <Link href={"/41"} className="hover:underline">
            <li>- 41</li>
          </Link>
        </ol>
      </div>
    </>
  );
}
