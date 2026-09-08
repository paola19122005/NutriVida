/*Datos*/
let productos = [
  {id:"CN001",tipo:"Consulta",nombre:"Primera consulta nutricional",duracion:"50 min",modalidad:"Presencial",precio:35000,descripcion:"Evaluación inicial: anamnesis, antropometría completa y diseño del primer plan alimenticio.",imagen:"img/consulta.svg"},
  {id:"CN002",tipo:"Consulta",nombre:"Control nutricional (seguimiento)",duracion:"30 min",modalidad:"Presencial",precio:25000,descripcion:"Seguimiento mensual: medición de indicadores y ajuste del plan vigente.",imagen:"img/seguimiento.svg"},
  {id:"CN003",tipo:"Consulta",nombre:"Control nutricional quincenal",duracion:"30 min",modalidad:"Presencial",precio:22000,descripcion:"Seguimiento intensivo cada 15 días. Recomendado en los primeros 2 meses.",imagen:"img/quincenal.svg"},
  {id:"CN004",tipo:"Consulta",nombre:"Teleconsulta nutricional",duracion:"30 min",modalidad:"Online (video)",precio:20000,descripcion:"Consulta de seguimiento vía videollamada. Requiere contar con consulta presencial previa.",imagen:"img/teleconsulta.svg"},
  {id:"CN005",tipo:"Consulta",nombre:"Consulta de urgencia / reagendada",duracion:"30 min",modalidad:"Presencial",precio:28000,descripcion:"Para pacientes que requieren atención fuera de su control habitual.",imagen:"img/urgencia.svg"},
  {id:"PL001",tipo:"Plan especializado",nombre:"Plan pérdida de peso (1 mes)",duracion:"—",modalidad:"Presencial",precio:65000,descripcion:"Incluye primera consulta + 1 control quincenal + plan alimenticio personalizado + seguimiento por WhatsApp.",imagen:"img/peso.svg"},
  {id:"PL002",tipo:"Plan especializado",nombre:"Plan pérdida de peso (3 meses)",duracion:"—",modalidad:"Presencial",precio:170000,descripcion:"Incluye primera consulta + 5 controles + 3 planes mensuales + seguimiento continuo.",imagen:"img/peso3.svg"},
  {id:"PL003",tipo:"Plan especializado",nombre:"Plan nutrición deportiva (1 mes)",duracion:"—",modalidad:"Presencial",precio:70000,descripcion:"Para deportistas y personas con actividad física frecuente. Cálculo de requerimientos energéticos y proteicos.",imagen:"img/deportiva.svg"},
  {id:"PL004",tipo:"Plan especializado",nombre:"Plan control diabetes / hipertensión",duracion:"—",modalidad:"Presencial",precio:75000,descripcion:"Plan adaptado para patologías metabólicas. Coordinación con médico tratante si aplica.",imagen:"img/metabolica.svg"},
  {id:"PL005",tipo:"Plan especializado",nombre:"Plan alimentación vegetariana/vegana",duracion:"—",modalidad:"Presencial",precio:68000,descripcion:"Diseñado para garantizar aporte adecuado de proteínas, hierro, vitamina B12 y calcio sin productos animales.",imagen:"img/vegana.svg"},
  {id:"PL006",tipo:"Plan especializado",nombre:"Plan alimentación infantil (2-12 años)",duracion:"—",modalidad:"Presencial",precio:65000,descripcion:"Evaluación nutricional pediátrica y diseño de plan adaptado a la etapa de desarrollo del niño.",imagen:"img/infantil.svg"},
  {id:"EV001",tipo:"Evaluación",nombre:"Antropometría completa",duracion:"20 min",modalidad:"Presencial",precio:18000,descripcion:"Peso, talla, IMC, circunferencia de cintura, cadera, brazo y % de grasa corporal con bioimpedanciometría.",imagen:"img/antropometria.svg"},
  {id:"EV002",tipo:"Evaluación",nombre:"Bioimpedanciometría",duracion:"15 min",modalidad:"Presencial",precio:12000,descripcion:"Medición de composición corporal: masa grasa, masa muscular, agua corporal y edad metabólica.",imagen:"img/bioimpedancia.svg"},
  {id:"EV003",tipo:"Evaluación",nombre:"Encuesta de hábitos alimentarios",duracion:"20 min",modalidad:"Presencial",precio:10000,descripcion:"Análisis del patrón alimentario actual. Identificación de déficit y excesos nutricionales.",imagen:"img/habitos.svg"},
  {id:"EV004",tipo:"Evaluación",nombre:"Análisis de exámenes de laboratorio",duracion:"20 min",modalidad:"Presencial",precio:15000,descripcion:"Interpretación de hemograma, perfil bioquímico y lipídico en contexto nutricional.",imagen:"img/examenes.svg"},
  {id:"TG001",tipo:"Taller grupal",nombre:"Taller de alimentación saludable",duracion:"90 min",modalidad:"Presencial (grupo)",precio:15000,descripcion:"Máx. 10 personas. Conceptos básicos de alimentación equilibrada y lectura de etiquetas.",imagen:"img/taller.svg"},
  {id:"TG002",tipo:"Taller grupal",nombre:"Taller de cocina nutritiva",duracion:"120 min",modalidad:"Presencial (grupo)",precio:20000,descripcion:"Preparación de recetas saludables. Incluye degustación. Máx. 8 personas.",imagen:"img/cocina.svg"},
  {id:"TG003",tipo:"Taller grupal",nombre:"Taller nutrición para deportistas",duracion:"90 min",modalidad:"Presencial (grupo)",precio:18000,descripcion:"Hidratación, nutrición pre y post entrenamiento, suplementación básica. Máx. 12 personas.",imagen:"img/deporte-taller.svg"}
];

const regiones = {
  "Arica y Parinacota":["Arica","Putre"],
  "Tarapacá":["Iquique","Alto Hospicio"],
  "Antofagasta":["Antofagasta","Calama"],
  "Atacama":["Copiapó","Vallenar"],
  "Coquimbo":["La Serena","Coquimbo","Ovalle"],
  "Valparaíso":["Valparaíso","Viña del Mar","Quilpué"],
  "Metropolitana de Santiago":["Santiago","Maipú","Puente Alto"],
  "O'Higgins":["Rancagua","San Fernando"],
  "Maule":["Talca","Curicó","Linares"],
  "Ñuble":["Chillán","San Carlos"],
  "Biobío":["Concepción","Los Ángeles"],
  "La Araucanía":["Temuco","Villarrica"],
  "Los Ríos":["Valdivia","La Unión"],
  "Los Lagos":["Puerto Montt","Osorno","Castro"],
  "Aysén":["Coyhaique","Puerto Aysén"],
  "Magallanes":["Punta Arenas","Puerto Natales"]
};

const publicaciones = [
  {id:1,titulo:"Hábitos simples para mejorar tu alimentación",imagen:"img/blog1.svg",resumen:"Pequeños cambios sostenibles pueden ayudarte a construir una rutina de alimentación más equilibrada.",detalle:"Organizar tus comidas, mantener horarios regulares y aumentar la variedad de alimentos son estrategias que pueden facilitar una alimentación equilibrada. En NutriVida recomendamos trabajar objetivos realistas y adaptados a cada persona."},
  {id:2,titulo:"¿Qué es la bioimpedanciometría?",imagen:"img/blog2.svg",resumen:"Conoce para qué sirve esta evaluación y cómo complementa el seguimiento nutricional.",detalle:"La bioimpedanciometría permite estimar distintos componentes de la composición corporal. En una evaluación nutricional se utiliza como una herramienta complementaria, junto con antecedentes, mediciones y objetivos personales."}
];

function dinero(valor){ return "$" + Number(valor).toLocaleString("es-CL") + " CLP"; }

/*Menú*/
function configurarMenu(){
  const toggle=document.getElementById("menuToggle");
  const nav=document.getElementById("navLinks");
  if(toggle && nav) toggle.addEventListener("click",()=>nav.classList.toggle("open"));
  const usuario=JSON.parse(localStorage.getItem("usuarioSesion")||"null");
  const area=document.getElementById("areaSesion");
  if(area){
    if(usuario) area.innerHTML=`<a class="btn btn-outline" href="${usuario.rol==="Administrador"?"admin/inicio.html":"inicio.html"}">Hola, ${usuario.nombre}</a>`;
  }
}
document.addEventListener("DOMContentLoaded",configurarMenu);

/*Catalogo - localstorage*/
function cargarProductos(){
  const guardados=localStorage.getItem("productosNutriVida");
  if(guardados) productos=JSON.parse(guardados);
}
cargarProductos();

function renderCatalogo(){
  const lista=document.getElementById("listaProductos");
  if(!lista) return;
  cargarProductos();
  lista.innerHTML="";
  for(let i=0;i<productos.length;i++){
    const p=productos[i];
    lista.innerHTML += `
      <article class="card">
        <img class="card-img" src="${p.imagen}" alt="${p.nombre}">
        <div class="card-body">
          <span class="badge">${p.tipo}</span>
          <h3>${p.nombre}</h3>
          <p class="muted">${p.descripcion}</p>
          <p class="price">${dinero(p.precio)} / ${p.duracion}</p>
          <div class="actions">
            <button class="btn btn-primary" onclick="verDetalle('${p.id}')">Ver detalle</button>
            <button class="btn btn-outline" onclick="agregarLista('${p.id}')">Agregar a la lista</button>
          </div>
        </div>
      </article>`;
  }
}

function verDetalle(id){
  localStorage.setItem("producto",JSON.stringify(productos.find(p=>p.id===id)));
  window.location.href="detalle.html";
}

function obtenerLista(){
  return JSON.parse(localStorage.getItem("listaSeleccion")||"[]");
}
function agregarLista(id){
  const lista=obtenerLista();
  if(!lista.includes(id)) lista.push(id);
  localStorage.setItem("listaSeleccion",JSON.stringify(lista));
  mostrarToast("Servicio agregado a tu lista.");
}
function quitarLista(id){
  const lista=obtenerLista().filter(x=>x!==id);
  localStorage.setItem("listaSeleccion",JSON.stringify(lista));
  renderLista();
}
function renderLista(){
  const cont=document.getElementById("listaSeleccionados");
  const totalEl=document.getElementById("totalLista");
  if(!cont) return;
  const ids=obtenerLista();
  cont.innerHTML="";
  let total=0;
  if(ids.length===0){cont.innerHTML='<div class="empty">No has agregado servicios todavía.</div>'; if(totalEl) totalEl.textContent=dinero(0); return;}
  ids.forEach(id=>{
    const p=productos.find(x=>x.id===id);
    if(!p)return;
    total+=Number(p.precio);
    cont.innerHTML += `<article class="card"><div class="card-body"><h3>${p.nombre}</h3><p class="muted">${p.tipo} · ${p.modalidad}</p><p class="price">${dinero(p.precio)}</p><button class="btn btn-danger" onclick="quitarLista('${p.id}')">Quitar</button></div></article>`;
  });
  if(totalEl) totalEl.textContent=dinero(total);
}
function mostrarToast(msg){
  const t=document.getElementById("toast"); if(!t)return;
  t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);
}

/*Detalle*/
function cargarDetalle(){
  const cont=document.getElementById("detalleProducto");
  if(!cont)return;
  const p=JSON.parse(localStorage.getItem("producto")||"null");
  if(!p){cont.innerHTML='<div class="empty">No se encontró el servicio. Vuelve al catálogo.</div>';return;}
  cont.innerHTML=`<div class="detail-grid">
    <img class="detail-image" src="${p.imagen}" alt="${p.nombre}">
    <div class="info-box"><span class="badge">${p.tipo}</span><h1>${p.nombre}</h1>
    <p>${p.descripcion}</p><ul class="list-clean" style="margin-top:15px"><li><strong>Código:</strong> ${p.id}</li><li><strong>Duración:</strong> ${p.duracion}</li><li><strong>Modalidad:</strong> ${p.modalidad}</li><li><strong>Profesional:</strong> Nutricionista</li></ul>
    <p class="price">${dinero(p.precio)}</p><div class="actions"><button class="btn btn-primary" onclick="agregarLista('${p.id}')">Agregar a la lista</button><a class="btn btn-outline" href="catalogo.html">Volver al catálogo</a></div></div></div>`;
}

/*Blog*/
function renderBlog(){
  const cont=document.getElementById("listaBlog");if(!cont)return;
  publicaciones.forEach(p=>cont.innerHTML+=`<article class="card"><img class="card-img" src="${p.imagen}" alt="${p.titulo}"><div class="card-body"><h3>${p.titulo}</h3><p class="muted">${p.resumen}</p><div class="actions"><button class="btn btn-primary" onclick="verBlog(${p.id})">Leer más</button></div></div></article>`);
}
function verBlog(id){localStorage.setItem("publicacion",JSON.stringify(publicaciones.find(p=>p.id===id)));window.location.href="detalle-blog.html";}
function cargarBlogDetalle(){
  const c=document.getElementById("detalleBlog");if(!c)return;
  const p=JSON.parse(localStorage.getItem("publicacion")||"null");
  if(!p){c.innerHTML='<div class="empty">No se encontró la publicación.</div>';return;}
  c.innerHTML=`<article class="info-box"><img class="detail-image" src="${p.imagen}" alt="${p.titulo}" style="margin-bottom:20px"><span class="badge">NutriVida Blog</span><h1>${p.titulo}</h1><p style="margin-top:15px">${p.detalle}</p><div class="actions"><a class="btn btn-outline" href="blog.html">Volver al blog</a></div></article>`;
}

/*Validaciones*/
function validarCorreo(correo){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);}
function validarRun(run){
  if(!/^\d{7,8}[0-9kK]$/.test(run))return false;
  let cuerpo=run.slice(0,-1),dv=run.slice(-1).toUpperCase(),suma=0,mul=2;
  for(let i=cuerpo.length-1;i>=0;i--){suma+=Number(cuerpo[i])*mul;mul=mul===7?2:mul+1;}
  let resto=11-(suma%11),esperado=resto===11?"0":resto===10?"K":String(resto);
  return esperado===dv;
}
function setError(id,msg){const e=document.getElementById(id);if(e)e.textContent=msg;}
function limpiarErrores(form){form.querySelectorAll(".error").forEach(e=>e.textContent="");}

function validarLogin(e){
  e.preventDefault();const f=e.target;limpiarErrores(f);let ok=true;
  const correo=f.correo.value.trim(), clave=f.clave.value;
  if(!correo){setError("errorCorreo","El correo es obligatorio.");ok=false}
  else if(correo.length>100){setError("errorCorreo","Máximo 100 caracteres.");ok=false}
  else if(!validarCorreo(correo)){setError("errorCorreo","Ingresa un correo válido.");ok=false}
  if(!clave){setError("errorClave","La contraseña es obligatoria.");ok=false}
  else if(clave.length<4||clave.length>10){setError("errorClave","La contraseña debe tener entre 4 y 10 caracteres.");ok=false}
  if(!ok)return;
  const usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]");
  const u=usuarios.find(x=>x.correo.toLowerCase()===correo.toLowerCase()&&x.clave===clave&&x.activo!==false);
  if(!u){setError("errorGeneral","Correo o contraseña incorrectos.");return;}
  localStorage.setItem("usuarioSesion",JSON.stringify(u));
  if(u.rol==="Administrador"||u.rol==="Nutricionista")window.location.href="admin/index.html";
  else window.location.href="index.html";
}

function validarContacto(e){
  e.preventDefault();const f=e.target;limpiarErrores(f);let ok=true;
  const nombre=f.nombre.value.trim(),correo=f.correo.value.trim(),comentario=f.comentario.value.trim();
  if(!nombre){setError("errorNombre","El nombre es obligatorio.");ok=false}
  else if(nombre.length>100){setError("errorNombre","Máximo 100 caracteres.");ok=false}
  if(correo.length>100){setError("errorCorreo","Máximo 100 caracteres.");ok=false}
  else if(!validarCorreo(correo)){setError("errorCorreo","Ingresa un correo válido.");ok=false}
  if(!comentario){setError("errorComentario","El comentario es obligatorio.");ok=false}
  else if(comentario.length>500){setError("errorComentario","Máximo 500 caracteres.");ok=false}
  if(ok){f.reset();document.getElementById("mensajeContacto").textContent="Consulta enviada correctamente.";mostrarToast("Mensaje enviado.");}
}

function cargarRegiones(){
  const region=document.getElementById("region");if(!region)return;
  region.innerHTML='<option value="">Selecciona una región</option>';
  Object.keys(regiones).forEach(r=>region.innerHTML+=`<option value="${r}">${r}</option>`);
  region.addEventListener("change",()=>cargarComunas(region.value));
}
function cargarComunas(region){
  const comuna=document.getElementById("comuna");if(!comuna)return;
  comuna.innerHTML='<option value="">Selecciona una comuna</option>';
  (regiones[region]||[]).forEach(c=>comuna.innerHTML+=`<option value="${c}">${c}</option>`);
}
function validarUsuarioForm(e){
  e.preventDefault();const f=e.target;limpiarErrores(f);let ok=true;
  const run=f.run.value.trim(),nombre=f.nombre.value.trim(),apellidos=f.apellidos.value.trim(),correo=f.correo.value.trim(),direccion=f.direccion.value.trim();
  if(!run){setError("errorRun","El RUN es obligatorio.");ok=false}
  else if(!validarRun(run)){setError("errorRun","RUN inválido. Usa formato sin puntos ni guion.");ok=false}
  if(!nombre){setError("errorNombre","El nombre es obligatorio.");ok=false}
  else if(nombre.length>50){setError("errorNombre","Máximo 50 caracteres.");ok=false}
  if(!apellidos){setError("errorApellidos","Los apellidos son obligatorios.");ok=false}
  else if(apellidos.length>100){setError("errorApellidos","Máximo 100 caracteres.");ok=false}
  if(!correo){setError("errorCorreo","El correo es obligatorio.");ok=false}
  else if(correo.length>100){setError("errorCorreo","Máximo 100 caracteres.");ok=false}
  else if(!validarCorreo(correo)){setError("errorCorreo","Correo inválido.");ok=false}
  if(!f.rol.value){setError("errorRol","Selecciona un tipo de usuario.");ok=false}
  if(!f.region.value){setError("errorRegion","Selecciona una región.");ok=false}
  if(!f.comuna.value){setError("errorComuna","Selecciona una comuna.");ok=false}
  if(!direccion){setError("errorDireccion","La dirección es obligatoria.");ok=false}
  else if(direccion.length>300){setError("errorDireccion","Máximo 300 caracteres.");ok=false}
  if(!ok)return;
  const usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]");
  if(usuarios.some(u=>u.run===run)){setError("errorRun","Ese RUN ya está registrado.");return;}
  if(usuarios.some(u=>u.correo.toLowerCase()===correo.toLowerCase())){setError("errorCorreo","Ese correo ya está registrado.");return;}
  const nuevo={id:Date.now(),run,nombre,apellidos,correo,fechaNacimiento:f.fechaNacimiento.value,rol:f.rol.value,region:f.region.value,comuna:f.comuna.value,direccion,clave:f.clave?f.clave.value:"1234",activo:true};
  usuarios.push(nuevo);localStorage.setItem("usuariosNutriVida",JSON.stringify(usuarios));
  document.getElementById("mensajeRegistro").textContent="Registro realizado correctamente. Ya puedes iniciar sesión.";
  f.reset();cargarRegiones();
}

/*Autenticación - demo*/
function inicializarUsuarios(){
  if(localStorage.getItem("usuariosNutriVida"))return;
  const iniciales=[
    {id:1,run:"111111111",nombre:"Admin",apellidos:"NutriVida",correo:"admin@nutrivida.cl",fechaNacimiento:"",rol:"Administrador",region:"La Araucanía",comuna:"Temuco",direccion:"Av. Vitacura 2900",clave:"Admin1234",activo:true},
    {id:2,run:"222222222",nombre:"Carolina",apellidos:"Fuentes M.",correo:"nutricionista@nutrivida.cl",fechaNacimiento:"",rol:"Nutricionista",region:"La Araucanía",comuna:"Temuco",direccion:"Av. Vitacura 2900",clave:"Nutri1234",activo:true},
    {id:3,run:"333333333",nombre:"Paciente",apellidos:"Demo",correo:"paciente@nutrivida.cl",fechaNacimiento:"2000-01-01",rol:"Paciente",region:"La Araucanía",comuna:"Temuco",direccion:"Av. Vitacura 2900",clave:"1234",activo:true}
  ];
  localStorage.setItem("usuariosNutriVida",JSON.stringify(iniciales));
}
inicializarUsuarios();

function protegerAdmin(){
  const u=JSON.parse(localStorage.getItem("usuarioSesion")||"null");
  if(!u || (u.rol!=="Administrador" && u.rol!=="Nutricionista")){
    window.location.href="../login.html";return null;
  }
  return u;
}
function soloAdministrador(){
  const u=protegerAdmin();
  if(u && u.rol!=="Administrador"){
    alert("Esta sección requiere rol Administrador.");
    window.location.href="index.html";
    return null;
  }return u;
}
function cerrarSesion(){localStorage.removeItem("usuarioSesion");window.location.href="../login.html";}

/*Admin - servicios*/
function renderAdminServicios(){
  const tbody=document.getElementById("tbodyServicios");if(!tbody)return;
  cargarProductos();tbody.innerHTML="";
  productos.forEach(p=>tbody.innerHTML+=`<tr><td>${p.id}</td><td>${p.nombre}</td><td>${p.tipo}</td><td>${dinero(p.precio)}</td><td><button class="btn btn-outline" onclick="editarProducto('${p.id}')">Editar</button> <button class="btn btn-danger" onclick="eliminarProducto('${p.id}')">Eliminar</button></td></tr>`);
}
function guardarProductoAdmin(e){
  e.preventDefault();const f=e.target;
  const obj={id:f.idProducto.value.trim(),tipo:f.tipo.value,nombre:f.nombre.value.trim(),duracion:f.duracion.value.trim(),modalidad:f.modalidad.value.trim(),precio:Number(f.precio.value),descripcion:f.descripcion.value.trim(),imagen:f.imagen.value.trim()||"img/consulta.svg"};
  if(!obj.id||!obj.nombre||obj.precio<0||!obj.descripcion){alert("Completa los campos obligatorios.");return}
  const idx=productos.findIndex(p=>p.id===obj.id);
  if(idx>=0)productos[idx]=obj;else productos.push(obj);
  localStorage.setItem("productosNutriVida",JSON.stringify(productos));f.reset();renderAdminServicios();mostrarToast("Servicio guardado.");
}
function editarProducto(id){
  const p=productos.find(x=>x.id===id);if(!p)return;
  /* Cargamos los datos del servicio en el formulario para poder editarlos. */
  document.getElementById("idProducto").value=p.id;document.getElementById("tipo").value=p.tipo;document.getElementById("nombre").value=p.nombre;document.getElementById("duracion").value=p.duracion;document.getElementById("modalidad").value=p.modalidad;document.getElementById("precio").value=p.precio;document.getElementById("descripcion").value=p.descripcion;document.getElementById("imagen").value=p.imagen;
  window.scrollTo({top:0,behavior:"smooth"});
}
function eliminarProducto(id){
  if(!confirm("¿Eliminar este servicio?"))return;
  productos=productos.filter(p=>p.id!==id);localStorage.setItem("productosNutriVida",JSON.stringify(productos));renderAdminServicios();
}

/*Admin - usuarios*/
function renderUsuarios(){
  const tbody=document.getElementById("tbodyUsuarios");if(!tbody)return;
  const usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]");tbody.innerHTML="";
  usuarios.forEach(u=>tbody.innerHTML+=`<tr><td>${u.run}</td><td>${u.nombre} ${u.apellidos}</td><td>${u.correo}</td><td>${u.rol}</td><td><span class="status ${u.activo===false?"status-off":"status-ok"}">${u.activo===false?"Inactivo":"Activo"}</span></td><td><button class="btn btn-outline" onclick="editarUsuario(${u.id})">Editar</button> <button class="btn btn-danger" onclick="toggleUsuario(${u.id})">${u.activo===false?"Activar":"Desactivar"}</button></td></tr>`);
}
function editarUsuario(id){
  const usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]"),u=usuarios.find(x=>x.id===id);if(!u)return;
  document.getElementById("editId").value=u.id;document.getElementById("editRun").value=u.run;document.getElementById("editNombre").value=u.nombre;document.getElementById("editApellidos").value=u.apellidos;document.getElementById("editCorreo").value=u.correo;document.getElementById("editRol").value=u.rol;window.scrollTo({top:0,behavior:"smooth"});
}
function guardarEdicionUsuario(e){
  e.preventDefault();const f=e.target,usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]"),idx=usuarios.findIndex(u=>u.id==f.editId.value);if(idx<0)return;
  usuarios[idx].run=f.editRun.value.trim();usuarios[idx].nombre=f.editNombre.value.trim();usuarios[idx].apellidos=f.editApellidos.value.trim();usuarios[idx].correo=f.editCorreo.value.trim();usuarios[idx].rol=f.editRol.value;
  localStorage.setItem("usuariosNutriVida",JSON.stringify(usuarios));f.reset();renderUsuarios();mostrarToast("Usuario actualizado.");
}
function toggleUsuario(id){
  const usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]"),u=usuarios.find(x=>x.id===id);if(!u)return;u.activo=u.activo===false;localStorage.setItem("usuariosNutriVida",JSON.stringify(usuarios));renderUsuarios();
}

/*Admin - dashboard*/
function cargarDashboard(){
  const u=protegerAdmin();if(!u)return;
  const nombre=document.getElementById("nombreAdmin");if(nombre)nombre.textContent=u.nombre;
  const usuarios=JSON.parse(localStorage.getItem("usuariosNutriVida")||"[]");
  const elU=document.getElementById("statUsuarios"),elS=document.getElementById("statServicios"),elL=document.getElementById("statLista");
  if(elU)elU.textContent=usuarios.length;if(elS)elS.textContent=productos.length;if(elL)elL.textContent=obtenerLista().length;
}

/* Llamadas según la página */
document.addEventListener("DOMContentLoaded",()=>{
  renderCatalogo();cargarDetalle();renderBlog();cargarBlogDetalle();renderLista();
  cargarRegiones();
  const login=document.getElementById("loginForm");if(login)login.addEventListener("submit",validarLogin);
  const contacto=document.getElementById("contactoForm");if(contacto)contacto.addEventListener("submit",validarContacto);
  const registro=document.getElementById("registroForm");if(registro)registro.addEventListener("submit",validarUsuarioForm);
  const adminPage=document.body.dataset.admin;
  if(adminPage==="dashboard")cargarDashboard();
  if(adminPage==="servicios"){soloAdministrador();renderAdminServicios();}
  if(adminPage==="usuarios"){soloAdministrador();renderUsuarios();}
  const formServicio=document.getElementById("formServicio");if(formServicio)formServicio.addEventListener("submit",guardarProductoAdmin);
  const formEdit=document.getElementById("formEditarUsuario");if(formEdit)formEdit.addEventListener("submit",guardarEdicionUsuario);
});
