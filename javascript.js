// script.js
// 爱心飘落效果
function createHearts() {
    const container = document.querySelector('.hearts');
    for(let i=0; i<50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.cssText = `
            position: fixed;
            z-index: 999;
            color: #ff4c6a;
            font-size: ${Math.random()*20+10}px;
            left: ${Math.random()*100}%;
            top: -50px;
            animation: fall ${Math.random()*3+5}s linear infinite;
        `;
        container.appendChild(heart);
    }
}

// 滚动动画触发
window.addEventListener('scroll', () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
        if(item.getBoundingClientRect().top < window.innerHeight*0.8) {
            item.classList.add('animate-on-scroll');
        }
    });
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    // 添加点击爱心特效
    document.body.addEventListener('click', (e) => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.cssText = `
            position: fixed;
            left: ${e.clientX-15}px;
            top: ${e.clientY-15}px;
            color: #ff4c6a;
            font-size: 30px;
            animation: clickHeart 0.8s linear;
        `;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 800);
    });
});
