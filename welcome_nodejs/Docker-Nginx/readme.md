Docker Project: Nginx, Backend API, and Frontend

Цей проект представляє собою веб-застосунок, що складається з трьох контейнерів:

Frontend - статичний веб-сайт на Nginx.
Backend API - серверна частина на Node.js.
Nginx - реверс-проксі, що розподіляє навантаження на backend API та обслуговує frontend.
```
project-root/
├── backend/
│   ├── src/
│   │   └── app.js                  # Основний файл сервера для backend
│   └── Dockerfile                  # Dockerfile для backend
├── frontend/
│   ├── src/
│   │   └── index.html              # Статичний HTML-файл для frontend
│   └── Dockerfile                  # Dockerfile для frontend
├── services/
│   └── nginx/
│       └── nginx.conf              # Конфігурація Nginx
├── docker-compose.yml              # Docker Compose файл для запуску контейнерів
└── README.md                       # Опис проекту
```

## Запуск проекту

Попередні вимоги
Перед початком переконайтеся, що на комп'ютері встановлені:

 Docker - Завантажити та встановити Docker

Docker Compose - встановлюється разом із Docker

## Кроки запуску
Клонуйте цей репозиторій:

````
https://github.com/Radevac/JS_ClassWork
cd JS_ClassWork
````

## Запустіть контейнери за допомогою Docker Compose:
```
docker-compose up --build
```
Після завершення збірки перейдіть у браузері на ```http://localhost``` для перегляду frontend, а запити до backend API можна робити за адресою ```http://localhost/api/hello```.

Опис конфігураційних файлів

```docker-compose.yml``` - налаштовує мережу контейнерів:

```frontend``` - обслуговує статичний контент.

```backend_1 і backend_2``` - працюють як backend-сервіси, до яких звертається Nginx.

```nginx``` - розподіляє запити на backend API та обслуговує frontend.

Nginx конфігурація ```(services/nginx/nginx.conf)```:

Балансує навантаження між ```backend_1``` та ```backend_2``` на ендпоінті /api/.
Перенаправляє всі інші запити до frontend.

Висновок

Цей проект демонструє просту структуру веб-застосунку з використанням контейнерів Docker для frontend і backend сервісів, а також Nginx для проксі та балансування навантаження. Це корисно для розробки й тестування контейнеризованих веб-застосунків, розподілу навантаження та організації ізольованого середовища для мікросервісів.