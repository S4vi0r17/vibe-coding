# Imágenes del Equipo

El proyecto está configurado para mostrar fotos de los miembros del equipo. Actualmente usa imágenes placeholder de Unsplash.

## Para personalizar con fotos reales:

### Opción 1: Usar archivos locales
1. Coloca las imágenes en la carpeta `/public` con estos nombres:
   - `asencios.png` - Foto de Asencios Ocaña, Jefferson Anthony
   - `villanueva.png` - Foto de Villanueva Inés, José Antonio  
   - `benites.png` - Foto de Benites Pardavé, Eder Gustavo
   - `uribe.png` - Foto de Uribe Mejía, Guillermo César

2. Actualiza las rutas en `src/lib/content.ts`:
```typescript
teamMembers: [
  {
    name: 'Asencios Ocaña, Jefferson Anthony',
    image: '/asencios.png'
  },
  // ... resto de miembros
],
```

### Opción 2: Usar URLs externas
Actualiza las URLs en `src/lib/content.ts` con las URLs de las fotos reales.

## Especificaciones recomendadas:

- **Formato:** PNG, JPG o WebP
- **Tamaño:** 400x400 píxeles (cuadrada) 
- **Resolución:** 72-150 DPI
- **Fondo:** Preferiblemente uniforme
- **Calidad:** Fotos profesionales o semi-profesionales

## Estado actual:

✅ **Configuración actual:** Usando imágenes placeholder de Unsplash que se muestran correctamente
🔄 **Para personalizar:** Reemplaza las URLs en `content.ts` con las fotos reales
💡 **Fallback:** Si una imagen falla, se mostrarán las iniciales del nombre automáticamente
