---
template: post

title: Javascript: ¿Qué diferencias hay entre los objetos en JS y los diccionarios en Python?

description: Pueden parecer similares, pero hay diferencias relevantes entre ellos.

comments: true

date: 2022-10-6

---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


<style>
  th, tr {border-bottom: 1px solid darkgrey;}
  td {padding: 0.5em;}
  table {font-size: 0.8em;}
</style>


A simple vista, los objetos en JavaScript pueden parecer muy similares sintáticamente, sin embargo tiene diferencias que hay que considerar.

Fijémonos en estos dos bloques de código:


<table>
  <thead>
    <tr>
      <td>Python</td>
      <td>JavaScript</td>
    </tr>    
  </thead>
  <tbody>
    <tr>
      <td><pre><code class="language-python">
dict={'Name':'Ram',
      'Occupation': 'Scientist',
      'salary': '50000'
      }
         
for i in dict:
    print(i, dict[i])

"""
Name Ram
Occupation Scientist
salary 50000
"""
      </code></pre></td>
      <td><pre><code class="language-javascript">
dict={Name:'Ram',
      Occupation: 'Scientist',
      salary: '50000'
      }

for(i in dict){
  console.log(`${i}, ${dict[i]}`)}

/*
"Name, Ram"
"Occupation, Scientist"
"salary, 50000"
*/
      </code></pre></td>
    </tr>   
  </tbody>
</table>


De aquí podemos sacar:

1. Los objetos en Javascript sólo son iterables con `for in`, no con `for of` ([ver sus diferencias](https://iagovar.com/javascript/javascript-for-in-for-of-loops)). En Python siempre son iterables.
2. Ambos son pares de clave : valor.
3. En Python hay que definir las claves como cadenas de texto, o nos devolverá `NameError: name 'Name' is not defined`, mientras que en Javascript esto NO es necesario. Puedes definir una variable `Name = 1` antes del diccionario, pero entonces al imprimir el diccionario te encontrarás con `1: 'Ram'` y no parece un escenario en el que uno quiera verse.
4. En Javascript `console.log(dict['Name'], dict.Name)` devuelve `// Ram Ram` ya que JS permite `objeto.clave` como un alias de `objeto['clave']`, mientras que esto en Python no es posible.


