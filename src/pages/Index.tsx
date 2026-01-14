import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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

const products: Product[] = [
  {
    id: 1,
    name: 'Геометрия',
    price: 2990,
    image: 'https://cdn.poehali.dev/projects/7830dfb0-740f-4ae1-9579-8578eda3e17a/files/8994d60a-cf01-48b8-be62-8ade4f07b748.jpg',
    rating: 4.8,
    reviewCount: 12,
    reviews: [
      { id: 1, author: 'Анна К.', rating: 5, comment: 'Отличное качество ткани, принт очень стильный', date: '15 янв 2026' },
      { id: 2, author: 'Михаил П.', rating: 4, comment: 'Хорошая футболка, немного маломерит', date: '10 янв 2026' }
    ]
  },
  {
    id: 2,
    name: 'Ботаника',
    price: 3290,
    image: 'https://cdn.poehali.dev/projects/7830dfb0-740f-4ae1-9579-8578eda3e17a/files/1d327346-bee2-4aff-86be-25293e01cb50.jpg',
    rating: 4.9,
    reviewCount: 18,
    reviews: [
      { id: 3, author: 'Елена С.', rating: 5, comment: 'Превзошла все ожидания! Идеальная посадка', date: '12 янв 2026' }
    ]
  },
  {
    id: 3,
    name: 'Типографика',
    price: 2790,
    image: 'https://cdn.poehali.dev/projects/7830dfb0-740f-4ae1-9579-8578eda3e17a/files/b9f0550f-a74d-4854-8c19-bb81c9a7f7d9.jpg',
    rating: 4.7,
    reviewCount: 9,
    reviews: [
      { id: 4, author: 'Дмитрий Л.', rating: 5, comment: 'Минималистично и элегантно', date: '8 янв 2026' }
    ]
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name={star <= rating ? 'Star' : 'Star'}
            size={16}
            className={star <= rating ? 'fill-accent text-accent' : 'text-border'}
          />
        ))}
      </div>
    );
  };

  const handleSubmitReview = () => {
    if (!selectedProduct || !newReview.author || !newReview.comment) return;
    setNewReview({ author: '', rating: 5, comment: '' });
    alert('Спасибо за ваш отзыв!');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif font-semibold text-foreground">ПРИНТЫ</h1>
            <div className="hidden md:flex gap-8 items-center">
              <button
                onClick={() => setActiveSection('home')}
                className="text-sm hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className="text-sm hover:text-accent transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className="text-sm hover:text-accent transition-colors"
              >
                О бренде
              </button>
              <button
                onClick={() => setActiveSection('designer')}
                className="text-sm hover:text-accent transition-colors"
              >
                Дизайнер
              </button>
              <button
                onClick={() => setActiveSection('delivery')}
                className="text-sm hover:text-accent transition-colors"
              >
                Доставка
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className="text-sm hover:text-accent transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingBag" size={20} />
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {activeSection === 'home' && (
          <>
            <section className="container mx-auto px-6 py-20 animate-fade-in">
              <div className="max-w-3xl">
                <h2 className="text-6xl md:text-7xl font-serif font-semibold mb-6 text-foreground leading-tight">
                  Футболки с авторскими принтами
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Коллекция уникальных дизайнов, созданных с вниманием к деталям. 
                  Натуральные ткани, качественная печать, элегантный стиль.
                </p>
                <Button
                  onClick={() => setActiveSection('catalog')}
                  size="lg"
                  className="text-base"
                >
                  Смотреть каталог
                </Button>
              </div>
            </section>

            <section className="bg-secondary/30 py-16">
              <div className="container mx-auto px-6">
                <h3 className="text-4xl font-serif font-semibold mb-12 text-center">
                  Избранные модели
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveSection('catalog');
                      }}
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
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'catalog' && (
          <section className="container mx-auto px-6 py-12 animate-fade-in">
            <h2 className="text-5xl font-serif font-semibold mb-12">Каталог</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="grid gap-8">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      className={`overflow-hidden cursor-pointer transition-all ${
                        selectedProduct?.id === product.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedProduct(product)}
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
                  ))}
                </div>
              </div>

              {selectedProduct && (
                <div className="lg:sticky lg:top-24 h-fit animate-scale-in">
                  <Card className="overflow-hidden">
                    <div className="aspect-square bg-secondary/50">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-3xl mb-4">{selectedProduct.name}</h3>
                      <div className="flex items-center gap-3 mb-6">
                        {renderStars(Math.round(selectedProduct.rating))}
                        <span className="text-muted-foreground">
                          {selectedProduct.rating} ({selectedProduct.reviewCount} отзывов)
                        </span>
                      </div>
                      <p className="text-3xl font-light mb-6">{selectedProduct.price} ₽</p>
                      <Button size="lg" className="w-full mb-8">
                        Добавить в корзину
                      </Button>

                      <div className="border-t border-border pt-8">
                        <h4 className="font-serif text-2xl mb-6">Отзывы покупателей</h4>
                        <div className="space-y-6 mb-8">
                          {selectedProduct.reviews.map((review) => (
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
                            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                          />
                          <div>
                            <label className="text-sm text-muted-foreground mb-2 block">
                              Оценка
                            </label>
                            <div className="flex gap-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  onClick={() => setNewReview({ ...newReview, rating: star })}
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
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            rows={4}
                          />
                          <Button onClick={handleSubmitReview} className="w-full">
                            Отправить отзыв
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="container mx-auto px-6 py-12 max-w-3xl animate-fade-in">
            <h2 className="text-5xl font-serif font-semibold mb-8">О бренде</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ПРИНТЫ — это больше, чем просто одежда. Это философия внимательного отношения 
                к деталям, качеству и дизайну. Мы создаем футболки, которые становятся 
                любимыми предметами гардероба на долгие годы.
              </p>
              <p>
                Каждый принт в нашей коллекции — результат вдумчивой работы дизайнеров. 
                Мы используем только натуральные ткани и современные технологии печати, 
                которые сохраняют яркость цвета после множества стирок.
              </p>
              <p>
                Наша миссия — доказать, что базовая одежда может быть произведением искусства.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'designer' && (
          <section className="container mx-auto px-6 py-12 max-w-3xl animate-fade-in">
            <h2 className="text-5xl font-serif font-semibold mb-8">Дизайнер</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Мария Соколова — основатель и главный дизайнер бренда ПРИНТЫ. 
                Выпускница Британской высшей школы дизайна, работала с ведущими 
                модными домами Европы, прежде чем основать собственный проект.
              </p>
              <p>
                «Мне всегда была близка идея минимализма с характером. Футболка — 
                это чистый холст, на котором можно создать что-то действительно значимое, 
                не теряя при этом функциональности и комфорта».
              </p>
              <p>
                Вдохновение Мария черпает в современной архитектуре, типографике 
                и природных формах, что отражается в каждом принте коллекции.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="container mx-auto px-6 py-12 max-w-3xl animate-fade-in">
            <h2 className="text-5xl font-serif font-semibold mb-8">Доставка</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl mb-4">По России</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex gap-3">
                    <Icon name="Package" size={24} className="flex-shrink-0 text-accent" />
                    <span>Бесплатная доставка при заказе от 5000 ₽</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Truck" size={24} className="flex-shrink-0 text-accent" />
                    <span>Курьерская доставка по Москве и Санкт-Петербургу — 1-2 дня</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="MapPin" size={24} className="flex-shrink-0 text-accent" />
                    <span>Доставка в регионы — 3-7 дней</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-4">Возврат и обмен</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы принимаем возврат и обмен в течение 14 дней с момента получения заказа. 
                  Изделие должно быть в первоначальном состоянии, со всеми бирками.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="container mx-auto px-6 py-12 max-w-3xl animate-fade-in">
            <h2 className="text-5xl font-serif font-semibold mb-8">Контакты</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Icon name="Mail" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground">hello@printy-shop.ru</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Phone" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="MapPin" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Шоурум</p>
                      <p className="text-muted-foreground">
                        Москва, ул. Кузнецкий мост, 12<br />
                        Пн-Пт: 11:00 — 20:00, Сб-Вс: 12:00 — 19:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="font-serif text-2xl mb-6">Напишите нам</h3>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Сообщение" rows={5} />
                  <Button size="lg" className="w-full">Отправить</Button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">ПРИНТЫ</h3>
              <p className="text-sm text-muted-foreground">
                Авторские футболки с уникальными принтами
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => setActiveSection('delivery')}>Доставка</button>
                </li>
                <li>Оплата</li>
                <li>Возврат</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">О компании</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => setActiveSection('about')}>О бренде</button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('designer')}>Дизайнер</button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('contacts')}>Контакты</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-sm text-muted-foreground text-center">
            © 2026 ПРИНТЫ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}