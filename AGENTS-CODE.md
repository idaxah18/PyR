# Agente — repo de código PyR

Este repositorio es **solo implementación** (`apps/`, tests, CI).

## Contexto del producto

El segundo cerebro vive en otro repo: **`team-brain`** (clon hermano recomendado: `../team-brain`).

Antes de diseñar o codificar:

1. Si tienes `team-brain` en el workspace, lee `team-brain/index/KEYWORDS.md` y las notas indicadas (máx. 5), igual que `team-brain/AGENTS.md`.
2. Si **solo** abriste `PyR`, clona `team-brain` o pide `git pull` allí; no inventes requisitos.

## Dónde escribir

| Contenido | Repositorio | Ruta |
|-----------|-------------|------|
| Requisitos, decisiones, resumen de chats | `team-brain` | `projects/`, `domains/` |
| Código del chatbot / APIs | `PyR` | `apps/` |

No copies el contexto completo del chat a `apps/`; un enlace en comentario o README basta: `Contexto: team-brain/projects/<proyecto>/overview.md`.

## Workspace recomendado

Abre `PyR.code-workspace` para tener contexto + código en una ventana de Cursor.
