# Pokedex
Pokedex es un proyecto hecho en Express.JS que busca simular el [Pokedex de Pokemón](https://www.pokemon.com/el/pokedex) pero con Pokeneas: Personas Nacidas en Antioquia.

## Requisitos previos
   - **Git**
   - **Node > v22.11.0**

## Configuración inicial

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/sidarragac/Pokedex.git pokedex
   cd pokedex
   ```

2. **Instalar dependencias**:
   ```bash
   npm i
   ```

3. **Configurar entorno**:
   ```bash
   copy .env.example .env
   ```

## Configuración del archivo .env
1. **Editar el archivo `.env` con estos valores esenciales:**
   ```env
   PORT=3000
   ```
   <i>Nota:</i> No modifique el <BUCKET_URL>

## Acceso al sistema

1. **Ejecute en la línea de comandos:**
   ```bash
   node ./src/index.js
   ```
2. **Ingrese a la URL:**
   http://127.0.0.1:3000