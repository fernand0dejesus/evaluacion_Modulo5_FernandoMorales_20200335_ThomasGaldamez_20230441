# Evaluación Módulo 5 - 
#Estudiantes:
Fernando de Jesus Hernandez Morales 20200335

Thomas Alexander Galdamez Palomares 20230441



##  Video Demostrativo
[Enlace al video demostrativo](tu-enlace-aqui)
##  Funcionalidades Implementadas
- Splash Screen
-  Registro de usuarios con Firebase Auth
-  Inicio de sesión
-  Home screen con información del usuario
-  Edición de perfil
-  Almacenamiento en Firestore
##  Dependencias Utilizadas
npm install @react-native-async-storage/async-storage
- expo: Framework para desarrollo móvil
- firebase: SDK de Firebase para autenticación y base de datos
- @react-navigation/native: Navegación entre pantallas
- @react-navigation/stack: Navegación tipo stack
- react-native-screens: Optimización de pantallas
- react-native-safe-area-context: Manejo de áreas seguras
- react-native-vector-icons: Iconos vectoriales
npm install @react-navigation/native @react-navigation/stack
# For React Native CLI
npm install react-native-screens react-native-safe-area-context
# Additional dependencies for stack navigator
npm install react-native-gesture-handler react-native-reanimated
##  Instalación y Ejecución
1. Clona el repositorio
2. Ejecuta npm install
3. Configura tu proyecto de Firebase
4. Actualiza las credenciales en config/firebase.js
5. Ejecuta npm start
##  Base de Datos
La aplicación utiliza Firebase Firestore para almacenar:
- Información de usuarios (nombre, email, título universitario, año de graduación)
- Autenticación mediante Firebase Auth
