# caso BICE

1. Presionar boton verde Clone or download

2. Download Zip ( ...esperar)

3. Crear carpeta nombre caso en escritorio

4. Unzip dentro de carpeta caso el archivo: caso-master.zip ( ...esperar)

5. Se creara adentro una carpeta llamada caso-master con subcarpetas Servidor_Express y Cliente_React (ambas con Node_Modules incluidos )

6. Con Visual Studio Code abierto se arrastra la carpeta caso adentro.

7. En Visual studio code se abre un terminal ctrl+ñ (o en pestaña ver de visual studio code y terminal integrado) 

8. En la terminal escribir: cd caso-master (se visulizara carpetas Servidor_Express y Cliente_React con comando dir)

_______________________________________________________________
Levantar servidor express nodeJs (port:81):

9. cd Servidor_Express

10. npm run start ( aparecera leyenda "...server bice listening" en terminal)

_______________________________________________________________

Levanta cliente ReactJs (port:80):

11. En visual studio code se abre otro terminal con tecla + del terminal ya abierto (ver terminales.jpg)

12. cd caso-master

13. cd Cliente_React

14. npm run start

15. automaticamnete se levantara Chrome con el front-and react

16. listo jugar un rato
_______________________________________________________________

Para la ejecucion del test:

17. cd Servidor_Express

18. npm run test ( ver resultados en carpeta)

_______________________________________________________________

PD : se dejaron 3 pruebas unitarias JEST en el servidor .

https://github.com/MarcoMunozOvalle2019/caso.git


