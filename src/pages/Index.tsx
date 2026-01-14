import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import Footer from '@/components/Footer';

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

  const handleSubmitReview = () => {
    if (!selectedProduct || !newReview.author || !newReview.comment) return;
    setNewReview({ author: '', rating: 5, comment: '' });
    alert('Спасибо за ваш отзыв!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />

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
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveSection('catalog');
                      }}
                      variant="home"
                    />
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
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                      isSelected={selectedProduct?.id === product.id}
                      variant="catalog"
                    />
                  ))}
                </div>
              </div>

              {selectedProduct && (
                <ProductDetail
                  product={selectedProduct}
                  newReview={newReview}
                  onReviewChange={setNewReview}
                  onSubmitReview={handleSubmitReview}
                />
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

      <Footer onNavigate={setActiveSection} />
    </div>
  );
}
