// 3. Duplicar números
function ej3() {
  const entrada = prompt("Ingrese números separados por comas:");
  const partes = entrada.split(",");
  const resultado = [];
  for (let i = 0; i < partes.length; i++) {
    const num = parseFloat(partes[i]);
    resultado.push(num * 2);
  }
  alert("Números duplicados: " + resultado.join(", "));
}

// 4. Filtrar y transformar
function ej4() {
  const entrada = prompt("Ingrese números separados por comas:");
  const partes = entrada.split(",");
  let suma = 0;
  for (let i = 0; i < partes.length; i++) {
    const n = parseFloat(partes[i]);
    if (n >= 0) {
      suma += n * n;
    }
  }
  alert("Suma de cuadrados (sin negativos): " + suma);
}

// 5. Reordenar palabras
function ej5() {
  const texto = prompt("Ingrese palabras separadas por espacios:");
  const palabras = texto.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].toUpperCase();
  }
  palabras.sort();
  alert("Palabras ordenadas: " + palabras.join(", "));
}

// 6. Set con nombres
function ej6() {
  let nombres = prompt("Ingrese nombres separados por comas:");
  let set = new Set(nombres.split(",").map(n => n.trim()));
  alert("Nombres sin duplicados: " + Array.from(set).join(", "));
}

// 7. Verificar duplicados
function ej7() {
  let arr = prompt("Ingrese valores separados por comas:").split(",");
  let tieneDup = new Set(arr).size !== arr.length;
  alert(tieneDup ? "Hay duplicados" : "No hay duplicados");
}

// 8. Map de productos
function ej8() {
  let productos = new Map([
    ["pan", 3.5],
    ["leche", 4.2],
    ["queso", 8.0]
  ]);
  let lista = prompt("Ingrese productos separados por comas (pan, leche, queso):").toLowerCase().split(",");
  let total = 0;
  for (let item of lista) total += productos.get(item.trim()) || 0;
  alert("Total a pagar: S/. " + total.toFixed(2));
}

// 9. Contar palabras
function ej9() {
  let texto = prompt("Ingrese un texto:");
  const palabras = texto.toLowerCase().split(" ");
  const mapa = new Map();
  for (let p of palabras) mapa.set(p, (mapa.get(p) || 0) + 1);
  let resultado = "";
  for (let [palabra, cant] of mapa) resultado += `${palabra}: ${cant}\n`;
  alert(resultado);
}

// 10. Invertir Map
function ej10() {
  let pares = prompt("Ingrese pares 'clave:valor' separados por coma (ej: Peru:Lima,Chile:Santiago)");
  let entradas = pares.split(",").map(p => p.split(":").map(s => s.trim()));
  let original = new Map(entradas);
  let invertido = new Map();
  for (let [k, v] of original) invertido.set(v, k);
  let salida = "";
  for (let [k, v] of invertido) salida += `${k} => ${v}\n`;
  alert(salida);
}

// 11. Objeto auto
function ej11() {
  let marca = prompt("Ingrese la marca:");
  let modelo = prompt("Ingrese el modelo:");
  let año = prompt("Ingrese el año:");
  const auto = {
    marca,
    modelo,
    año,
    detalles() {
      return `${this.marca} ${this.modelo} (${this.año})`;
    }
  };
  alert("Auto: " + auto.detalles());
}

// 12. Contar letras
function ej12() {
  let texto = prompt("Ingrese una palabra o texto:");
  const obj = {};
  for (let letra of texto.toLowerCase()) {
    if (/[a-záéíóúñ]/i.test(letra)) obj[letra] = (obj[letra] || 0) + 1;
  }
  let salida = Object.entries(obj).map(([l, c]) => `${l}: ${c}`).join("\n");
  alert(salida);
}

// 13. Combinar catálogos
function ej13() {
  const tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
  const tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };
  const combinado = { ...tiendaA };
  for (let [producto, precioB] of Object.entries(tiendaB)) {
    combinado[producto] = producto in combinado
      ? Math.min(combinado[producto], precioB)
      : precioB;
  }
  for (let p in combinado) combinado[p] = combinado[p].toFixed(2);
  let salida = Object.entries(combinado)
    .map(([k, v]) => `${k}: S/. ${v}`)
    .join("\n");
  alert(salida);
}

// 14. Gestionar empleados
function ej14() {
  let n = parseInt(prompt("¿Cuántos empleados desea ingresar?"));
  const empleados = [];
  for (let i = 0; i < n; i++) {
    let nombre = prompt(`Empleado ${i + 1} - nombre:`);
    let area = prompt(`Empleado ${i + 1} - área:`);
    let salario = parseFloat(prompt(`Empleado ${i + 1} - salario:`));
    empleados.push({ nombre, area, salario });
  }

  const resultado = {};
  for (let e of empleados) {
    if (!resultado[e.area]) resultado[e.area] = { empleados: [], promedio: 0 };
    resultado[e.area].empleados.push(e.nombre);
  }
  for (let area in resultado) {
    const empleadosArea = empleados.filter(e => e.area === area);
    const promedio = empleadosArea.reduce((a, b) => a + b.salario, 0) / empleadosArea.length;
    resultado[area].promedio = promedio;
  }

  let salida = "";
  for (let area in resultado) {
    salida += `${area}:\nEmpleados: ${resultado[area].empleados.join(", ")}\nPromedio: ${resultado[area].promedio.toFixed(2)}\n\n`;
  }
  alert(salida);
}
