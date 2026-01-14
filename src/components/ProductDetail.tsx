import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

interface ProductDetailProps {
  product: Product;
  newReview: { author: string; rating: number; comment: string };
  onReviewChange: (review: { author: string; rating: number; comment: string }) => void;
  onSubmitReview: () => void;
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

export default function ProductDetail({ product, newReview, onReviewChange, onSubmitReview }: ProductDetailProps) {
  return (
    <div className="lg:sticky lg:top-24 h-fit animate-scale-in">
      <Card className="overflow-hidden">
        <div className="aspect-square bg-secondary/50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h3 className="font-serif text-3xl mb-4">{product.name}</h3>
          <div className="flex items-center gap-3 mb-6">
            {renderStars(Math.round(product.rating))}
            <span className="text-muted-foreground">
              {product.rating} ({product.reviewCount} отзывов)
            </span>
          </div>
          <p className="text-3xl font-light mb-6">{product.price} ₽</p>
          <Button size="lg" className="w-full mb-8">
            Добавить в корзину
          </Button>

          <div className="border-t border-border pt-8">
            <h4 className="font-serif text-2xl mb-6">Отзывы покупателей</h4>
            <div className="space-y-6 mb-8">
              {product.reviews.map((review) => (
                <div key={review.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{review.author}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  {renderStars(review.rating)}
                  <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <h5 className="font-medium text-lg">Оставить отзыв</h5>
              <Input
                placeholder="Ваше имя"
                value={newReview.author}
                onChange={(e) => onReviewChange({ ...newReview, author: e.target.value })}
              />
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Оценка
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => onReviewChange({ ...newReview, rating: star })}
                      className="transition-colors"
                    >
                      <Icon
                        name="Star"
                        size={24}
                        className={
                          star <= newReview.rating
                            ? 'fill-accent text-accent'
                            : 'text-border'
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>
              <Textarea
                placeholder="Ваш отзыв"
                value={newReview.comment}
                onChange={(e) => onReviewChange({ ...newReview, comment: e.target.value })}
                rows={4}
              />
              <Button onClick={onSubmitReview} className="w-full">
                Отправить отзыв
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
