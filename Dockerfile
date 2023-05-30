#O comando FROM faz download da Imagem do Node na versão 18
FROM node:18
#WORKDIR é o diretório onde o projeto será instaldo dentro da imagem 
WORKDIR /usr/src/app
#Estamos copiadno todos os arquivos package json e colando
#diretório de trabalho(WORKDIR) app, definido acima
COPY package*.JSON ./
COPY . .
#Instalando
RUN npm install
#Instalando no sistema o módulo nodemon
RUN npm i -g nodemon
#Expondo a porta de comunicação definida no projeto do node
EXPOSE 5028
#Executar o comando de nodemon index.js quando o container subir
CMD ["nodemon","index.js"]