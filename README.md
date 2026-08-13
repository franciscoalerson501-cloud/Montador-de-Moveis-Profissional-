# Montador de Móveis Pro

Landing page otimizada para o domínio `montadordemoveispro.com.br`, com foco técnico equilibrado em Fernandópolis, Jales e Votuporanga.

O layout e a copy visível foram preservados. As mudanças estão concentradas em SEO técnico, dados estruturados, rastreabilidade, desempenho e remoção de código sem uso.

## Publicar o site pronto

A pasta `dist/` contém a versão final estática. Envie **o conteúdo dessa pasta** para a raiz pública da hospedagem, normalmente `public_html`, substituindo os arquivos da versão anterior.

Arquivos que precisam ficar acessíveis após a publicação:

- `https://montadordemoveispro.com.br/`
- `https://montadordemoveispro.com.br/robots.txt`
- `https://montadordemoveispro.com.br/sitemap.xml`
- `https://montadordemoveispro.com.br/llms.txt`

Mantenha o domínio principal em HTTPS e redirecione versões com `http://` ou `www` para `https://montadordemoveispro.com.br/`.

## Gerar uma nova versão

Requisitos: Node.js 20 ou mais recente e npm.

```bash
npm ci
npm run build
```

O processo gera o site em `dist/` e pré-renderiza o conteúdo da landing page no HTML para que mecanismos de busca e o AdsBot consigam interpretar a página sem depender exclusivamente de JavaScript.

## Verificações depois de hospedar

1. Testar a URL no Google Search Console usando **Inspeção de URL**.
2. Enviar `https://montadordemoveispro.com.br/sitemap.xml` no Search Console.
3. Validar os dados estruturados no Rich Results Test.
4. Conferir a experiência móvel no PageSpeed Insights.
5. Confirmar que o Cloudflare não apresenta desafio ao Googlebot ou ao AdsBot-Google.
6. Confirmar no Google Ads que a URL expandida termina no domínio canônico acima.

## Observação sobre `llms.txt`

O arquivo `llms.txt` descreve o site para sistemas que adotam essa convenção. Ele não substitui `robots.txt`, `sitemap.xml`, Search Console, conteúdo visível ou dados estruturados e não aumenta diretamente o Índice de qualidade do Google Ads.
