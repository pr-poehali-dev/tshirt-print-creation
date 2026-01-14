import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-serif font-semibold text-foreground">ПРИНТЫ</h1>
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-sm hover:text-accent transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-sm hover:text-accent transition-colors"
            >
              Каталог
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-sm hover:text-accent transition-colors"
            >
              О бренде
            </button>
            <button
              onClick={() => onNavigate('designer')}
              className="text-sm hover:text-accent transition-colors"
            >
              Дизайнер
            </button>
            <button
              onClick={() => onNavigate('delivery')}
              className="text-sm hover:text-accent transition-colors"
            >
              Доставка
            </button>
            <button
              onClick={() => onNavigate('contacts')}
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
  );
}
