document.addEventListener('DOMContentLoaded', function() {
    // 只在首頁橫幅存在時添加效果
    const pageHeader = document.querySelector('#page-header.full_page');
    if (!pageHeader) return;

    // 創建背景效果容器
    const backgroundEffects = document.createElement('div');
    backgroundEffects.className = 'background-effects';
    pageHeader.appendChild(backgroundEffects);

    // 創建十字背景
    const backgroundCross = document.createElement('div');
    backgroundCross.className = 'background-cross';
    backgroundEffects.appendChild(backgroundCross);

    // 創建方形背景
    const backgroundSquare = document.createElement('div');
    backgroundSquare.className = 'background-square';
    backgroundEffects.appendChild(backgroundSquare);

    // 計算需要的元素數量
    const calculateElements = () => {
        const headerWidth = pageHeader.offsetWidth;
        const headerHeight = pageHeader.offsetHeight;
        const elementSize = headerWidth * 0.05; // 5vw
        const columns = Math.ceil(headerWidth / elementSize);
        const rows = Math.ceil(headerHeight / elementSize);
        return { columns, rows, total: columns * rows };
    };

    // 生成背景元素
    const generateElements = () => {
        const { columns, rows, total } = calculateElements();
        
        // 清空現有元素
        backgroundCross.innerHTML = '';
        backgroundSquare.innerHTML = '';

        // 生成十字元素
        for (let i = 0; i < total; i++) {
            const crossDiv = document.createElement('div');
            backgroundCross.appendChild(crossDiv);
        }

        // 生成方形元素
        for (let i = 0; i < total; i++) {
            const squareDiv = document.createElement('div');
            backgroundSquare.appendChild(squareDiv);
        }

        // 調整容器大小以確保完全覆蓋
        backgroundCross.style.width = `${columns * 5}vw`;
        backgroundCross.style.height = `${rows * 5}vw`;
        backgroundSquare.style.width = `${columns * 5}vw`;
        backgroundSquare.style.height = `${rows * 5}vw`;
    };

    // 初始生成
    generateElements();

    // 視窗大小改變時重新生成
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(generateElements, 250);
    });
}); 