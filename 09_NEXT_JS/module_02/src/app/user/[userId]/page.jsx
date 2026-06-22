const userIdPage = async ({ params }) => {
  const { userId } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>UserIdPage : {userId}</h1>
    </div>
  );
};

export default userIdPage;
