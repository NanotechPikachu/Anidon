export default async function Download({ searchParams }) {
  const params = searchParams;
  const link = params?.link;
  
  if (!link) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
      <p className="text-violet-600 text-lg md:text-xl">Invalid Anime!</p>
      </div>
    );
  };

  return (
    <>
    <video>
    <source src={link} />
    </video>
    </>
  )
}