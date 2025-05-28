"use client";

import {
  Card,
  CardFooter,
  Skeleton,
  CardBody,
  Divider,
  Spinner,
} from "@heroui/react";
import { useEffect, useState } from "react";

export function SearchSkeleton() {
  return (
    <div className="mt-10 mr-4 ml-4 flex flex-wrap gap-4 lg:gap-6 justify-center">
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <Card className="border-none">
          <div className="w-50 h-90" />
        </Card>
      </Skeleton>
    </div>
  );
}

export function EpisodesSkeleton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-5">
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
      <Card shadow="lg">
        <Skeleton className="rounded-lg">
          <div className="w-70 h-40" />
        </Skeleton>
        <CardFooter className="justify-between items-center">
          <div className="w-full h-5" />
        </CardFooter>
      </Card>
    </div>
  );
}

export function InfoSkeleton() {
  return (
    <div className="mt-10 mr-4 ml-4">
      <div className="w-full mt-7">
        <Skeleton className="rounded-lg">
          <div className="w-full h-60" />
        </Skeleton>
      </div>

      <Divider className="my-6" />
      <div className="md:ml-3">
        <Skeleton className="rounded-md">
          <div className="w-full h-28" />
        </Skeleton>
      </div>
      <div>
        <Divider className="my-6" />
        <Skeleton className="rounded-md">
          <div className="w-full h-30" />
        </Skeleton>
      </div>
    </div>
  );
}

export function FrontPageSkeleton() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    (async () => {
      const q = await fetch("/api/quote/random").then((res) => res.json());
      setQuote(q?.randomQuote);
    })();
  }, []);
  return (
    <div className="flex min-h-full flex-col gap-4 w-full items-center justify-center">
      <div className="mt-30">
        <Spinner color="success" variant="gradient" size="lg" />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-lg lg:text-xl text-blue-300/50">
          Loading anime suggestions
        </p>
        <Spinner color="success" variant="dots" size="sm" />
      </div>
      {quote && (
        <div className="flex flex-col items-center p-5 lg:p-15 text-center justify-between gap-3">
          <p className="text-blue-200/90">{quote?.quote}</p>
          <div className="flex flex-col items-center text-center justify-between px-5 lg:px-15 gap-0.5">
            <p className="text-blue-200/70">~ {quote?.character}</p>
            <p className="text-blue-200/70">{quote?.show}</p>
          </div>
        </div>
      )}
    </div>
  );
}
