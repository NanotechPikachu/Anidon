export default async function Stream({ searchParams }) {
  const params = searchParams;
  const link = params?.url;
  
  if (!link) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
      <p className="text-violet-600 text-lg md:text-xl">Invalid Anime!</p>
      </div>
    );
  };

  return (
    <>
    <div className="flex justify-center items-center mt-20 w-full md:mt-28">
    <video height={400} width={500} controls>
    <source src={link} type="application/x-mpegURL" />
    </video>
    </div>
    </>
  )
}