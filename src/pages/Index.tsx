import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Leaf',
      title: 'Экологичный веб-дизайн',
      description: 'Создаём красивые и энергоэффективные сайты, которые заботятся о планете'
    },
    {
      icon: 'Palette',
      title: 'UX/UI дизайн',
      description: 'Разрабатываем интуитивные интерфейсы с фокусом на удобство пользователей'
    },
    {
      icon: 'Code',
      title: 'Веб-разработка',
      description: 'Создаём современные веб-приложения на передовых технологиях'
    },
    {
      icon: 'TrendingUp',
      title: 'SEO оптимизация',
      description: 'Повышаем видимость вашего сайта в поисковых системах'
    }
  ];

  const team = [
    {
      name: 'Алексей Смирнов',
      role: 'Арт-директор',
      image: 'https://cdn.poehali.dev/projects/9d6fd70c-2f5a-4afe-be18-6d76ee2dbec8/files/9eb15f49-b8d1-4e9b-b511-26b05ef7583f.jpg',
      description: 'Эксперт в области экологичного дизайна с 10-летним опытом'
    },
    {
      name: 'Мария Петрова',
      role: 'UX-дизайнер',
      image: 'https://cdn.poehali.dev/projects/9d6fd70c-2f5a-4afe-be18-6d76ee2dbec8/files/a1fced3f-8fc2-42fd-8f22-226f45a659a1.jpg',
      description: 'Создаёт пользовательские интерфейсы, которыми приятно пользоваться'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Веб-разработчик',
      image: 'https://cdn.poehali.dev/projects/9d6fd70c-2f5a-4afe-be18-6d76ee2dbec8/files/eb7a5d62-657d-48c2-974a-3871b54c4881.jpg',
      description: 'Воплощает дизайн в быстрые и надёжные веб-решения'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-2xl text-primary">
            <Icon name="Leaf" size={28} className="text-accent" />
            <span>EcoLine Studio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['home', 'about', 'services', 'team', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О нас'}
                {section === 'services' && 'Услуги'}
                {section === 'team' && 'Команда'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} size="sm">
              Оставить заявку
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['home', 'about', 'services', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'team' && 'Команда'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Экологичный веб-дизайн
            <br />
            <span className="text-primary">для вашего бизнеса</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Создаём современные сайты с заботой о планете. Минимум углеродного следа, максимум эффективности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
              Оставить заявку
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6">
              EcoLine Studio — это команда профессионалов, создающих экологичные цифровые решения. 
              Мы верим, что красивый дизайн и забота о планете могут идти рука об руку.
            </p>
            <p className="text-lg text-muted-foreground">
              Наш подход основан на принципах минимализма, энергоэффективности и оптимизации. 
              Каждый наш проект — это шаг к более устойчивому будущему интернета.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-6">Оставить заявку</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="ivan@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Расскажите о вашем проекте..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Адрес офиса</p>
                        <p className="text-sm text-muted-foreground">г. Москва, ул. Экологическая, д. 15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">hello@ecoline.studio</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <Icon name="MapPin" size={48} className="text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Карта офиса</p>
                      <p className="text-xs text-muted-foreground mt-2">г. Москва, ул. Экологическая, д. 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary mb-4">
                <Icon name="Leaf" size={24} className="text-accent" />
                <span>EcoLine Studio</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Экологичный веб-дизайн и цифровые услуги для устойчивого будущего
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <div className="flex flex-col gap-2">
                {['about', 'services', 'team', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {section === 'about' && 'О нас'}
                    {section === 'services' && 'Услуги'}
                    {section === 'team' && 'Команда'}
                    {section === 'contact' && 'Контакты'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Facebook" size={18} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" size={18} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Linkedin" size={18} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Twitter" size={18} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 EcoLine Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
