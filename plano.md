# Projeto City Ground Brasil

## Objetivo Geral

Construir uma aplicação completa utilizando:

* WordPress como CMS Headless
* NestJS como BFF (Back-end For Front-end)
* Clean Architecture
* Prisma
* Testes Unitários
* Vue 3
* TypeScript

O projeto será um portal de notícias sobre o Nottingham Forest chamado:

**City Ground Brasil**

---

# Arquitetura Final

```txt
WordPress
    ↓
Wordpress Gateway
    ↓
UseCases
    ↓
Controllers
    ↓
NestJS API
    ↓
Vue 3
```

---

# Objetivos de Aprendizado

Ao final do projeto devo ser capaz de:

* Entender Clean Architecture na prática
* Consumir APIs externas com NestJS
* Utilizar Gateway Pattern
* Trabalhar com DTOs
* Criar UseCases
* Criar Presenters
* Implementar testes unitários
* Construir um BFF
* Consumir APIs utilizando Vue 3
* Trabalhar com Composition API
* Estruturar aplicações escaláveis

---

# FASE 1 — WordPress Headless

## Dia 1

### Objetivos

* [ ] Entender conceito de Headless CMS
* [ ] Criar conta WordPress
* [ ] Criar blog City Ground Brasil
* [ ] Criar categorias

Categorias:

* [ ] Notícias
* [ ] História

### Conceitos

* WordPress
* REST API
* CMS

---

## Dia 2

### Objetivos

Criar conteúdo inicial

Posts:

* [ ] A origem do Nottingham Forest
* [ ] O bicampeonato europeu
* [ ] Conhecendo o City Ground
* [ ] Elenco atual

### Conceitos

* Categories
* Posts
* Slugs

---

## Dia 3

### Objetivos

Explorar API do WordPress

* [ ] Listar posts
* [ ] Listar categorias
* [ ] Buscar post por ID
* [ ] Buscar post por slug

### Conceitos

* REST
* JSON
* Endpoints

---

# FASE 2 — NestJS + Clean Architecture

## Dia 4

### Objetivos

Criar projeto NestJS

* [ ] Criar projeto
* [ ] Configurar ESLint
* [ ] Configurar Prisma
* [ ] Configurar SQLite

### Conceitos

* Modules
* Controllers
* Providers

---

## Dia 5

### Objetivos

Criar módulo Blog

Estrutura:

```txt
blog/
 ├── domain
 ├── application
 ├── infra
```

### Conceitos

* Domain
* Application
* Infrastructure

---

## Dia 6

### Objetivos

Criar primeira Entity

```txt
PostEntity
```

### Conceitos

* Entity
* Encapsulamento
* Regras de domínio

---

## Dia 7

### Objetivos

Criar Gateway Contract

```txt
PostRepository
```

### Conceitos

* Abstração
* Contrato
* Inversão de dependência

---

## Dia 8

### Objetivos

Criar WordpressGateway

```txt
WordpressGateway
```

### Conceitos

* HTTP Client
* Axios
* Integração externa

---

## Dia 9

### Objetivos

Criar UseCase

```txt
GetPostsUseCase
```

### Conceitos

* Casos de uso
* Regras de negócio

---

## Dia 10

### Objetivos

Criar endpoint

```txt
GET /blog/posts
```

### Conceitos

* Controller
* DTO
* Response

---

## Dia 11

### Objetivos

Criar endpoint

```txt
GET /blog/posts/:slug
```

### Conceitos

* Params
* Busca por slug

---

## Dia 12

### Objetivos

Criar Presenter

```txt
PostPresenter
```

### Conceitos

* Formatação de saída
* Transformação de resposta

---

# FASE 3 — Testes Unitários

## Dia 13

### Objetivos

Configurar Jest

* [ ] Testes funcionando

### Conceitos

* Arrange
* Act
* Assert

---

## Dia 14

### Objetivos

Testar:

```txt
GetPostsUseCase
```

### Conceitos

* Mocks
* Fakes

---

## Dia 15

### Objetivos

Testar:

```txt
GetPostBySlugUseCase
```

### Conceitos

* Casos felizes
* Casos de erro

---

## Dia 16

### Objetivos

Testar Presenter

### Conceitos

* Transformação de dados

---

# FASE 4 — Frontend Vue 3

## Dia 17

### Objetivos

Criar projeto Vue

* [ ] Vite
* [ ] Vue Router

### Conceitos

* SPA
* Routing

---

## Dia 18

### Objetivos

Criar Home

```txt
/posts
```

### Conceitos

* Fetch API
* Axios

---

## Dia 19

### Objetivos

Listar posts

### Conceitos

* v-for
* Reatividade

---

## Dia 20

### Objetivos

Criar página de detalhes

```txt
/post/:slug
```

### Conceitos

* Route Params

---

## Dia 21

### Objetivos

Criar página de categorias

### Conceitos

* Filtros
* Navegação

---

# FASE 5 — Refinamento Profissional

## Dia 22

### Objetivos

Refatorar arquitetura

* [ ] Revisar entidades
* [ ] Revisar usecases
* [ ] Revisar controllers

---

## Dia 23

### Objetivos

Adicionar tratamento de erros

### Conceitos

* Exceptions
* HttpException

---

## Dia 24

### Objetivos

Criar documentação da API

### Conceitos

* Swagger

---

## Dia 25

### Objetivos

Revisão final

Checklist:

* [ ] WordPress funcionando
* [ ] NestJS funcionando
* [ ] Vue funcionando
* [ ] Testes passando
* [ ] Arquitetura limpa aplicada
* [ ] Projeto publicado no GitHub

---

# Resultado Esperado

Ao concluir o Projeto City Ground Brasil eu terei construído:

* Um CMS WordPress
* Um BFF NestJS
* Uma API com Clean Architecture
* Testes unitários
* Um frontend Vue 3
* Um projeto completo semelhante ao ambiente encontrado em empresas reais
