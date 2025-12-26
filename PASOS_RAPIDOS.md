# ⚡ Pasos Rápidos: GitHub → Netlify

## 🎯 En 5 Pasos Simples

### 1️⃣ **Ir a Netlify y Registrarse**
```
https://www.netlify.com → Sign up → Sign up with GitHub
```

### 2️⃣ **Autorizar Netlify en GitHub**
```
GitHub te pedirá autorización → Autorizar → Seleccionar repositorio "Nordicol"
```

### 3️⃣ **Agregar Nuevo Sitio**
```
Dashboard → "Add new site" → "Import an existing project" → GitHub
```

### 4️⃣ **Seleccionar tu Repositorio**
```
Buscar "Nordicol" en la lista → Clic en el nombre del repositorio
```

### 5️⃣ **Desplegar**
```
Verificar configuración (debería detectarse automáticamente) → "Deploy site"
```

---

## 📸 Visualización del Proceso

```
GitHub (tu código)
    ↓
Netlify (conecta con GitHub)
    ↓
Seleccionas "Nordicol"
    ↓
Netlify detecta netlify.toml automáticamente
    ↓
Build automático (2-5 minutos)
    ↓
✅ Tu sitio está en línea: https://random-name.netlify.app
```

---

## 🔍 Cómo Encontrar tu Repositorio si Tienes Muchos

1. En la lista de repositorios, usa el **buscador** (arriba)
2. Escribe: **"nordicol"** o **"Nordicol"**
3. El repositorio aparecerá filtrado
4. Haz clic en él

---

## ⚙️ Configuración que Netlify Detectará Automáticamente

Gracias a tu archivo `netlify.toml`, Netlify sabrá:
- ✅ Comando de build: `npm install --legacy-peer-deps && npm run build`
- ✅ Directorio de publicación: `dist`
- ✅ Redirecciones para SPA
- ✅ Headers de seguridad

**No necesitas configurar nada manualmente** 🎉

---

## 🎬 Orden Exacto de Clics

1. **Netlify.com** → Clic en "Sign up"
2. **"Sign up with GitHub"** → Clic
3. **Autorizar Netlify** → Clic en "Authorize"
4. **Seleccionar repositorios** → Elegir "Nordicol" → "Install"
5. **"Add new site"** → Clic
6. **"Import an existing project"** → Clic
7. **"GitHub"** → Clic
8. **Buscar "Nordicol"** → Clic en el nombre
9. **"Deploy site"** → Clic
10. **Esperar 2-5 minutos** ⏳
11. **¡Listo!** ✅ Tu sitio está en línea

---

## 💡 Tips Importantes

- ✅ **No necesitas cambiar nada** en la configuración, Netlify lo detecta automáticamente
- ✅ **El nombre del sitio** puede ser cualquier cosa, Netlify te dará una URL única
- ✅ **Cada vez que hagas `git push`**, Netlify desplegará automáticamente
- ✅ **Puedes cambiar el nombre** del sitio después en Settings → Site details

---

## 🆘 Si Algo Sale Mal

### No veo mi repositorio
→ Ve a GitHub → Settings → Applications → Authorized OAuth Apps → Verifica que Netlify esté autorizado

### El build falla
→ Ve a "Deploys" → Clic en el deploy fallido → Revisa los "Build logs"

### No sé dónde está mi sitio
→ Ve a app.netlify.com → Clic en "Sites" → Ahí están todos tus sitios


