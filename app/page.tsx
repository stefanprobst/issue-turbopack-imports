import { i18n } from "@/lib/i18n";

export default function Page() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <Check />
    </main>
  );
}

async function Check() {
  const messages = await i18n("en");

  return <pre>{JSON.stringify(messages)}</pre>;
}
