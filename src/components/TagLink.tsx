import { Link, Typography } from "@mui/material";

interface TagLinkProps {
  name: string;
}
export default function TagLink({ name }: TagLinkProps) {
  return (
    <Link href={`/pages?t=${name}`} className="tag-link">
      <Typography>{name}</Typography>
    </Link>
  );
}
