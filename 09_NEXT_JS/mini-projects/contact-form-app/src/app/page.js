import { createForm } from "../../actions/actions";
import ContactForm from "../../components/contact-form";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <ContactForm action={createForm} />
    </div>
  );
}
