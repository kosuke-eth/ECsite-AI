import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "オーバーサイズコットンTシャツ",
    price: "¥4,990",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    name: "デニムワイドパンツ",
    price: "¥8,990",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "リネンブレザー",
    price: "¥15,990",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">おすすめアイテム</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
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
                <p className="text-sm text-muted-foreground mb-4">{product.price}</p>
                <Button className="w-full">カートに追加</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}