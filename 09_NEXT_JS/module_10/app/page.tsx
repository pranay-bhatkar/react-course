import { createUser, getAllUsers } from "@/actions/action";

const HomePage = async () => {
  const data = await getAllUsers();
  console.log(data);

  return (
    <div className="flex flex-col items-center min-h-screen p-2 border-2">
      <div className="space-y-2">
        <p className="text-2xl font-bold border-b-white border-y-2 p-1 bg-blue-950">
          Class on ORM and Prisma
        </p>
        <div>
          <p>Hi i am pranay</p>
        </div>

        <div className="flex flex-col space-y-1 ">
          <h1 className="text-center font-bold text-2xl">Create User</h1>
          <form action={createUser} className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Name</label>{" "}
              <input
                className="border p-1 rounded-md"
                type="text"
                name="name"
                placeholder="enter name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="">Email</label>
              <input
                className="border p-1 rounded-md"
                type="email"
                name="email"
                placeholder="enter email"
                required
              />
            </div>

            <button
              type="submit"
              className="p-2 border-gray-200 border mt-2 rounded-md bg-indigo-800 cursor-pointer"
            >
              Create user
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
