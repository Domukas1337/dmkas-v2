import { Relations } from "@/types/Relations";
import Link from "next/link";

export default function RelationsCard({ relation, entry }: Relations) {
  return (
    <Link
      href={`/search/anime/details/${entry[0].mal_id}`}
      className="hover:underline"
    >
      <span className="font-bold">{relation}</span> {entry[0].name} -{" "}
      {entry[0].type}
    </Link>
  );
}
