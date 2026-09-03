import Hero from "@/components/main/Hero";
import Photo from "@/components/main/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-between xl:pt-[custom-value]">
          
          {/* Text Section (Left) */}
          <div className="text-center lg:text-left order-2 md:order-none lg:order-none xl:text-left">
            <Hero />
          </div>

          {/* Image Section (Right) */}
          <div className="order-1 md:flex-row lg:order-none">
            <Photo />
          </div>
        </div>
      </div>

      {/* Expertise Section - Improves heading structure & on-page content */}
      <div className="container px-6 pt-20 pb-10 mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100 mb-4 text-center">
          Frontend Engineering Focused on Performance and Scalability
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
          As a Frontend Engineer, I turn complex requirements into clean,
          accessible, and fast-loading interfaces. My work spans everything
          from pixel-perfect UI development to architecting scalable Next.js
          applications that are built to grow with your product.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <article>
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
              Next.js &amp; React Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I build server-rendered, SEO-friendly applications with Next.js
              and React. By combining modern routing, data fetching, and
              component-driven architecture, I deliver interfaces that are both
              developer-friendly and instantly responsive to users.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
              AI-Powered User Experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I integrate AI features like search, conversational chat, and
              retrieval-augmented generation into real products. The goal is
              always the same: features that feel useful and natural, not
              gimmicks bolted on to the design.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
              Fast, Accessible, and Scalable Interfaces
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I care about the details that matter — web performance, semantic
              HTML, accessibility, and maintainable CSS with Tailwind. A great
              interface is one that works for everyone, on every device,
              without compromising on speed or quality.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
              From Design to Production
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I work closely with product and design teams to ship reliable,
              production-ready frontends. Whether it&apos;s a marketing site, a
              dashboard, or an interactive web application, I focus on
              real-world usability and measurable results.
            </p>
          </article>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100 mb-4 text-center">
            A Practical Approach to Building Better Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
            Good frontend engineering connects product goals, thoughtful design,
            and dependable implementation. I help teams move from an early idea
            to a polished interface that is easy to use and straightforward to
            maintain.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <article>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Understand the User Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I start with the people using the product and the actions they
                need to complete. Clear flows, useful feedback, and accessible
                interactions make an interface feel natural from the first visit.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Build for Real Conditions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Responsive layouts, fast loading states, and resilient data
                handling are part of the implementation from the beginning. The
                result works across devices, networks, and changing content.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Improve with Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I use feedback, analytics, and code quality practices to refine
                the experience after launch. Each improvement should make the
                product clearer for users and more sustainable for the team.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}