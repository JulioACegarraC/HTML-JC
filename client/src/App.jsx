import './App.css'

function App() {

  return (
    <>
      <header>
      <h2 id='inicio'>Aprendiendo Html Esto es un H2</h2>
      <p>Estamos en el header</p>
      </header>
      <nav>Estamos en la nav</nav>
      <article>
      <p>Estamos en el main</p>
      </article>
      <section>
      <h2>Temario del Curso Esto es un H2</h2>
      <ul>
      <li><a href="/#encabezados">Etiquetas de encabezados HTML</a></li>
      <li><a href="/#textos-basicos">Etiquetas de textos basicos</a></li>
      <li><a href="/#textos-semanticos">Etiquetas de textos semanticos</a></li>
      <li><a href="/#saltos">Etiquetas de saltos</a></li>
      <li><a href="/#formateo">Etiquetas de formateo</a></li>
      <li><a href="/#semanticas">Etiquetas semanticas</a></li>
      <li><a href="/#bloque-linea">Etiquetas de bloque vs Etiquetas de línea</a></li>
      <li><a href="/#imagenes">Etiquetas de imagenes</a></li>
      <li><a href="/#svg">Etiquetas SVG</a></li>
      <li><a href="/#figuras">Etiquetas de figuras</a></li>
      <li><a href="/#listas-ordenadas">Etiquetas de listas ordenadas</a></li>
      <li><a href="/#listas-desordenadas">Etiquetas de listas desordenadas</a></li>
      <li><a href="/#listas-definicion">Etiquetas de listas de definicion</a></li>
      <li><a href="/#tablas">Etiquetas de tabla</a></li>
      <li><a href="/#enlaces">Etiquetas de enlaces</a></li>
      <li><a href="/#elementos-interactivos">Etiquetas de elementos interactivos</a></li>
      <li><a href="/#audio-video">Etiquetas de audio y video</a></li>
      <li><a href="/#iframes">Etiquetas de Iframes</a></li>
      <li><a href="/#formularios">Etiquetas de Formularios</a></li>
      <li><a href="/#data-attributes">Data Attributes</a></li>
      </ul>
      </section>
      <hr/>
      <section id='encabezados'>
      <h3>Etiquetas de encabezados</h3>
      <h1>Esto es un H1</h1>
      <h2>Esto es un H2</h2>
      <h3>Esto es un H3</h3>
      <h4>Esto es un H4</h4>
      <h5>Esto es un H5</h5>
      <h6>Esto es un H6</h6>
      <a href="/#inicio">⏫</a>
      </section>
      <hr/>
      <section id='textos-basicos'>
      <h3>Etiquetas de textos basicos</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quam optio veniam doloribus odit recusandae omnis hic quia sunt, dicta maiores alias expedita voluptatum saepe earum harum illum mollitia aliquam!</p>
      <p><b>P + Negrita</b></p>
      <p><i>P + Italic</i></p>
      <p><u>P + subrayado</u></p>
      <p><mark>P + Mark</mark> </p>
      <p><small>P + small</small></p>
      <p><em>P + Enfasis</em></p>
      <p>P + potencia e = m*c<sup>2</sup></p>
      <p>P + subindice H<sub>2</sub>O</p>
      <a href="/#inicio">⏫</a>
      </section>
      <hr/>
      <section id='textos-semanticos'>
        <h3>Etiquetas de textos semanticos</h3>
        <p><strong>P + Strong</strong></p>
        <p><blockquote>P + Frase de autor</blockquote></p>
        <p><cite>P + Autor de frase</cite></p>
        <a href="/#inicio">⏫</a>
      </section>
      <hr/>
      <section id='saltos'>
      <h3>Etiquetas de saltos</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Non labore esse commodi cum a eaque provident maxime eos nulla iure quis autem necessitatibus reiciendis odit, totam dolores expedita unde sint!</p>
      <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='formateo'>
      <h3>Etiquetas de formateo</h3>
      <p>
      <pre> 
      Lorem con <mark>Pre</mark>
        -HTML
          -kjgifjgiofgj
          -fjhuñdghg
        -CSS
          -dfgkh
          -dfgik
      </pre>
      </p>
      <p>
        <code>Esto es un code</code>
      </p>
      <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='semanticas'>
      <h3>Etiquetas semanticas estructurales</h3>
      <div>div - Es una etiqueta contenedora que no tiene semántica</div>
      <header>header - Cabecera de un sitio web o de una sección</header>
      <main>
      main - Define la sección principal del documento, sólo puede existir una
      etiqueta main por documento
      </main>
      <footer>footer - Pié de página de un sitio web o de una sección</footer>
      <nav>nav - Representa una navegación</nav>
      <article>
      article - Representa una sección autocontenido (que por sí sola se
      explica)
      </article>
      <aside>aside - Representa contenido complementario o secundario</aside>
      <section>section - Representa una sección de contenido genérico</section>
      <address>address - Representa una información de contacto</address>
      <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='bloque-linea'>
        <h3>Etiquetas de bloque vs Etiquetas de linea</h3>
        <div>La etiqueta de bloque por excelencia es la div, una etiqueta de
        bloque es
        aquella que genera saltos de línea con sus etiquetas hermanas.</div>
        <span>La etiqueta de línea por excelencia es la span, una etiqueta de línea
        sólo ocupa el espacio necesario que tiene
        su contenido.</span>
        <span>Hola soy otra span</span>
        <br />
        <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='imagenes'>
        <h3>Etiquetas de imagenes</h3>
        <img src="lluvia.webp" alt="Lluvia" />
        <br />
        <img src="mountains.jpg" alt="Montañas" />
        <br />
        <img src="lengua.png" alt="Lengua" />
        <br />
        <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='svg'>
      <h3>SVG</h3>
      <img src="html5-01-svgrepo-com.svg" alt="HTML" />
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
      <br />
      <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='figuras'>
        <h3>Figuras</h3>
        <figure>
    <img src="/periodic-table-of-html-elements.png" alt="Tabla de los Elementos HTML"/>
    <figcaption>Tabla de los Elementos HTML</figcaption>
  </figure>
  <br></br>
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='listas-ordenadas'>
        <h3>Listas Ordenadas</h3>
        <ol>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
  </ol>
  <ol start="3">
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
  </ol>
  <ol reversed>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
  </ol>
  <ol type="i">
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
  </ol>
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='listas-desordenadas'>
        <h3>Listas desordenadas</h3>
        <ul>
    <li>Terminar de grabar los fragmentos del curso de HTML</li>
    <li>Editar el video final</li>
    <li>subirlo a YouTube</li>
  </ul>
  <ul type="circle">
    <li>Terminar de grabar los fragmentos del curso de HTML</li>
    <li>Editar el video final</li>
    <li>subirlo a YouTube</li>
  </ul>
  <ul type="square">
    <li>Terminar de grabar los fragmentos del curso de HTML</li>
    <li>Editar el video final</li>
    <li>subirlo a YouTube</li>
  </ul>
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='listas-definicion'>
        <h3>Listas de definicion</h3>
        <dl>
    <dt>HTML</dt>
    <dd>Es un lenguaje de marcado que define el contenido de la web</dd>
    <dt>CSS</dt>
    <dd>ES un lenguaje de definición que da estilos al código HTML</dd>
    <dt>JavaScript</dt>
    <dd>Es el lenguaje de la web</dd>
  </dl>
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='tablas'>
        <h3>Tablas</h3>
        <table>
    <tr>
      <td>Nombre</td>
      <td>Constelación</td>
      <td>Tipo</td>
    </tr>
    <tr>
      <td>Ikki</td>
      <td>Fénix</td>
      <td>Bronce</td>
    </tr>
    <tr>
      <td>Shaina</td>
      <td>Ofiuco</td>
      <td>Plata</td>
    </tr>
    <tr>
      <td>Saga</td>
      <td>Géminis</td>
      <td>Dorado</td>
    </tr>
  </table>
  <table>
    <thead>
      <tr>
        <th colspan="3">Tabla de los Santos de Athena</th>
      </tr>
      <tr>
        <th>Nombre</th>
        <th>Constelación</th>
        <th>Tipo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ikki</td>
        <td>Fénix</td>
        <td>Bronce</td>
      </tr>
      <tr>
        <td>Mistry</td>
        <td>Lagarto</td>
        <td>Plata</td>
      </tr>
      <tr>
        <td>Saga</td>
        <td>Géminis</td>
        <td>Dorado</td>
      </tr>
      <tr>
        <td>Shaina</td>
        <td rowspan="2">Ofiuco</td>
        <td>Plata</td>
      </tr>
      <tr>
        <td>Odiseo</td>
        <td>Dorado</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3"><small>Saint Seiya fue creado por Masami Kurumada</small></th>
      </tr>
    </tfoot>
  </table>
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='enlaces'>
        <h3>Enlaces</h3>
        <a href="hola.html">Hacia la página Hola</a>
        <br />
        <a href="https://jonmircha.com" target="_blank" rel="nofollow">Visita mi sitio web jonmircha.com</a>
        <br />
        <a href="https://jonmircha.com/cursos" target="_blank">
    <img src="lengua.png" alt="Ir hacia mis cursos en jonmircha.com" width="40" height="40"/>
    </a>
    <br />
    <a href="https://youtube.com/jonmircha" target="_blank">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z"
        fill="currentColor" />
    </svg>
  </a>
  <br />
  <a href="mailto:hola@jonmircha.com">Enlace a correo electrónico</a>
  <br />
  <a href="tel:5215512345678">Enlace a télefono</a>
  <br />
  <a href="https://api.whatsapp.com/send?phone=5215512345678&text=Hola">Enlace hacia WhatsApp</a>
  <br />
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='elementos-interactivos'>
        <h3>Elementos interactivos</h3>
        <button onclick={console.log('julio')}>Este es un botón</button>
        <br />
        <details>
    <summary>Título del Acordeón</summary>
    <article>
      <h3>Contenido del Acordeón</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa. Eos odio omnis sit illum magnam eum
        voluptates earum numquam! Deleniti vitae illum alias sequi aspernatur magnam quo quaerat reiciendis.</p>
      <img src="/puesta-sol.jpg" alt="Puesta de sol"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa. Eos odio omnis sit illum magnam eum
        voluptates earum numquam! Deleniti vitae illum alias sequi aspernatur magnam quo quaerat reiciendis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa. Eos odio omnis sit illum magnam eum
        voluptates earum numquam! Deleniti vitae illum alias sequi aspernatur magnam quo quaerat reiciendis.</p>
    </article>
  </details>
  <details open>
    <summary>Título del Acordeón</summary>
    <article>
      <h3>Contenido del Acordeón</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa. Eos odio omnis sit illum magnam eum
        voluptates earum numquam! Deleniti vitae illum alias sequi aspernatur magnam quo quaerat reiciendis.</p>
      <img src="/puesta-sol.jpg" alt="Puesta de sol"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa. Eos odio omnis sit illum magnam eum
        voluptates earum numquam! Deleniti vitae illum alias sequi aspernatur magnam quo quaerat reiciendis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa. Eos odio omnis sit illum magnam eum
        voluptates earum numquam! Deleniti vitae illum alias sequi aspernatur magnam quo quaerat reiciendis.</p>
    </article>
  </details>
  <dialog open>
    Esto es una ventana modal en HTML
  </dialog>
  <br /><br /><br />
        <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='audio-video'>
        <h3>Audio y video</h3>
        <audio src="/Feels-PatrickPatrikios.mp3" controls preload></audio>
        <br />
        <video src="/kenai.mp4" controls preload poster="img/puesta-sol.jpg"></video>
  <br/>
      </section>
      <hr />
      <section id='iframes'>
        <h3>Iframes</h3>
        <iframe src="hola.html" frameborder="1"></iframe>
        <br />
        <iframe src="https://jonmircha.com" frameborder="1"></iframe>
        <br />
        <iframe src="/emmet-cheat-sheet.pdf" frameborder="1"></iframe>
  <br/>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6654003373211!2d-99.16814652076648!3d19.427021863930683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1625355039715!5m2!1ses-419!2smx"
    width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
  <br/>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/F55LNTW3GE0" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
  <br/>
  <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='formularios'>
        <h3>Formularios</h3>
        <h3>Elementos de Formularios</h3>
  <input type="text"/>
  <br/>
  <input type="checkbox"/>
  <br/>
  <input type="radio"/>
  <br/>
  <input type="date"/>
  <br/>
  <input type="color"/>
  <br/>
  <input type="button" value="Botón"/>
  <br/>
  <input type="submit"/>
  <br/>
  <input type="reset"/>
  <br/>
  <input type="file"/>
  <br/>
  <input type="file" multiple/>
  <br/>
  <input type="hidden" name="idioma" value="es"/>
  <br/>
  <input type="email"/>
  <br/>
  <input type="number"/>
  <br/>
  <input type="tel"/>
  <br/>
  <input type="password"/>
  <br/>
  <input type="search"/>
  <br/>
  <textarea cols="50" rows="5"></textarea>
  <br/>
  <select name="" id="">
    <option value="">HTML</option>
    <option value="">CSS</option>
    <option value="">JS</option>
    <option value="">PHP</option>
    <option value="">Python</option>
  </select>
  <br/>
  <select name="" id="" multiple>
    <option value="">HTML</option>
    <option value="">CSS</option>
    <option value="">JS</option>
    <option value="">PHP</option>
    <option value="">Python</option>
  </select>
  <br/>
  <input type="text" value="jonmircha" readonly disabled/>
  <br/>
  <input type="text" placeholder="Escribe tu nombr/e"/>
  <br/>
  <h3>Ejemplo de Formularios</h3>
  <h4>Formulario de Login</h4>
  <form action="https://jonmircha.com/" method="POST" autocomplete="off">
    <label for="usuario">Usuario: </label>
    <input type="text" name="usuario" id="usuario" placeholder="Escribe tu usuario" pattern="^[A-Za-z]+$"
      title="El campo sólo acepta letras" required/>
    <br/>
    {/* <!-- <input type="text" name="email" autocomplete="off"> --> */}
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" placeholder="Escribe tu password" required/>
    <br/>
    <input type="submit"/>
    <br/>
    <input type="reset"/>
  </form>
  <h4>Selects, Radios y Checkbox</h4>
  <form>
    <p>Elige tu idioma:</p>
    <select name="idioma" required>
      <option value="" selected>Elige una opción</option>
      <option value="es">Español</option>
      <option value="en">Inglés</option>
      <option value="fr">Francés</option>
      <option value="it">Italiano</option>
      <option value="pt">Portugués</option>
    </select>
    <p>Elige tu lenguaje de programación favorito:</p>
    <input type="radio" name="lenguaje" id="radio-js" value="js" required/>
    <label for="radio-js">JavaScript</label>
    <input type="radio" name="lenguaje" id="radio-py" value="py" checked/>
    <label for="radio-py">Python</label>
    <input type="radio" name="lenguaje" id="radio-php" value="php"/>
    <label for="radio-php">PHP</label>
    <p>Elige tus intereses:</p>
    <label>
      <input type="checkbox" name="intereses" value="deportes"/>
      Deportes
    </label>
    <label>
      <input type="checkbox" name="intereses" value="finanzas" checked/>
      Finanzas
    </label>
    <label>
      <input type="checkbox" name="intereses" value="salud"/>
      Salud
    </label>
    <label>
      <input type="checkbox" name="intereses" value="politica"/>
      Política
    </label>
    <label>
      <input type="checkbox" name="intereses" value="ecologia" checked/>
      Ecología
    </label>
    <p>
      <label>
        <input type="checkbox" name="terminos" required/>
        ¿Aceptas términos y condiciones?
      </label>
    </p>
    <input type="submit"/>
    <input type="reset"/>
  </form>
  <h4>Formulario de Contacto</h4>
  {/* <!-- https://formsubmit.co/ --> */}
  <form action="https://formsubmit.co/your@email.com" method="POST">
    <input type="text" name="nombre" placeholder="Escribe tu nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
      title="Nombre sólo acepta letras y espacios en blanco" required/>
    <br/>
    <input type="email" name="correo" placeholder="Escribe tu correo" pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$"
      title="Formato de correo inválido" required/>
    <br/>
    <textarea name="comentarios" cols="30" rows="10" required></textarea>
    <br/>
    <input type="submit"/>
  </form>
  <br></br>
        <a href="/#inicio">⏫</a>
      </section>
      <hr />
      <section id='data-attributes'>
        <h3>Data Attributes</h3>
        <ul>
    <li data-propiedad-propia="1" data-propiedad-inventada="spring">Primavera</li>
    <li data-propiedad-propia="2" data-propiedad-inventada="summer">Verano</li>
    <li data-propiedad-propia="3" data-propiedad-inventada="autumn">Otoño</li>
    <li data-propiedad-propia="4" data-propiedad-inventada="winter">Invierno</li>
  </ul>
  <br/>
  <a href="/#inicio">⏫</a>
      </section>
    </>
  )
}

export default App
