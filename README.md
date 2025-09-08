# Portfolio de Jeriel Beckford Price

Portfolio personal optimizado para SEO y desplegado en Render.

## 🚀 Despliegue en Render

### Pasos para desplegar:

1. **Subir a GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio with SEO optimization"
   git remote add origin https://github.com/TU-USUARIO/jeriel-portfolio.git
   git push -u origin main
   ```

2. **Crear servicio en Render:**
   - Ir a [render.com](https://render.com)
   - Crear cuenta con GitHub
   - New + → Static Site
   - Conectar repositorio
   - Configuración:
     - Name: `jeriel-portfolio`
     - Branch: `main`
     - Build Command: (vacío)
     - Publish Directory: (vacío)

3. **Actualizar URLs después del despliegue:**
   ```bash
   ./update-urls.sh https://tu-dominio.onrender.com
   git add .
   git commit -m "Update URLs for production"
   git push
   ```

## 📁 Estructura del proyecto

```
Portfolio/
├── index.html          # Página principal optimizada para SEO
├── styles.css          # Estilos CSS
├── main.js            # JavaScript
├── robots.txt         # Configuración para motores de búsqueda
├── sitemap.xml        # Mapa del sitio
├── render.yaml        # Configuración para Render
├── update-urls.sh     # Script para actualizar URLs
├── img/               # Imágenes optimizadas
├── svg/               # Iconos SVG
└── doc/               # Documentos (CV)
```

## 🔍 Optimizaciones SEO incluidas

- ✅ Meta tags optimizados
- ✅ Datos estructurados (JSON-LD)
- ✅ Open Graph para redes sociales
- ✅ Textos alternativos descriptivos
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Estructura semántica HTML

## 📧 Contacto

- Email: jerielweb@outlook.es
- LinkedIn: [Jeriel Beckford Price](https://www.linkedin.com/in/jeriel-beckford-price-74ba24330/)
- WhatsApp: +506 8923-7369
