'use strict'
/**
 */
function showNotification({top = 10, right = 10, className = "welcome", html = "Hello!"}) {
   const popup = document.createElement('div');
   popup.className = "notification";
   if (className) {
     notification.classList.add(className);
   }
   popup.style.top = top + 'px';
   popup.style.right = right + 'px';
   popup.innerHTML = html;
   document.body.append(popup);
   setTimeout(() => popup.remove(), 1500);
 }
 
