#!/bin/bash

# Script para actualizar URLs después del despliegue en Render
# Uso: ./update-urls.sh https://tu-dominio.onrender.com

if [ -z "$1" ]; then
    echo "Uso: ./update-urls.sh https://tu-dominio.onrender.com"
    exit 1
fi

NEW_URL="$1"

echo "Actualizando URLs a: $NEW_URL"

# Actualizar index.html
sed -i "s|https://tu-dominio.com|$NEW_URL|g" index.html

# Actualizar sitemap.xml
sed -i "s|https://tu-dominio.com|$NEW_URL|g" sitemap.xml

echo "URLs actualizadas correctamente!"
echo "Recuerda hacer commit y push de los cambios:"
echo "git add ."
echo "git commit -m 'Update URLs for production'"
echo "git push"
