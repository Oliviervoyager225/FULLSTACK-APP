# Contributing Guide

## 🤝 Comment Contribuer

Merci de votre intérêt pour ce projet! Voici comment contribuer.

## 📋 Avant de Commencer

1. Forker le repository
2. Cloner votre fork: `git clone <votre-fork>`
3. Créer une branche feature: `git checkout -b feature/ma-feature`

## 🛠️ Setup de Développement

```bash
# Installer les dépendances du backend
cd backend
mvn clean install

# Installer les dépendances du frontend
cd ../frontend
npm install

# Démarrer les services
cd ..
docker-compose up -d
```

## 📝 Commit Guidelines

- Utiliser des commits clairs et descriptifs
- Format: `[type]: description courte`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat: add user search functionality
fix: resolve CORS issue with frontend
docs: update API documentation
```

## 🧪 Tests

Avant de committer, vérifier que:
1. Les tests passent: `mvn test` (backend)
2. Pas d'erreurs ESLint: `npm run lint` (frontend)
3. L'app démarre correctement

## 📤 Soumettre une Pull Request

1. Push votre branche: `git push origin feature/ma-feature`
2. Créer une Pull Request sur GitHub
3. Décrire les changements clairement
4. Attendre la revue

## ✅ Checklist PR

- [ ] Tests ajoutés/mis à jour
- [ ] Documentation mise à jour
- [ ] Pas de code hardcodé
- [ ] CORS configuré si nécessaire
- [ ] Variables d'environnement utilisées correctement
- [ ] Pas d'erreurs de linting
- [ ] Code reviewed par un pair

## 🐛 Signaler un Bug

1. Vérifier si le bug n'est pas déjà reporté
2. Créer une issue avec:
   - Description claire du problème
   - Pas à pas pour reproduire
   - Comportement attendu
   - Screenshots si applicable
   - Versions (Docker, Java, Node, etc.)

## 💡 Suggérer une Feature

1. Créer une issue avec le label `enhancement`
2. Décrire le cas d'usage
3. Expliquer les bénéfices
4. Proposer une implémentation si possible

## 📚 Documentation

Mettre à jour la documentation:
- `README.md` - For overview
- `DEVELOPMENT.md` - For development details
- `API.md` - For API changes
- Code comments for complex logic

## 🎯 Priorités

1. **Bugs** - Toujours prioritaire
2. **Features** - Selon l'impact
3. **Documentation** - Important
4. **Refactoring** - Bienvenue mais non-blocker

## 👥 Community

- Respecter les autres contributeurs
- Écrire du code lisible et maintenable
- Partager les connaissances
- Aider les autres

## 📄 License

En contribuant, vous acceptez que votre code soit sous license MIT.

---

**Happy Contributing! 🚀**
