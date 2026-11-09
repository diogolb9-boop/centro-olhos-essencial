'use strict';
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
menuButton?.addEventListener('click',()=>{const isOpen=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));menuButton.setAttribute('aria-label',isOpen?'Fechar menu':'Abrir menu');});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Abrir menu');}));
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{const select=document.querySelector('#service');if(select)select.value=link.dataset.service;}));
document.querySelector('#booking-form')?.addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const name=form.elements.name.value.trim();const service=form.elements.service.value;const details=form.elements.message.value.trim();if(!name||!service){form.reportValidity();return;}const lines=['Olá! Gostaria de solicitar informações sobre agendamento no Centro de Olhos Essencial.','','Nome: '+name,'Atendimento de interesse: '+service];if(details)lines.push('Mensagem: '+details);lines.push('','Aguardo informações sobre disponibilidade.');const url='https://wa.me/5571988035696?text='+encodeURIComponent(lines.join('\n'));window.open(url,'_blank','noopener,noreferrer');});
document.querySelector('#year').textContent=String(new Date().getFullYear());
