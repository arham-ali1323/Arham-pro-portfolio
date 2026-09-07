import Link from "next/link";
import services from "../../../public/data/services.json";

const ServicesPage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Web Development Services
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I build responsive, maintainable web products for people and teams
          that need a clear path from idea to a reliable online experience.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          From a single landing page to a complete e-commerce platform, I focus
          on interfaces that are fast, accessible, and built to scale. Every
          service below starts with a conversation about your goal, your users,
          and the results you want to achieve, so the final product fits your
          business rather than the other way around.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-3">{service.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{service.description}</p>
            <h3 className="font-semibold mb-2">Typical deliverables</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
            </ul>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Technologies: {service.technologies.filter(Boolean).join(", ")}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-gray-100 mb-6">
          How I Approach Every Project
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A reliable web product is the result of thoughtful decisions made early and consistently through development. My process keeps you informed and involved at every stage so there are no surprises.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Discovery & Planning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We clarify your goals, define the scope, and map out the features that matter most. I recommend the right architecture and technology before any code is written.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Design & Build</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I translate your requirements into responsive, accessible interfaces with a focus on performance and clean, reusable components that are easy to maintain.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Testing & Refinement</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I test across devices and browsers, check accessibility and load times, and iterate based on real feedback before we go live.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Launch & Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              After launch, I make sure everything runs smoothly and help you plan the next improvements so your product keeps growing with your business.
            </p>
          </div>
        </div>
      </section>

      <p className="text-center mt-12 text-gray-700 dark:text-gray-300">
        Have a project in mind? <Link href="/contact" className="text-orange-500 underline">Tell me about your requirements</Link> or <Link href="/schedule" className="text-orange-500 underline">schedule a consultation</Link>.
      </p>
    </main>
  );
}

export default ServicesPage;