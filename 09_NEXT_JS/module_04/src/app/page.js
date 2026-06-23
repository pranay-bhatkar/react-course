import ClientComp from "@/componets/client-comp";

const HomePage = async () => {
  return (
    <div className="flex flex-col">
      <h1>Hello form server</h1>
      <ClientComp />
    </div>
  );
};

export default HomePage;
