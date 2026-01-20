interface DivisorProps {
  color?: string;
}

export function Divisor({ color = "bg-pink-500" }: DivisorProps) {
  return <div className={`w-full h-1 ${color}`}></div>;
}
