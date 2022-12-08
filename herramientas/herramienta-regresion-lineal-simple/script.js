                        ///////////////////////
                        // Función principal //
                        ///////////////////////

function calcularRegresion() {
  /*  Esta función se ejecuta con un onload en el body y onclick en el botón
      de calcular Regresión */

  // Obtener la lista de observaciones de las variables in/dependiente
  const indepVarInput = document.getElementById("varIndependiente");
  const depVarInput = document.getElementById("varDependiente");

  // Transformar listas de observaciones de texto a dos matrices
  // dentro de un objeto
  const sequences = getSequences(indepVarInput.value, depVarInput.value);

  // Obtener, dentro de un objeto, la pendiente y el punto de corte de la
  // regresión, y un string con la fórmula de la recta
  const formula = regressionLine(sequences.indepVarSeq, sequences.depVarSeq);

  // Obtener un punto de inicio y de final para poder dibujar la recta en el
  // plano
  const regressionLinePoints = getRegressionLinePoints(
    formula.slope,
    formula.yIntercept,
    sequences.indepVarSeq,
    sequences.depVarSeq
    );

  // Escribiendo la formula (string) sobre #formula en el front
  setFormula(formula.formula);

  // Dibujando tanto las observaciones (puntos) y la recta de regresión en el
  // canvas
  drawData(
    sequences.indepVarSeq,
    sequences.depVarSeq,
    regressionLinePoints.start,
    regressionLinePoints.end
    );
}

                        ////////////////////////
                        // Funciones de apoyo //
                        ////////////////////////

function getSequences(indepVar, depVar) {

  // Convertir la cadena de texto en una matriz de números
  const indepVarSeq = indepVar.split(",").map(x => parseInt(x, 10));
  const depVarSeq = depVar.split(",").map(x => parseInt(x, 10));

  return {"indepVarSeq": indepVarSeq, "depVarSeq": depVarSeq};
}

function regressionLine(xSeq, ySeq) {

  // Calcular la media de los valores en x y en y
  const xMean = xSeq.reduce((a, b) => a + b) / xSeq.length;
  const yMean = ySeq.reduce((a, b) => a + b) / ySeq.length;

  // Calcular el numerador y el denominador de la pendiente
  let numerator = 0;
  let denominator = 0;
  for (let i = 0; i < xSeq.length; i++) {
    numerator += (xSeq[i] - xMean) * (ySeq[i] - yMean);
    // AQUÍ es donde ^2 y se normaliza, que te olvidas!!
    denominator += (xSeq[i] - xMean) ** 2;
  }

  // Calcular la pendiente y la intersección con el eje y
  const slope = numerator / denominator;
  const yIntercept = yMean - slope * xMean;

  // Devolver la fórmula de la recta de regresión en un objeto
  return {
    formula: `y = ${slope}x + ${yIntercept}`,
    slope,
    yIntercept
  };
}

function setFormula(text) {
  // Obtener el elemento #formula
  const elem = document.getElementById("formula");

  // Establecer el contenido del elemento <p> como la cadena de texto
  // proporcionada
  elem.innerHTML = text;
}

function getRegressionLinePoints(slope, yIntercept, xData, yData) {

  //    Queremos alargar la recta para que su punto inicial
  //    y final no coincida con el primer y último datapoint.
  //    Para ello calcularemos la distancia entre el valor 
  //    mínimo y máximo * 10% y aplicaremos este valor a los
  //    puntos mínimo y máximo
  const maxValue = Math.max(...xData, ...yData);
  const minValue = Math.min(...xData, ...yData);
  const distance = maxValue - minValue;
  const coeficiente = distance * 0.1;

  //    Calculamos el primer punto de la recta de regresión
  //    utilizando el valor mínimo de xData como el valor de x
  //    -coeficiente Para alargar la recta por motivos estéticos
  const startX = Math.min(...xData) - coeficiente;
  const startY = slope * startX + yIntercept;

  //    Calculamos el último punto de la recta de regresión
  //    utilizando el valor máximo de xData como el valor de x
  //    +coeficiente Para alargar la recta por motivos estéticos
  const endX = Math.max(...xData) + coeficiente;
  const endY = slope * endX + yIntercept;

  // Devolvemos un objeto con los valores de los puntos
  // de inicio y fin de la recta de regresión
  return {
    start: {x: startX, y: startY},
    end: {x: endX, y: endY}
  };
}

function drawData(xData, yData, start, end) {

  // Metemos el canvas como contexto para Chartjs
  const ctx = document.getElementById('miGrafico').getContext('2d');;

  // Construímos lista de objetos para scatterplot
  const pointsArray = xData.map((x, i) => ({x: x, y: yData[i]}));

  // Churro de código para chartjs
  const mixedChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Puntos',
              data: pointsArray,
              // this dataset is drawn below
              order: 1,
              pointBackgroundColor: "Red",
              backgroundColor: "Red"
          }, {
              label: 'Regresión',
              data: [start, end],
              type: 'line',
              // this dataset is drawn on top
              order: 2,
              backgroundColor: "Blue",
              fill: false,
              borderColor: "Blue",
              pointRadius: 0
          }]
      },
      options: {
        // Vacio
      }
  });
}

