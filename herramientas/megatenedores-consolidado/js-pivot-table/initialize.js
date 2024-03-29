async function initializePivotTable(webPivotTableUrl, tsvUrl) {
    // Select content container and create a wrapper
    const contentContainer = document.querySelector('#content');
    const pivotTableWrapper = document.createElement('div');
    pivotTableWrapper.id = 'pivot-table-wrapper';
    pivotTableWrapper.style.width = '100%';
    pivotTableWrapper.style.height = '70vh';
    contentContainer.appendChild(pivotTableWrapper);

    // Create pivot table element
    const pivotTableElement = document.createElement('web-pivot-table');
    pivotTableWrapper.appendChild(pivotTableElement);

    // Load script into DOM and wait for 2s (no better solution at the moment)
    const pivotTableScript = document.createElement('script');
    pivotTableScript.src = webPivotTableUrl;
    contentContainer.appendChild(pivotTableScript);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Load TSV
    pivotTableElement.setWptFromCsvUrl(tsvUrl, "\t");
 
}