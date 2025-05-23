# 📝 Formulario de Registro con Validación usando Zod

Este proyecto es un formulario web simple que permite a los usuarios registrarse ingresando su nombre, correo electrónico y contraseña. Los datos ingresados se validan utilizando la biblioteca **Zod**, mostrando mensajes de error claros si algún campo es inválido.

---

## 🚀 Tecnologías Utilizadas

- **HTML**: Estructura del formulario.
- **JavaScript**: Lógica de validación y manejo del formulario.
- **[Zod](https://github.com/colinhacks/zod)**: Biblioteca de validación de esquemas de datos.

---

## 📂 Estructura de Archivos

registro-zod/
├── index.html # Formulario HTML
├── script.js # Lógica JavaScript y validación Zod
└── zod (CDN incluido en HTML)
---

## 🧰 Cómo usar el proyecto

1. **Clona o descarga** este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Rellena los campos del formulario:
   - **Nombre** (obligatorio)
   - **Correo electrónico** (debe ser válido)
   - **Contraseña** (mínimo 6 caracteres)
4. Al hacer clic en "Registrarse", se valida la información:
   - Si hay errores, se muestran junto a cada campo.
   - Si los datos son válidos, se muestra un mensaje de éxito.

---

## ✅ Validaciones Implementadas

| Campo       | Validación                                  |
|-------------|---------------------------------------------|
| Nombre      | Obligatorio, no puede estar vacío           |
| Email       | Debe ser un correo electrónico válido       |
| Contraseña  | Mínimo 6 caracteres                         |

---

## 📦 Instalación Opcional de Zod (para proyectos con bundler)

```bash
npm install zod
