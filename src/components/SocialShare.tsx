import React from 'react';
import { Share2, MessageCircle, Linkedin, Twitter, Facebook, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'minimal' | 'floating';
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Covexa - AI Orchestration Platform for GTM Execution',
  description = 'AI Orchestration Platform for Intelligent GTM Execution - Meet our AI agents ORRA, MIRA, VARA, LIA, LEXA, TORA, and NIRA',
  variant = 'default',
  className = ''
}) => {
  const { toast } = useToast();

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareData.title}&url=${shareData.url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(link, '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    } else {
      handleCopyLink();
    }
  };

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleNativeShare}
          className="text-muted-foreground hover:text-foreground"
        >
          <Share2 size={16} />
        </Button>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed right-4 top-1/2 -translate-y-1/2 bg-background border rounded-lg shadow-lg p-2 space-y-2 z-50 ${className}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('whatsapp')}
          className="w-full justify-start text-green-600 hover:text-green-700 hover:bg-green-50"
        >
          <MessageCircle size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="w-full justify-start text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <Linkedin size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('twitter')}
          className="w-full justify-start text-sky-500 hover:text-sky-600 hover:bg-sky-50"
        >
          <Twitter size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('facebook')}
          className="w-full justify-start text-blue-800 hover:text-blue-900 hover:bg-blue-50"
        >
          <Facebook size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyLink}
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <Copy size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Share2 size={20} className="text-muted-foreground" />
        <span className="font-medium text-foreground">Share</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          variant="outline"
          onClick={() => handleShare('whatsapp')}
          className="flex items-center gap-2 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300"
        >
          <MessageCircle size={16} />
          WhatsApp
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleShare('linkedin')}
          className="flex items-center gap-2 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300"
        >
          <Linkedin size={16} />
          LinkedIn
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleShare('twitter')}
          className="flex items-center gap-2 bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100 hover:border-sky-300"
        >
          <Twitter size={16} />
          Twitter
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleShare('facebook')}
          className="flex items-center gap-2 bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300"
        >
          <Facebook size={16} />
          Facebook
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={handleCopyLink}
          className="flex items-center gap-2 flex-1"
        >
          <Copy size={16} />
          Copy Link
        </Button>
        
        {navigator.share && (
          <Button
            variant="secondary"
            onClick={handleNativeShare}
            className="flex items-center gap-2 flex-1"
          >
            <Share2 size={16} />
            Share
          </Button>
        )}
      </div>
    </div>
  );
};