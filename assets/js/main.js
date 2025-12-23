$(function() {
    // ========================================
    // スムーススクロール
    // ========================================
    $('a[href^="#"]').on('click', function(e) {
        const href = $(this).attr('href');
        const target = $(href === "#" || href === "" ? 'html' : href);
        
        if (target.length) {
            e.preventDefault();
            const position = target.offset().top;
            $('html, body').animate({ scrollTop: position }, 600, 'swing');
        }
    });

    // ========================================
    // ページ内遷移時のフェードイン
    // ========================================
    $('.work-card, .work-detail__image-section').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(30px)',
            'transition': 'opacity 0.6s ease, transform 0.6s ease'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, index * 100);
    });

    // ========================================
    // ヘッダーのスクロール時スタイル変更
    // ========================================
    let lastScrollTop = 0;
    const header = $('.header');
    
    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        
        if (scrollTop > 100) {
            header.css('box-shadow', '0 2px 8px rgba(0, 0, 0, 0.1)');
        } else {
            header.css('box-shadow', 'none');
        }
        
        lastScrollTop = scrollTop;
    });

    // ========================================
    // 画像の遅延読み込み（簡易版）
    // ========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

