import Video from "@/components/Video";
import { Scan } from "lucide-react";
import { Metadata } from "next";

const title = "Shopping Something - Revolutionizing In-Store Shopping with AI";
const description =
  "Shopping Something, a cutting-edge web app, uses AI to detect, scan, and tally products for a fun, effortless shopping adventure.";

export const metadata: Metadata = {
  title,
  description,
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col max-w-[640px] mx-auto xl:max-w-5xl">
        <section className="w-full px-6 py-8 my-10 border-2 border-black rounded-3xl">
          <div className="flex items-center gap-4">
            <Scan className="w-8 h-8 text-purple-500" />
            <p className="text-4xl font-bold gradient from-purple-500 to-blue-500">
              Shopping Something
            </p>
          </div>
        </section>
        <Video />
      </main>
    </>
  );
}
