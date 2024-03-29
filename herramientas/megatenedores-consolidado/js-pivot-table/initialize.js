async function initializePivotTable(webPivotTableUrl, tsvUrl) {
    // Create pivot table element
    const pivotTableElement = document.createElement('web-pivot-table');
    pivotTableElement.style.width = '100%';
    pivotTableElement.style.height = '70vh';

    // Load script into DOM and wait for 2s (no better solution at the moment)
    const pivotTableScript = document.createElement('script');
    pivotTableScript.src = webPivotTableUrl;
    document.body.appendChild(pivotTableScript);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Load TSV
    pivotTableElement.setWptFromCsvUrl(tsvUrl, "\t");
 
}