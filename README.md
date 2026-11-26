# SunriseBirthday

Uma página de **surpresa de aniversário** feita em Next.js: ao abrir, toca uma
música sincronizada com o texto que aparece na tela, terminando com uma mensagem
de feliz aniversário.

É um projetinho pessoal, leve e sem backend — só um front-end que roda no
navegador e pode ser hospedado de graça (Vercel, por exemplo).

## :sparkles: Como funciona

A página reproduz um áudio e vai revelando os trechos no tempo certo, criando o
efeito de letra sincronizada. Os arquivos de mídia ficam em
`birthday/public/assets/` (imagem e músicas).

## :rocket: Rodando localmente

Requer **Node.js 18+**. O app fica na pasta `birthday/`:

```sh
cd birthday
npm install
npm run dev
# abra http://localhost:3000
```

Para gerar a versão de produção:

```sh
npm run build
npm start
```

## :wrench: Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## :file_folder: Estrutura

```
birthday/
  app/
    page.tsx        # a página da surpresa (áudio + texto sincronizado)
    layout.tsx      # layout raiz
    globals.css     # estilos globais
  public/assets/    # imagem e músicas
```

> Projeto pessoal de aniversário — sinta-se à vontade para trocar a música, a
> imagem e o texto por algo seu.
