# Contexto — repo PyR (código)

| Qué | Dónde |
|-----|--------|
| Vault del área | Repo hermano `team-brain` (misma carpeta padre `CURSOR/`) |
| Índice palabras clave | `team-brain/index/KEYWORDS.md` |
| Guía para presentar | `team-brain/docs/GUIA-PRESENTACION.md` |

## Solo contexto (sin este repo)

```bash
git clone <url-team-brain>
```

Cursor → abrir carpeta `team-brain` → `Palabra clave: <tema>. Sigue AGENTS.md.`

## Código + contexto

Clonar ambos repos y abrir **`PyR.code-workspace`**.

## Demo actual — formulario

- Código: `apps/formulario-demo/`
- Contexto (otro Cursor): `git pull` en **team-brain** → `Palabra clave: formulario. Sigue AGENTS.md.`
- Variables backend: `nombres`, `correo`, `cedular` (ver `team-brain/projects/formulario-demo/overview.md`)
- Estado: frontend listo; **siguiente paso = backend**

## Reglas

- Decisiones y requisitos → commits en **team-brain**
- Código web / Laravel → commits en **PyR**

Ver `AGENTS-CODE.md`.
