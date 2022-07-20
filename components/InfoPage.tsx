import CodeText from "./CodeText";
import ImageLink from "./ImageLink";

const links = [
  {
    href: "https://nextjs.org/",
    title: "Next.js",
    src: "/Nextjs-logo.svg",
    alt: "Next.js logo",
  },
  {
    href: "https://trpc.io/",
    title: "tRPC",
    src: "/trpc-logo.svg",
    alt: "tRPC logo",
  },
  {
    href: "https://tailwindcss.com/",
    title: "tailwindcss",
    src: "/tailwindcss-logo.svg",
    alt: "tailwindcss logo",
  },
  {
    href: "https://www.typescriptlang.org/",
    title: "TypeScript",
    src: "/typescript-logo.svg",
    alt: "TypeScript logo",
  },
  {
    href: "https://www.prisma.io/",
    title: "Prisma",
    src: "/prisma-logo.svg",
    alt: "Prisma logo",
  },
  {
    href: "https://next-auth.js.org/",
    title: "NextAuth.js",
    src: "/nextauth-logo.png",
    alt: "NextAuth.js logo",
  },
];

export const InfoPage: React.FC = () => {
  return (
    <div id="info" className="bg-[#E8DCFF]">
      <div className="mx-auto max-w-2xl  min-h-screen">
        <div className="p-8" />
        <h2 className="text-2xl font-medium">What is the T3 Stack?</h2>
        <div className="p-2" />
        <p>
          The "T3 Stack" is a web development stack made by{" "}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="https://twitter.com/t3dotgg"
          >
            Theo
          </a>{" "}
          focused on simplicity, modularity, and full-stack typesafety.
        </p>
        <div className="p-8" />
        <h2 className="text-2xl font-medium">What's inside?</h2>
        <div className="p-2" />
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
          {links.map((link, idx) => (
            <ImageLink key={idx} {...link} />
          ))}
        </div>
        <div className="p-8" />
        <h2 className="text-2xl font-medium">T3 Axioms</h2>
        <div className="p-2" />
        <p>
          We'll be frank - this is an <em>opinionated project</em>. We share a
          handful of core beliefs around building and we treat them as the basis
          for our decisions.
        </p>
        <div className="p-2" />
        <h3 className="text-lg font-medium">1. Solve Problems</h3>
        <p>
          It's easy to fall in the trap of "adding everything" - we explicitly{" "}
          <em>don't</em> want to do that. Everything added to{" "}
          <CodeText>create-t3-app</CodeText> should solve a <em>specific</em>{" "}
          problem that exists within the core technologies included. This means
          we <strong>won't</strong> add things like state libraries (
          <CodeText>zustand</CodeText>,<CodeText>redux</CodeText>) but we{" "}
          <strong>will</strong> add things like NextAuth.js and integrate Prisma
          and tRPC for you.
        </p>
        <div className="p-2" />
        <h3 className="text-lg font-medium">2. Bleed Responsibly</h3>
        <p>
          We love our bleeding edge tech. The amount of speed and, honestly,{" "}
          <em>fun</em> that comes out of new shit is really cool. We think it's
          important to <strong>bleed responsibly</strong>, using riskier tech in
          the less risky parts. This means we <strong>wouldn't</strong> ⛔️ bet
          on risky new database tech (SQL is great!). But we{" "}
          <strong>happily</strong> ✅ bet on tRPC since it's just functions that
          are trivial to move off.
        </p>
        <div className="p-2" />
        <h3 className="text-lg font-medium">3. Typesafety Isn't Optional</h3>
        <p>
          Two of the three T's are typesafe (Typescript, tRPC). We take
          typesafety seriously in these parts. Any decision that compromises the
          full-stack, typesafe nature of <CodeText>create-t3-app</CodeText> is a
          decision that should be made in a different project. The stated goal
          of <CodeText>create-t3-app</CodeText> is to provide the quickest way
          to start a new fullstack, type safe web application.
        </p>
        <div className="p-8" />
        <h2 className="text-2xl font-medium">FAQ</h2>
        <div className="p-2" />
        <h3 className="text-lg font-medium">Can I use JavaScript?</h3>
        <p>No</p>
        <div className="p-14" />
      </div>
    </div>
  );
};

export default InfoPage;