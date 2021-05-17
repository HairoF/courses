import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import AppHeader from '../header';
import PostAddForm from '../post-add-form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [
          {"fullUrl": "https://netology.ru/programs/devops",
          "title": "DevOps-инженер",
          "description": "DevOps-инженер В этом модуле вы овладеете базовой терминологией, используемой в процессе создания программного обеспечения. Познакомитесь с популярными методологиями разработки и поймёте их различия. Узнаете, зачем нужны инфраструктурные архитекторы и чем они занимаются. В этому модуле вы узнаете, почему и как возникли системы управления версиями исходного кода. Получите практические навыки глубокой работы с Git репозиториями. Научитесь работать одновременно с несколькими репозиториями, синхронизировать их и создавать резервные копии. Познакомитесь со способами интеграции репозиториев со внешними системами. Узнаете, как контролировать процесс разработки ещё на уровне отправки кода в репозиторий.  Разберётесь с Linux, Unix и другими видами ОС. Научитесь работать на продвинутом уровне с локальной сетью и интернет (MAC, Ethernet, TCP/IP, DNS). Попробуете на практике набор инструментов для отладки операционной системы и приложений. В этом модуле вы напишете ряд Bash-скриптов, которые можно будет использовать для решения типовых задач. Научитесь автоматизировать работу с помощью языка программирования Python. Научитесь создавать документы в формате YAML, JSON и конвертировать эти форматы между собой. Узнаете различия видов виртуализации и контейнеризации. Научитесь управлять виртуальными машинами с помощью libvirtd. Напишете несколько Dockerfile, которые можно будет использовать в дальнейших проектах как примеры. Научитесь запускать несколько контейнеров одновременно и объединять их в виртуальную сеть.  Узнаете, чем различаются SQL и NoSQL базы данных, и научитесь выбирать нужную из всего многообразия существующих решений. Познакомитесь с решениями для полнотекстового поиска. Овладеете навыками установки и настройки кеш-систем. Научитесь устанавливать и настраивать базы данных для нужд разработки. Познакомитесь с технологиями создания отказоустойчивых кластеров баз данных и кеш систем при помощи кластеризации и шардинга. Научитесь писать простые SQL-запросы и запросы для работы с NoSQL-базами данных.  Подробно разберём все этапы жизни ПО. Вы узнаете, как организовать взаимодействие между разработчиками, тестировщиками и системными администраторами. Получите практические навыки работы с Jenkins, TeamCity и Gitlab CI.  Подробно разберётесь, зачем нужен мониторинг и какие параметры нужно контролировать. Узнаете, как организовать систему оповещения о различных событиях, чтобы узнавать о сбоях первым, а не от заказчика. Научитесь организовывать логирование всех действий приложений и анализировать эти логи. Овладеете навыками работы с elasticsearch, Logstash, Kibana и Graylog. Научитесь настраивать связку Prometehus + Grafana + Alertmanager. Познакомитесь с Zabbix для мониторинга физических и виртуальных машин. Научитесь описывать инфраструктуру в виде кода. Сможете настроить удаленный сервер и восстановить его конфигурацию в случае необходимости. Узнаете набор уже готовых шаблонов для решения типовых задач конфигурирования серверов.  Научитесь описывать конфигурацию любых сервисов, имеющих API, в виде кода при помощи Terraform. Научитесь выстраивать командные процессы работы над инфраструктурой. Овладеете навыками написания скриптов на Golang. Научитесь писать собственные расширения для Terraform. Узнаете, в каких случаях выгодно использовать микросервисы вместо монолитного приложения. Научитесь проектировать отказоустойчивые системы. Познакомитесь с популярными веб-серверами и балансировщиками нагрузок. Научитесь разворачивать кластер Kubernetes на собственных мощностях. Поймёте, из каких компонентов состоит control plane и на что нужно обращать внимание при администрировании собственного кластера Кубернетес. Узнаете, как с помощью навыков автоматизированного управления конфигурациями добавлять и удалять узлы, менять конфигурацию имеющихся нод. С помощью полученных теоретических знаний развернём stateless-приложение. Усложним, добавив stateful зависимости. Воспользуемся готовыми манифестами для установки приложений в кластер. Разберётесь, как хранить и использовать пароли внутри кластера и передавать конкретным приложениям. Узнаете, как управлять уровнем доступов контейнеров и подов. Научитесь контролировать взаимодействия подов между собой.  Освоите общие принципы создания проектов в облачных сервисах. Познакомитесь с основными инструментами, которые предоставляют облачные провайдеры. Сначала вы поэтапно изучите построение процессов, используемых в DevOps, в теории и на практических задачах, а затем выполните дипломный практикум в облачном сервисе Yandex.Cloud. Это позволит вам интегрировать накопленные знания, самостоятельно построить современный процесс DevOps и получить в портфолио серьезный проект, использующий систему непрерывной разработки и интеграции в самостоятельно развёрнутый Kubernetes кластер.Вы научитесь создавать базовую инфраструктуру с помощью Terraform, деплоить собственный Kubernetes кластер с помощью Ansible, настраивать Jenkins для деплоя сервисов в Kubernetes.",
          "priceWithoutStr": "117900",
          "author": "Андрей Борю",
          "skills": "Работа с Git, одновременная работа с несколькими репозиториями; Администрирование Linux, работа с инструментами отладки операционной системы и приложений; Автоматизация процессов и решение типовых задач с помощью Python и Bash; Администрирование реляционных и нереляционных баз данных, работа с PostgreSQL, MongoDB, Memcached и Redis; Процессы CI/CD: тестирование, сборка и доставка в разные окружения, работа с Jenkins, Teamcity и Gitlab CI; Мониторинг и логирование с помощью ELK, Graylog, Zabbix, Prometehus, Grafana и Alertmanager; Работа с системой управления конфигурацией Ansible, настройка удалённых серверов и восстановление их конфигурации; Выстраивание командных процессов работы над облачной инфраструктурой, описание конфигурации сервисов с помощью Terraform и создание для него собственных расширений; Знание Kubernetes на продвинутом уровне — развёртка кластера Kubernetes, работа с конфигурацией и сетевой безопасностью; Знание различных видов виртуализации и контейнеризации, работа с Docker и Docker Compose; Организация проектов при помощи облачных провайдеров Amazon Web Services, Google Cloud Platform и Microsoft Azure",
          "period": " 3 июня 2021 —  2 мая 2022"},
          { "fullUrl": "https://netology.ru/programs/qa",
          "title": "Тестировщик",
          "description": "Тестировщик в компании — это IT-специалист, следящий за качеством программного продукта. В его задачи входит исследование на предмет соответствия реального поведения ПО и фактических ожиданий (это может быть локальное приложение на компьютере, веб-приложение, мобильное приложение). Спрос на тестировщиков очень высок — каждая команда разработки стремится выпускать качественный продукт без багов Если вы уже работаете в ИТ и хотите стать частью команды разработчиков, иметь более удобный график и общаться больше с программистами, чем с пользователями, то переходите в тестирование. Начнём с азов проведения тестирования и введения в профессию. За 8 занятий вы познакомитесь с теориями тестирования, узнаете разницу между понятиями QA и тестированием и начнёте писать тестовые сценарии и заводить баги. На практике вы будете работать с различными программными продуктами,  создавать под них тестовые сценарии в Zephyr и заводить баги на платформе JIRA, а также тестировать API. В этом блоке начинаем работу с Java, одним из самых популярных языков программирования. Блок состоит из 16 занятий и включает в себя изучение основ языка, работу с объектно-ориентированным программированием, сборку Java проектов и использование инструментов тестирования. Вы изучите язык программирования именно в связке с задачами тестирования.  В этом модуле вас ждут десять видео-лекций, которые помогут вам начать разговаривать на английском языке, как настоящий разработчик. Каждый разработчик должен знать основы работы с системой Git, так как на данный момент это практически стандарт по управлению исходным кодом. За 3 занятия вы научитесь работать с этой системой и с сервисом GitHub, сможете публиковать свои домашние работы и уже в процессе обучения сформируете первое портфолио (работодатели часто просят показать примеры вашего кода на GitHub). Вы уже освоили базовые навыки проведения тестирования и изучили программирование на Java. Самое время перейти к автоматизации тестирования, модуль включает 8 занятий. На практике вы будете писать Unit-тесты для готового Java-проекта, проводить UI-автоматизацию тест-кейсов, составлять и автоматизировать пользовательские сценарии, анализировать готовые результаты.  Для проведения практических заданий вы будете использовать виртуальные серверы. Это будут проекты по работе с:— Docker & Docker Compose — напишете автотесты на готовые приложения, запущенные в контейнерах в VDS;— SQL (MySQL и PostgreSQL) — напишете автотесты на контейнеризированные приложения, использующие СУБД;— Report Portal — самостоятельно развернёте систему Report Portal внутри VDS с помощью Docker Compose и будете фиксировать в ней отчёты, полученные по результатам прогона тестов в GitHub Actions. Узнаете о том, как выглядит работа тестировщика в жизни, какие задачи он выполняет. Как составить резюме и где искать работу. Как развиваться в профессии и какие существуют специализации. Заключительным этапом будет проведение автоматизированного тестирования крупного веб-сервиса. Лучшие выпускники примут участие в очном мероприятии с возможностью лично познакомиться с преподавателями и принять участие в отборе на открытые вакансии Альфа-Банка.",
          "priceWithoutStr": "77900",
          "author": "Александр Долинский",
          "skills": "Использование актуальных теорий тестирования; Понимание жизненного цикла разработки программного обеспечения; Программирование на Java; Использование объектно-ориентированного программирования; Работа с системой контроль версий Git, платформой GitHub; Проведение unit-тестирования; Подготовка и проведение автоматизированных тестовых сценариев; Подготовка отчёта о тестировании, заведение дефектов; Работа в Selenium Webdriver",
          "period": " 3 июня —  2 декабря"},
          {"fullUrl": "https://netology.ru/programs/qa-middle",
          "title": "Инженер по тестированию: с нуля до middle",
          "description": "QA-engineer Начнём с азов проведения тестирования и введения в профессию. За 6 занятий вы познакомитесь с теориями тестирования, узнаете разницу между понятиями QA и тестированием и начнёте писать тестовые сценарии и заводить баги. На практике вы будете работать с различными программными продуктами, создавать под них тестовые сценарии в Zephyr и заводить баги на платформе JIRA, а также тестировать API. Научитесь верстать сайты на HTML и CSS и вносить изменения в существующую вёрстку. По итогам этого модуля вы уже самостоятельно сверстаете лендинг.  Каждый разработчик должен знать основы работы с системой Git, так как сейчас это практически стандарт по управлению исходным кодом. За 3 занятия вы научитесь работать с этой системой и с сервисом GitHub, сможете публиковать свои домашние работы и уже в процессе обучения сформируете первое портфолио (работодатели часто просят показать примеры вашего кода на GitHub). Вы уже освоили базовые навыки проведения тестирования и изучили программирование на Java. Самое время перейти к автоматизации тестирования, модуль включает 8 занятий. На практике вы будете писать Unit-тесты для готового Java-проекта, проводить UI-автоматизацию тест-кейсов, составлять и автоматизировать пользовательские сценарии, анализировать готовые результаты. Начинаем работу с Java, одним из самых популярных языков программирования. Блок состоит из 16 занятий и включает в себя изучение основ языка, работу с объектно-ориентированным программированием, сборку Java-проектов и использование инструментов тестирования. Вы изучите язык программирования именно в связке с задачами тестирования.  Вы изучите основы JavaScript для проведения тестирования Frontend-части сайта (UI и e2e). На базе уже изученного Java, вам будет проще освоить второй язык, тем более JavaScript — скриптовый язык более высокого уровня. Вы изучите разницы в синтаксисе языков, научитесь использовать основные конструкции языка. Перейдём к работе с современными инструментами для тестирования frontend: Puppeeter, Playwright, Cypress, познакомимся с платформой NodeJS. Это инструменты на JavaScript, которые автоматизируют действия в браузере и помогут ускорить проведение тестов. В этом модуле вы перейдёте к тестированию мобильных приложений. При работе с мобильными приложениями есть своя специфика — здесь вы изучите особенности функционального и нефункционального тестирования, рассмотрите типичные кейсы. Для автоматизации работы вы будете использовать Java, Android Studio, UI Automator, Espresso, Appium. В этом блоке изучите в теории и на практике одни из самых важных типов тестирования веб-приложений: тестирование производительности. Вы познакомитесь с нагрузочным тестированием, стресс-тестированием, объёмным тестированием, тестированием стабильности и другими.Для работы потребуются специальные инструменты: для генерации нагрузки и для мониторинга характеристик производительности. На практике поработаете с инструментом JMeter, который позволяет проводить нагрузочное тестирование, логировать результаты и визуализировать в виде диаграмм и таблиц. Одна из самых интересных тем в тестировании, включает работу с утечками конфиденциальной информации, передачи данных по открытым каналам связи, противодействие мошенничеству.Вы изучите виды уязвимостей, узнаете, чем они отличаются от багов и какие инструменты нужны для поиска уязвимостей и проверки безопасности. На этом видеокурсе вы изучите один из самых популярных языков программирования. Познакомитесь с типами данных, классами, функциями, узнаете, как работать с файловой системой в Python В этом модуле вас ждут десять видеолекций, которые помогут вам начать разговаривать на английском языке, как настоящий разработчик. Узнаете, как выглядит работа тестировщика в жизни, какие задачи он выполняет. Поймёте, как составить резюме и где искать работу. Разберётесь, как развиваться в профессии и какие существуют специализации.",
          "priceWithoutStr": "129900",
          "author": "Анастасия Шариковаа",
          "skills": "Ручное тестирование, написание тест-кейсов, тест-дизайн; Тестирование веб-приложений, API, понимание клиент-серверного взаимодействия, работа с DevTools, Postman; Понимание работы баз данных, написание SQL-запросов; Работа с Git, одновременная работа с несколькими репозиториями; Работа в Linux, работа с инструментами отладки операционной системы и приложений; Автотестирование веб-приложений на Java с использованием JUnit, Selenium, Selenide; Проведение нагрузочных тестов, тестов безопасности и удобства использования; Мобильное тестирование Android-приложений с помощью Android Studio и Espresso; Автоматизация тестирования Frontend на JavaScript с помощью Puppeeter, Playwright, Cypress; Знание различных видов виртуализации и контейнеризации, работа с Docker и Docker Compose; Процессы CI/CD: тестирование, сборка и доставка в разные окружения, работа с Jenkins, Teamcity и Gitlab CI",
          "period": " 3 июня 2021 —  2 августа 2022"},
          {"fullUrl": "https://netology.ru/programs/python",
          "title": "Python-разработчик с нуля",
          "description": "Python входит в топ-10 самых востребованных языков программирования (по данным Stack Overflow). Он открывает путь в топовые IT-компании: Google, Pixar, Youtube, Instagram, Nasa, Intel, Pinterest используют именно его.После курса вы сможете устроиться в компанию, где создают интерактивные веб-сервисы на Python, а таких очень много: 3305 вакансий для python-разработчика открыто прямо сейчас на hh.ru. Автор программы, ведущий специалист по автоматизированному тестированию в Medindex Изучим один из самых хорошо организованных языков программирования. Научимся описывать алгоритмы для решения повседневных задач и работы с данными. Научитесь работать с системой Git (стандарт по управлению исходным кодом) и с сервисом GitHub. Опубликуете свои домашние работы и уже в процессе обучения сформируете первое портфолио. Облачные хранилища стали для человека нормой. Загрузить в облако альбом с фотографиями или поделиться документами не сложно. Но есть проблема — может закончиться место. Было бы неплохо уметь архивировать самый большой и тяжёлый файл или папку и загружать обратно в облако. Так можно сохранить больше свободного места. Вы с нуля создадите программу «облачный архиватор» для оптимизации места на диске.Программа будет уметь: В этом модуле вас ждут десять видео-лекций, которые помогут вам начать разговаривать на английском языке, как настоящий разработчик. Научимся проектировать базы данных с использованием языка запросов SQL. В рамках курса мы будем работать с базой данных PostgreSQL — одной из самых популярных и простых для изучения. В качестве клиента будем использовать pgAdmin. В конце курса познакомимся с ORM sqlalchemy. Изучим те особенности Python, за которые его так сильно любят. Разберём, как улучшить и упростить программу с помощью модулей, итераторов, декораторов. Изучим технологии для тестирования кода, разбора текста и веб-страниц. В конце курса проведём лекцию по прохождению собеседования на профессию Python-разработчик. Все слышали про приложение для знакомств — Tinder. Вы сделаете бота по аналогии с Tinder. У людей, которые подошли по требованиям пользователю, бот будет отправлять топ-3 популярных фотографии с аватара. Популярность определяется по количеству лайков.Бот будет уметь искать людей, подходящих под условия, на основании информации о пользователе из VK, используя: В этом модуле вы поработаете с фреймворком Django, изучите основные принципы организации проекта в Django. Поработаете с базами данных — научитесь их создавать, работать с ORM и моделями. Узнаете, как разрабатывать backend веб-приложения и связывать хостинг файлов и запуск веб-приложения. Разработаете сайт интернет-магазина. Реализуете клиентскую часть сервиса и интерфейс администрирования. Будет возможен просмотр товара и добавление в корзину. На главной странице — статьи о подборке товаров, отсортированные по дате создания. Создадите страницу категории товара со списком товаров с пагинацией и  страницу товара с подробным описанием. В меню будет ссылка на главную страницу, на разделы, корзину, кнопка входа/выхода в зависимости от статуса авторизации.  Корзина содержит список выбранных товаров, кнопка заказа должна создавать заказ и очищать корзину.В интерфейсе администратора реализуете: редактирование разделов, товаров, статей на главной странице и привязывание к ним товаров, просмотр списка заказов пользователей, отсортированных по дате создания, страницу детализации заказа с просмотром списка заказанных товаров. Программирование — это целый набор навыков. Код нужно уметь запускать, выкладывать на сервере и конфигурировать. В этом поможет Docker и технологии CI/CD. В качестве приложения напишем программу, используя фреймворк Flask. Во второй части курса изучим технологии асинхронного программирования на Python.",
          "priceWithoutStr": "94900",
          "author": "Евгений Шмаргунов",
          "skills": "Работа с GIT и GitHub; Работа с данными на Python; Создание веб-сервисов на Django; Работа с базами данных; Работа с API сторонних сервисов; Юнит-тестирование; Работа с методами непрерывной интеграции — CI/CD ; Работа с ПО для автоматизации развёртывания и управления приложениями — Docker; Знание SQL для работы с Python",
          "period": "18 мая — 17 января"}
        ]
    };
}

  render() {
    const allPosts = this.state.data.length;
    return (
      <Router>
     <div className="app">
       <AppHeader
          allPosts={allPosts}
       />
       <PostAddForm/>
          <Route path='/' exact/>
          <Route path='/all/'/>
          <Route path='/programming/'/>
          <Route path='/analys'/>
     </div>
     </Router>
    )
  }
}

export default App;
