import Link from "next/link";

export default function HomePageComponents() {
  return (
    <div className="h-screen w-screen grid place-content-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl px-4 py-2 bg-black rounded-md text-white mb-6 font-bold">
          TheWord.
        </h1>
        <p className="text-lg">A Christian Bible Blog.</p>
        <aside className="mt-12 text-sm">
          Maintained by{" "}
          <Link href="https://www.zimdevelopers.com" className="underline">
            Zim Developers Labs
          </Link>
          .
        </aside>
      </div>
    </div>
  );
}
