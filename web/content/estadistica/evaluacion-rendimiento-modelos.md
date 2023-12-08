---

template: post

category: true

title: Herramientas para evaluar el rendimiento de modelos

date: 2023-01-30 14:46

author: iagovar

---

<style type="text/css">
	.resaltado {
		display: inline-block;
		background-color: lightyellow;
		font-size: smaller;
		padding: 0.5em;
		border: 2px dashed burlywood;
	}
</style>

<div id="toc"></div>

Cuando creamos modelos, es importante evaluar su desempeño para saber si son buenos o no. Para hacer esto, utilizamos datos de prueba que ya conocemos (o cuya probabilidad de ser correctos es alta) y los comparamos con las predicciones que hace el modelo. Así podemos medir su precisión y determinar su rendimiento.

Para esto, dependiendo del tipo de modelo, disponemos de varias herramientas, listadas en el cuadro inferior.

## OJO: Accuracy paradox o paradoja de la precisión

La paradoja de la precisión es un fenómeno que ocurre en modelos de clasificación binaria cuando una precisión alta se obtiene a pesar de que el modelo no es muy bueno en la tarea de clasificación.

La precisión es una métrica comúnmente utilizada para evaluar la efectividad de un modelo de clasificación binaria, y se define como el número de predicciones correctas dividido por el número total de predicciones. Sin embargo, la precisión sola puede ser engañosa ya que no considera el contexto completo de la clasificación.

Por ejemplo, si tenemos un conjunto de datos con una distribución de clases desequilibrada, en la que la clase positiva es mucho menos común que la clase negativa, un modelo que siempre predice la clase negativa tendría una precisión alta. Esto se debe a que la mayoría de las predicciones serían correctas, ya que la mayoría de las instancias pertenecen a la clase negativa. Sin embargo, este modelo no sería útil para la tarea de clasificación ya que siempre predice la clase negativa, sin considerar las instancias positivas.

<span class="resaltado">
La mayoría de las predicciones serían correctas, ya que la mayoría son negativas, pero el modelo no sería útil para clasificar instancias positivas.
</span>

Por otro lado, un modelo que siempre predice la clase positiva puede tener una precisión baja. Sin embargo, este modelo sería útil si la detección de la clase positiva es la prioridad en la tarea de clasificación, como en el caso de la detección de fraudes.

En resumen, la paradoja de la precisión puede ocurrir cuando la precisión es utilizada como la única métrica para evaluar modelos de clasificación binaria. Por lo tanto, es importante considerar el contexto completo de la clasificación y utilizar otras métricas, como la sensibilidad y la especificidad, para evaluar la efectividad del modelo.

## Testing VS Training data

Para evaluar la calidad de un modelo de aprendizaje automático, es importante utilizar un conjunto de datos de prueba que no haya sido utilizado para entrenar el modelo.

Para lograr esto, se puede tomar una muestra del conjunto de datos original que represente aproximadamente el 20-30% de los datos, y asegurarse de que estos registros no se utilicen para entrenar el modelo.

En cambio, estos registros se utilizarán para evaluar el modelo una vez que se haya entrenado con el conjunto de datos restante. Esto es importante para evitar que el modelo se ajuste demasiado al conjunto de datos de entrenamiento y no pueda generalizar bien a nuevos datos.

## Herramientas para evaluar modelos

<table class="table table-hover">
<thead>
  <tr>
    <th>Tipo de modelo</th>
    <th>Objetivo</th>
    <th>Herramienta de evaluación</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Clasificación binaria</td>
    <td>Evaluar el rendimiento general del modelo</td>
    <td>Matriz de confusión, Precisión, Recall, F1-score</td>
  </tr>
  <tr>
    <td>Clasificación binaria</td>
    <td>Evaluar el rendimiento del modelo a diferentes umbrales de decisión</td>
    <td>Curva de precisión-recall, Curva ROC</td>
  </tr>
  <tr>
    <td>Clasificación multiclase</td>
    <td>Evaluar el rendimiento general del modelo</td>
    <td>Matriz de confusión multiclase</td>
  </tr>
  <tr>
    <td>Clasificación multiclase</td>
    <td>Evaluar el rendimiento del modelo en cada clase</td>
    <td>Precisión, Recall, F1-score por clase</td>
  </tr>
  <tr>
    <td>Regresión</td>
    <td>Evaluar la capacidad predictiva del modelo</td>
    <td>Error medio absoluto, Error cuadrático medio</td>
  </tr>
  <tr>
    <td>Regresión</td>
    <td>Evaluar el rendimiento del modelo a diferentes umbrales de decisión</td>
    <td>Curva de ganancia, Curva de lift</td>
  </tr>
</tbody>
</table>


## Saber más

- [Model Analysis, Tips & Tricks by @shervine](https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-machine-learning-tips-and-tricks)

- [Confusion Matrix en JavaTPoint](https://www.javatpoint.com/confusion-matrix-in-machine-learning)

- [ROC Analysis & Curve en Stanford](http://web.stanford.edu/class/sbio228/public/lectures/lec6/Lecture6/Data_Visualization/index_Data_Visualization.html)
