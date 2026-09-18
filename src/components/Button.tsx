export default function Button({ title }: { title: string }) {
  return (
    <button className="rounded-4xl bg-contrast px-4 py-3 text-black">
      {title}
    </button>
  );
}