import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PRODUCTS = [
  {
    id: 1,
    name: "オーバーサイズコットンTシャツ",
    price: "¥4,990",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "トップス",
  },
  {
    id: 2,
    name: "デニムワイドパンツ",
    price: "¥8,990",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "ボトムス",
  },
  {
    id: 3,
    name: "リネンブレザー",
    price: "¥15,990",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    category: "アウター",
  },
  {
    id: 4,
    name: "ストライプシャツ",
    price: "¥6,990",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
    category: "トップス",
  },
  {
    id: 5,
    name: "チノパン",
    price: "¥7,990",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    category: "ボトムス",
  },
  {
    id: 6,
    name: "ニットカーディガン",
    price: "¥9,990",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
    category: "アウター",
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PRODUCTS.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <p className="font-medium mb-4">{product.price}</p>
            <Button className="w-full">カートに追加</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}