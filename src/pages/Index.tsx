import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-zic-white">
      {/* Navigation */}
      <nav className="bg-zic-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-zic-black">ZIC</h1>
              <span className="ml-2 text-sm text-zic-orange font-medium">
                MOTOR OILS
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-zic-black hover:text-zic-orange transition-colors"
              >
                Каталог
              </a>
              <a
                href="#company"
                className="text-zic-black hover:text-zic-orange transition-colors"
              >
                Компания
              </a>
              <a
                href="#certification"
                className="text-zic-black hover:text-zic-orange transition-colors"
              >
                Сертификация
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zic-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">ZIC MOTOR OILS</h1>
              <p className="text-xl mb-8 text-gray-300">
                Профессиональные моторные масла для максимальной защиты вашего
                двигателя. Инновационные технологии и высочайшее качество.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-zic-orange hover:bg-orange-600 text-white px-8 py-3">
                  Посмотреть каталог
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zic-black px-8 py-3"
                >
                  О компании
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="/img/58a449d0-c79b-4be0-bf88-15300eea89d2.jpg"
                alt="ZIC Motor Oil Product"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-zic-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-zic-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplets" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zic-black">
                Высокое качество
              </h3>
              <p className="text-gray-600">
                Современные технологии производства и строгий контроль качества
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-zic-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zic-black">
                Защита двигателя
              </h3>
              <p className="text-gray-600">
                Максимальная защита от износа и коррозии в любых условиях
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-zic-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zic-black">
                Сертификация
              </h3>
              <p className="text-gray-600">
                Соответствие международным стандартам и сертификатам качества
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-zic-black">
              Каталог продукции
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полная линейка моторных масел ZIC для различных типов двигателей и условий эксплуатации
            </p>
          </div>
          
          {/* Product showcase */}
          <div className="mb-16">
            <img 
              src="/img/117c5d49-eb1c-4b4a-a27e-3a1bbf05b472.jpg" 
              alt="ZIC Motor Oils Product Line" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-zic-orange">
              <div className="bg-gradient-to-br from-zic-orange to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Car" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zic-black">
                ZIC X9 Series
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Полностью синтетическое моторное масло премиум-класса. Обеспечивает максимальную защиту современных высокотехнологичных двигателей.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} className="text-zic-orange mr-2" />
                  <span>API SN/CF, ACEA A3/B4</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} className="text-zic-orange mr-2" />
                  <span>Вязкость: 0W-20, 5W-30, 5W-40</span>
                </div>
              </div>
              <Button className="bg-zic-orange hover:bg-orange-600 text-white w-full py-3">
                Подробнее
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-zic-orange">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Truck" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zic-black">
                ZIC X7 Series
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Полусинтетическое масло, сочетающее преимущества синтетических и минеральных основ. Идеально для легковых автомобилей и коммерческого транспорта.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} className="text-blue-500 mr-2" />
                  <span>API SL/CF, ACEA A3/B3</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} className="text-blue-500 mr-2" />
                  <span>Вязкость: 10W-30, 10W-40, 15W-40</span>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3">
                Подробнее
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-500">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Cog" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zic-black">
                ZIC X5 Series
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Высококачественное минеральное масло для двигателей с большим пробегом. Обеспечивает надежную защиту и уплотнение.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} className="text-red-500 mr-2" />
                  <span>API SJ/CF, ACEA A2/B2</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} className="text-red-500 mr-2" />
                  <span>Вязкость: 15W-40, 20W-50</span>
                </div>
              </div>
              <Button className="bg-red-500 hover:bg-red-600 text-white w-full py-3">
                Подробнее
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-zic-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-zic-black">
                О компании ZIC
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                ZIC — ведущий производитель высококачественных моторных масел с
                многолетней историей инноваций. Наша продукция разрабатывается с
                использованием передовых технологий и проходит строжайший
                контроль качества.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-zic-orange mr-3"
                  />
                  <span className="text-gray-700">
                    Более 50 лет опыта в производстве
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-zic-orange mr-3"
                  />
                  <span className="text-gray-700">
                    Современные производственные мощности
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-zic-orange mr-3"
                  />
                  <span className="text-gray-700">
                    Собственный центр исследований и разработок
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/img/c964970d-f289-4c1a-b3de-edaf3c4bb21f.jpg"
                alt="ZIC Production Facility"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-zic-black">
              Сертификация и стандарты качества
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наша продукция соответствует самым строгим международным стандартам и имеет все необходимые сертификаты качества
            </p>
          </div>
          
          {/* Testing lab image */}
          <div className="mb-16">
            <img 
              src="/img/54386bef-ae72-4dc7-b1f1-302fbe8cf1d8.jpg" 
              alt="ZIC Quality Testing Laboratory" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-gray-200">
              <div className="bg-gradient-to-br from-zic-orange to-orange-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zic-black">API</h3>
              <p className="text-gray-600 mb-4">
                Американский институт нефти
              </p>
              <p className="text-sm text-gray-500">
                Стандарты SN, SM, SL для бензиновых двигателей
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-gray-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zic-black">ACEA</h3>
              <p className="text-gray-600 mb-4">
                Европейская ассоциация автопроизводителей
              </p>
              <p className="text-sm text-gray-500">
                Классификации A3/B4, A3/B3, A5/B5
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-gray-200">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Star" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zic-black">ISO 9001</h3>
              <p className="text-gray-600 mb-4">
                Система менеджмента качества
              </p>
              <p className="text-sm text-gray-500">
                Международная сертификация качества
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-gray-200">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Globe" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zic-black">OEM</h3>
              <p className="text-gray-600 mb-4">
                Одобрения автопроизводителей
              </p>
              <p className="text-sm text-gray-500">
                BMW, Mercedes-Benz, Volkswagen, Hyundai
              </p>
            </Card>
          </div>
          
          {/* Additional certifications */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-zic-black">
              Дополнительные сертификаты и одобрения
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon name="CheckCircle" size={24} className="text-zic-orange mx-auto mb-3" />
                <h4 className="font-semibold mb-2">JASO</h4>
                <p className="text-sm text-gray-600">Японская организация по стандартизации автомобилей</p>
              </div>
              <div className="text-center">
                <Icon name="CheckCircle" size={24} className="text-zic-orange mx-auto mb-3" />
                <h4 className="font-semibold mb-2">ILSAC</h4>
                <p className="text-sm text-gray-600">Международный комитет по стандартизации и одобрению смазочных материалов</p>
              </div>
              <div className="text-center">
                <Icon name="CheckCircle" size={24} className="text-zic-orange mx-auto mb-3" />
                <h4 className="font-semibold mb-2">ГОСТ</h4>
                <p className="text-sm text-gray-600">Российские государственные стандарты качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zic-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ZIC MOTOR OILS</h3>
              <p className="text-gray-400">
                Профессиональные моторные масла для вашего автомобиля
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-zic-orange">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ZIC X9 Series</li>
                <li>ZIC X7 Series</li>
                <li>ZIC X5 Series</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-zic-orange">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Производство</li>
                <li>Качество</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-zic-orange">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@zic-oils.com</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZIC Motor Oils. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;