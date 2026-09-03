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

      <p className="text-center mt-12 text-gray-700 dark:text-gray-300">
        Have a project in mind? <Link href="/contact" className="text-orange-500 underline">Tell me about your requirements</Link> or <Link href="/schedule" className="text-orange-500 underline">schedule a consultation</Link>.
      </p>
    </main>
  );
}

export default ServicesPage;