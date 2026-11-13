# Angular PokéAPI

Ejemplo educativo con Angular 17.3 que consulta PokéAPI mediante un servicio con `HttpClient` y muestra el nombre, ID, imagen y tipos de un Pokémon. Incluye componentes standalone, interfaces TypeScript y estados de carga y error.

## CÓMO EJECUTAR EL PROYECTO

### 1. Requisitos

- Git.
- Node.js 20.x desde la versión 20.9.0, con npm. Angular 17.3 también admite Node.js 18.x desde 18.13.0. Estas versiones se indican por compatibilidad con este ejemplo: [tabla oficial](https://angular.dev/reference/versions).
- Conexión a Internet para instalar dependencias y consultar PokéAPI y las imágenes.

Comprueba tu instalación:

```bash
node --version
npm --version
```

### 2. Clonar el repositorio

```bash
git clone https://github.com/gabusleon/angular-pokeapi.git
cd angular-pokeapi
```

### 3. Instalar las dependencias

```bash
npm ci
```

Este comando instala las versiones registradas en `package-lock.json`. No es necesario instalar Angular CLI globalmente.

### 4. Iniciar la aplicación

```bash
npm start
```

Abre **http://localhost:4200/** en el navegador. Al iniciar, se consulta `pikachu` automáticamente. Los cambios guardados en el código se reflejan durante el desarrollo. Para detener el servidor, presiona `Ctrl+C` en la terminal.

Si el puerto está ocupado:

```bash
npm start -- --port 4201
```

En ese caso, abre **http://localhost:4201/**.

## Cambiar el Pokémon

En `src/app/components/mi-pokemon/mi-pokemon.component.ts`, modifica el atributo y guarda:

```ts
public nombre: string = 'pikachu';
```

Puedes usar, por ejemplo, `bulbasaur`, `charmander` o `squirtle`.

## Organización del ejemplo

- `src/app/models/pokemon-api-response.ts`: interfaz de los campos utilizados de la respuesta de PokéAPI.
- `src/app/models/pokemon.ts`: interfaz de los datos que utiliza la aplicación.
- `src/app/services/pokemon.service.ts`: inyecta `HttpClient`, consulta la API y transforma la respuesta a `Pokemon`. Usa `firstValueFrom` para devolver `Promise<Pokemon>`.
- `src/app/components/mi-pokemon/`: llama al servicio desde `ngOnInit()` y muestra el resultado.
- `src/app/app.config.ts`: registra `provideHttpClient()`.
- `src/app/components/mi-componente/`: ejemplo adicional de interpolación y uso de `DatePipe`, con datos ficticios.

## Compilar y ejecutar pruebas

```bash
npm run build
npm test
```

La compilación se genera en `dist/my-angular-app`. Las pruebas usan Karma y requieren Chrome. Para ejecutarlas una sola vez sin ventana:

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

## Problemas de conexión

La consulta usa `https://pokeapi.co/api/v2/pokemon/{nombre}`. Un nombre inexistente devuelve un error 404. Si aparece `ERR_NAME_NOT_RESOLVED`, revisa la conexión, DNS, VPN o proxy: cambiar de cliente HTTP no resuelve un fallo de DNS. No se necesitan claves de API ni un servidor backend para este ejemplo.

Documentación de la API: https://pokeapi.co/docs/v2
