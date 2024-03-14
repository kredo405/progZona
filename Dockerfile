# Используем официальный образ Node.js
FROM node:14

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем глобально сервер для статической раздачи
RUN npm install -g serve

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000