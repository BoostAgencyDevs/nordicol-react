# 📖 Guía Paso a Paso: Conectar GitHub con Netlify

## 🎯 PASO 1: Verificar que tu Proyecto está en GitHub

### 1.1. Abre tu proyecto en GitHub
1. Ve a [https://github.com](https://github.com)
2. Inicia sesión con tu cuenta
3. Busca tu repositorio llamado **"Nordicol"** (o el nombre que le hayas puesto)
4. Verifica que el repositorio esté **público** o que Netlify tenga acceso

### 1.2. Verifica la URL de tu repositorio
- Debería verse algo como: `https://github.com/tu-usuario/Nordicol`
- **Copia esta URL**, la necesitarás después

---

## 🚀 PASO 2: Crear Cuenta en Netlify

### 2.1. Ir a Netlify
1. Abre tu navegador y ve a: [https://www.netlify.com](https://www.netlify.com)
2. Haz clic en el botón **"Sign up"** (Registrarse) en la esquina superior derecha

### 2.2. Elegir método de registro
Tendrás varias opciones. **Elige la opción de GitHub**:
- Haz clic en **"Sign up with GitHub"** o el botón de GitHub
- Esto te permitirá conectar directamente tu cuenta de GitHub

### 2.3. Autorizar Netlify
1. GitHub te pedirá autorizar a Netlify
2. Haz clic en **"Authorize netlify"** o **"Autorizar netlify"**
3. Esto permite que Netlify acceda a tus repositorios

---

## 🔗 PASO 3: Conectar tu Repositorio con Netlify

### 3.1. Ir al Dashboard de Netlify
1. Después de registrarte, serás redirigido al **Dashboard** (Panel de control)
2. Si no estás ahí, haz clic en **"Sites"** en el menú superior

### 3.2. Agregar un Nuevo Sitio
1. En el Dashboard, busca el botón **"Add new site"** (Agregar nuevo sitio)
2. Haz clic en **"Import an existing project"** (Importar un proyecto existente)

### 3.3. Seleccionar GitHub como Proveedor
1. Verás varias opciones: **GitHub**, GitLab, Bitbucket, etc.
2. Haz clic en **"GitHub"**

### 3.4. Autorizar Netlify (si es necesario)
1. Si es la primera vez, GitHub te pedirá autorizar a Netlify
2. Selecciona qué repositorios dar acceso:
   - **Opción recomendada**: Selecciona **"Only select repositories"** (Solo repositorios seleccionados)
   - Luego elige **"Nordicol"** de la lista
   - O selecciona **"All repositories"** si prefieres (menos seguro)
3. Haz clic en **"Install"** o **"Instalar"**

### 3.5. Buscar y Seleccionar tu Repositorio
1. Después de autorizar, verás una lista de tus repositorios de GitHub
2. **Busca tu repositorio "Nordicol"** en la lista
   - Puedes usar el buscador si tienes muchos repositorios
   - Busca por nombre: escribe "Nordicol" o "nordicol"
3. Haz clic en el nombre del repositorio **"Nordicol"**

---

## ⚙️ PASO 4: Configurar el Despliegue

### 4.1. Verificar Configuración Automática
Netlify debería detectar automáticamente tu configuración porque tienes el archivo `netlify.toml`. Verás algo como:

```
Branch to deploy: main
Build command: (detectado automáticamente desde netlify.toml)
Publish directory: dist
```

### 4.2. Verificar que la Configuración sea Correcta
Asegúrate de que veas:

- **Branch to deploy**: `main` (o `master` si usas esa rama)
- **Build command**: Debería estar vacío o mostrar el comando del `netlify.toml`
- **Publish directory**: `dist`

**Si no se detecta automáticamente**, ingresa manualmente:
- **Build command**: `npm install --legacy-peer-deps && npm run build`
- **Publish directory**: `dist`

### 4.3. Variables de Entorno (Opcional)
- Por ahora, **no necesitas agregar variables de entorno**
- Haz clic en **"Show advanced"** solo si necesitas configurar algo específico

### 4.4. Desplegar
1. Revisa que todo esté correcto
2. Haz clic en el botón **"Deploy site"** (Desplegar sitio)
3. ⏳ Espera 2-5 minutos mientras Netlify:
   - Instala las dependencias
   - Ejecuta el build
   - Despliega tu sitio

---

## ✅ PASO 5: Verificar el Despliegue

### 5.1. Ver el Progreso del Build
1. Serás redirigido a la página de tu sitio
2. Verás el progreso del build en tiempo real
3. Espera a que aparezca **"Published"** o **"Site is live"**

### 5.2. Obtener la URL de tu Sitio
1. Una vez completado, verás una URL como:
   ```
   https://random-name-123456.netlify.app
   ```
2. Esta es tu URL temporal de Netlify
3. **Copia esta URL** o haz clic para abrirla

### 5.3. Probar tu Sitio
1. Haz clic en la URL o cópiala y ábrela en una nueva pestaña
2. Verifica que tu sitio funcione correctamente:
   - ✅ La página carga
   - ✅ Los estilos se ven bien
   - ✅ Las imágenes cargan
   - ✅ La navegación funciona

### 5.4. Si hay Errores
1. Si el build falla, haz clic en **"Deploys"** en el menú superior
2. Luego haz clic en el deploy fallido
3. Revisa los **"Build logs"** para ver el error
4. Los errores comunes suelen ser:
   - Dependencias faltantes
   - Errores de TypeScript
   - Problemas con el build

---

## 🔄 PASO 6: Configurar Despliegue Automático (Opcional pero Recomendado)

### 6.1. Verificar que el Despliegue Automático esté Activado
1. Ve a **"Site settings"** → **"Build & deploy"**
2. En **"Continuous Deployment"**, verifica que esté activado
3. Esto hará que cada vez que hagas `git push`, Netlify desplegará automáticamente

### 6.2. Configurar la Rama
- Asegúrate de que esté configurado para desplegar desde la rama **"main"**

---

## 📝 Resumen de lo que Acabas de Hacer

✅ Conectaste tu cuenta de GitHub con Netlify  
✅ Seleccionaste tu repositorio "Nordicol"  
✅ Configuraste el despliegue automático  
✅ Tu sitio está en línea  
✅ Cada vez que hagas cambios y hagas `git push`, Netlify los desplegará automáticamente  

---

## 🎯 Próximo Paso: Conectar tu Dominio

Una vez que tu sitio esté funcionando en Netlify, el siguiente paso es:
1. Comprar el dominio en GoDaddy
2. Conectarlo a Netlify (ver la guía de dominio)

---

## ❓ Preguntas Frecuentes

### ¿Cómo cambio de repositorio?
- Ve a **"Site settings"** → **"Build & deploy"** → **"Continuous Deployment"**
- Haz clic en **"Link to a different branch"** o **"Change site source"**

### ¿Cómo veo los logs del build?
- Ve a **"Deploys"** en el menú superior
- Haz clic en cualquier deploy para ver los logs

### ¿Cómo cancelo un build?
- Ve a **"Deploys"**
- Haz clic en el build en progreso
- Haz clic en **"Cancel deploy"**

### ¿Cómo cambio la rama que se despliega?
- Ve a **"Site settings"** → **"Build & deploy"**
- En **"Branch deploys"**, cambia la rama

---

## 🆘 Si Tienes Problemas

### El repositorio no aparece en la lista
- Verifica que hayas autorizado a Netlify para acceder a tus repositorios
- Ve a GitHub → Settings → Applications → Authorized OAuth Apps
- Verifica que Netlify esté autorizado

### El build falla
- Revisa los logs en **"Deploys"**
- Verifica que `package.json` tenga todos los scripts necesarios
- Asegúrate de que el comando de build funcione localmente

### No puedo encontrar mi sitio después del despliegue
- Ve a [https://app.netlify.com](https://app.netlify.com)
- Haz clic en **"Sites"** en el menú superior
- Deberías ver todos tus sitios desplegados


