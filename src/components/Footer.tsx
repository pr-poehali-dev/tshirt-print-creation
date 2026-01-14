import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
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
                <button onClick={() => onNavigate('delivery')}>Доставка</button>
              </li>
              <li>Оплата</li>
              <li>Возврат</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">О компании</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => onNavigate('about')}>О бренде</button>
              </li>
              <li>
                <button onClick={() => onNavigate('designer')}>Дизайнер</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contacts')}>Контакты</button>
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
  );
}
