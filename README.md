Proyecto Grupal
Log de participación y metodos o atributos usados. 

1. Maqueta:
Jose diseño y dio idea de lo que seria la primera maqueta y posteriores paginas acompañantes. 

2. Index/Log in:
Francisca empezó con un contenedor principal, el cual alojaría una única fila compuesta de dos columnas (Grid). Para diseñar el radio correcto se uso una mezcla de Bootstrap para detalles más generales o imágenes y CSS para detalles mas generales como el fondo, por ejemplo. Dentro de la primera columna es donde encontramos el primer formulario de ingreso, donde se encuentra el botón de ingreso direccionado a la función “ingreso” de la página de JavaScript vinculada a index. Kevin creo la sintaxis de esta función en la cual uso un if else para declarar que, si el usuario tanto como la contraseña previamente creada coincidía, el ingreso era exitoso y seria redireccionado a “home”. Si eso no ocurre, una alerta de error en el ingreso se vería. Hecho responsivo por Francisca. 

3. Creación de usuario:
Francisca empezó con un contenedor principal, el cual alojaría una única fila compuesta de dos columnas (Grid). En la primera estaría un carousel de Bootstrap y en la segunda columna un formulario con un botón conectado a la función de guardarUsuario creada por Kevin, con la cual se almacena en el local storage (setItem) la nueva información para ser recuperada (getElement) en el login. 

4. Home:
Kevin creó una pagina e ideó que tuviesemos una pagina diferente a tienda que actuara como Home. Francisca empezó con un carousel de tres imágenes ocupando el ancho de la pantalla. Después de crea un contenedor, el cual alojaría dos columnas. Para diseñar el radio correcto se usó una mezcla de Bootstrap para detalles más generales o imágenes y CSS para detalles más generales como el fondo, por ejemplo. En la primera columna, mucho mas ancha en su radio, tiene la información mas relevante y la segunda se ocupa como accesorios y detalles estéticos. Hecho responsivo por Francisca (Por la dificultad de hacer responsivo el carousel, se planeó su desaparición en pantallas pequeñas [d-none d-md-block]y fue reemplazado por un gif con las mismas imágenes a partir del display small [d-block d-sm-block d-md-none]). Kevin agrego el menú de navegación que se puede ver en todas las paginas posteriores a esta. 


5. Tienda:
Kevin creo tres filas (grid) las cuales tendrían 4 cards adentro con propiedades flex, cada una promocionando un video juego diferentes con sus respectivos detalles usando Bootstrap (como también para la mayoría de los detalles de las imágenes). Kevin uso, también, CSS para otros detalles como los espacios entre cards y demás. Francisca actualizo el fondo usando CSS.  

6. Sorpresa:
Pagina creada con la intención de satisfacer los conceptos que quedaban de javascript; una constante, un ciclo y switch. En conjunto, Francisca y Kevin pensaron en hacer una página en la cual los participantes apretaban dos botones que daban dos números al al azar (getRandom) (usamos dados como ilustración). Luego se pasaba por otro link vinculado a la función addNumbers, la cual sumaba los dos números previamente recuperados y en base al resultado, les daban diferentes descuentos. Los posibles resultados se separaron en 3 categorías y se creó un switch para satisfacer que pasaba dado cada caso (que porcentaje de descuento sacaban). 
Para crear un ciclo o bucle y usar una constante, se decidió en equipo crear un botón vinculado a un prompt para redimir el código de descuento. En caso de ser un código verdadero, se le redirige al usuario a la tienda, de ser el caso contrario un ciclo for te daría dos intentos, después de los cuales te mostraría una alerta indicándole que el código es invalido.


7. Contacto: 
Pagina creada con la intención de darle más sustento y robustez al sitio web. Pagina accesoria creada por Kevin en la cual hay un formulario donde el usuario puede ver información de la empresa y también un input para mandar comentarios. 

Finalmente, ante la necesidad de regresar a login sin tener que retroceder, Kevin creo un botón de “Cerrar Sesión” alojado en la barra de navegación. Este botón esta vinculado a la función de cerrarSesion y te redirige al index o pagina login. 





