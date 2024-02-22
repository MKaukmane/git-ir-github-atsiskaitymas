function openTab(evt, tabNumber) {  
    document.getElementById(`tab-content-${tabNumber}`).style.display = 'flex';
  }
  
  function closeTab(evt, tabNumber) {  
    document.getElementById(`tab-content-${tabNumber}`).style.display = 'none';
  }
  