interface ImpactScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

const ImpactScoreBadge = ({ score, size = "sm" }: ImpactScoreBadgeProps) => {
  const level = score >= 65 ? "high" : score >= 40 ? "medium" : "low";
  const sizeClasses = size === "lg" ? "text-lg px-4 py-1.5" : size === "md" ? "text-sm px-3 py-1" : "text-xs px-2.5 py-0.5";

  return (
    <span className={`impact-badge-${level} ${sizeClasses} font-semibold`}>
      {score}
    </span>
  );
};

export default ImpactScoreBadge;
