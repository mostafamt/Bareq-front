import React from 'react';
const ArticleSection = () => {
    return (
      <div className="article-section">
        <div className="article-header">
          <h2 className="article-title">
            <a href="/article">المتحدة للتعليم تدرب معلمي ماليزيا على تقنية التعليم بالألعاب</a>
          </h2>
          <span className="article-date">17 مارس 2024</span>
        </div>
        <div className="article-row">
          <div className="article-body">
            <p className="article-content">
              بالتعاون مع مدرسة تامبار بارك الدولية نصت المجموعة المتحدة للتعليم
              بمايزيا ورشة عمل تدريب معلمي اللغة العربية على تقنية التعليم بالألعاب.
            </p>
            <a href="/read-more" className="read-more">اقرأ المزيد</a>
          </div>
          <div className="article-image">
            <img
              src="https://www.almotahidaeducation.com/wp-content/uploads/2024/03/Almotahida-Malaysia-Gamification-Training-for-Arabic-Teachers-2-1-819x1024.jpg"
              alt="Training image"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ArticleSection;
  