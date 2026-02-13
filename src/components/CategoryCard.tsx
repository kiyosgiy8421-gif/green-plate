import type { Category } from "@/data/mockData";

interface Props {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 rounded-2xl px-5 py-3 text-sm font-medium transition-all ${
        isActive
          ? "bg-primary text-primary-foreground shadow-md"
          : "bg-secondary text-secondary-foreground hover:bg-accent"
      }`}
    >
      <span className="text-2xl">{category.icon}</span>
      <span>{category.name}</span>
    </button>
  );
}
