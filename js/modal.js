window.onload = () => {
  let all = document.getElementsByClassName("zoomD"),
      modal = document.getElementById("modal");

  if (all.length>0) { for (let i of all) {
    i.onclick = () => {
      let clone = i.cloneNode();
      clone.className = "";
      modal.innerHTML = "";
      modal.appendChild(clone);
      modal.className = "show";
    };
  }}
  
  modal.onclick = () => {
    modal.className = "";
  };
};