import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  isSelected?: boolean;
  variant?: 'home' | 'catalog';
}

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="Star"
          size={16}
          className={star <= rating ? 'fill-accent text-accent' : 'text-border'}
        />
      ))}
    </div>
  );
};

export default function ProductCard({ product, onClick, isSelected = false, variant = 'home' }: ProductCardProps) {
  if (variant === 'catalog') {
    return (
      <Card
        className={`overflow-hidden cursor-pointer transition-all ${
          isSelected ? 'ring-2 ring-primary' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex gap-6 p-6">
          <div className="w-32 h-32 flex-shrink-0 bg-secondary/50 rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-2xl mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-3">
              {renderStars(Math.round(product.rating))}
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} отзывов)
              </span>
            </div>
            <p className="text-xl font-light">{product.price} ₽</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h4 className="font-serif text-2xl mb-2">{product.name}</h4>
        <div className="flex items-center gap-2 mb-3">
          {renderStars(Math.round(product.rating))}
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="text-2xl font-light">{product.price} ₽</p>
      </div>
    </Card>
  );
}
