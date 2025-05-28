import Link from "next/link";

export default function Test() {
  return (
    <div className="mt-30 lg:mt-40 mx-4">
      <div className="flex flex-col items-center text-lg gap-3 text-center text-blue-100 justify-center">
        <p className="text-6xl text-green-500/60">404</p>
        <p>Uh..Oh! Seems like you ventured into an unchartered territory.</p>
        <p>
          Now, shu...shu go back{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            home
          </Link>
          !
        </p>
      </div>
    </div>
  );
}
