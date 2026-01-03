import toast from "react-hot-toast";

export const NewsletterSection = () => {
    const handleSubscribe =(e)=>{
        e.preventDefault()
        toast.success("Thank You for subscribe")
        e.target.reset()

    }
  return (
    <section className="py-16 md:my-25 px-6 bg-green-100 dark:bg-base-100 text-center rounded-xl my-10">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-700 dark:text-white mb-6">Get the latest book releases and reading tips straight to your inbox.</p>
      <form
      onSubmit={handleSubscribe}
       className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          required
          name="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button  className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:opacity-65 transition">
          Subscribe
        </button>
      </form>
    </section>
  );
};
