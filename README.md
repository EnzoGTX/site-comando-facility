# Comando Facility — site institucional

Site estático (HTML, CSS e JavaScript puros). Não há dependências, `package.json` nem etapa de build.

## Estrutura

```
index.html        Página inicial
servicos.html     Página "Nossos Serviços" (9 serviços)
styles.css        Estilos das duas páginas
script.js         Menu mobile, animações de rolagem e tratamento de imagens
assets/           logo.png, equipe.jpg, favicon.png
assets/servicos/  9 fotos dos serviços (01 a 09, na ordem de envio)
netlify.toml      Configuração de publicação
```

## Instalar dependências

Não há nada para instalar.

## Executar localmente

Opção 1: abrir `index.html` no navegador.

Opção 2 (servidor local, recomendada):

```
python3 -m http.server 8000
```

Depois acesse http://localhost:8000.

## Build de produção

Não existe build. Os arquivos da pasta já são os arquivos de produção.

## Publicar na Netlify

1. Envie esta pasta para um repositório Git (ou use o deploy manual).
2. Na Netlify: **Add new site → Import an existing project** e selecione o repositório.
3. Build command: deixe vazio. Publish directory: `.` (já definido em `netlify.toml`).
4. Alternativa sem Git: arraste a pasta `comando-facility` em https://app.netlify.com/drop.

Nenhuma variável de ambiente é necessária.

## Como o WhatsApp funciona

Todos os botões usam `https://wa.me/553432923661?text=...`. Em `servicos.html`, cada serviço tem o próprio botão de orçamento, com a mensagem
"Olá! Gostaria de saber mais sobre o serviço de [serviço] da Comando Facility e solicitar um orçamento."

## Pendências (dependem da empresa)

- **Logo:** `assets/logo.png` foi recortado de um screenshot e tem baixa resolução. Substituir pelo arquivo original (de preferência SVG).
- **Foto da equipe:** `assets/equipe.jpg` tem apenas 590 px de largura. Enviar uma versão em alta resolução.
- **Fotos dos serviços:** as 9 imagens enviadas foram associadas pela ordem de envio (01 Zeladoria … 09 Limpeza fixa). Têm cerca de 360 px e aparecem ampliadas; versões maiores deixariam a página mais nítida. A imagem 09 tem um texto sobreposto ao fundo, que convém retirar na imagem original. Não há fotos dos 4 segmentos da home. Confirmar se as imagens podem ser usadas e se representam a operação real da empresa.
- **Descrições dos 9 serviços:** foram escritas com base no escopo geral informado. A empresa deve revisar o que cada serviço inclui de fato (principalmente portaria, vidros e pós-obra).
- **Dados a confirmar:** nota 4,8/5, 41 avaliações, "mais de 60 funcionários", horário, e-mail e cidades atendidas vieram das referências, não de verificação em tempo real.
- **Depoimentos:** sem nomes de autores, por não haver correspondência clara no material.
- **Link do Google Maps:** o link atual é uma busca pelo endereço. Substituir pela URL do perfil da empresa.
- **Redes sociais:** não incluídas, pois os endereços não foram informados.
- **Domínio:** quando o domínio de publicação for definido, adicionar `canonical`, `sitemap.xml` e `robots.txt`, e trocar `og:image` por URL absoluta.
