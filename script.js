window.addEventListener("DOMContentLoaded", (event) => {
    const skeletonElements = document.querySelectorAll('[wized-skeleton]');
    
    skeletonElements.forEach(element => {
        const skeletonDiv = document.createElement('div');
        skeletonDiv.classList.add('skeleton-loader');
  
    element.style.position = 'relative';
    element.appendChild(skeletonDiv);
  
    let delay = 3600000;
  
    setTimeout(() => {
        const skeletonDiv = element.querySelector('.skeleton-loader');
        element.removeChild(skeletonDiv);
    }, delay);
  });
});