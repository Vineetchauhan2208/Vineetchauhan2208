document.addEventListener("DOMContentLoaded",function(){document.getElementById("contact-form").addEventListener("submit",function(e){e.preventDefault();let t=new FormData;t.append("name",document.getElementById("name").value),t.append("email",document.getElementById("email").value),t.append("tel",document.getElementById("phone").value),t.append("message",document.getElementById("type").value),fetch("https://email-service-glxivwm5yq-nw.a.run.app",{method:"POST",body:t}).then(()=>{let e=document.getElementById("contact-form"),t=document.getElementById("form-success");e&&(e.style.display="none"),t&&(t.style.display="block")}).catch(e=>{console.error("Error:",e)})})}),document.querySelectorAll(".dropdown").forEach(function(e){let t=e.querySelector(".dropdown__button"),n=e.querySelector(".dropdown__list"),o=n.querySelectorAll(".dropdown__list-item"),d=e.querySelector(".dropdown__input_hidden");t.addEventListener("click",function(){n.classList.toggle("dropdown__list_visible"),this.classList.toggle("dropdown__button_active")}),o.forEach(function(e){e.addEventListener("click",function(e){o.forEach(function(e){e.classList.remove("dropdown__list-item_active")}),e.target.classList.add("dropdown__list-item_active"),t.innerText=this.innerText,d.value=this.dataset.value,n.classList.remove("dropdown__list_visible")})}),document.addEventListener("click",function(e){e.target!==t&&(t.classList.remove("dropdown__button_active"),n.classList.remove("dropdown__list_visible"))}),document.addEventListener("keydown",function(e){("Tab"===e.key||"Escape"===e.key)&&(t.classList.remove("dropdown__button_active"),n.classList.remove("dropdown__list_visible"))})});
//# sourceMappingURL=contact.0c065451.js.map
