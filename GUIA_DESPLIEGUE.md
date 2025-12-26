# 🚀 Guía de Despliegue - Nordicol en Netlify

## 📋 Pasos para Desplegar en Netlify

### **PASO 1: Preparar el Repositorio Git**

1. Asegúrate de que todos los cambios estén guardados y commiteados:
   ```bash
   git add .
   git commit -m "Preparar para despliegue en Netlify"
   git push origin main
   ```

### **PASO 2: Crear Cuenta en Netlify**

1. Ve a [https://www.netlify.com](https://www.netlify.com)
2. Haz clic en **"Sign up"** (Registrarse)
3. Elige **"Sign up with GitHub"** (o GitLab/Bitbucket si prefieres)
4. Autoriza Netlify para acceder a tu repositorio

### **PASO 3: Desplegar el Proyecto**

1. Una vez dentro de Netlify, haz clic en **"Add new site"** → **"Import an existing project"**
2. Selecciona tu repositorio de GitHub (Nordicol)
3. Netlify detectará automáticamente la configuración:
   - **Build command**: `npm install --legacy-peer-deps && npm run build`
   - **Publish directory**: `dist`
   - ✅ Ya está configurado en `netlify.toml
4. Haz clic en **"Deploy site"**
5. Espera 2-5 minutos mientras Netlify construye y despliega tu sitio

### **PASO 4: Verificar el Despliegue**

1. Una vez completado, Netlify te dará una URL temporal como: `https://random-name-123.netlify.app`
2. Haz clic en esa URL para verificar que tu sitio funciona correctamente
3. ✅ ¡Tu sitio ya está en línea!

---

## 🌐 Conectar Dominio de GoDaddy a Netlify

### **PASO 1: Comprar el Dominio en GoDaddy**

1. Ve a [https://www.godaddy.com](https://www.godaddy.com)
2. Busca tu dominio (ej: `nordicol.com`)
3. Agrega al carrito y completa la compra
4. Espera a que el dominio esté activo (puede tardar unas horas)

### **PASO 2: Configurar el Dominio en Netlify**

1. En Netlify, ve a tu sitio desplegado
2. Ve a **"Site settings"** → **"Domain management"**
3. Haz clic en **"Add custom domain"**
4. Ingresa tu dominio: `nordicol.com` (y también `www.nordicol.com` si quieres)
5. Netlify te mostrará las instrucciones de DNS

### **PASO 3: Configurar DNS en GoDaddy**

1. Ve a tu cuenta de GoDaddy
2. Ve a **"My Products"** → **"DNS"** → Selecciona tu dominio
3. En la sección **"Records"**, agrega/modifica estos registros:

#### **Opción A: Usar DNS de Netlify (Recomendado)**

Agrega estos registros DNS en GoDaddy:

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| **A** | `@` | `75.2.60.5` | 600 |
| **A** | `@` | `99.83.190.102` | 600 |
| **CNAME** | `www` | `tu-sitio.netlify.app` | 600 |

**Nota**: Reemplaza `tu-sitio.netlify.app` con la URL que Netlify te dio.

#### **Opción B: Usar Nameservers de Netlify (Más Fácil)**

1. En Netlify, ve a **"Domain settings"** → **"DNS"**
2. Copia los nameservers que Netlify te proporciona (algo como):
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

3. En GoDaddy:
   - Ve a **"My Products"** → Tu dominio → **"DNS"**
   - Busca **"Nameservers"**
   - Cambia a **"Custom"**
   - Pega los 4 nameservers de Netlify
   - Guarda los cambios

### **PASO 4: Activar SSL en Netlify**

1. Netlify automáticamente configurará SSL (HTTPS) para tu dominio
2. Ve a **"Site settings"** → **"Domain management"** → **"HTTPS"**
3. Espera a que el certificado SSL se genere (puede tardar hasta 24 horas)
4. Una vez activo, verás un candado verde 🔒

### **PASO 5: Verificar que Funciona**

1. Espera 1-24 horas para que los cambios de DNS se propaguen
2. Visita `https://nordicol.com` y `https://www.nordicol.com`
3. ✅ ¡Tu sitio debería estar funcionando con tu dominio!

---

## 🔧 Configuración Adicional (Opcional)

### **Actualizar URLs en el Código**

Una vez que tengas tu dominio, actualiza las URLs en `index.html`:

- Cambia `https://nordicol.com/` por tu dominio real
- Actualiza las imágenes de Open Graph y Twitter Cards

### **Configurar Redirecciones**

Netlify ya está configurado para redirigir todo a `index.html` (SPA), pero puedes agregar más redirecciones en `netlify.toml` si lo necesitas.

---

## ❓ Solución de Problemas

### **El sitio no carga después del despliegue**
- Verifica que el build se completó sin errores en Netlify
- Revisa los logs de build en Netlify

### **El dominio no funciona**
- Espera hasta 24 horas para la propagación de DNS
- Verifica que los registros DNS estén correctos en GoDaddy
- Usa [whatsmydns.net](https://www.whatsmydns.net) para verificar la propagación

### **Error de SSL**
- Espera hasta 24 horas para que Netlify genere el certificado
- Verifica que los DNS estén configurados correctamente

---

## ✅ Checklist Final

- [ ] Proyecto commiteado y pusheado a GitHub
- [ ] Cuenta creada en Netlify
- [ ] Sitio desplegado en Netlify (URL temporal funciona)
- [ ] Dominio comprado en GoDaddy
- [ ] DNS configurado en GoDaddy
- [ ] Dominio conectado en Netlify
- [ ] SSL activado (puede tardar hasta 24h)
- [ ] Sitio accesible en `https://nordicol.com`

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tu sitio estará en línea con tu dominio personalizado.

**URLs importantes:**
- Panel de Netlify: [https://app.netlify.com](https://app.netlify.com)
- Panel de GoDaddy: [https://sso.godaddy.com](https://sso.godaddy.com)

