---

template: category

category: true

title: Java

date: 2016-01-30 14:46

author: iagovar

---

## Instalar Java u Open JDK en Linux

En la [Documentación](https://openjdk.org/install/) nos ofrece indicaciones, sin embargo, por ejemplo, el paquete `open-jdk-*` está disponible vía APT en Linux Mint. Si tienes ubuntu, también está disponible en la snap store.

## Diferencias entre los paquetes, \*-jre, \*-jdk, \*-headless, \*-dbg, \*-src

JDK (Java Development Kit) es un conjunto de herramientas de desarrollo de software que incluye un compilador de Java, una máquina virtual de Java (JVM) y un conjunto de bibliotecas de clases. El JDK es necesario para desarrollar aplicaciones Java y ejecutar programas Java compilados.

- **JRE (Java Runtime Environment)** es un conjunto de herramientas necesarias para ejecutar aplicaciones Java. Incluye una máquina virtual de Java (JVM) y un conjunto de bibliotecas de clases. El JRE es necesario para ejecutar aplicaciones Java, pero no para desarrollarlas.

- **dbg** es un paquete adicional para JDK o JRE que proporciona información adicional para depurar aplicaciones Java. Por ejemplo, puede incluir información de símbolos o archivos de registro de depuración.

- **headless** es una versión especial de JRE o JDK que no incluye las bibliotecas de gráficos. Es utilizado en sistemas que no tienen una interfaz gráfica de usuario (como servidores) y se usa para ejecutar aplicaciones que no requieren una interfaz gráfica.

- **src** es un paquete adicional que proporciona los archivos fuente de las bibliotecas de clases de Java. Esto es útil para desarrolladores que desean ver cómo funciona el código o modificarlo.

En resumen, JDK es necesario para desarrollar aplicaciones Java y ejecutar programas Java compilados, JRE es necesario para ejecutar aplicaciones Java. Los paquetes adicionales como dbg, headless y src proporcionan características adicionales para desarrolladores y depuradores.

## Algunos enlaces interesantes

- [Introducción a los primitivos de Java](https://www.baeldung.com/java-primitives) | [Sus *wrapper classes*](https://www.baeldung.com/java-wrapper-classes)