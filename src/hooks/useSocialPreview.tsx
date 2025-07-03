import { useEffect } from "react";

interface SocialPreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

const useSocialPreview = () => {
  const testSocialPreview = (platform: string) => {
    const data: SocialPreviewData = {
      title: "Covexa – The AI Agent System for Modern GTM",
      description: "Private, compliance-ready intelligent AI GTM execution layer that coordinates apps, agents, and actions across your entire revenue stack.",
      image: "https://covexa.ai/og-hero.png",
      url: "https://covexa.ai/"
    };

    console.log(`${platform} preview data:`, data);
    
    // In production, you could test with actual APIs:
    // - LinkedIn: https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}
    // - Twitter: https://cards-dev.twitter.com/validator
    // - Facebook: https://developers.facebook.com/tools/debug/
    
    return data;
  };

  const validateMetaTags = () => {
    const requiredTags = [
      'og:title',
      'og:description', 
      'og:image',
      'og:url',
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image'
    ];

    const missingTags = requiredTags.filter(tag => {
      const element = document.querySelector(`meta[property="${tag}"], meta[name="${tag}"]`);
      return !element || !element.getAttribute('content');
    });

    if (missingTags.length === 0) {
      console.log('✅ All social meta tags present');
    } else {
      console.warn('⚠️ Missing meta tags:', missingTags);
    }

    return missingTags;
  };

  useEffect(() => {
    // Validate meta tags on component mount
    setTimeout(() => {
      validateMetaTags();
      testSocialPreview('LinkedIn');
      testSocialPreview('Twitter');
      testSocialPreview('Facebook');
    }, 1000);
  }, []);

  return { testSocialPreview, validateMetaTags };
};

export default useSocialPreview;