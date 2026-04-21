import Link from "next/link";
import Image from "next/image";

type Project = {
  id: number;
  slug: string;
  title: string;
  client: string;
  year: string;
  description: string;
  category: string[];
  cover: string;
  images: string[];
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between">
          <span>{String(project.id).padStart(2, "0")}</span>
          <p className="font-medium">{project.title}</p>
        </div>
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition rounded"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
          />
        </div>

        <div className="flex justify-between text-sm text-gs-200">
          <p className="text-xs ">{project.category.join(" - ")}</p>
          <span className="text-xs">{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
